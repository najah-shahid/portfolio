# Najah Shahid's Portfolio

A personal portfolio site for Najah Shahid — Full-Stack Developer and Computer Science
undergraduate at LUMS. Built as a single continuously-scrolling page with a dark, vintage/gothic
visual theme (mirror frames, wax-sealed envelopes, pinned paper notes, moths) and full Arabic/
English bilingual support, including right-to-left layout.

🔗 Live site: https://najah-shahid.vercel.app

## Sections

The app renders four sections on one page (`src/App.tsx`), linked from an in-page nav:

- **Home** — hero introduction with an animated border frame and role badges.
- **About Me** — portrait, bio, education timeline, and an interactive skills "envelope" display.
- **Projects** — flip-card project gallery, filterable by category tab (work experience, academic
  projects, research).
- **Contact Me** — a contact form (via [EmailJS](https://www.emailjs.com/)) styled as a letter,
  decorated with pinned sticky notes and moth illustrations with a hover/click flap animation.

## Features

- **Bilingual (EN/AR)** — every section's copy is translated in `src/i18n/`, with automatic
  right-to-left layout, logical CSS properties, and language-appropriate fonts (blackletter/Tinos
  for English, Aref Ruqaa/Amiri for Arabic) driven by a single language toggle in the nav.
- **Responsive** — usable from phone widths up through desktop, including a collapsible slide-in
  navigation panel on small screens.
- **Accessible interactions** — keyboard-operable nav, focus-visible states, `aria-live` status
  updates on the contact form, and `prefers-reduced-motion` support throughout.
- **Contact form** — sends email via EmailJS, with a loading state and success/error confirmation
  popup.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- Plain CSS per component (no framework) — one stylesheet per page component
- [EmailJS](https://www.emailjs.com/) for the contact form, no backend required
- [ESLint](https://eslint.org/) for linting

## Project structure

```
src/
  components/      Page components (LandingPage, AboutPage, ProjectsPage, ContactPage, ...)
                    each paired with its own .css file
  i18n/             English/Arabic copy for each page, keyed by Language ('en' | 'ar')
  assets/           Images and illustrations
  App.tsx           Mounts all four page sections and tracks the active language
  main.tsx          App entry point
```

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at the URL Vite prints (defaults to `http://localhost:5173`).

### Environment variables

The contact form needs an [EmailJS](https://www.emailjs.com/) account. Create a `.env` file in
the project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env` is gitignored — these keys should never be committed.

> Note: the live EmailJS submit handler in `src/components/ContactPage.tsx` is currently
> commented out in favor of a dev-only stand-in that mimics sending without actually calling
> EmailJS, so the animation and popup can be previewed repeatedly during development. Swap
> `onSubmit={handleSubmit}` back in (and uncomment the `emailjs` import and the real
> `handleSubmit`) before shipping to production.

### Scripts

| Command           | Description                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot reload          |
| `npm run build`     | Type-check (`tsc -b`) and build for production     |
| `npm run preview`   | Preview the production build locally               |
| `npm run lint`      | Run ESLint over the project                        |

## Contact

- Email: najahshahidqaseem@gmail.com
- LinkedIn: [linkedin.com/in/najah-shahid](http://linkedin.com/in/najah-shahid/)
