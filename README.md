# Nira Atelier

A handcrafted jewellery website built with React, TanStack Start, Vite, and Tailwind CSS. Visitors can explore collections, view individual pieces, learn about the studio, and open contact or custom order forms.

## Requirements

- Node.js **22.12 or newer**
- npm

## Run locally

From the project root (the folder containing `package.json`):

```bash
npm ci
npm run dev
```

Open **http://localhost:8080**. If you are using Windows PowerShell, run the same commands in PowerShell. The development server listens on `0.0.0.0`, so it can also be reached from your network if your firewall permits it.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server on port 8080. |
| `npm run build` | Build the TanStack Start application and run database migrations. |
| `npm run preview` | Preview the production build locally. |
| `npm run typecheck` | Check TypeScript types. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the included tests. |

## Pages and content

- `/` — homepage with featured pieces and studio information
- `/collections` — jewellery collection
- `/product/:id` — individual product detail
- `/about` — studio story
- `/custom` — custom order information and inquiry form
- `/contact` — contact information and inquiry form

Product information is defined in `src/data/products.ts`. Page files live in `src/routes/`, reusable UI in `src/components/`, and styles in `src/styles.css`. Images and videos served directly by the site live in `public/`.

**Form limitation:** The contact and custom order forms currently validate input and show a success message in the browser, but they do not send an email or save an inquiry. Connect them to a server endpoint or form service before accepting real customer requests.

## Deploy on Vercel

1. Upload the **project root** (the folder containing this README and `package.json`) to a Git repository. Do not select `artifacts/jewellery-website/` as the root directory.
2. In Vercel, select **Add New → Project**, import the repository, and set **Root Directory** to the project root.
3. Select **TanStack Start** as the framework preset if Vercel does not detect it automatically. The existing `vite.config.ts` already includes the `nitro()` plugin required for Vercel's TanStack Start support.
4. Leave the output directory on the framework default; do **not** set it to `dist` or choose the plain Vite preset. Use `npm run build` if you set a custom build command. Vercel can otherwise detect the build settings for TanStack Start.
5. Choose **Node.js 22** or newer in the project settings, then deploy. Visit `/`, `/collections`, and an individual product route on the resulting URL to verify server routing.

`DATABASE_URL` is optional for local development: when unset, the database helper uses embedded PGlite. For persistent server data on Vercel, configure an external PostgreSQL database and add `DATABASE_URL` under **Project Settings → Environment Variables**. Do not rely on embedded PGlite for persistent data in Vercel Functions. `npm run build` calls `npm run db:migrate`; the migrator skips safely when `DATABASE_URL` is unset or there are no root-level migration files.

The contact and custom inquiry forms need a backend integration before they can deliver customer messages, even when the site is live on Vercel.

The `scripts/with-app-env.mjs` wrapper used by the dev, build, and preview commands reads `VITE_` settings from `.grok/app-env.json` when present. Explicit environment variables take precedence. Do not place secrets in `VITE_` variables because these values can be exposed to the browser.

## Archive layout

The archive also includes `artifacts/jewellery-website/`, an earlier standalone Vite/React prototype with its own `package.json` and README. The commands above apply to the **root** TanStack Start application. Generated preview and deployment files in `.grok/` and `.vercel/` are workspace artifacts, not the source pages to edit.
