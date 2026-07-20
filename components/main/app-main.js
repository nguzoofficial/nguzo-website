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

  <!-- ── APP SHOWCASE (dark) ──────────────────────────────────── -->
  <section class="section section-dark section-app" id="the-app" aria-labelledby="app-title">
    <div class="container">
      <div class="section-header section-header--light reveal">
        <p class="label"
           data-en="The App"
           data-fr="L'Application">The App</p>
        <h2 id="app-title"
            data-en="Everything you need, nothing you don't."
            data-fr="Tout ce qu'il faut, rien de superflu.">Everything you need, nothing you don't.</h2>
      </div>

      <div class="app-screens">
        <figure class="app-screen reveal">
          <div class="app-screen__frame">
            <img src="images/app-feed.png"
                 alt="Nguzo feed screen: list of nearby listings in Buyenzi with prices in BIF"
                 width="280" height="560" loading="lazy" decoding="async" />
          </div>
          <figcaption data-en="Nearby listings" data-fr="Annonces à proximité">Nearby listings</figcaption>
        </figure>

        <figure class="app-screen app-screen--featured reveal reveal-d1">
          <div class="app-screen__frame">
            <img src="images/app-listing.png"
                 alt="Listing detail: iron for 80,000 BIF in Buyenzi Kanzigiri, with chat button"
                 width="280" height="560" loading="lazy" decoding="async" />
          </div>
          <figcaption data-en="Listing detail — the only action is to message" data-fr="Détail d'annonce — la seule action est de discuter">Listing detail — the only action is to message</figcaption>
        </figure>

        <figure class="app-screen reveal reveal-d2">
          <div class="app-screen__frame">
            <img src="images/app-profile.png"
                 alt="User profile showing active listings and create listing button"
                 width="280" height="560" loading="lazy" decoding="async" />
          </div>
          <figcaption data-en="Your listings" data-fr="Vos annonces">Your listings</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- ── TRUST & SAFETY ───────────────────────────────────────── -->
  <section class="section section-trust" id="trust" aria-labelledby="trust-title">
    <div class="container">
      <div class="section-header reveal">
        <p class="label"
           data-en="Trust &amp; Safety"
           data-fr="Confiance &amp; Sécurité">Trust &amp; Safety</p>
        <h2 id="trust-title"
            data-en="Built on trust."
            data-fr="Fondé sur la confiance.">Built on trust.</h2>
        <p class="section-sub"
           data-en="Every design decision in Nguzo reflects one question: how do we help you transact safely with people you've never met?"
           data-fr="Chaque décision de conception dans Nguzo reflète une question : comment vous aider à échanger en toute sécurité avec des personnes que vous n'avez jamais rencontrées ?">
          Every design decision in Nguzo reflects one question: how do we help you transact safely with people you've never met?
        </p>
      </div>

      <div class="trust-grid">
        <article class="trust-item reveal">
          <div class="trust-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <h3 data-en="Trust Score" data-fr="Score de Confiance">Trust Score</h3>
          <p data-en="Each account earns a behavioral reputation score over time — based on how you communicate, how you follow through, and whether you've had reports against you. It's earned, not bought."
             data-fr="Chaque compte gagne un score de réputation comportementale dans le temps — basé sur votre façon de communiquer, de tenir vos engagements, et sur d'éventuels signalements. Il se mérite, il ne s'achète pas.">
            Each account earns a behavioral reputation score over time — based on how you communicate, how you follow through, and whether you've had reports against you. It's earned, not bought.
          </p>
        </article>

        <article class="trust-item reveal reveal-d1">
          <div class="trust-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 data-en="Safety Guidelines" data-fr="Consignes de Sécurité">Safety Guidelines</h3>
          <p data-en="Meet in public. Bring someone you trust. Verify the item before you pay. Avoid carrying large sums of cash. These are habits — not rules — and they matter."
             data-fr="Rencontrez-vous en public. Amenez quelqu'un en qui vous avez confiance. Vérifiez l'article avant de payer. Évitez de transporter de grosses sommes en espèces. Ce sont des habitudes — pas des règles — et elles comptent.">
            Meet in public. Bring someone you trust. Verify the item before you pay. Avoid carrying large sums of cash. These are habits — not rules — and they matter.
          </p>
        </article>

        <article class="trust-item reveal reveal-d2">
          <div class="trust-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <h3 data-en="Report &amp; Moderation" data-fr="Signalement &amp; Modération">Report &amp; Moderation</h3>
          <p data-en="Any listing, message, or account can be flagged. Reports are reviewed through a priority-based enforcement system — minor violations get a warning, serious ones are acted on immediately."
             data-fr="Toute annonce, message ou compte peut être signalé. Les signalements sont traités selon un système d'application par priorité — les violations mineures donnent lieu à un avertissement, les graves sont traitées immédiatement.">
            Any listing, message, or account can be flagged. Reports are reviewed through a priority-based enforcement system — minor violations get a warning, serious ones are acted on immediately.
          </p>
        </article>

        <article class="trust-item reveal reveal-d3">
          <div class="trust-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3 data-en="Your Data Stays Yours" data-fr="Vos Données Restent les Vôtres">Your Data Stays Yours</h3>
          <p data-en="Nguzo processes no payments. We sell no data. The platform is governed by Burundian law."
             data-fr="Nguzo ne traite aucun paiement. Nous ne vendons aucune donnée. La plateforme est régie par le droit burundais.">
            Nguzo processes no payments. We sell no data. The platform is governed by Burundian law.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- ── ABOUT ────────────────────────────────────────────────── -->
  <section class="section section-about" id="about" aria-labelledby="about-title">
    <div class="container">
      <div class="about-inner">
        <div class="about-left reveal">
          <p class="label" data-en="About" data-fr="À propos">About</p>
          <h2 id="about-title"
              data-en="Made in Burundi,&nbsp;for Burundi."
              data-fr="Fait au Burundi,&nbsp;pour le Burundi.">Made in Burundi,&nbsp;for Burundi.</h2>
          <p data-en="Nguzo was built around a simple observation: in Burundi, most commerce is local and personal. People buy from people they know, or people who live two streets away. The app makes that easier — it doesn't try to change how trade works, just make it visible."
             data-fr="Nguzo a été construit autour d'une observation simple : au Burundi, la plupart des échanges sont locaux et personnels. Les gens achètent à des personnes qu'ils connaissent, ou qui habitent à deux rues de là. L'application facilite cela — elle ne cherche pas à changer le fonctionnement du commerce, juste à le rendre visible.">
            Nguzo was built around a simple observation: in Burundi, most commerce is local and personal. People buy from people they know, or people who live two streets away. The app makes that easier — it doesn't try to change how trade works, just make it visible.
          </p>
          <p data-en="Available in French, Kirundi, Kiswahili and English. Version 1.0.0."
             data-fr="Disponible en français, en kirundi, en kiswahili et en anglais. Version 1.0.0.">
            Available in French, Kirundi, Kiswahili and English. Version 1.0.0.
          </p>
        </div>
        <div class="about-right reveal reveal-d1">
          <div class="stat-card">
            <span class="stat-num" data-count="0">0</span>
            <span class="stat-label" data-en="transaction fees" data-fr="frais de transaction">transaction fees</span>
          </div>
          <div class="stat-card">
            <span class="stat-num" data-count="4">4</span>
            <span class="stat-label" data-en="languages" data-fr="langues">languages</span>
          </div>
          <div class="stat-card stat-card--full">
            <span class="stat-word">Local.</span>
            <span class="stat-label" data-en="Your neighborhood. Always." data-fr="Votre quartier. Toujours.">Your neighborhood. Always.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CONTACT ───────────────────────────────────────────────── -->
  <section class="section section-contact" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact-inner">

        <div class="contact-left reveal">
          <p class="label" data-en="Get the app" data-fr="Obtenir l'application">Get the app</p>
          <h2 id="contact-title"
              data-en="Ready to find something nearby?"
              data-fr="Prêt à trouver quelque chose à proximité ?">Ready to find something nearby?</h2>
          <p data-en="Download Nguzo and browse what people in your neighborhood are selling right now."
             data-fr="Téléchargez Nguzo et parcourez ce que les gens de votre quartier vendent en ce moment.">
            Download Nguzo and browse what people in your neighborhood are selling right now.
          </p>
          <a href="https://play.google.com/store/apps/details?id=co.nguzo.app" target="_blank" rel="noopener noreferrer"
             class="btn btn-primary btn-lg"
             aria-label="Download Nguzo on Google Play">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.33.18.72.21 1.09.08l12.48-7.2-2.81-2.82L3.18 23.76z"/><path d="M22.2 10.39c-.43-.45-1.09-.6-1.69-.37L3.18.24C2.82.11 2.43.14 2.1.32L13.94 12z"/><path d="M2.1 23.68c.33.18.72.21 1.08.08L13.94 12 2.1.32C1.44.68 1 1.37 1 2.16v19.68c0 .79.44 1.48 1.1 1.84z"/><path d="M16.75 16.64l2.81 2.82 1.65-.95c.6-.35.96-.98.96-1.68v-1.53l-5.42 1.34z"/></svg>
            <span data-en="Download on Google Play" data-fr="Télécharger sur Google Play">Download on Google Play</span>
          </a>
          <p class="contact-email">
            <span data-en="Questions? " data-fr="Des questions ? ">Questions? </span>
            <a href="mailto:support.nguzo@gmail.com" class="text-link">support.nguzo@gmail.com</a>
          </p> 
        </div>

        <!-- ONE form. ONE purpose. -->
        <div class="contact-right reveal reveal-d1">
          <form id="contact-form" class="contact-form" action="https://api.web3form.com/submit" method="POST" novalidate>
            <input type="hidden" name="access_key" value="9ec28a50-ef8f-4c58-b7c2-21e2bbdd7de8" />
            <input type="hidden" name="subject" value="Nguzo website contact form" />
            <p class="visually-hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <h3 data-en="Contact us" data-fr="Contactez-nous">Contact us</h3>
            <p data-en="Send a message and we'll respond as soon as possible."
               data-fr="Envoyez un message et nous répondrons dès que possible.">
              Send a message and we'll respond as soon as possible.
            </p>

            <div class="field-row">
              <div class="field">
                <label for="f-name" data-en="Name" data-fr="Nom">Name</label>
                <input type="text" id="f-name" name="name" required aria-required="true"
                       data-ph-en="Your full name"
                       data-ph-fr="Votre nom complet"
                       placeholder="Your full name" />
              </div>
              <div class="field">
                <label for="f-email" data-en="Email address" data-fr="Adresse e-mail">Email address</label>
              <input type="email" id="f-email" name="email" required aria-required="true"
                     autocomplete="email"
                     data-ph-en="you@example.com"
                     data-ph-fr="vous@exemple.com"
                     placeholder="you@example.com" />
              <div id="email-feedback" class="email-feedback" aria-live="polite"></div>
            </div>
            </div>

            <div class="field">
              <label for="f-message" data-en="Message" data-fr="Message">Message</label>
              <textarea id="f-message" name="message" required aria-required="true" rows="5"
                        data-ph-en="Tell us what you need..."
                        data-ph-fr="Dites-nous ce dont vous avez besoin..."
                        placeholder="Tell us what you need..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full">
              <span data-en="Send message" data-fr="Envoyer le message">Send message</span>
            </button>

            <div class="form-ok" id="form-ok" hidden role="status" aria-live="polite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-en="Thank you — we received your message." data-fr="Merci — nous avons reçu votre message.">Thank you — we received your message.</span>
            </div>
            <div class="form-error" id="form-error" hidden role="status" aria-live="assertive">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12" y2="16"/></svg>
              <span data-en="Something went wrong. Please try again." data-fr="Une erreur est survenue. Veuillez réessayer.">Something went wrong. Please try again.</span>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>

</main>
        `;
    }
 }

 customElements.define('app-main', AppMain);
 