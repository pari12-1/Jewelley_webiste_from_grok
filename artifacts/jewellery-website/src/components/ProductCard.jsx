import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, index = 0 }) {
  const mainImage = product.images[0];
  const priceFormatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: product.currency || "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={`/product/${product.id}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <img
            src={mainImage}
            alt={product.name}
            loading="lazy"
            className={styles.image}
          />
          {product.madeToOrder && (
            <span className={styles.badge}>Made to order</span>
          )}
          <div className={styles.overlay}>
            <span className={styles.view}>View piece</span>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.materials}>
            {product.materials.slice(0, 2).join(" · ")}
          </p>
          <p className={styles.price}>{priceFormatted}</p>
        </div>
      </Link>
    </motion.article>
  );
}
