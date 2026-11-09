(() => {
  const whatsapp = 'https://wa.me/22953538609';
  const shortBio = 'Je suis le fondateur d’Adonaï Academy, entrepreneur et autodidacte dans le digital. À travers cette académie, je souhaite transmettre des compétences numériques pratiques et accessibles pour aider chacun à apprendre, entreprendre et saisir de nouvelles opportunités.';
  const paragraphs = [
    'Je suis le fondateur d’Adonaï Academy et un entrepreneur passionné par le numérique, la création et la transmission de compétences.',
    'Mon parcours dans le digital s’est construit principalement à travers l’apprentissage autodidacte et la pratique. À travers Adonaï Agency et mes différents projets, j’ai développé des compétences en design graphique, création de contenus visuels, conception de sites web et création de produits numériques.',
    'Au fil de cette évolution, j’ai compris que les compétences numériques pouvaient ouvrir de véritables opportunités, notamment pour les jeunes qui souhaitent entreprendre ou développer des sources de revenus en ligne.',
    'C’est cette conviction qui m’a conduit à créer Adonaï Academy : une plateforme de formation en ligne destinée à rendre les compétences digitales accessibles, pratiques et compréhensibles, particulièrement aux débutants du Bénin et de l’Afrique francophone.',
    'Mon objectif est simple : apprendre, transmettre et aider chacun à transformer ses compétences en opportunités concrètes.'
  ];
  const profile = document.querySelector('.profile');
  const page = location.pathname.split('/').pop() || 'index.html';
  if (profile && (page === 'index.html' || page === 'index')) {
    const p = profile.querySelector('p');
    if (p) p.textContent = shortBio;
  }
  if (profile && (page === 'a-propos.html' || page === 'a-propos')) {
    const content = profile.querySelector('h2')?.parentElement;
    if (content) {
      content.querySelectorAll('p').forEach(p => p.remove());
      const anchor = content.querySelector('a');
      paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        content.insertBefore(p, anchor);
      });
    }
    const heroText = document.querySelector('main .hero .lead');
    if (heroText) heroText.textContent = 'Mon parcours, mes convictions et la mission d’Adonaï Academy.';
    const next = profile.parentElement.nextElementSibling;
    const intro = next?.querySelector('.intro');
    if (intro) intro.remove();
  }
  document.querySelectorAll('a').forEach(a => {
    if (a.textContent.trim() === 'Me contacter') {
      a.href = whatsapp;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', 'Me contacter sur WhatsApp (nouvel onglet)');
    }
  });
})();
