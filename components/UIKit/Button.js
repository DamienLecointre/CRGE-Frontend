//REACT IMPORTS
import React from "react";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button({
  btnStyle,
  btnLocation,
  onClickSignup,
  onClickSignin,
  onClickLogOut,
  onClickToEvent,
}) {
  const btnStyleVariant =
    btnStyle === "white" ? styles.btnWhite : styles.btnBlack;
  const handleClick = () => {
    if (btnLocation === "signup" && onClickSignup) {
      onClickSignup();
    }
    if (btnLocation === "signin" && onClickSignin) {
      onClickSignin();
    }
    if (btnLocation === "profil" && onClickLogOut) {
      onClickLogOut();
    }
    if (btnLocation === "homeActualite" && onClickToEvent) {
      onClickToEvent();
    }
  };
  return (
    <button className={btnStyleVariant} onClick={handleClick}>
      <span className={styles.btnWhiteText}>
        {btnLocation === "signin" ? "JE ME CONNECTE" : ""}
        {btnLocation === "signup" ? "CRÉER MON COMPTE" : ""}
        {btnLocation === "profil" ? "SE DÉCONNECTER" : ""}
        {btnLocation === "hero" ? "EN SAVOIR PLUS" : ""}
        {btnLocation === "homeActualite" ? "TOUTE L'ACTUALITÉ" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
