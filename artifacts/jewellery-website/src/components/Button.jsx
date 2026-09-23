import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  disabled,
  className = "",
  ...props
}) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
