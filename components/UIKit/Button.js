//REACT IMPORTS
import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Button.module.css";

function Button({
  btnStyle,
  btnLocation,
  onClickSignup,
  onClickSignin,
  onClickLogOut,
  onClickToActualite,
  onClickToLoadMoreActu,
  onClickToSendContactForm,
  onClickToEvents,
}) {
  // CONST TO DISPATCH EVENTS CONTENT
  const eventContent = useSelector((state) => state.eventDetail.value);
  const btnStyleVariant =
    btnStyle === "white" ? styles.btnWhite : styles.btnBlack;
  const handleClick = () => {
    if (
      (btnLocation === "signup" || btnLocation === "joinUs") &&
      onClickSignup
    ) {
      onClickSignup();
    } else if (btnLocation === "signin" && onClickSignin) {
      onClickSignin();
    } else if (btnLocation === "profil" && onClickLogOut) {
      onClickLogOut();
    } else if (btnLocation === "homeActualite" && onClickToActualite) {
      onClickToActualite();
    } else if (btnLocation === "actualité" && onClickToLoadMoreActu) {
      onClickToLoadMoreActu();
    } else if (btnLocation === "events" && onClickToLoadMoreActu) {
      onClickToLoadMoreActu();
    } else if (btnLocation === "contactForm" && onClickToSendContactForm) {
      onClickToSendContactForm();
    } else if (btnLocation === "homeEvents" && onClickToEvents) {
      onClickToEvents();
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
        {btnLocation === "actualité" ? "VOIR PLUS D'ACTUALITÉ" : ""}
        {btnLocation === "contactForm" ? "ENVOYER LE MESSAGE" : ""}
        {btnLocation === "joinUs" ? "J'ADHÈRE" : ""}
        {btnLocation === "homeEvents" ? "TOUS LES ÉVENEMENTS" : ""}
        {btnLocation === "events" ? "VOIR PLUS D'ÉVÈNEMENTS" : ""}
        {eventContent.category === "Formation" ||
        eventContent.category === "Formation flash"
          ? "S'INSCRIRE À LA FORMATION"
          : ""}
        {eventContent.category === "Webinaire" ? "S'INSCRIRE AU WEBINAIRE" : ""}
      </span>
      <span className={styles.btnWhiteHover}></span>
    </button>
  );
}

export default Button;
