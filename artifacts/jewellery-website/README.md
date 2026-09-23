# Nira Atelier — Handmade Jewellery Website

A calm, premium, responsive React website for an independent jewellery maker. Built with Vite, React Router, Framer Motion, Lucide icons, and CSS Modules.

## Features

- Elegant minimalist design with warm ivory / sand / charcoal / muted gold palette
- Smooth scroll-reveal and hover animations (Framer Motion)
- Responsive navigation with mobile menu
- Collections page with category filters
- Product detail with image gallery and related pieces
- Custom order enquiry form with validation
- Contact form
- SEO meta tags and accessible markup
- Sample product data easy to replace

## Quick start

```bash
cd jewellery-website
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Connect the repository to Vercel or Netlify. Both detect Vite automatically.

```bash
# Or deploy manually
npx vercel
```

## Folder structure

```
src/
  assets/
  components/     # Header, Footer, ProductCard, Button, FormField, SectionHeading
  data/
    products.js   # All product data + testimonials
  pages/          # Home, Collections, ProductDetail, About, CustomOrders, Contact, NotFound
  styles/
    globals.css
    variables.css
  App.jsx
  main.jsx
```

## Customising

1. **Brand** — Search-replace “Nira Atelier” and update the logo mark in `Header.jsx`.
2. **Colours** — Edit CSS variables in `src/styles/variables.css`.
3. **Products** — Replace entries in `src/data/products.js`. Keep the same shape.
4. **Images** — Swap Unsplash URLs for your own (WebP preferred). Update `alt` text.
5. **Contact** — Change email and social links in Footer, Contact, and Custom Orders pages.
6. **Forms** — Point the forms to Formspree (or your backend) by adding the form action URL.

## Design notes

- Serif headings (Cormorant Garamond) + clean sans body (Inter)
- Generous whitespace, large photography, subtle motion only
- No heavy UI libraries — pure CSS Modules + a few Framer Motion transitions

Made with care for makers who prefer quiet beauty over noise.
