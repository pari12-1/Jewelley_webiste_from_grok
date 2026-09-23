import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products, testimonials } from "../data/products";
import styles from "./Home.module.css";

const featured = products.filter((p) => p.featured).slice(0, 4);

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

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt="Delicate gold jewellery resting on soft fabric"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.heroEyebrow}>Handcrafted in India</p>
            <h1 className={styles.heroTitle}>
              Jewellery made slowly
              <br />
              and worn meaningfully
            </h1>
            <p className={styles.heroSub}>
              Small-batch pieces shaped by hand, rooted in quiet craft and
              thoughtful materials.
            </p>
            <div className={styles.heroCta}>
              <Button to="/collections" variant="primary" size="lg">
                Shop the Collection
              </Button>
              <Button to="/custom" variant="secondary" size="lg">
                Start a Custom Piece
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Featured */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Featured"
            title="Quiet pieces for everyday meaning"
            subtitle="A selection of recent work, each finished by hand in small numbers."
          />
          <div className={styles.productGrid}>
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className={styles.centerCta}>
            <Button to="/collections" variant="ghost">
              View all collections <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Maker story */}
      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>
          <motion.div
            className={styles.storyImage}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=80"
              alt="Jewellery maker's hands at work in the studio"
            />
          </motion.div>
          <motion.div
            className={styles.storyText}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className={styles.eyebrow}>The Maker</span>
            <h2>A practice of slow making</h2>
            <p>
              I began Nira Atelier with a simple wish: to create jewellery that
              feels personal rather than mass-produced. Each piece is formed in
              my studio using traditional techniques and materials chosen for
              their quiet beauty.
            </p>
            <p>
              There is no rush here. Stones are selected one by one, metal is
              shaped by hand, and finishing is done under natural light so that
              every curve and surface feels intentional.
            </p>
            <Button to="/about" variant="secondary">
              Meet the maker
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="The Process"
            title="Three stages of care"
            subtitle="From first idea to final polish, every step is done by hand."
          />
          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.processCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <span className={styles.processNum}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className={styles.customCta}>
        <div className={styles.customBg}>
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
            alt="Close-up of a handcrafted ring"
          />
          <div className={styles.customOverlay} />
        </div>
        <div className={`container ${styles.customContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>A piece made only for you</h2>
            <p>
              From first conversation to final delivery, we design and craft
              jewellery that carries your story. Engagement rings, family
              heirlooms, or quiet everyday companions.
            </p>
            <Button to="/custom" variant="gold" size="lg">
              Begin a custom commission
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Kind words"
            title="Worn and loved"
          />
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.id}
                className={styles.testimonial}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p>“{t.quote}”</p>
                <footer>
                  <cite>{t.author}</cite>
                  <span>{t.location}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Stay close"
            title="Early access to limited collections"
            subtitle="A quiet note when new pieces are ready. No noise, only care."
          />
          <form
            className={styles.newsForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for joining. We will be in touch soon.");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email for newsletter"
              className={styles.newsInput}
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
