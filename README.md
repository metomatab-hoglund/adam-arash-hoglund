# Adam Arash Hoglund — Next.js Portfolio

Full Next.js App Router project, TypeScript, responsive CSS, four visual focus-area pages, About and Contact pages.

## Start from zero

Requires Node.js 20.9+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production check:

```bash
npm run build
npm start
```

## Pages

- `/` — portfolio homepage
- `/about` — about page
- `/contact` — contact page
- `/work/battery-energy-storage`
- `/work/energy-management-platform`
- `/work/power-electronics`
- `/work/energy-markets`

## Edit the content

`lib/content.ts` holds name, contact information, and all focus-area copy. `components/Artwork.tsx` holds editable visuals, with no external photo or stock photo dependency. Update `app/layout.tsx` for SEO information and `app/globals.css` for design.

## Integrating into hoglundskompetens.se

This ZIP is a **standalone Next.js website from scratch** as requested. If you later want it *inside* an existing Next.js site, copy the components, content and styles into that app and adjust routing. If the current company website is not a Next.js application, deploy this portfolio separately (e.g. on Vercel) and link to it, or use a reverse proxy for a subpath. A Next.js page cannot be pasted into an unrelated static HTML site without integration.

## Image / identity notes

The referenced Henrik website belongs to a designer. This is an original visual adaptation of its typographic portfolio pattern, **not a pixel-perfect copy** or a claim that Adam worked at SEB, Swedbank or McDonald's. Source content was adapted from the publicly visible information on hoglundskompetens.se/en. All project pages are identified as focus-area showcases, not individually verified completed contracts. Email and phone currently point to the company contacts listed on that site.
