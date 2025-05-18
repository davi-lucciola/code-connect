import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./icon-button.module.css";

export const IconButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
};
