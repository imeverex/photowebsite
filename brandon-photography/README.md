# Brandon Deurbrouck — Photography

A bold, editorial photography portfolio website with a clean serif aesthetic.

## Stack
- Pure HTML, CSS, JavaScript (no framework required)
- Google Fonts: Cormorant Garamond + DM Mono
- Deployed via **GitHub** + **Vercel**
- Custom domain: **www.brandondeurbrouck.com**

---

## Adding Your Photos

Drop your images into `/public/images/` with these names:

| File | Used In |
|------|---------|
| `photo-1.jpg` | Featured grid — large left slot |
| `photo-2.jpg` | Featured grid — tall right slot |
| `photo-3.jpg` | Featured grid — bottom right |
| `photo-4.jpg` | Featured grid — bottom right |
| `photo-5.jpg` to `photo-12.jpg` | Gallery grid |
| `about.jpg` | About section portrait |

**Recommended sizes:**
- Featured grid photos: at least 1200×900px
- Gallery photos: portrait orientation, at least 800×1000px
- About photo: at least 600×750px

---

## Deploy to GitHub + Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/brandon-photography.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Framework Preset: **Other** (Static)
4. Click **Deploy**

### 3. Custom Domain
1. In Vercel project → **Settings → Domains**
2. Add `www.brandondeurbrouck.com`
3. In your domain registrar DNS settings, add:
   - **CNAME** record: `www` → `cname.vercel-dns.com`
   - Or follow Vercel's specific instructions for your registrar

---

## Customization

### Update contact email
In `index.html`, find `hello@brandondeurbrouck.com` and replace with your email.

### Update social links
In `index.html`, find the `contact-socials` section and update the `href` values for Instagram and LinkedIn.

### Update the About text
Edit the paragraph text inside `<section class="about">` in `index.html`.

### Update stats (years, projects, exhibitions)
Find the `.about-stats` section in `index.html` and update the numbers.

### Connect a real form backend
Replace the `handleSubmit` function in `src/styles/main.js` with your preferred form handler (Formspree, EmailJS, Netlify Forms, etc.).

**Formspree example:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## File Structure
```
brandon-photography/
├── index.html          # Main page
├── vercel.json         # Vercel deployment config
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── photo-1.jpg     ← your photos here
│       ├── ...
│       └── about.jpg
└── src/
    └── styles/
        ├── main.css    # All styles
        └── main.js     # All interactivity
```
