class AppHowItWorks extends HTMLElement {
    connectedCallback(){
        this.innerHTML = /* html */ `
<section class="section section-hiw" id="how-it-works" aria-labelledby="hiw-title">
    <div class="container">
      <div class="section-header reveal">
        <p class="label"
           data-en="How it works"
           data-fr="Comment ça marche">How it works</p>
        <h2 id="hiw-title"
            data-en="Three steps. That's it."
            data-fr="Trois étapes. C'est tout.">Three steps. That's it.</h2>
        <p class="section-sub"
           data-en="The only action on any listing is &#34;Message the seller&#34; — no payment buttons, no cart, no checkout. That's intentional."
           data-fr="La seule action sur une annonce est &#34;Discuter avec le vendeur&#34; — pas de bouton de paiement, pas de panier, pas de validation. C'est voulu.">
          The only action on any listing is "Message the seller" — no payment buttons, no cart, no checkout. That's intentional.
        </p>
      </div>

      <ol class="steps" role="list">
        <li class="step reveal">
          <div class="step__num" aria-hidden="true" data-n="01">01</div>
          <div class="step__body">
            <div class="step__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 data-en="Browse or list nearby"
                data-fr="Parcourir ou publier à proximité">Browse or list nearby</h3>
            <p data-en="Items are sorted by distance from you, not by who paid to be first. Post what you're selling in under a minute."
               data-fr="Les articles sont triés par distance, pas par ceux qui ont payé pour être en tête. Publiez ce que vous vendez en moins d'une minute.">
              Items are sorted by distance from you, not by who paid to be first. Post what you're selling in under a minute.
            </p>
          </div>
        </li>
        <li class="step reveal reveal-d1">
          <div class="step__num" aria-hidden="true" data-n="02">02</div>
          <div class="step__body">
            <div class="step__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 data-en="Message the seller directly"
                data-fr="Contacter le vendeur directement">Message the seller directly</h3>
            <p data-en="Ask questions, agree on a price, choose a meeting spot. No phone numbers needed, no third party reads your conversation."
               data-fr="Posez des questions, convenez d'un prix, choisissez un lieu de rencontre. Pas de numéro de téléphone requis, aucun tiers ne lit votre conversation.">
              Ask questions, agree on a price, choose a meeting spot. No phone numbers needed, no third party reads your conversation.
            </p>
          </div>
        </li>
        <li class="step reveal reveal-d2">
          <div class="step__num" aria-hidden="true" data-n="03">03</div>
          <div class="step__body">
            <div class="step__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 data-en="Meet safely, exchange in person"
                data-fr="Rencontrez-vous en sécurité, échangez en personne">Meet safely, exchange in person</h3>
            <p data-en="Pay in cash, inspect the item, take it home. Commerce the way it has always worked — between real people."
               data-fr="Payez en espèces, inspectez l'article, repartez avec. Le commerce tel qu'il a toujours fonctionné — entre personnes réelles.">
              Pay in cash, inspect the item, take it home. Commerce the way it has always worked — between real people.
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
        `
    }
}

customElements.define('app-how_it_works', AppHowItWorks)
