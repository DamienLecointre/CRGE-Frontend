import React from "react";

//COMPONENTS IMPORTS
import AdherentBtn from "../UIKit/AdherentBtn";

//STYLES IMPORTS
import styles from "../../styles/Nav.module.css";

function Nav() {
  const listData = [
    "Le CRGE",
    "Les Groupements d'employeurs",
    "Nos services",
    "Nos évènements",
  ];

  const primaryNav = listData.map((list) => (
    <li className={styles.navContent}>{list}</li>
  ));

  return (
    <>
      <ul className={styles.navNontainer}>
        {primaryNav}
        <AdherentBtn />
      </ul>
    </>
  );
}

export default Nav;
