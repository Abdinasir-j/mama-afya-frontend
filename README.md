# MamaAfya — NurtureHome CHW Dashboard

> A Community Health Worker (CHW) triage dashboard for maternal health monitoring in Kenya.  
> Built with **React + Vite**, zero CSS frameworks — pure CSS Modules with the "Nurture & Earth" design system.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Branch Strategy](#branch-strategy)
- [Pushing to GitHub](#pushing-to-github)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)

---

## Overview

**MamaAfya** is a maternal health platform designed for Community Health Workers (CHWs) operating in Kenya. This repository contains the **CHW Triage Dashboard** — the professional-facing interface where health workers review and prioritize patient alerts sourced from AI Chatbot escalations, SMS survey responses, and automated system logs.

The UI is intentionally non-clinical: warm earth tones, high-contrast typography, and generous touch targets ensure the dashboard is usable in bright outdoor settings and low-light clinics alike.

### Key Features

| Feature | Status |
|---|---|
| Prioritized patient queue (High / Medium / Low) | Done |
| Summary stat cards (counts per risk level) | Done |
| Risk-level filter chips | Done |
| Responsive sidebar navigation | Done |
| Mobile hamburger menu | Done |
| New Patient modal stub | Done |
| Patient detail page | Planned |
| Schedule / appointments view | Planned |
| Inventory tracking | Planned |
| Reports and analytics | Planned |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI library |
| Vite 5 | Dev server and bundler |
| CSS Modules | Scoped component styles |
| Google Fonts | Plus Jakarta Sans + Atkinson Hyperlegible Next |
| Material Symbols | Icon set |

No Tailwind. No UI component library. All styles are hand-crafted using CSS custom properties that map to the "Nurture & Earth" design token system.

---

## Project Structure

```
mamaafya/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx           # Left nav drawer
│   │   ├── Sidebar.module.css
│   │   ├── TopBar.jsx            # Sticky top app bar
│   │   ├── TopBar.module.css
│   │   ├── StatCards.jsx         # Summary stat cards
│   │   ├── StatCards.module.css
│   │   ├── PatientRow.jsx        # Single patient row
│   │   └── PatientRow.module.css
│   ├── data/
│   │   └── patients.js           # Mock patient records
│   ├── pages/
│   │   ├── TriageDashboard.jsx
│   │   └── TriageDashboard.module.css
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css                 # Global reset + CSS design tokens
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Design System

The "Nurture & Earth" design system lives entirely in CSS custom properties (`src/index.css`).

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | #45614e | Sage Green — primary actions |
| `--color-secondary` | #974725 | Terracotta — secondary actions |
| `--color-tertiary` | #715c00 | Soft Yellow — warnings |
| `--color-error` | #ba1a1a | High-risk alerts |
| `--color-background` | #fff8f6 | Cream off-white page background |
| `--color-on-surface` | #1e1b19 | Warm charcoal body text |

### Typography Classes

| Class | Font | Size | Use |
|---|---|---|---|
| `.headline-lg` | Plus Jakarta Sans | 32px 700 | Page titles |
| `.headline-md` | Plus Jakarta Sans | 24px 600 | Section headings |
| `.body-md` | Atkinson Hyperlegible Next | 16px | Body copy |
| `.label-md` | Plus Jakarta Sans | 14px 600 | Buttons, labels |
| `.stats-display` | Plus Jakarta Sans | 40px 700 | Stat numbers |

### Breakpoints

| Name | Width | Layout |
|---|---|---|
| Mobile | 0 to 599px | Single column, fluid |
| Tablet | 600 to 1023px | 2-column info grid |
| Desktop | 1024px+ | Fixed 288px sidebar + main content |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/mamaafya.git
cd mamaafya
npm install
npm run dev
```

The app will be at http://localhost:5173

---

## Branch Strategy

```
main
└── develop
    ├── feature/triage-dashboard   ← this branch
    ├── feature/patient-detail
    ├── feature/schedule
    ├── feature/inventory
    └── feature/reports
```

### Branch naming

| Prefix | Use | Example |
|---|---|---|
| feature/ | New functionality | feature/patient-detail |
| fix/ | Bug fixes | fix/sidebar-mobile-overlap |
| chore/ | Config or deps | chore/update-vite |
| docs/ | Documentation | docs/update-readme |

---

## Pushing to GitHub

### First time (brand new repo)

```bash
# 1. Initialise git
git init

# 2. Stage everything
git add .

# 3. First commit
git commit -m "feat: initial CHW triage dashboard"

# 4. Link to GitHub (create the repo on github.com first)
git remote add origin https://github.com/YOUR_USERNAME/mamaafya.git

# 5. Push
git push -u origin main
```

### Working on a feature branch

```bash
# Create and switch to your branch
git checkout -b feature/triage-dashboard

# Stage your changes
git add .

# Commit
git commit -m "feat: add triage dashboard with risk filtering"

# Push the branch
git push -u origin feature/triage-dashboard
```

Then open a Pull Request on GitHub:
- Base: develop
- Compare: feature/triage-dashboard

### Daily workflow

```bash
# Always sync before starting work
git checkout develop
git pull origin develop
git checkout feature/your-branch
git merge develop

# After changes
git add .
git commit -m "fix: correct badge colour on high-risk rows"
git push
```

---

## Available Scripts

| Command | Description |
|---|---|
| npm run dev | Start dev server at localhost:5173 |
| npm run build | Production build to dist/ |
| npm run preview | Preview production build locally |
| npm run lint | Run ESLint |

---

## Roadmap

- Patient Detail Page with pregnancy timeline component
- Schedule View with ANC visit calendar
- Inventory Module for supplies tracking
- Reports and Analytics with PDF/CSV export
- Mother Mobile View (patient-facing portal)
- AI Chatbot Transcript Viewer
- Offline Support via service worker
- Authentication with CHW role-based access

---

## License

Educational and portfolio purposes.
Design system copyright 2024 MamaAfya / NurtureHome.
