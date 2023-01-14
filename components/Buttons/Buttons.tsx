import Button from "components/Button/Button";
import { onActiveButton } from "utils/page";
import styles from "./styles.module.scss";
import { buttons } from "constants/index";

interface Props {
  activeButtons: Array<number>;
  setActiveButtons: (
    btns: Array<number> | ((prev: number[]) => number[])
  ) => void;
}

const Buttons = ({ activeButtons, setActiveButtons }: Props): JSX.Element => {
  return (
    <div className={styles.buttons}>
      {buttons.map((item, index) => (
        <Button
          key={index}
          className={
            activeButtons.includes(index + 1) ? styles.button__active : ""
          }
          onClick={() =>
            onActiveButton(index + 1, activeButtons, setActiveButtons)
          }
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
