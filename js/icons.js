// Inietta uno sprite SVG nascosto con le icone stilizzate del sito.
// Le icone si usano con <svg class="icon"><use href="#icon-NOME"/></svg>

(function () {
  const sprite = document.createElement('div');
  sprite.style.display = 'none';
  sprite.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <symbol id="icon-flame" viewBox="0 0 24 24">
      <path d="M12 22c4 0 6.5-2.7 6.5-6.3 0-2.8-1.4-4.6-2.7-6.3-.5 1.6-1.3 2.4-2.1 2-1.1-.5-1-2.2-.7-3.9.3-1.8.6-3.7-1-5.5-1.6 2.6-3.5 4.6-3.5 7.7 0 1 .3 1.9.8 2.6-1-.2-1.8-.9-2.3-1.8C6.2 12 5.5 13.6 5.5 15.3 5.5 19 8 22 12 22Z"/>
    </symbol>
    <symbol id="icon-flames" viewBox="0 0 32 24">
      <path d="M9 23c3.2 0 5.2-2.1 5.2-5 0-2.2-1.1-3.7-2.2-5-.4 1.3-1 1.9-1.7 1.6-.9-.4-.8-1.8-.6-3.1.3-1.5.5-3-.8-4.4-1.3 2.1-2.8 3.7-2.8 6.2 0 .8.2 1.5.6 2.1-.8-.2-1.4-.7-1.8-1.4-.8 1.1-1.4 2.4-1.4 3.8 0 3 2 5.2 5.5 5.2Z"/>
      <path d="M22 23c4.2 0 6.8-2.7 6.8-6.4 0-2.8-1.4-4.6-2.7-6.3-.5 1.6-1.3 2.4-2.1 2-1.1-.5-1-2.2-.7-3.9.3-1.8.6-3.7-1-5.4-1.6 2.6-3.5 4.5-3.5 7.6 0 1 .3 1.9.8 2.6-1-.2-1.8-.9-2.3-1.8-.9 1.5-1.6 3.1-1.6 4.8 0 3.7 2.6 6.8 6.3 6.8Z"/>
    </symbol>
    <symbol id="icon-wheat" viewBox="0 0 24 24">
      <path d="M12 2v20"/>
      <path d="M12 6c-2-1-3 0-4-2 2 0 3 1 4 2Z"/>
      <path d="M12 6c2-1 3 0 4-2-2 0-3 1-4 2Z"/>
      <path d="M12 10c-2-1-3 0-4-2 2 0 3 1 4 2Z"/>
      <path d="M12 10c2-1 3 0 4-2-2 0-3 1-4 2Z"/>
      <path d="M12 14c-2-1-3 0-4-2 2 0 3 1 4 2Z"/>
      <path d="M12 14c2-1 3 0 4-2-2 0-3 1-4 2Z"/>
    </symbol>
    <symbol id="icon-palette" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 22 11c0-5-4.5-9-10-9Z"/>
      <circle cx="7" cy="11" r="1"/>
      <circle cx="9" cy="7" r="1"/>
      <circle cx="14" cy="6.5" r="1"/>
      <circle cx="17" cy="10" r="1"/>
    </symbol>
    <symbol id="icon-pizza" viewBox="0 0 24 24">
      <path d="M2 7 12 2l10 5-10 15Z"/>
      <path d="M5.5 8.7 12 21l6.5-12.3"/>
      <circle cx="11" cy="9" r="1"/>
      <circle cx="14" cy="12" r="1"/>
      <circle cx="9" cy="13" r="1"/>
    </symbol>
    <symbol id="icon-skewer" viewBox="0 0 24 24">
      <path d="M3 21 21 3"/>
      <rect x="7" y="7" width="3" height="3" rx="0.5" transform="rotate(45 8.5 8.5)"/>
      <rect x="11" y="11" width="3" height="3" rx="0.5" transform="rotate(45 12.5 12.5)"/>
      <rect x="15" y="3" width="3" height="3" rx="0.5" transform="rotate(45 16.5 4.5)"/>
    </symbol>
    <symbol id="icon-anchor" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v14"/>
      <path d="M5 12a7 7 0 0 0 14 0"/>
      <path d="M9 5H5"/>
      <path d="M19 5h-4"/>
    </symbol>
    <symbol id="icon-pin" viewBox="0 0 24 24">
      <path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z"/>
      <circle cx="12" cy="9.5" r="2.3"/>
    </symbol>
    <symbol id="icon-phone" viewBox="0 0 24 24">
      <path d="M5 4h3l2 5-2.3 1.6a11 11 0 0 0 5.7 5.7L15 14l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 4Z"/>
    </symbol>
    <symbol id="icon-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 3"/>
    </symbol>
    <symbol id="icon-camera" viewBox="0 0 24 24">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>
      <circle cx="12" cy="13" r="3.3"/>
    </symbol>
    <symbol id="icon-car" viewBox="0 0 24 24">
      <path d="M4 16V11l2-5h12l2 5v5"/>
      <path d="M3 16h18v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>
      <circle cx="7.5" cy="16" r="1.3"/>
      <circle cx="16.5" cy="16" r="1.3"/>
    </symbol>
    <symbol id="icon-leaf" viewBox="0 0 24 24">
      <path d="M5 19c-2-6 1-13 14-15 2 11-4 15-14 15Z"/>
      <path d="M5 19c3-4 6-7 12-12"/>
    </symbol>
  </svg>`;
  document.body.insertAdjacentElement('afterbegin', sprite.firstElementChild);
})();
