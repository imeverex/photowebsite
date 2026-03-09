/* =============================================
   BRANDON DEURBROUCK V2 — Main JS
   ============================================= */

// =============================================
// NAV SCROLL
// =============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// MOBILE MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const mobMenu = document.getElementById('mobMenu');

hamburger.addEventListener('click', () => {
  const open = mobMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeMenu() {
  mobMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================
// PRINT SIZE BUTTONS
// =============================================
document.querySelectorAll('.print-card').forEach(card => {
  card.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

// =============================================
// LIGHTBOX
// =============================================
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCount = document.getElementById('lbCount');

let lbImages = [];
let lbIndex = 0;

function buildImages() {
  lbImages = [];
  document.querySelectorAll('.wg-item img, .gs-item img').forEach(img => {
    lbImages.push({ src: img.src, alt: img.alt });
  });
}

function openLightbox(i) {
  buildImages();
  lbIndex = i;
  showImage(i);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showImage(i) {
  const item = lbImages[i];
  if (!item) return;
  lbImg.style.opacity = '0';
  lbImg.src = item.src;
  lbImg.alt = item.alt;
  lbImg.onload = () => { lbImg.style.transition = 'opacity 0.25s ease'; lbImg.style.opacity = '1'; };
  lbCount.textContent = `${i + 1} / ${lbImages.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.getElementById('lbPrev').addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
  showImage(lbIndex);
});

document.getElementById('lbNext').addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % lbImages.length;
  showImage(lbIndex);
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; showImage(lbIndex); }
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; showImage(lbIndex); }
});

// Attach clicks to work grid and gallery items
let idx = 0;
document.querySelectorAll('.wg-item:not(.wg-item--accent), .gs-item').forEach(item => {
  const i = idx++;
  item.addEventListener('click', () => openLightbox(i));
});

// =============================================
// SCROLL REVEAL
// =============================================
const revealEls = document.querySelectorAll('.reveal, .section-label');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// =============================================
// HERO COUNTER ANIMATE
// =============================================
let count = 1;
const counterEl = document.getElementById('heroCounter');

setInterval(() => {
  count = count >= 12 ? 1 : count + 1;
  counterEl.style.transition = 'opacity 0.3s ease';
  counterEl.style.opacity = '0';
  setTimeout(() => {
    counterEl.textContent = String(count).padStart(3, '0');
    counterEl.style.opacity = '1';
  }, 300);
}, 3000);

// =============================================
// CONTACT FORM
// =============================================
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.querySelector('.cf-submit');
  const success = document.getElementById('cfSuccess');
  btn.textContent = 'Sending…';

  setTimeout(() => {
    document.getElementById('contactForm').reset();
    btn.textContent = 'Send It →';
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  }, 1200);
}

// =============================================
// FOOTER YEAR
// =============================================
document.getElementById('yr').textContent = new Date().getFullYear();
