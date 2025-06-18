//REACT IMPORTS
import React from "react";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//NEXT IMPORTS
import Link from "next/link";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/UIKit/AdherentBtn.module.css";

function AdherentBtn() {
  // CONST REDUCER VALUE
  const isUserConnected = useSelector((state) => state.connection.value);

  // -----------------------------
  // FUNCTION TO DISPLAY USER NAME
  // -----------------------------

  const getDisplayedText = () => {
    if (isUserConnected.isConnected === true) {
      const fullName =
        `${isUserConnected.firstName} ${isUserConnected.lastName}`.toUpperCase();
      return fullName.length > 14 ? `${fullName.slice(0, 12)}...` : fullName;
    } else {
      return "Espace adhérent";
    }
  };

  return (
    <Link href="/signIn" className={styles.adherentBtn}>
      <FontAwesomeIcon
        icon={faUser}
        style={{ strokeWidth: 30 }}
        className={styles.adherentBtnIcon}
      />
      <span className={styles.adherentBtnTxt}>{getDisplayedText()}</span>
    </Link>
  );
}

export default AdherentBtn;
