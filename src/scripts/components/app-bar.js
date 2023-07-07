class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <h1 class="nav-brand">Meeat</h1>
            <nav id="nav-drawer" class="nav-drawer">
            <ul>
                <li class="nav-item"><a href="#/">Home</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item"><a href="https://farhanzip.netlify.app/" target="_blank" rel="noopener">About Us</a></li>
            </ul>
            </nav>
            <button id="nav-button" aria-label="Open the menu">☰</button>
        `;
  }
}
customElements.define('app-bar', AppBar);
