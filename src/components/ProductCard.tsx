import { useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { formatInr } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const wrap = useRef<HTMLElement>(null);

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  }

  function onLeave() {
    const el = wrap.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  }

  return (
    <article
      ref={wrap}
      className="group will-change-transform"
      style={{ transition: "transform 180ms ease" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative mb-4 aspect-4/5 overflow-hidden bg-sand-light">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          {product.madeToOrder && (
            <span className="absolute top-3 left-3 bg-ivory px-2.5 py-1 text-[0.65rem] font-medium tracking-wider text-charcoal uppercase">
              Made to order
            </span>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/25 opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="border border-ivory px-4 py-2 text-[0.7rem] tracking-[0.14em] text-ivory uppercase">
              View piece
            </span>
          </div>
        </div>
        <h3 className="font-serif text-lg font-medium text-charcoal transition group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm text-ink">{product.materials.slice(0, 2).join(" · ")}</p>
        <p className="mt-1 text-sm font-medium text-charcoal">{formatInr(product.price)}</p>
      </Link>
    </article>
  );
}
