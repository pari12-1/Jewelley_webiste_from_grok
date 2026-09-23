import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/SiteShell";
import appCss from "../styles.css?url";

const APP_NAME = "Nira Atelier";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Nira Atelier — handmade jewellery made slowly and worn meaningfully. Small-batch and custom pieces crafted in Jaipur, India.",
      },
      { name: "theme-color", content: "#f9f6f1" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-serif text-6xl text-gold/50">404</p>
      <h1 className="mt-2 font-serif text-3xl">This page could not be found</h1>
      <p className="mt-3 max-w-sm text-ink">
        The piece you are looking for may have been moved or no longer exists.
      </p>
      <a href="/" className="mt-8 inline-flex bg-charcoal px-7 py-3.5 text-xs tracking-[0.08em] text-ivory uppercase">
        Return home
      </a>
    </main>
  ),
});
