// Gestione lingua IT/EN - condiviso tra tutte le pagine

const LANG_KEY = 'bbona_lang';

export function getLang() {
  return localStorage.getItem(LANG_KEY) || 'it';
}

export function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

// Applica la lingua alla navbar e agli elementi statici
export function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-it]').forEach(el => {
    el.textContent = lang === 'en'
      ? (el.dataset.en || el.dataset.it)
      : el.dataset.it;
  });
  // Aggiorna toggle
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelector('[data-lang="it"]').classList.toggle('active', lang === 'it');
    btn.querySelector('[data-lang="en"]').classList.toggle('active', lang === 'en');
  });
}

// Inizializza il toggle lingua nella navbar
export function initLangToggle(onChangeCb) {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLang(lang);
      applyLang(lang);
      if (onChangeCb) onChangeCb(lang);
    });
  });
  applyLang(getLang());
}
