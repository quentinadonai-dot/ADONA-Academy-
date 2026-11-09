(() => {
const whatsapp = 'https://wa.me/22953538609';
const page = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
if (page === 'ressources.html' || page === 'ressources') {
  document.querySelectorAll('.pack').forEach(pack => {
    const excerpt = pack.querySelector('.excerpt');
    if (excerpt) {
      const wrap = document.createElement('div');
      wrap.className = 'locked-excerpt';
      wrap.style.cssText = 'position:relative;overflow:hidden;border-radius:14px;background:#f3f7f5;margin:12px 0;';
      excerpt.replaceWith(wrap);
      const placeholder = document.createElement('div');
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.style.cssText = 'filter:blur(6px);opacity:.45;user-select:none;pointer-events:none;padding:22px;min-height:155px;font:14px/1.8 monospace;';
      placeholder.textContent = 'Un parcours structuré pour avancer étape par étape. Définir son projet et organiser ses idées. Construire un contenu adapté à son public. Relire, améliorer et préparer la présentation du projet.';
      const label = document.createElement('div');
      label.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;color:#176b74;font-weight:650;background:linear-gradient(transparent,#f3f7f5dd);';
      label.textContent = 'Aperçu masqué — contactez-moi pour découvrir le pack';
      wrap.append(placeholder, label);
    }
    pack.querySelectorAll('h3').forEach(h => {
      if (h.textContent.includes('Extrait du prompt')) h.textContent = 'Aperçu du pack';
    });
    pack.querySelectorAll('.purchase a').forEach(a => {
      a.href = whatsapp;
      a.textContent = 'Commander sur WhatsApp';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', 'Commander ce pack sur WhatsApp (nouvel onglet)');
    });
    const note = pack.querySelector('.purchase .note');
    if (note) note.textContent = 'Contactez-moi sur WhatsApp pour les modalités d’achat.';
  });
  document.querySelectorAll('details').forEach(d => {
    if (d.querySelector('summary')?.textContent.includes('Comment acheter')) {
      const p = d.querySelector('p');
      if (p) p.textContent = 'Utilisez le bouton « Commander sur WhatsApp » du pack souhaité pour obtenir les modalités d’achat.';
    }
  });
  const intro = document.querySelector('main .hero .lead');
  if (intro && !document.querySelector('[data-chariow]')) {
    const a = document.createElement('a');
    a.href = 'https://adonaiacademie.mychariow.shop';
    a.textContent = 'Visiter ma boutique Chariow';
    a.className = 'btn alt';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.dataset.chariow = 'true';
    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.append(a);
    intro.after(actions);
  }
}
const b=document.querySelector('.menu'),m=document.querySelector('.mobile');
if(b && m){
  function closeMenu(){m.hidden=true;b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Ouvrir le menu');}
  b.addEventListener('click',()=>{const open=m.hidden;m.hidden=!open;b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.hidden){closeMenu();b.focus();}});
  document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  const desktop=matchMedia('(min-width:851px)');
  if(desktop.addEventListener)desktop.addEventListener('change',e=>{if(e.matches)closeMenu();});
}
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.setProperty('--delay',(i%3)*65+'ms');o.observe(el);});
  document.documentElement.classList.add('motion');
}
})();
