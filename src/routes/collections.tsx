import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/collections")({
  component: Collections,
  head: () => ({
    meta: [{ title: "Collections | Nira Atelier" }],
  }),
});

function Collections() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Collections"
        title="All pieces"
        subtitle="Browse by category or explore the full collection. Every item is made in small batches or to order."
      />
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={cn(
              "min-h-11 rounded-full px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition",
              active === cat
                ? "bg-charcoal text-ivory"
                : "text-ink hover:bg-sand-light",
            )}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
