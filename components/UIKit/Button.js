//REACT IMPORTS
import React from "react";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button({ btnStyle, btnLocation, onClickSignup, onClickSignin }) {
  const btnStyleVariant =
    btnStyle === "white" ? styles.btnWhite : styles.btnBlack;
  const handleClick = () => {
    if (btnLocation === "signup" && onClickSignup) {
      onClickSignup();
    }
    if (btnLocation === "signin" && onClickSignin) {
      onClickSignin();
    }
  };
  return (
    <button className={btnStyleVariant} onClick={handleClick}>
      <span className={styles.btnWhiteText}>
        {btnLocation === "signin" ? "JE ME CONNECTE" : ""}
        {btnLocation === "signup" ? "CRÉER MON COMPTE" : ""}
        {btnLocation === "hero" ? "EN SAVOIR PLUS" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
