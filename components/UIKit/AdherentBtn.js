import React from "react";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/UIKit/AdherentBtn.module.css";

function AdherentBtn() {
  return (
    <button className={styles.adherentBtn}>
      <FontAwesomeIcon
        icon={faUser}
        style={{ strokeWidth: 30 }}
        className={styles.adherentBtnIcon}
      />
      Espace adhérent
    </button>
  );
}

export default AdherentBtn;
