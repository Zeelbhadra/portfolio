# Zeel Bhadra — Portfolio

**Live portfolio hosted on Vercel.**

## Tech Stack
Plain HTML · CSS · Vanilla JS — no build step needed.

## Folder Structure
```
portfolio/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← Nav scroll, reveal animations, mobile menu
├── pages/
│   ├── about.html
│   ├── projects.html
│   ├── certifications.html
│   └── contact.html
├── assets/
│   ├── profile.jpg         ← Profile photo (already added)
│   ├── award_nss.jpg       ← NSS trophy photo (already added)
│   ├── nss_group.jpg       ← NSS rural camp group photo (already added)
│   ├── s4ds_group.jpg      ← S4DS team group photo (already added)
│   ├── zeel_resume_zs_daa.pdf
│   │
│   │   — Add project screenshots here:
│   ├── supplylens_screenshot.jpg   ← SupplyLens dashboard screenshot
│   ├── ecommerce_screenshot.jpg    ← Beauty & PC dashboard screenshot
│   └── fieldforce_screenshot.jpg   ← Field Force dashboard screenshot
└── vercel.json
```

## Adding Project Screenshots
1. Add screenshot files to `assets/` with the names above.
2. In `pages/projects.html`, replace each `<div class="project-img-placeholder">` with:
   ```html
   <img src="../assets/supplylens_screenshot.jpg" alt="SupplyLens dashboard" />
   ```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → Import Project → select the repo.
3. No build settings needed — Vercel will serve it as a static site.

## Local Preview
```bash
# Python
python -m http.server 3000

# Node
npx serve .
```
Then open http://localhost:3000

