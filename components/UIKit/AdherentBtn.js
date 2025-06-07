//REACT IMPORTS
import React from "react";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//NEXT IMPORTS
import Link from "next/link";

//STYLES IMPORTS
import styles from "../../styles/UIKit/AdherentBtn.module.css";

function AdherentBtn() {
  return (
    <Link href="/signIn" className={styles.adherentBtn}>
      <FontAwesomeIcon
        icon={faUser}
        style={{ strokeWidth: 30 }}
        className={styles.adherentBtnIcon}
      />
      Espace adhérent
    </Link>
  );
}

export default AdherentBtn;
