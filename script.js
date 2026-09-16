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

  // Masonry: span each piece across enough 8px rows to fit its height
  const grid = document.getElementById('grid');
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
    empty.hidden = shown > 0;
    layout();
  }));
})();
