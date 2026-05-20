# XcelSolve

A premium, modern, and minimal agency website designed for **XcelSolve** a technology-driven agency that helps businesses grow by combining targeted marketing, high-performance web design, and smart AI workflow automations.

---

## 🚀 Overview

XcelSolve's website is built to deliver a clean, simple, and confidence-inspiring presentation of the agency's primary offerings. Reflecting modern design aesthetics (inspired by brands like Apple, Stripe, and Linear), the interface features smooth micro-animations, curated font pairings, and a mobile-first responsive layout.

### Core Services Offered

1. **Social Media Marketing**
   - Targeted Meta (Facebook & Instagram) ad campaigns.
   - Laser-focused lead generation and customer acquisition.
   - Data-driven content strategy and brand growth.
2. **Website Design**
   - High-performance, conversion-optimized business websites and landing pages.
   - Mobile-first, fully responsive layouts.
   - Clean, modern UI designed for professional brand credibility.
3. **AI & Software Automation**
   - **Customer Support:** Automated AI chatbots answering customer inquiries 24/7.
   - **Appointment Booking:** Intelligent booking systems for salons, clinics, and consultants.
   - **Lead Management:** Automations to route customer inquiries instantly into CRMs or spreadsheets.
   - **Operational Workflows:** Invoice/payment tracking, email follow-up sequences, inventory management, and automated document organization.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the official `@tailwindcss/vite` plugin for lightning-fast CSS builds)
- **Routing:** [React Router v7](https://reactrouter.com/) (handles seamless single-page navigation and smooth scroll-to-top hash behaviors)
- **Iconography:** [Lucide React](https://lucide.dev/) for crisp, scalable UI icons.

---

## 📁 Directory Structure

```text
xcelSolve/
├── public/                 # Static assets (Favicons, SVG sprite sheets)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Component-imported images and vector graphics
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/         # Reusable structural layout components
│   │   ├── Header.jsx      # Sticky navbar with mobile-responsive menu
│   │   └── Footer.jsx      # Multi-column footer with social links & copyright
│   ├── pages/              # Page components corresponding to routes
│   │   ├── Home.jsx        # Landing page with hero, service cards, testimonials & CTA
│   │   ├── Services.jsx    # In-depth drill down into offerings with features lists
│   │   ├── About.jsx       # Agency vision, values, and hybrid growth methodology
│   │   └── Contact.jsx     # Lead generation form, WhatsApp CTA, and contact details
│   ├── App.css             # Root/App wide global style overrides
│   ├── App.tsx             # Main App layout, routes, and scroll-restoration helpers
│   ├── index.css           # Global CSS styling, font imports, and keyframe animations
│   └── main.tsx            # Application entry point
├── eslint.config.js        # Code quality and React-specific lint configurations
├── index.html              # Main HTML entry point (contains meta tags & SEO descriptions)
├── package.json            # Node scripts, dependencies, and devDependencies
├── pnpm-lock.yaml          # Pinpoint dependency tree resolution lockfile
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Frontend/App TypeScript target settings
├── tsconfig.node.json      # Node-specific compile settings for Vite configs
├── vite.config.ts          # Vite build config with React & Tailwind plugins
├── plan.md                 # Complete roadmap planning document
└── CHECKLIST.md            # Action item completion status checklist
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and the package manager **pnpm** installed on your machine.

### Installation

Clone this repository to your local machine, navigate to the folder, and run:

```bash
pnpm install
```

### Development Server

Spin up the local hot-reloading development server:

```bash
pnpm dev
```

The app will run locally at `http://localhost:5173`.

### Building for Production

Compile TypeScript and build the highly-optimized production bundle:

```bash
pnpm build
```

This generates compiled static assets in the `/dist` directory.

### Preview Production Build

Preview the built production distribution locally:

```bash
pnpm preview
```

### Code Quality & Linting

Verify coding standards and run ESLint checks:

```bash
pnpm lint
```

---

## 🎨 Design System & Aesthetics

- **Typography:**
  - **Headings:** *Outfit* – A geometric, modern sans-serif typeface that projects technical innovation.
  - **Body text:** *Plus Jakarta Sans* – Extremely readable and clean on both high-density and mobile displays.
- **Color Palette:**
  - A sophisticated dark-mode background vibe using Slate, Cool Gray, and Dark Charcoals.
  - Emerald Green and Indigo Blue accents representing growth, conversion, and reliability.
- **Interactions & Motion:**
  - Native CSS-powered fluid hover states.
  - Background "ambient glow" blobs (`.animate-blob`) that translate and scale dynamically on desktop screen widths.
  - Media queries targeting performance optimizations to automatically disable heavy animations on mobile devices.
- **Mobile First:** Touch target areas are optimized to satisfy a minimum touch height of `44px` on mobile Viewports to prevent misclicks.

---

## 🔍 SEO & Accessibility

- **Semantic Layouts:** Structured using native HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).
- **Metadata Management:** Structured and unique Title and Description meta tags injected directly into the HTML template to optimize indexability.
- **Image Optimization:** Accessible image alternatives utilizing appropriate `alt` tags and vector icons to guarantee maximum speed and load times.
