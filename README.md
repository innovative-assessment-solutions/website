# Innovative Assessment Solutions — Website

Public website for [Innovative Assessment Solutions (IAS)](https://innovative-assessment-solutions.github.io/website), hosted on GitHub Pages.

## 🌐 Live Site

The site is automatically deployed to GitHub Pages at:
**https://innovative-assessment-solutions.github.io/website**

## 📁 Structure

```
website/
├── index.html           # Main landing page
├── css/
│   └── style.css        # Stylesheet
├── js/
│   └── main.js          # Client-side scripts
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment workflow
```

## 🚀 Deployment

The site is a static website deployed automatically via GitHub Actions whenever changes are pushed to the `main` branch.

The workflow (`.github/workflows/deploy.yml`) uses the official GitHub Pages actions:
- [`actions/configure-pages`](https://github.com/actions/configure-pages)
- [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact)
- [`actions/deploy-pages`](https://github.com/actions/deploy-pages)

### First-time Setup

To enable GitHub Pages for this repository:

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Push to `main` (or trigger the workflow manually) — the site will be live within minutes.

## 🛠 Local Development

No build step is required. Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## ✏️ Making Changes

Edit `index.html`, `css/style.css`, or `js/main.js`, then push to `main`. The GitHub Actions workflow will redeploy the site automatically.