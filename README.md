# MamaAfya — NurtureHome CHW Dashboard

> A Community Health Worker (CHW) triage dashboard for maternal health monitoring in Kenya.  
> Built with **React + Vite**,

---



## Overview

**MamaAfya** is a maternal health platform designed for Community Health Workers (CHWs) operating in Kenya. This repository contains the **CHW Triage Dashboard** — the professional-facing interface where health workers review and prioritize patient alerts sourced from AI Chatbot escalations, SMS survey responses, and automated system logs.



### Team assignment

CHW Triage Dashboard---Done by Abdinasir.
Mama Afya Dashboard ---planned--by Maryaane.
MamaBot Chat & System Reporting--planned.
Pregnancy Nutration-- planned.
Mama Afya Home Dashboard..planned


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
