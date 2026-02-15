# JANE BLOGLIFE — Starter

This repository now contains a Tailwind-based clone of the "Jane BlogLife" layout (hero header, large hero image, posts and sidebar). The layout uses the Tailwind CDN for quick prototyping.

## Run locally

- Open `index.html` in your browser.
- Or run a simple local server (Python):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

## Notes

- Tailwind is loaded via the Play CDN for prototyping. For production, install Tailwind via npm and build a minimized stylesheet.
- Images are hot-linked from Unsplash for the demo; replace with your own assets for a production site.

## Displaying the attached header image

Save the image you attached (the header screenshot) into the project at `assets/header.jpg`. The site will display it automatically in the header area. Create the `assets` folder if it doesn't exist.

Example (PowerShell):

```powershell
mkdir assets
# copy the attached file into assets and rename to header.jpg
copy C:\path\to\your\downloaded\attachment assets\header.jpg
```

## Git: quick push steps

```bash
git init
git add .
git commit -m "Start over: Jane BlogLife Tailwind clone"
# create repo on GitHub, then add remote (replace URL)
git remote add origin https://github.com/yourname/your-repo.git
git branch -M main
git push -u origin main
```

If you want, I can: convert this to an npm/Tailwind build, deploy to GitHub Pages, or create a CI workflow. Tell me which next.
