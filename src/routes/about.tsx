import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: "About the Maker | Nira Atelier" }],
  }),
});

function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title="The quiet practice of making"
        subtitle="Nira Atelier is a small jewellery studio rooted in slow craft, natural materials, and personal connection."
      />
      <div className="mb-16 aspect-video overflow-hidden bg-sand-light">
        <img
          src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1600&q=80"
          alt="Jewellery maker working at a studio bench"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-2xl space-y-10">
        <section>
          <h2 className="font-serif text-2xl">A personal beginning</h2>
          <p className="mt-4 leading-relaxed text-ink">
            I started Nira Atelier after years of collecting small objects and learning traditional
            metalwork techniques. The studio is a quiet space where time moves differently — where a
            single ring can take several days and every surface is considered under daylight.
          </p>
          <p className="mt-4 leading-relaxed text-ink">
            The name “Nira” comes from a word for pure water: clear, steady, and essential. That is
            the feeling I hope each piece carries.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Materials & values</h2>
          <p className="mt-4 leading-relaxed text-ink">
            I work primarily with sterling silver, gold vermeil, and carefully selected stones —
            moonstone, pearls, onyx, and other quiet materials that age beautifully. Wherever
            possible I choose recycled metals and ethically sourced gems.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">The studio</h2>
          <p className="mt-4 leading-relaxed text-ink">
            The workshop is in Jaipur, a city with a long tradition of jewellery craft. Most pieces
            are made to order or in very small batches so that quality remains the priority.
          </p>
        </section>
      </div>
      <div className="mt-16 bg-sand-light px-6 py-14 text-center">
        <h3 className="font-serif text-2xl">Would you like to visit or commission a piece?</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/custom">Start a custom order</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
