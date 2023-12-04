import React from "react";
import styles from "./flats.module.css";
import { FlatsType } from "./FlatsType";

const Flats: React.FC<FlatsType> = ({
  flats,
  onCardDelete,
  component: Component,
}) => {
  return (
    <>
      <Component />

      <div className={styles.wrapper}>
        {flats.map((flat) => {
          return (
            <div
              onClick={() => onCardDelete(flat.id)}
              className={styles.flat}
              key={flat.id}
            >
              <div>{flat.miestas}</div>
              <div>{flat.kaina}</div>
              <div>{flat.kambariuSkaicius}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Flats };
