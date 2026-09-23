import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/custom", label: "Custom Orders" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/8 bg-ivory/92 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-full border border-charcoal font-serif text-lg text-charcoal">
            N
          </span>
          <span className="font-serif text-xl tracking-wide text-charcoal">Nira Atelier</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative py-1 text-xs tracking-[0.08em] uppercase transition",
                pathname === link.to ? "text-charcoal" : "text-ink hover:text-charcoal",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-px bg-gold transition-opacity",
                  pathname === link.to ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <button
          className="flex size-11 items-center justify-center text-charcoal md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/8 bg-ivory px-5 py-8 md:hidden">
          <nav className="flex flex-col items-center gap-5" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-center text-xs tracking-[0.16em] text-gold uppercase">
            Jewellery made slowly
          </p>
        </div>
      )}
    </header>
  );
}
