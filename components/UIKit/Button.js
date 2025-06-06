import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button() {
  const buttons = useSelector((state) => state.buttons.value);
  return (
    <button className={styles.btnWhite}>
      <span className={styles.btnWhiteText}>
        {buttons ? "JE ME CONNECTE" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
