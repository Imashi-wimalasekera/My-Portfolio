## Overview

Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. It showcases projects, education, skills, and contact information with animated hero, interactive project modals, and an EmailJS-powered contact form.

## Tech stack
- Next.js 16 (App Router) and TypeScript
- Tailwind CSS v4 for styling
- Framer Motion for animations and interactions
- EmailJS for contact form delivery

## Features
- Animated hero with tilt effect, CTA buttons, and social links
- Projects grid with clickable cards, detailed modal view, and code/demo links
- About, Education, Skills, and Contact sections
- Responsive layout with blurred top navbar and smooth scroll anchors
- Optimized assets served from `public/` (project thumbnails, profile photo, CV)

## Getting started
Prerequisites: Node 18+ and npm.

Install dependencies and start dev server:
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Scripts
- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production build
- `npm run lint` – run ESLint

## Project structure (partial)
- `app/` – pages and sections (`HeroSection`, `ProjectsSection`, `AboutSection`, `ContactSection`, etc.)
- `app/globals.css` – global styles
- `public/` – static assets (project images like `portfolio.png`, profile photo, resume PDF)
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` – tooling config

## Customization
- Update project data in `app/components/ProjectsSection.tsx` (titles, links, images, badges)
- Swap hero photo and CV file in `public/`
- Adjust section copy and skill lists inside the respective components under `app/components/`
- Configure EmailJS keys/service/template in the contact component if you change providers or credentials

## Deployment
Build and serve:
```bash
npm run build
npm run start
```
