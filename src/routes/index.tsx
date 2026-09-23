import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "@/components/Button";
import { GoldRing3D } from "@/components/GoldRing3D";
import { HeroVideo } from "@/components/HeroVideo";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeatured, testimonials } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Nira Atelier | Handmade Jewellery" }],
  }),
});

const processSteps = [
  {
    num: "01",
    title: "Idea & Sketch",
    text: "Every piece begins with a conversation or a quiet sketch. We explore form, meaning, and the materials that feel right.",
  },
  {
    num: "02",
    title: "Shaping & Setting",
    text: "Metal is formed by hand, stones are chosen with care, and each element is brought together slowly in the studio.",
  },
  {
    num: "03",
    title: "Finishing by Hand",
    text: "Edges are softened, surfaces are polished or left matte, and the final piece is checked under natural light.",
  },
];

function Home() {
  const featured = getFeatured();

  return (
    <main>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <HeroVideo
          src="/videos/hero.mp4"
          poster="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-28">
          <p className="hero-line mb-3 text-xs font-medium tracking-[0.2em] text-gold-light uppercase">
            Handcrafted in India
          </p>
          <h1 className="hero-line hero-d1 max-w-xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
            Jewellery made slowly and worn meaningfully
          </h1>
          <p className="hero-line hero-d2 mt-4 max-w-md text-lg text-ivory/85">
            Small-batch pieces shaped by hand, rooted in quiet craft and thoughtful materials.
          </p>
          <div className="hero-line hero-d3 mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/collections" variant="primary" size="lg">
              Shop the Collection
            </ButtonLink>
            <ButtonLink
              to="/custom"
              variant="secondary"
              size="lg"
              className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
            >
              Start a Custom Piece
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="Quiet pieces for everyday meaning"
            subtitle="A selection of recent work, each finished by hand in small numbers."
          />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <ButtonLink to="/collections" variant="ghost">
            View all collections <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </section>

      <section className="bg-sand-light py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden bg-sand">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80"
                alt="Jewellery maker's hands at work in the studio"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-charcoal/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="mb-2 block text-[0.7rem] font-medium tracking-[0.18em] text-gold uppercase">
              The Maker
            </span>
            <h2 className="font-serif text-3xl md:text-4xl">A practice of slow making</h2>
            <p className="mt-5 text-ink">
              I began Nira Atelier with a simple wish: to create jewellery that feels personal rather
              than mass-produced. Each piece is formed in my studio using traditional techniques and
              materials chosen for their quiet beauty.
            </p>
            <p className="mt-4 text-ink">
              There is no rush here. Stones are selected one by one, metal is shaped by hand, and
              finishing is done under natural light so that every curve and surface feels
              intentional.
            </p>
            <div className="mt-8">
              <ButtonLink to="/about" variant="secondary">
                Meet the maker
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="The Process"
                title="Three stages of care"
                subtitle="From first idea to final polish, every step is done by hand. Turn the piece in light — the same way we finish it."
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((step, i) => (
                <Reveal key={step.num} delay={i * 100}>
                  <div className="px-1">
                    <span className="mb-2 block font-serif text-4xl text-gold/70">{step.num}</span>
                    <h3 className="font-serif text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={80}>
            <div className="relative h-[340px] overflow-hidden bg-sand-light md:h-[420px]">
              <GoldRing3D className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative flex min-h-[460px] items-center overflow-hidden">
        <HeroVideo
          src="/videos/ring-turn.mp4"
          poster="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80"
          overlay="from-charcoal/70 via-charcoal/50 to-charcoal/40"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <h2 className="max-w-lg font-serif text-3xl text-ivory md:text-4xl">
              A piece made only for you
            </h2>
            <p className="mt-4 max-w-md text-ivory/85">
              From first conversation to final delivery, we design and craft jewellery that carries
              your story.
            </p>
            <div className="mt-8">
              <ButtonLink to="/custom" variant="gold" size="lg">
                Begin a custom commission
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="Worn and loved" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <blockquote className="flex h-full flex-col justify-between border border-border bg-paper p-8">
                <p className="font-serif text-lg italic text-charcoal">“{t.quote}”</p>
                <footer className="mt-6">
                  <cite className="not-italic font-medium">{t.author}</cite>
                  <span className="block text-sm text-ink">{t.location}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand-light py-20">
        <div className="mx-auto max-w-xl px-5 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Stay close"
              title="Early access to limited collections"
              subtitle="A quiet note when new pieces are ready. No noise, only care."
            />
          </Reveal>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert("Thank you for joining. We will be in touch soon.");
            }}
          >
            <input
              type="email"
              required
              aria-label="Email for newsletter"
              placeholder="Your email address"
              className="flex-1 rounded-sm border border-charcoal/15 bg-paper px-4 py-3 text-charcoal outline-none focus:border-gold"
            />
            <Button type="submit" variant="primary">
              Join
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
