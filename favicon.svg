/* =============================================
   BRANDON DEURBROUCK — V2
   Bold · Graphic · Swiss · Streetwear
   Palette: Off-white / Near-black / Chartreuse
   ============================================= */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #F0EDE6;
  --ink:     #111110;
  --lime:    #E8FF3A;
  --lime-dk: #C8DF1A;
  --grey:    #8A8880;
  --mid:     #D4D0C8;
  --white:   #FAFAF8;
  --font-display: 'Bebas Neue', sans-serif;
  --font-cond:    'Barlow Condensed', sans-serif;
  --font-body:    'Barlow', sans-serif;
  --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --fast: 0.18s ease;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
}

img { display: block; width: 100%; height: 100%; object-fit: cover; }
a { color: inherit; text-decoration: none; }

/* NOISE */
.noise {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
}

/* =============================================
   NAV
   ============================================= */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 3rem;
  transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(240, 237, 230, 0.94);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--mid);
  padding: 1rem 3rem;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: 0.05em;
  line-height: 1;
  color: var(--ink);
}

.nav-logo-dot { color: var(--lime-dk); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  font-family: var(--font-cond);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--grey);
  transition: color var(--fast);
}

.nav-links a:hover { color: var(--ink); }

.nav-link-highlight {
  color: var(--ink) !important;
  background: var(--lime);
  padding: 0.35rem 0.9rem;
  transition: background var(--fast) !important;
}

.nav-link-highlight:hover { background: var(--lime-dk) !important; color: var(--ink) !important; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.ham-line {
  width: 26px;
  height: 2px;
  background: var(--ink);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open .ham-line:nth-child(2) { opacity: 0; }
.hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mob-menu {
  position: fixed;
  inset: 0;
  z-index: 400;
  background: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.mob-menu.open { transform: translateX(0); }

.mob-menu a {
  font-family: var(--font-display);
  font-size: 3.5rem;
  color: var(--bg);
  letter-spacing: 0.05em;
  transition: color var(--fast);
}

.mob-menu a:hover { color: var(--lime); }

/* =============================================
   BUTTONS
   ============================================= */
.btn {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-cond);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.9rem 1.8rem;
  transition: background var(--fast), color var(--fast), transform var(--fast);
  border: 2px solid var(--ink);
}

.btn--fill {
  background: var(--lime);
  color: var(--ink);
  border-color: var(--lime);
}

.btn--fill:hover {
  background: var(--lime-dk);
  border-color: var(--lime-dk);
  transform: translateY(-2px);
}

.btn--outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--ink);
}

.btn--outline:hover {
  background: var(--ink);
  color: var(--bg);
  transform: translateY(-2px);
}

/* =============================================
   HERO
   ============================================= */
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 7rem 3rem 4rem;
  overflow: hidden;
  background: var(--bg);
}

/* grid lines decor */
.hero-grid-lines {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  pointer-events: none;
}

.hero-grid-lines div {
  border-right: 1px solid rgba(17,17,16,0.06);
}

.hero-tag {
  position: absolute;
  top: 6.5rem;
  right: 3rem;
  font-family: var(--font-cond);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--grey);
  writing-mode: vertical-rl;
}

.hero-title {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: clamp(5rem, 13vw, 13rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  color: var(--ink);
  align-self: center;
  position: relative;
  z-index: 2;
}

.hero-line {
  display: block;
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px);
  animation: slideUp 0.7s var(--ease) forwards;
}

.hero-line:nth-child(1) { animation-delay: 0.1s; }
.hero-line:nth-child(2) { animation-delay: 0.22s; }
.hero-line:nth-child(3) { animation-delay: 0.34s; }

.hero-line--accent { color: var(--lime-dk); }

.hero-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  opacity: 0;
  animation: fadeIn 0.6s 0.6s ease forwards;
}

.hero-desc {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--grey);
  max-width: 280px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.hero-counter {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-display);
  font-size: 7rem;
  color: transparent;
  -webkit-text-stroke: 1px rgba(17,17,16,0.08);
  letter-spacing: 0.1em;
  pointer-events: none;
  user-select: none;
}

/* =============================================
   TICKER
   ============================================= */
.ticker {
  overflow: hidden;
  background: var(--ink);
  color: var(--lime);
  padding: 0.9rem 0;
}

.ticker-track {
  display: flex;
  gap: 2rem;
  animation: ticker 20s linear infinite;
  width: max-content;
  align-items: center;
}

.ticker-track span {
  font-family: var(--font-cond);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  white-space: nowrap;
}

.ticker-track .sep {
  color: var(--lime-dk);
  font-size: 0.6rem;
}

/* =============================================
   SECTION LABELS
   ============================================= */
.section-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 3rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-label.visible { opacity: 1; transform: none; }

.label-num {
  font-family: var(--font-cond);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--lime-dk);
  background: var(--ink);
  padding: 0.2rem 0.5rem;
}

.label-text {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  color: var(--ink);
}

/* =============================================
   WORK GRID
   ============================================= */
