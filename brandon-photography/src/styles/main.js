/* =============================================
   BRANDON DEURBROUCK — PHOTOGRAPHY
   Main JavaScript
   ============================================= */

// =============================================
// CUSTOM CURSOR
// =============================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  document.body.classList.add('cursor-active');
});

document.addEventListener('mouseleave', () => {
  document.body.classList.remove('cursor-active');
});

function animateCursorFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateCursorFollower);
}
animateCursorFollower();

// Expand cursor on interactive elements
document.querySelectorAll('a, button, .grid-item, .gallery-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
    cursorFollower.classList.add('expand');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
    cursorFollower.classList.remove('expand');
  });
});

// =============================================
// NAVBAR SCROLL
// =============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// =============================================
// MOBILE MENU
// =============================================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuBtn.classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================
// GALLERY — INTERSECTION OBSERVER
// =============================================
const galleryItems = document.querySelectorAll('.gallery-item');

const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      galleryObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

galleryItems.forEach(item => galleryObserver.observe(item));

// =============================================
// LIGHTBOX
// =============================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');

// Collect all images for lightbox
let lightboxImages = [];
let currentIndex = 0;

function buildLightboxImages() {
  lightboxImages = [];
  document.querySelectorAll('.grid-item img, .gallery-item img').forEach((img, i) => {
    lightboxImages.push({ src: img.src, alt: img.alt });
  });
}

function openLightbox(index) {
  buildLightboxImages();
  currentIndex = index;
  showLightboxImage(currentIndex);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLightboxImage(index) {
  const img = lightboxImages[index];
  if (!img) return;
  lightboxImg.style.opacity = '0';
  lightboxImg.style.transform = 'scale(0.97)';
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxImg.onload = () => {
    lightboxImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    lightboxImg.style.opacity = '1';
    lightboxImg.style.transform = 'scale(1)';
  };
  lightboxCounter.textContent = `${index + 1} / ${lightboxImages.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

document.getElementById('lightboxPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  showLightboxImage(currentIndex);
});

document.getElementById('lightboxNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  showLightboxImage(currentIndex);
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
    showLightboxImage(currentIndex);
  }
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % lightboxImages.length;
    showLightboxImage(currentIndex);
  }
});

// Attach click to grid and gallery items
let imgIndex = 0;
document.querySelectorAll('.grid-item, .gallery-item').forEach((item) => {
  const idx = imgIndex++;
  item.addEventListener('click', () => openLightbox(idx));
  item.style.cursor = 'pointer';
});

// =============================================
// CONTACT FORM
// =============================================
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.querySelector('.form-submit span');
  const successMsg = document.getElementById('formSuccess');
  btn.textContent = 'Sending...';

  // Simulate send (replace with actual form handler)
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    btn.textContent = 'Send Message';
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }, 1200);
}

// =============================================
// FOOTER YEAR
// =============================================
document.getElementById('year').textContent = new Date().getFullYear();

// =============================================
// LOAD MORE (placeholder — images load via placeholder)
// =============================================
document.getElementById('loadMoreBtn').addEventListener('click', function () {
  this.textContent = 'All photos loaded';
  this.style.opacity = '0.4';
  this.disabled = true;
});

// =============================================
// SMOOTH REVEAL ON SCROLL
// =============================================
const revealEls = document.querySelectorAll('.section-header, .about-body, .contact-body, .about-stats');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  revealObserver.observe(el);
});
