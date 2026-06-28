# 🌟 Fun and Creative Learning

A modernised, fully static multi-page website for kids — redesigned from scratch with a consistent design system, responsive layout, and zero dependency on external frameworks.

---

## 📁 Project Structure

```
fun-learning-modern/
├── index.html          ← Homepage with category cards
├── science.html        ← DIY Science Experiments
├── art.html            ← Creative Arts & Crafts
├── coding.html         ← Fun with Coding
├── puzzles.html        ← Brain Teasers (interactive reveal)
├── stories.html        ← Educational Stories
├── music.html          ← Music & Learning
├── learning.html       ← Music Collection page
├── games.html          ← Learning Through Games (interactive)
├── motivation.html     ← Motivational Corner (quote rotator)
├── contact.html        ← Contact & Feedback form
├── login.html          ← Login + Profile form (tabbed)
├── join.html           ← Join Us hub
├── sh.html             ← Alumni Meet Registration form
├── name.html           ← SVG Name Art demo
├── button-tag.html     ← HTML Button-in-Anchor demo
├── form.html           ← Data submission form
├── theme.css           ← Shared design system (all styles)
├── login.js            ← Login helper script
├── art.jpg             ← Art page image
├── sunset.jpg          ← Site logo/favicon image
└── vercel.json         ← Vercel deployment config
```

---

## 🚀 Deploy to Vercel via GitHub

### Step 1 — Push to GitHub
1. Create a new repository on [github.com](https://github.com)
2. Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit — Fun & Creative Learning modernised"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in (or sign up free)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects it as a **static site** — no build settings needed
5. Click **"Deploy"** ✅

Your site will be live at `https://your-project.vercel.app` in under a minute!

### Step 3 — Auto-deploy on every push
Every time you push to `main`, Vercel automatically redeploys. No extra setup needed.

---

## 🎨 Design System

All styles live in `theme.css`. Key CSS variables:

| Variable         | Value     | Used for          |
|------------------|-----------|-------------------|
| `--sky`          | `#6EC6F0` | Primary blue      |
| `--candy`        | `#FF7BAC` | Pink accent       |
| `--mint`         | `#4ECBA6` | Green accent      |
| `--sun`          | `#FFD166` | Yellow accent     |
| `--lavender`     | `#A78BFA` | Purple accent     |
| `--radius`       | `18px`    | Card corners      |

Fonts: **Fredoka One** (headings) + **Nunito** (body) — both from Google Fonts.

---

## ✅ What Changed (vs Original)

- ✨ Unified `theme.css` design system replaces 2 inconsistent CSS files
- 📱 Fully responsive layout on mobile, tablet, and desktop
- 🧭 Sticky navigation bar on every page
- 🎨 Consistent card components, hero banners, and buttons
- 🎮 Interactive features added (games, quiz, quote rotator, answer toggle)
- ♿ Semantic HTML, ARIA labels, and proper form accessibility
- 🚀 `vercel.json` for one-click deployment
- 🐛 Fixed broken HTML (unclosed tags, malformed form attribute in `form.html`)
- 📝 Content 100% preserved — only styles were changed

---

&copy; 2025 Fun and Creative Learning
