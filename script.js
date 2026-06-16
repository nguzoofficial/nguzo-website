/* ============================================================
   NGUZO — script.js
   1. Nav scroll + active section tracking
   2. IntersectionObserver scroll reveals
   3. Hero headline word-split animation
   4. Count-up numbers
   5. EN/FR language toggle (persisted)
   6. Mobile menu with focus trap
   7. Netlify form async
   8. Anchor click smooth focus
============================================================ */
(function () {
  'use strict';

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. NAV SCROLL ─────────────────────────────────────── */
  const header = $('#site-header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 36);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active link via IntersectionObserver */
  const navLinks = $$('.nav__link');
  const sections = $$('main section[id]');
  if (sections.length && navLinks.length) {
    const sectionObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
        }
      }),
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach(s => sectionObs.observe(s));
  }

  /* ── 2. SCROLL REVEALS ──────────────────────────────────── */
  const revealEls  = $$('.reveal, .reveal-d1, .reveal-d2, .reveal-d3, .reveal-fast, .reveal-stagger, .label');

  const revealObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObs.unobserve(e.target);
      }
    }),
    { rootMargin: '0px 0px -48px 0px', threshold: 0.06 }
  );

  if (!reducedMotion()) {
    revealEls.forEach(el => {
      // Hero labels/reveals trigger immediately
      if (el.closest('.hero')) {
        el.classList.add('in-view');
      } else {
        revealObs.observe(el);
      }
    });
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ── 3. HERO HEADLINE WORD SPLIT ──────────────────────── */
  const initHeadline = () => {
    const h1 = $('.hero__h1');
    if (!h1 || reducedMotion()) return;

    $$('.word-line', h1).forEach(line => {
      const words = line.textContent.trim().split(/\s+/);
      line.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
    });

    const words = $$('.word', h1);
    // Stagger each word
    words.forEach((w, i) => { w.style.transitionDelay = `${60 + i * 85}ms`; });

    // Trigger after next two frames so CSS is parsed
    requestAnimationFrame(() => requestAnimationFrame(() => {
      h1.classList.add('revealed');
    }));
  };
  initHeadline();

  /* ── 4. COUNT-UP ────────────────────────────────────────── */
  const countEls = $$('[data-count]');
  if (countEls.length) {
    const countObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        countObs.unobserve(e.target);
        if (reducedMotion()) return;

        const target = parseInt(e.target.dataset.count, 10);
        if (isNaN(target)) return;

        const dur = 1100, start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
          e.target.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
      { threshold: 0.5 }
    );
    countEls.forEach(el => countObs.observe(el));
  }

  /* ── 5. LANGUAGE TOGGLE ────────────────────────────────── */
  const HTML = document.documentElement;
  const LANG_KEY = 'nguzo_lang';

  const applyLang = (lang) => {
    HTML.setAttribute('lang', lang);
    HTML.setAttribute('data-lang', lang);

    // Text nodes
$$('[data-en]').forEach(el => {
  const val = el.getAttribute(`data-${lang}`);
  if (val === null) return;

  if (el.childElementCount === 0) {
    // Normal element — just swap the text
    el.textContent = val;
  } else if ([...el.children].every(c => c.classList.contains('word'))) {
    // word-split headline span — rebuild the inner spans with new text.
    // Set transition-delay via CSSOM (not an inline style attribute) so it
    // is not blocked by the Content-Security-Policy style-src directive.
    const words = val.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
    [...el.children].forEach((span, i) => { span.style.transitionDelay = `${i * 85}ms`; });
  }
});

    // Placeholder attributes
    $$('[data-ph-en]').forEach(el => {
      const ph = el.getAttribute(`data-ph-${lang}`);
      if (ph) el.placeholder = ph;
    });

    // Sync all lang buttons across header, mobile menu, footer
    $$('.lang-btn').forEach(btn => {
      const isEn = btn.id.includes('en');
      const match = lang === 'en' ? isEn : !isEn;
      btn.setAttribute('aria-pressed', String(match));
      btn.classList.toggle('active', match);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  };

  // Bind all lang buttons (they share a naming convention: *-en-* / *-fr-*)
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.id.includes('fr') ? 'fr' : 'en');
    });
  });

  // Resolve initial language: ?lang= query (so hreflang/sitemap URLs work)
  // > saved preference > 'fr' default.
  const validLang = (l) => (l === 'en' || l === 'fr') ? l : null;
  let initialLang = 'fr';
  try {
    const queryLang = validLang(new URLSearchParams(location.search).get('lang'));
    const saved = validLang(localStorage.getItem(LANG_KEY));
    initialLang = queryLang || saved || 'fr';
  } catch (_) { /* keep default */ }
  applyLang(initialLang);

  /* ── 6. MOBILE MENU ─────────────────────────────────────── */
  const burger     = $('#burger');
  const mobileNav  = $('#mobile-nav');
  const closeBtn   = $('#mobile-close');
  const mobileLinks = $$('.mobile-nav__link');
  const FOCUSABLE  = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

  const openMenu = () => {
    mobileNav.removeAttribute('hidden');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    if (!reducedMotion()) {
      mobileNav.style.opacity = '0';
      mobileNav.style.transition = 'opacity 200ms ease';
      requestAnimationFrame(() => { mobileNav.style.opacity = '1'; });
    }

    // Focus first item
    setTimeout(() => {
      const first = mobileNav.querySelector(FOCUSABLE);
      first?.focus();
    }, 50);
  };

  const closeMenu = () => {
    const finish = () => {
      mobileNav.setAttribute('hidden', '');
      mobileNav.style.opacity = '';
      mobileNav.style.transition = '';
      document.body.style.overflow = '';
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    };
    if (!reducedMotion()) {
      mobileNav.style.opacity = '0';
      setTimeout(finish, 200);
    } else { finish(); }
  };

  burger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  mobileLinks.forEach(l => l.addEventListener('click', closeMenu));

  mobileNav?.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const items = $$(FOCUSABLE, mobileNav).filter(el => el.offsetParent !== null);
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ── 7. CONTACT FORM ───────────────────────────────────── */
  const form = $('#contact-form');
  const formOk = $('#form-ok');
  const formError = $('#form-error');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form) return;

    formOk?.setAttribute('hidden', '');
    formError?.setAttribute('hidden', '');

    const payload = new URLSearchParams(new FormData(form)).toString();

    const formData = new FormData(form);

    formData.append('access_key', '9ec28a50-ef8f-4c58-b7c2-21e2bbdd7de8');

    const jsonObject = Object.fromEntries(formData.entries());

    const formDatajson = JSON.stringify(jsonObject);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: formDatajson
      });

      const json = await res.json();

      if (!res.ok) throw new Error('Form submission failed');
      form.querySelectorAll('.field, button[type="submit"]').forEach(el => { el.style.display = 'none'; });
      formOk?.removeAttribute('hidden');
    } catch (error) {
      console.error('Contact form submit error:', error);
      formError?.removeAttribute('hidden');
    }
  });

  /* ── 8. ANCHOR SMOOTH FOCUS (a11y) ─────────────────────── */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      setTimeout(() => {
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.removeAttribute('tabindex');
        }
      }, 700);
    });
  });

})();
