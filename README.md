# Greeshma Sree Putti - Professional Portfolio

A modern, recruiter-ready portfolio built with **React + Tailwind CSS + Framer Motion**.

## Included Projects

1. Risk Prediction Dashboard
2. Ghost Appointment - Spot-Fill Orchestrator
3. SafeBirth AI - C-Section Risk Prediction
4. Smart Study Planner
5. LogLens - API Monitoring Dashboard

## Run Locally

```bash
cd greeshma-portfolio
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for Deployment

```bash
npm run build
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Go to Vercel.
3. Click **Add New Project**.
4. Import your GitHub repository.
5. Framework preset: **Vite**.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Click **Deploy**.

## Important Edits Before Using in Resume

Open this file:

```bash
src/data/portfolio.js
```

Replace:

- Email
- Phone
- LinkedIn URL
- Project GitHub URLs
- Project Live Demo URLs
- Resume PDF in `public/Greeshma_Sree_Resume.pdf`

## Project Structure

```text
greeshma-portfolio/
├── public/
│   └── Greeshma_Sree_Resume.pdf
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Brutal Note

Do not put this portfolio link on your resume until every project button has either a real live demo or a real GitHub repository. Broken buttons make your portfolio look careless.
