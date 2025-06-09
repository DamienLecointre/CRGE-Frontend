//REACT IMPORTS
import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button({ btnStyle }) {
  const buttons = useSelector((state) => state.buttons.value);
  const btnStyleVariant =
    btnStyle === "white" ? styles.btnWhite : styles.btnBlack;
  return (
    <button className={btnStyleVariant}>
      <span className={styles.btnWhiteText}>
        {buttons === "signin" ? "JE ME CONNECTE" : ""}
        {buttons === "hero" ? "EN SAVOIR PLUS" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
