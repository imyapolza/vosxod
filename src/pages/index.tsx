import { useState } from "react";
import Buttons from "components/Buttons/Buttons";
import First from "forms/First";
import Second from "forms/Second";
import Third from "forms/Third";
import styles from "styles/pages/index.module.scss";
import MainContext from "context/MainContext";

export default function Home() {
  const [activeButtons, setActiveButtons] = useState<Array<number>>([]);
  const [connectionLostPage, setConnectionLostPage] = useState<boolean>(false);

  const isForm = (index: number) => {
    return activeButtons.includes(index);
  };

  return (
    <>
      <MainContext.Provider value={{ setConnectionLostPage }}>
        <section className={styles.wrapper}>
          <div className={styles.main}>
            <div>
              <Buttons
                activeButtons={connectionLostPage ? [] : activeButtons}
                setActiveButtons={setActiveButtons}
              />
            </div>

            {!connectionLostPage && (
              <>
                {isForm(1) && <First />}
                {isForm(2) && <Second />}
                {isForm(3) && <Third />}
              </>
            )}
          </div>
        </section>
      </MainContext.Provider>
    </>
  );
}
