import styles from "./styles.module.scss";
import LogoSrc from "../../public/logo.svg";

const Header = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <LogoSrc />
    </div>
  );
};

export default Header;
