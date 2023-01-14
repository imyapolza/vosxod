import { FormHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children: React.ReactNode;
}

const Form = ({ title, children }: Props): JSX.Element => {
  return (
    <form className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inputs}>{children}</div>
    </form>
  );
};

export default Form;
