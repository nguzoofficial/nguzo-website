class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
<header class="site-header" id="site-header">
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav__inner container">
      <!-- Logo -->
      <a href="/" class="logo" aria-label="Nguzo — back to home">
        <span class="logo__word">nguzo</span><span class="logo__dot">.</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav__links" role="list">
        <li><a href="#how-it-works" class="nav__link" data-en="How it works" data-fr="Comment ça marche">How it
            works</a></li>
        <li><a href="#trust" class="nav__link" data-en="Safety" data-fr="Sécurité">Safety</a></li>
        <li><a href="#about" class="nav__link" data-en="About" data-fr="À propos">About</a></li>
        <li><a href="#contact" class="nav__link" data-en="Contact" data-fr="Contact">Contact</a></li>
      </ul>

      <!-- Right cluster -->
      <div class="nav__right">
        <div class="lang-switch" role="group" aria-label="Language / Langue">
          <button class="lang-btn" id="btn-fr" aria-pressed="true" aria-label="Passer en français">FR</button>
          <span aria-hidden="true" class="lang-sep">|</span>
          <button class="lang-btn" id="btn-en" aria-pressed="false" aria-label="Switch to English">EN</button>
        </div>
        <a href="https://play.google.com/store/apps/details?id=co.nguzo.app" target="_blank" rel="noopener noreferrer"
          class="btn btn-primary" aria-label="Download Nguzo on Google Play">
          <span data-en="Download" data-fr="Télécharger">Download</span>
        </a>
        <button class="burger" id="burger" aria-expanded="false" aria-controls="mobile-nav"
          aria-label="Open navigation menu">
          <span class="burger__bar"></span>
          <span class="burger__bar"></span>
        </button>
      </div>

    </div>
  </nav>
</header>

<!-- Mobile overlay nav -->
<div class="mobile-nav" id="mobile-nav" hidden role="dialog" aria-modal="true" aria-label="Mobile menu">
  <div class="mobile-nav__panel">
    <div class="mobile-nav__top">
      <a href="/" class="logo" aria-label="Nguzo">
        <span class="logo__word">nguzo</span><span class="logo__dot">.</span>
      </a>
      <button class="mobile-nav__close" id="mobile-close" aria-label="Close menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <nav aria-label="Mobile navigation">
      <ul class="mobile-nav__links" role="list">
        <li><a href="#how-it-works" class="mobile-nav__link" data-en="How it works"  data-fr="Comment ça marche">How it works</a></li>
        <li><a href="#trust"        class="mobile-nav__link" data-en="Safety"        data-fr="Sécurité">Safety</a></li>
        <li><a href="#about"        class="mobile-nav__link" data-en="About"         data-fr="À propos">About</a></li>
        <li><a href="#contact"      class="mobile-nav__link" data-en="Contact"       data-fr="Contact">Contact</a></li>
      </ul>
    </nav>
    <div class="mobile-nav__foot">
      <div class="lang-switch" role="group" aria-label="Language / Langue">
        <button class="lang-btn" id="btn-fr-m" aria-pressed="true">FR</button>
        <span aria-hidden="true" class="lang-sep">|</span>
        <button class="lang-btn" id="btn-en-m" aria-pressed="false">EN</button>
      </div>
      <a href="https://play.google.com/store/apps/details?id=co.nguzo.app" target="_blank" rel="noopener noreferrer"
         class="btn btn-primary btn-full"
         data-en="Download the App" data-fr="Télécharger l'App">Download the App</a>
    </div>
  </div>
</div>


    
    `
  }
}

customElements.define("app-header", AppHeader);
