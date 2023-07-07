import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/app-bar';
import './components/footer-bar';

const app = new App({
  button: document.querySelector('#nav-button'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#main-content'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#main-content');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

/* Actual copyright year for footer */
const actualYear = new Date().getUTCFullYear();
const actualYearString = document.createTextNode(actualYear.toString());
const yearWrapper = document.querySelector('.copyright-year');

yearWrapper.appendChild(actualYearString);
