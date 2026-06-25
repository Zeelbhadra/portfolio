# Zeel Bhadra — Portfolio

**Live portfolio hosted on Vercel.**

## Tech Stack
Plain HTML · CSS · Vanilla JS 

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
│   ├── profile.jpg        
│   ├── award_nss.jpg      
│   ├── nss_group.jpg      
│   ├── s4ds_group.jpg     
│   ├── zeel_resume_zs_daa.pdf
│   │
│   │   — Add project screenshots here:
│   ├── supplylens_screenshot.jpg   
│   ├── ecommerce_screenshot.jpg   
│   └── fieldforce_screenshot.jpg   
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