.work {
  padding: 7rem 0 4rem;
  background: var(--bg);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 4px;
  padding: 0 3rem;
  margin-bottom: 4px;
}

.wg-item {
  position: relative;
  overflow: hidden;
  background: var(--mid);
  cursor: pointer;
}

.wg-item--wide { grid-column: span 2; }
.wg-item--tall { grid-row: span 2; }

.wg-item img {
  transition: transform 0.6s var(--ease), filter 0.4s ease;
  filter: saturate(0.85);
}

.wg-item:hover img {
  transform: scale(1.05);
  filter: saturate(1);
}

.wg-hover {
  position: absolute;
  inset: 0;
  background: rgba(17,17,16,0);
  display: flex;
  align-items: flex-end;
  padding: 1.2rem;
  transition: background 0.3s ease;
}

.wg-item:hover .wg-hover {
  background: rgba(17,17,16,0.35);
}

.wg-cat {
  font-family: var(--font-cond);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bg);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.wg-item:hover .wg-cat { opacity: 1; transform: none; }

/* Accent stat tile */
.wg-item--accent {
  background: var(--lime);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wg-accent-content {
  text-align: center;
}

.wg-accent-content span {
  display: block;
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--ink);
  line-height: 1;
}

.wg-accent-content p {
  font-family: var(--font-cond);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0.6;
  margin-top: 0.4rem;
}

/* Gallery strip */
.gallery-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  padding: 0 3rem;
  height: 240px;
}

.gs-item {
  overflow: hidden;
  background: var(--mid);
  cursor: pointer;
}

.gs-item img {
  transition: transform 0.6s var(--ease), filter 0.4s ease;
  filter: saturate(0.75);
}

.gs-item:hover img {
  transform: scale(1.08);
  filter: saturate(1);
}

/* =============================================
   LIGHTBOX
   ============================================= */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 800;
  background: rgba(10,10,9,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.lightbox.open { opacity: 1; pointer-events: all; }

.lb-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  width: auto;
  height: auto;
  display: block;
}

.lb-close, .lb-prev, .lb-next {
  position: absolute;
  background: none;
  border: none;
  color: var(--bg);
  cursor: pointer;
  font-size: 2rem;
  line-height: 1;
  transition: color var(--fast);
  z-index: 10;
}

.lb-close:hover, .lb-prev:hover, .lb-next:hover { color: var(--lime); }

.lb-close { top: 1.5rem; right: 2rem; font-size: 1.2rem; }
.lb-prev { left: 2rem; top: 50%; transform: translateY(-50%); font-size: 3rem; }
.lb-next { right: 2rem; top: 50%; transform: translateY(-50%); font-size: 3rem; }

.lb-count {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-cond);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--grey);
}

/* =============================================
   PRINTS SHOP
   ============================================= */
.prints {
  padding: 7rem 0;
  background: var(--white);
  border-top: 4px solid var(--ink);
}

.prints-sub {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 300;
  color: var(--grey);
  padding: 0 3rem;
  margin-bottom: 3rem;
  max-width: 500px;
}

.prints-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  padding: 0 3rem;
  margin-bottom: 3rem;
}

.print-card {
  background: var(--bg);
  border: 1px solid var(--mid);
  display: flex;
  flex-direction: column;
}

.print-img-wrap {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--mid);
}

.print-img-wrap img {
  transition: transform 0.5s var(--ease), filter 0.4s ease;
  filter: saturate(0.8);
}

.print-card:hover .print-img-wrap img {
  transform: scale(1.04);
  filter: saturate(1);
}

.print-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-cond);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: var(--lime);
  color: var(--ink);
  padding: 0.25rem 0.6rem;
}

.print-badge.sold-out {
  background: var(--ink);
  color: var(--bg);
}

.print-info {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.print-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.print-title {
  font-family: var(--font-cond);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink);
}

.print-price {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--ink);
}

.print-sizes {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.size-btn {
  font-family: var(--font-cond);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--grey);
  background: none;
  border: 1px solid var(--mid);
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  transition: background var(--fast), color var(--fast), border-color var(--fast);
}

.size-btn:hover, .size-btn.active {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}

.print-buy-btn {
  display: block;
  width: 100%;
  text-align: center;
  font-family: var(--font-cond);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: var(--lime);
  color: var(--ink);
  padding: 0.85rem;
  transition: background var(--fast), transform var(--fast);
  border: 2px solid var(--lime);
  margin-top: auto;
}

.print-buy-btn:hover {
  background: var(--lime-dk);
  border-color: var(--lime-dk);
  transform: translateY(-2px);
}

.print-buy-btn--disabled {
  background: var(--mid);
  border-color: var(--mid);
  color: var(--grey);
  pointer-events: none;
}

.prints-shopify-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem 0;
  border-top: 1px solid var(--mid);
  margin: 0 3rem;
}

.prints-shopify-cta span {
  font-family: var(--font-cond);
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--grey);
}

/* =============================================
   ABOUT
   ============================================= */
.about {
  padding: 7rem 0;
  background: var(--ink);
  color: var(--bg);
}

