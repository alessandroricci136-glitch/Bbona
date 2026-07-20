// Cookie / privacy banner GDPR minimale
(function() {
  const KEY = 'wood_cookie_ok';
  const GA_ID = 'G-NZ84LTJ8C5';
  const savedChoice = localStorage.getItem(KEY);
  const consentGranted = savedChoice === 'all';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    analytics_storage: consentGranted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  function loadAnalytics() {
    if (window.woodAnalyticsLoaded) return;
    window.woodAnalyticsLoaded = true;
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s.async = true;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  loadAnalytics();

  if (savedChoice) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-inner">
      <p class="cookie-text">
        Questo sito usa cookie tecnici e Google Analytics per migliorare l'esperienza.
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
      </p>
      <div class="cookie-actions">
        <button id="cookie-decline">Solo necessari</button>
        <button id="cookie-accept">Accetta</button>
      </div>
    </div>`;
  document.body.appendChild(banner);

  setTimeout(() => banner.classList.add('visible'), 300);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem(KEY, 'all');
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
    window.gtag('event', 'page_view');
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem(KEY, 'minimal');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });

})();
