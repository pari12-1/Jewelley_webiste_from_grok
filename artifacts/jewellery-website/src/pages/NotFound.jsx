import { Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1>This page could not be found</h1>
        <p className={styles.sub}>
          The piece you are looking for may have been moved or no longer exists.
        </p>
        <Button to="/" variant="primary">
          Return home
        </Button>
      </div>
    </main>
  );
}
