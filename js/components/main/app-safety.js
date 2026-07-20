class AppSafety extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
<section class="section section-trust" id="trust" aria-labelledby="trust-title">
    <div class="container">
        <div class="section-header reveal">
            <p class="label" data-en="Trust &amp; Safety" data-fr="Confiance &amp; Sécurité">Trust &amp; Safety</p>
            <h2 id="trust-title" data-en="Built on trust." data-fr="Fondé sur la confiance.">Built on trust.</h2>
            <p class="section-sub"
                data-en="Every design decision in Nguzo reflects one question: how do we help you transact safely with people you've never met?"
                data-fr="Chaque décision de conception dans Nguzo reflète une question : comment vous aider à échanger en toute sécurité avec des personnes que vous n'avez jamais rencontrées ?">
                Every design decision in Nguzo reflects one question: how do we help you transact safely with people
                you've never met?
            </p>
        </div>

        <div class="trust-grid">
            <article class="trust-item reveal">
                <div class="trust-item__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" /></svg>
                </div>
                <h3 data-en="Trust Score" data-fr="Score de Confiance">Trust Score</h3>
                <p data-en="Each account earns a behavioral reputation score over time — based on how you communicate, how you follow through, and whether you've had reports against you. It's earned, not bought."
                    data-fr="Chaque compte gagne un score de réputation comportementale dans le temps — basé sur votre façon de communiquer, de tenir vos engagements, et sur d'éventuels signalements. Il se mérite, il ne s'achète pas.">
                    Each account earns a behavioral reputation score over time — based on how you communicate, how you
                    follow through, and whether you've had reports against you. It's earned, not bought.
                </p>
            </article>

            <article class="trust-item reveal reveal-d1">
                <div class="trust-item__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <h3 data-en="Safety Guidelines" data-fr="Consignes de Sécurité">Safety Guidelines</h3>
                <p data-en="Meet in public. Bring someone you trust. Verify the item before you pay. Avoid carrying large sums of cash. These are habits — not rules — and they matter."
                    data-fr="Rencontrez-vous en public. Amenez quelqu'un en qui vous avez confiance. Vérifiez l'article avant de payer. Évitez de transporter de grosses sommes en espèces. Ce sont des habitudes — pas des règles — et elles comptent.">
                    Meet in public. Bring someone you trust. Verify the item before you pay. Avoid carrying large sums
                    of cash. These are habits — not rules — and they matter.
                </p>
            </article>

            <article class="trust-item reveal reveal-d2">
                <div class="trust-item__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" y1="22" x2="4" y2="15" /></svg>
                </div>
                <h3 data-en="Report &amp; Moderation" data-fr="Signalement &amp; Modération">Report &amp; Moderation
                </h3>
                <p data-en="Any listing, message, or account can be flagged. Reports are reviewed through a priority-based enforcement system — minor violations get a warning, serious ones are acted on immediately."
                    data-fr="Toute annonce, message ou compte peut être signalé. Les signalements sont traités selon un système d'application par priorité — les violations mineures donnent lieu à un avertissement, les graves sont traitées immédiatement.">
                    Any listing, message, or account can be flagged. Reports are reviewed through a priority-based
                    enforcement system — minor violations get a warning, serious ones are acted on immediately.
                </p>
            </article>

            <article class="trust-item reveal reveal-d3">
                <div class="trust-item__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
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

        `
    }
}

customElements.define('app-safety', AppSafety)
