import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = `
      <div class="page-not-found">
        <h1>Page Not Found</h1>
        <a href="/#"> Back to Home</a>
      </div>
      `;
      console.log('halaman tidak tersedia');
    }
  }
}

export default App;
