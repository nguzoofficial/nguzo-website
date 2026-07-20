 class AppMain extends HTMLElement {
    connectedCallback(){
        this.innerHTML = /* html */ `
<main id="main">

  <!-- ── HERO ────────────────────────────────────────────────── -->
  <section class="hero" id="hero" aria-labelledby="hero-h1">
    <!-- Ghost watermark -->
    <div class="hero__watermark" aria-hidden="true">nguzo</div>

    <div class="hero__inner container">
      <div class="hero__text">
        <p class="label reveal-fast"
           data-en="Burundi"
           data-fr="Burundi">Burundi</p>

        <h1 class="hero__h1" id="hero-h1">
          <span class="word-line" data-en="Your neighborhood,"  data-fr="Ton quartier,">Your neighborhood,</span>
          <span class="word-line" data-en="your marketplace."   data-fr="ton marché.">your marketplace.</span>
        </h1>

        <p class="hero__sub reveal-stagger"
           data-en="Browse what's nearby. Message the seller. Meet in person and pay in cash — no app fees, no delivery, no middlemen."
           data-fr="Parcourez ce qui est à proximité. Contactez le vendeur. Rencontrez-vous en personne et payez en espèces — sans frais d'application, sans livraison, sans intermédiaires.">
          Browse what's nearby. Message the seller. Meet in person and pay in cash — no app fees, no delivery, no middlemen.
        </p>

        <div class="hero__actions reveal-stagger">
          <a href="https://play.google.com/store/apps/details?id=co.nguzo.app" target="_blank" rel="noopener noreferrer"
             class="btn btn-primary btn-lg"
             aria-label="Download Nguzo on Google Play">
            <!-- Google Play icon -->
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.33.18.72.21 1.09.08l12.48-7.2-2.81-2.82L3.18 23.76z"/>
              <path d="M22.2 10.39c-.43-.45-1.09-.6-1.69-.37L3.18.24C2.82.11 2.43.14 2.1.32L13.94 12z"/>
              <path d="M2.1 23.68c.33.18.72.21 1.08.08L13.94 12 2.1.32C1.44.68 1 1.37 1 2.16v19.68c0 .79.44 1.48 1.1 1.84z"/>
              <path d="M16.75 16.64l2.81 2.82 1.65-.95c.6-.35.96-.98.96-1.68v-1.53l-5.42 1.34z"/>
            </svg>
            <span data-en="Get it on Google Play" data-fr="Disponible sur Google Play">Get it on Google Play</span>
          </a>
          <a href="#how-it-works" class="btn btn-ghost btn-lg">
            <span data-en="See how it works" data-fr="Voir comment ça marche">See how it works</span>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </a>
        </div>
      </div>

      <!-- Phone mockups -->
      <div class="hero__phones" aria-label="App screenshots">
        <div class="phone phone--back">
          <div class="phone__body">
            <img src="images/app-feed.png"
                 alt="Nguzo app home feed listing nearby items in Buyenzi neighborhood"
                 width="260" height="520" loading="eager" decoding="async" />
          </div>
        </div>
        <div class="phone phone--front">
          <div class="phone__body">
            <img src="images/app-login.png"
                 alt="Nguzo app sign-in screen: Le marché de votre quartier"
                 width="260" height="520" loading="eager" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── HOW IT WORKS ─────────────────────────────────────────── -->
  <app-how_it_works></app-how_it_works>


  <!-- ── TRUST & SAFETY ───────────────────────────────────────── -->
  <app-safety></app-safety>
  
  <!-- ── ABOUT ────────────────────────────────────────────────── -->
  <app-about></app-about>

  <!-- ── CONTACT ───────────────────────────────────────────────── -->
  <app-contact></app-contact>

</main>
        `;
    }
 }

 customElements.define('app-main', AppMain);
 