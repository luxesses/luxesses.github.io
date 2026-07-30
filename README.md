# Portfolio — Luxe

Go Developer portfolio site with interactive console and terminal animations.

## Features

- **Terminal typewriter effect** — Go code animates in the hero section
- **Interactive console** — visitors can type commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`)
- **Animated stat counters** — numbers count up when scrolled into view
- **Project code overlays** — hover over project cards to see code snippets
- **Dark theme** — VS Code-inspired color scheme
- **Responsive** — works on mobile and desktop

## Local Development

Just open `index.html` in a browser. No build step needed.

```bash
open index.html
```

Or use any static server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deploy to GitHub Pages

### Option 1: User site (luxesses.github.io)

1. Create a new repository named `luxesses.github.io` on GitHub
2. Push these files to the `main` branch:
   - `index.html`
   - `style.css`
   - `script.js`
3. Go to Settings → Pages
4. Source: Deploy from branch → `main` → `/ (root)`
5. Save. Site will be live at `https://luxesses.github.io`

### Option 2: Project site (luxesses.github.io/portfolio)

1. Create a new repository named `portfolio` on GitHub
2. Push these files to the `main` branch
3. Go to Settings → Pages
4. Source: Deploy from branch → `main` → `/ (root)`
5. Save. Site will be live at `https://luxesses.github.io/portfolio`

### Git commands

```bash
cd /Users/macos/Documents/coded/portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/luxesses/luxesses.github.io.git
git push -u origin main
```

## Customization

- **Colors**: Edit CSS variables in `style.css` (`:root` section)
- **Content**: Edit text directly in `index.html`
- **Console commands**: Edit the `commands` object in `script.js`
- **Typewriter code**: Edit the `codeLines` array in `script.js`

## Tech Stack

- Pure HTML/CSS/JavaScript
- No frameworks, no dependencies
- Google Fonts: Fira Code + Inter
