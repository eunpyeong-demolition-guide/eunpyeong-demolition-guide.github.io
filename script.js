'use strict';
(() => {
  const header = document.querySelector('.site-header');
  const syncHeader = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();
  const button = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('mobile-navigation');
  if (!button || !navigation) return;
  const close = () => {
    navigation.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', '모바일 메뉴 열기');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    navigation.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '모바일 메뉴 닫기' : '모바일 메뉴 열기');
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) close();
  });
})();
