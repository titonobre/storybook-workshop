import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  theme?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}

export const Button = ({ theme = "primary", label, ...props }: ButtonProps) => {
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
};
