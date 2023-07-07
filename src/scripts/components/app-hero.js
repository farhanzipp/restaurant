class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-inner">
          <h2 class="hero-title">Meet or Eat?</h2>
          <p class="hero-tagline">Why not both?</p>
        </div>
    `;
  }
}
customElements.define('app-hero', AppHero);