.about .section-label .label-num { background: var(--lime); color: var(--ink); }
.about .section-label .label-text { color: var(--bg); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 0;
  padding: 0 3rem;
  align-items: center;
}

.about-img {
  aspect-ratio: 3/4;
  max-height: 560px;
  overflow: hidden;
  background: #1a1a18;
}

.about-img img {
  filter: saturate(0.6) brightness(0.9);
  transition: filter 0.5s ease;
}

.about-img:hover img { filter: saturate(0.9) brightness(1); }

.about-text {
  padding: 3rem 0 3rem 4rem;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 5.5rem);
  line-height: 0.95;
  margin-bottom: 2rem;
  color: var(--bg);
}

.about-heading em {
  font-style: normal;
  color: var(--lime);
}

.about-text p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(240,237,230,0.6);
  margin-bottom: 1rem;
  max-width: 420px;
}

.about-facts {
  display: flex;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(240,237,230,0.1);
}

.fact strong {
  display: block;
  font-family: var(--font-display);
  font-size: 2.8rem;
  color: var(--lime);
  line-height: 1;
}

.fact span {
  font-family: var(--font-cond);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(240,237,230,0.4);
}

/* =============================================
   CONTACT
   ============================================= */
.contact {
  padding: 7rem 0;
  background: var(--bg);
  border-top: 4px solid var(--lime);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  padding: 0 3rem;
  align-items: start;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(4rem, 7vw, 8rem);
  line-height: 0.9;
  margin-bottom: 2rem;
  color: var(--ink);
}

.contact-heading span { color: var(--lime-dk); }

.contact-email {
  display: block;
  font-family: var(--font-cond);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--grey);
  margin-bottom: 1.5rem;
  transition: color var(--fast);
}

.contact-email:hover { color: var(--ink); }

.contact-socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-socials a {
  font-family: var(--font-cond);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--grey);
  transition: color var(--fast);
}

.contact-socials a:hover { color: var(--ink); }

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.cf-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.cf-group label {
  font-family: var(--font-cond);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--grey);
}

.cf-group input,
.cf-group textarea {
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--mid);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 300;
  padding: 0.7rem 0;
  outline: none;
  resize: none;
  transition: border-color 0.2s ease;
}

.cf-group input:focus,
.cf-group textarea:focus { border-bottom-color: var(--ink); }

.cf-group input::placeholder,
.cf-group textarea::placeholder { color: var(--mid); font-style: italic; }

.cf-submit { align-self: flex-start; }

.cf-success {
  font-family: var(--font-cond);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--lime-dk);
  display: none;
}

.cf-success.show { display: block; }

/* =============================================
   FOOTER
   ============================================= */
.footer {
  background: var(--ink);
  color: var(--bg);
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.08em;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.footer-right span {
  font-family: var(--font-cond);
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(240,237,230,0.4);
}

/* =============================================
   REVEAL ANIMATIONS
   ============================================= */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s var(--delay, 0s) ease, transform 0.65s var(--delay, 0s) ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

/* =============================================
   KEYFRAMES
   ============================================= */
@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-33.33%); }
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 1100px) {
  .prints-grid { grid-template-columns: repeat(2, 1fr); }
  .work-grid { grid-template-columns: repeat(3, 1fr); }
  .wg-item--wide { grid-column: span 2; }
}

@media (max-width: 900px) {
  .nav { padding: 1.2rem 2rem; }
  .nav.scrolled { padding: 0.9rem 2rem; }
  .nav-links { display: none; }
  .hamburger { display: flex; }

  .hero { padding: 6rem 2rem 3rem; }
  .hero-tag { right: 2rem; top: 5.5rem; }
  .hero-counter { font-size: 4rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; }

  .section-label { padding: 0 2rem; }
  .work-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; padding: 0 2rem; }
  .gallery-strip { grid-template-columns: repeat(3, 1fr); height: 180px; padding: 0 2rem; }
  .gs-item:nth-child(n+4) { display: none; }

  .prints { padding: 5rem 0; }
  .prints-sub { padding: 0 2rem; }
  .prints-grid { grid-template-columns: repeat(2, 1fr); padding: 0 2rem; }
  .prints-shopify-cta { padding: 1.5rem 2rem 0; margin: 0 2rem; flex-direction: column; align-items: flex-start; gap: 1rem; }

  .about-grid { grid-template-columns: 1fr; padding: 0 2rem; }
  .about-text { padding: 2rem 0; }

  .contact-grid { grid-template-columns: 1fr; gap: 3rem; padding: 0 2rem; }

  .footer { padding: 1.5rem 2rem; }
}

@media (max-width: 600px) {
  .hero-title { font-size: clamp(4rem, 18vw, 7rem); }
  .work-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 180px; gap: 3px; }
  .wg-item--wide { grid-column: span 2; }
  .wg-item--accent { grid-column: span 2; }
  .gallery-strip { grid-template-columns: repeat(2, 1fr); }
  .gs-item:nth-child(n+3) { display: none; }
  .prints-grid { grid-template-columns: 1fr; }
  .cf-row { grid-template-columns: 1fr; }
  .about-facts { gap: 1.5rem; }
}
