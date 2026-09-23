import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import styles from "./Collections.module.css";

export default function Collections() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Collections"
          title="All pieces"
          subtitle="Browse by category or explore the full collection. Every item is made in small batches or to order."
        />

        <div className={styles.filters} role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.filterBtn} ${active === cat ? styles.active : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.length > 0 ? (
              filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))
            ) : (
              <p className={styles.empty}>No pieces in this category yet.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
