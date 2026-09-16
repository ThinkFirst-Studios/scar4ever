// SCAR — scar4ever.com · spec concept
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky bar condenses on scroll
  const bar = document.querySelector('.bar');
  const onScroll = () => bar.classList.toggle('is-stuck', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveals with stagger
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-in'));
  } else {
    let batch = 0;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.setProperty('--d', `${(batch++ % 4) * 90}ms`);
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
      batch = 0;
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  }

  // Hero: artwork and logo drift with the pointer
  const hero = document.querySelector('.hero[data-tilt]');
  if (hero && !reduced && matchMedia('(pointer: fine)').matches) {
    let raf;
    hero.addEventListener('pointermove', e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
        hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
      });
    });
    hero.addEventListener('pointerleave', () => { hero.style.setProperty('--mx', 0); hero.style.setProperty('--my', 0); });
  }

  // Mobile menu
  const toggle = document.querySelector('.bar__toggle');
  const setMenu = open => {
    bar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'close' : 'menu';
  };
  toggle.addEventListener('click', () => setMenu(!bar.classList.contains('is-open')));
  document.querySelectorAll('.bar__nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && bar.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });

  // Enquiry form — mockup only, no handler connected yet
  const form = document.getElementById('enquiry');
  if (form) {
    const status = document.getElementById('form-status');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let firstBad = null;
      form.querySelectorAll('[required]').forEach(f => {
        const bad = !f.value.trim() || (f.type === 'email' && !f.checkValidity());
        f.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = f;
      });
      if (firstBad) {
        status.textContent = 'Fill in your name, a valid email and a few lines about the project.';
        firstBad.focus();
        return;
      }
      status.innerHTML = 'Looks good. <span class="confirm">[CONFIRM] form handler — not connected in this mockup</span>';
    });
  }

  // Masonry: span each piece across enough 8px rows to fit its height
  const grid = document.getElementById('grid');
  if (!grid) return;
  const pieces = [...grid.querySelectorAll('.piece')];
  const layout = () => {
    const cs = getComputedStyle(grid);
    const row = parseFloat(cs.gridAutoRows);
    const gap = parseFloat(cs.rowGap) || 0;
    pieces.forEach(p => {
      if (p.hidden) return;
      p.style.gridRowEnd = 'auto';
      const m = getComputedStyle(p);
      const h = p.getBoundingClientRect().height + parseFloat(m.marginTop) + parseFloat(m.marginBottom);
      p.style.gridRowEnd = `span ${Math.ceil((h + gap) / (row + gap))}`;
    });
  };
  if ('ResizeObserver' in window) {
    let raf;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); });
    pieces.forEach(p => ro.observe(p));
  } else {
    grid.classList.add('no-masonry');
  }

  // Filters
  const buttons = document.querySelectorAll('.filters button');
  const empty = document.getElementById('grid-empty');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    let shown = 0;
    pieces.forEach(p => {
      const match = f === 'all' || p.dataset.cat.split(' ').includes(f);
      p.hidden = !match;
      if (match) {
        shown++;
        p.classList.add('is-in');
        if (!reduced) {
          p.classList.remove('is-filtering');
          void p.offsetWidth;
          p.classList.add('is-filtering');
        }
      }
    });
    if (empty) empty.hidden = shown > 0;
    layout();
  }));
})();
