//REACT IMPORTS
import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button({ btnStyle, onClickSignup, onClickSignin }) {
  const buttons = useSelector((state) => state.buttons.value);
  const btnStyleVariant =
    btnStyle === "white" ? styles.btnWhite : styles.btnBlack;
  const handleClick = () => {
    if (buttons === "signup" && onClickSignup) {
      onClickSignup();
    }
    if (buttons === "signin" && onClickSignin) {
      onClickSignin();
    }
  };
  return (
    <button className={btnStyleVariant} onClick={handleClick}>
      <span className={styles.btnWhiteText}>
        {buttons === "signin" ? "JE ME CONNECTE" : ""}
        {buttons === "signup" ? "CRÉER MON COMPTE" : ""}
        {buttons === "hero" ? "EN SAVOIR PLUS" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
