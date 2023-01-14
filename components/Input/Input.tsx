import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: Props): JSX.Element => {
  return (
    <label className={styles.label}>
      {label}
      <input className={styles.input} {...rest} />
    </label>
  );
};

export default Input;
