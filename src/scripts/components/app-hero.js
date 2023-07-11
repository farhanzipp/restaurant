class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <picture>
          <source media="(max-width: 425px)" srcset="./images/hero-image-mobile.jpg">
          <source media="(min-width: 426px)" srcset="./images/hero-image-dekstop.jpg">
          <img data-src="./images/hero-image.jpg" alt="Hero Image"/>
        </picture>
        <div class="hero-inner">
          <h2 class="hero-title">Meet or Eat?</h2>
          <p class="hero-tagline">Why not both?</p>
        </div>
    `;
  }
}
customElements.define('app-hero', AppHero);
