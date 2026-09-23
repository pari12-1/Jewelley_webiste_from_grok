import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="The quiet practice of making"
          subtitle="Nira Atelier is a small jewellery studio rooted in slow craft, natural materials, and personal connection."
        />

        <div className={styles.heroImg}>
          <img
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80"
            alt="Jewellery maker working at a studio bench"
          />
        </div>

        <div className={styles.content}>
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>A personal beginning</h2>
            <p>
              I started Nira Atelier after years of collecting small objects and
              learning traditional metalwork techniques. The studio is a quiet
              space where time moves differently — where a single ring can take
              several days and every surface is considered under daylight.
            </p>
            <p>
              The name “Nira” comes from a word for pure water: clear, steady,
              and essential. That is the feeling I hope each piece carries.
            </p>
          </motion.div>

          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Materials & values</h2>
            <p>
              I work primarily with sterling silver, gold vermeil, and carefully
              selected stones — moonstone, pearls, onyx, and other quiet
              materials that age beautifully. Wherever possible I choose
              recycled metals and ethically sourced gems.
            </p>
            <p>
              Sustainability here is not a slogan. It is the practical choice of
              making less, making carefully, and making pieces meant to last
              decades rather than seasons.
            </p>
          </motion.div>

          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2>The studio</h2>
            <p>
              The workshop is in Jaipur, a city with a long tradition of
              jewellery craft. I work alone or with one trusted collaborator on
              larger commissions. Most pieces are made to order or in very small
              batches so that quality remains the priority.
            </p>
          </motion.div>
        </div>

        <div className={styles.cta}>
          <h3>Would you like to visit or commission a piece?</h3>
          <div className={styles.ctaBtns}>
            <Button to="/custom" variant="primary">
              Start a custom order
            </Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
