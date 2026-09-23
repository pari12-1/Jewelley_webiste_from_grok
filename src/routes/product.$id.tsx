import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, getRelated } from "@/data/products";
import { formatInr } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  component: ProductDetail,
  head: ({ params }) => {
    const product = getProduct(params.id);
    return {
      meta: [{ title: product ? `${product.name} | Nira Atelier` : "Piece | Nira Atelier" }],
    };
  },
});

function ProductDetail() {
  const { id } = Route.useParams();
  const product = getProduct(id);
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <main className="mx-auto max-w-xl px-5 py-24 text-center">
        <h1 className="font-serif text-3xl">Piece not found</h1>
        <p className="mt-3 text-ink">This jewellery is no longer listed.</p>
        <div className="mt-8">
          <ButtonLink to="/collections">Back to collections</ButtonLink>
        </div>
      </main>
    );
  }

  const related = getRelated(product);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <Link
        to="/collections"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink hover:text-gold"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to collections
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="aspect-4/5 overflow-hidden bg-sand-light">
            <img
              src={product.images[active]}
              alt={`${product.name} – view ${active + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={`size-20 overflow-hidden border-2 ${i === active ? "border-gold" : "border-transparent opacity-70"}`}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.14em] text-gold uppercase">
            {product.category}
          </p>
          <h1 className="mt-2 font-serif text-4xl">{product.name}</h1>
          <p className="mt-2 text-xl font-medium">{formatInr(product.price)}</p>
          {product.madeToOrder && (
            <span className="mt-4 inline-block bg-sand-light px-3 py-1 text-[0.65rem] tracking-wider uppercase">
              Made to order
            </span>
          )}
          <p className="mt-6 text-lg leading-relaxed text-ink">{product.description}</p>
          <dl className="mt-8 space-y-3 border-t border-border pt-6">
            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-xs font-medium tracking-wider text-ink uppercase">Materials</dt>
              <dd>{product.materials.join(" · ")}</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-xs font-medium tracking-wider text-ink uppercase">Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-xs font-medium tracking-wider text-ink uppercase">Care</dt>
              <dd>{product.care}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/custom" size="lg">
              Enquire about this piece
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" size="lg">
              Ask a question
            </ButtonLink>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border pt-16">
          <h2 className="mb-8 text-center font-serif text-3xl">More from {product.category}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
