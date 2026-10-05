/* =========================================================
   Andrade's Bakery — interações da página
   ========================================================= */
(function () {
  'use strict';

  /* ---------- header: muda ao rolar ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- abas do cardápio ---------- */
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-list');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-target');
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      panels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.id === target);
      });
    });
  });

  /* ---------- aparecer ao rolar ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- ano no rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- "aberto agora" ----------
     Ter–Sex 6h–19h | Sáb 6h–20h | Dom 6h–13h | Seg fechado */
  var badge = document.getElementById('openBadge');
  var badgeText = document.getElementById('openBadgeText');
  if (badge && badgeText) {
    var now = new Date();
    var day = now.getDay();                       // 0 = domingo
    var hour = now.getHours() + now.getMinutes() / 60;
    var ranges = {
      0: [6, 13],
      1: null,                                    // segunda: fechado
      2: [6, 19],
      3: [6, 19],
      4: [6, 19],
      5: [6, 19],
      6: [6, 20]
    };
    var range = ranges[day];
    var isOpen = !!range && hour >= range[0] && hour < range[1];

    badge.hidden = false;
    badge.classList.toggle('is-closed', !isOpen);
    if (isOpen) {
      badgeText.textContent = 'Aberto agora — até às ' + range[1] + 'h';
    } else if (range && hour < range[0]) {
      badgeText.textContent = 'Fechado — abrimos hoje às ' + range[0] + 'h';
    } else {
      badgeText.textContent = 'Fechado agora — volte em breve!';
    }
  }
})();
