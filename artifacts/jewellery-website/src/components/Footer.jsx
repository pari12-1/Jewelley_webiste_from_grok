import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            Nira Atelier
          </Link>
          <p className={styles.tagline}>
            Jewellery made slowly and worn meaningfully. Handcrafted in small
            batches from a quiet studio in India.
          </p>
          <div className={styles.social}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="mailto:hello@niraatelier.com" aria-label="Email">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/about">About the Maker</Link>
            </li>
            <li>
              <Link to="/custom">Custom Orders</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Care & Info</h4>
          <ul>
            <li>
              <a href="#shipping">Shipping & Returns</a>
            </li>
            <li>
              <a href="#care">Jewellery Care</a>
            </li>
            <li>
              <a href="#sizing">Sizing Guide</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Studio</h4>
          <p className={styles.address}>
            Based in Jaipur, India
            <br />
            hello@niraatelier.com
            <br />
            Typically replies within 2 days
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Nira Atelier. All pieces made by hand.</p>
        </div>
      </div>
    </footer>
  );
}
