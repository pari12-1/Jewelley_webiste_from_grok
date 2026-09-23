import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Header />
      <div className="flex-1 pt-[72px]">{children}</div>
      <Footer />
    </div>
  );
}
