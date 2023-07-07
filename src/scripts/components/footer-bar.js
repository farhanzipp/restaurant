class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <p>
                ©<span class="copyright-year"></span> - MEEAT
            </p>
        `;
  }
}
customElements.define('footer-bar', FooterBar);
