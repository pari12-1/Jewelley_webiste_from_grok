import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const priceFormatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: product.currency || "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main className={styles.page}>
      <div className="container">
        <Link to="/collections" className={styles.back}>
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to collections
        </Link>

        <div className={styles.layout}>
          {/* Gallery */}
          <div className={styles.gallery}>
            <motion.div
              className={styles.mainImage}
              key={activeImg}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={product.images[activeImg]}
                alt={`${product.name} – view ${activeImg + 1}`}
              />
            </motion.div>
            {product.images.length > 1 && (
              <div className={styles.thumbs}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className={styles.info}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>{priceFormatted}</p>
            {product.madeToOrder && (
              <span className={styles.badge}>Made to order</span>
            )}

            <p className={styles.desc}>{product.description}</p>

            <dl className={styles.details}>
              <div>
                <dt>Materials</dt>
                <dd>{product.materials.join(" · ")}</dd>
              </div>
              {product.dimensions && (
                <div>
                  <dt>Dimensions</dt>
                  <dd>{product.dimensions}</dd>
                </div>
              )}
              {product.care && (
                <div>
                  <dt>Care</dt>
                  <dd>{product.care}</dd>
                </div>
              )}
            </dl>

            <div className={styles.actions}>
              <Button to="/custom" variant="primary" size="lg">
                Enquire about this piece
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Ask a question
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className={styles.related}>
            <h2>More from {product.category}</h2>
            <div className={styles.relatedGrid}>
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
