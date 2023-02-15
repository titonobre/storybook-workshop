import cn from "classnames";

import styles from "./Button.module.css";

export type ButtonProps = {
  theme?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
  href?: string;
};

export const Button = ({ theme = "primary", label, href, ...props }: ButtonProps) => {

  if (href) { 
    return (
      <a
        href={href}
        className={cn(styles.button, {
          [styles.themePrimary]: theme === "primary",
        })}
        {...props}
      >
        {label}
      </a>
    );
  }
  else {
    return (
      <button
        type="button"
        className={cn(styles.button, {
          [styles.themePrimary]: theme === "primary",
        })}
        {...props}
      >
        {label}
      </button>
    );
  }
};
