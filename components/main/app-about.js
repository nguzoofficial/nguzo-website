class AppAbout  extends HTMLElement {
    connectedCallback(){
        this.innerHTML = /* html */ `
<section class="section section-about" id="about" aria-labelledby="about-title">
    <div class="container">
        <div class="about-inner">
            <div class="about-left reveal">
                <p class="label" data-en="About" data-fr="À propos">About</p>
                <h2 id="about-title" data-en="Made in Burundi,&nbsp;for Burundi."
                    data-fr="Fait au Burundi,&nbsp;pour le Burundi.">Made in Burundi,&nbsp;for Burundi.</h2>
                <p data-en="Nguzo was built around a simple observation: in Burundi, most commerce is local and personal. People buy from people they know, or people who live two streets away. The app makes that easier — it doesn't try to change how trade works, just make it visible."
                    data-fr="Nguzo a été construit autour d'une observation simple : au Burundi, la plupart des échanges sont locaux et personnels. Les gens achètent à des personnes qu'ils connaissent, ou qui habitent à deux rues de là. L'application facilite cela — elle ne cherche pas à changer le fonctionnement du commerce, juste à le rendre visible.">
                    Nguzo was built around a simple observation: in Burundi, most commerce is local and personal. People
                    buy from people they know, or people who live two streets away. The app makes that easier — it
                    doesn't try to change how trade works, just make it visible.
                </p>
                <p data-en="Available in French, Kirundi, Kiswahili and English. Version 1.0.0."
                    data-fr="Disponible en français, en kirundi, en kiswahili et en anglais. Version 1.0.0.">
                    Available in French, Kirundi, Kiswahili and English. Version 1.0.0.
                </p>
            </div>
            <div class="about-right reveal reveal-d1">
                <div class="stat-card">
                    <span class="stat-num" data-count="0">0</span>
                    <span class="stat-label" data-en="transaction fees" data-fr="frais de transaction">transaction
                        fees</span>
                </div>
                <div class="stat-card">
                    <span class="stat-num" data-count="4">4</span>
                    <span class="stat-label" data-en="languages" data-fr="langues">languages</span>
                </div>
                <div class="stat-card stat-card--full">
                    <span class="stat-word">Local.</span>
                    <span class="stat-label" data-en="Your neighborhood. Always."
                        data-fr="Votre quartier. Toujours.">Your neighborhood. Always.</span>
                </div>
            </div>
        </div>
    </div>
</section>
        `
    }
}

customElements.define('app-about', AppAbout)
