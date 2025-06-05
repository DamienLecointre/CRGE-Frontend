import React, { useState } from "react";

//COMPONENTS IMPORTS
import AdherentBtn from "../UIKit/AdherentBtn";

//STYLES IMPORTS
import styles from "../../styles/Header/Nav.module.css";

function Nav() {
  // -----
  // DATA
  // -----
  const listData = [
    "Le CRGE",
    "Les Groupements d'employeurs",
    "Nos services",
    "Nos évènements",
  ];

  const crgeSubListdata = [
    "Qui sommes-nous ?",
    "Notre action de plaidoyer",
    "Notre gouvernance",
    "Notre équipe",
    "Nos adhérents",
    "Notre actualité",
    "Nous rejoindre",
    "Nous contacter",
  ];

  const geSubListdata = [
    "Qu'est-ce qu'un GE",
    "Mode d'emploi",
    "Avantages",
    "Les GE en Nouvelle-Aquitaine",
  ];

  const servicesSubListdata = [
    "Juridique",
    "Paye",
    "Formation",
    "Gestion",
    "Appui à la création",
  ];

  // ----------
  // CONSTANTES
  // ----------

  const [hoveredId, setHoveredId] = useState(null);

  // ---------
  // FUNCTIONS
  // ---------

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    console.log(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  // -----------------
  // FUNCTIONS DISPLAY
  // -----------------

  const crgeSubList = crgeSubListdata.map((item, i) => (
    <li key={i} className={`${styles.navContent} ${styles.subNavContent}`}>
      {item}
    </li>
  ));

  const geSubList = geSubListdata.map((item, i) => (
    <li key={i} className={`${styles.navContent} ${styles.subNavContent}`}>
      {item}
    </li>
  ));

  const servicesSubList = servicesSubListdata.map((item, i) => (
    <li key={i} className={`${styles.navContent} ${styles.subNavContent}`}>
      {item}
    </li>
  ));

  const primaryNav = listData.map((item, i) => (
    <li
      key={i}
      onMouseEnter={() => handleMouseEnter(i)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.navContent}>{item}</div>

      {/* Sous-menu CRGE */}
      {i === 0 && (
        <ul
          className={`${styles.navSublistContainer} ${
            hoveredId === 0 ? styles.subNavContentShow : ""
          }`}
        >
          {crgeSubList}
        </ul>
      )}

      {/* Sous-menu GE */}
      {i === 1 && (
        <ul
          className={`${styles.navSublistContainer} ${
            hoveredId === 1 ? styles.subNavContentShow : ""
          }`}
        >
          {geSubList}
        </ul>
      )}
      {/* Sous-menu GE */}
      {i === 2 && (
        <ul
          className={`${styles.navSublistContainer} ${
            hoveredId === 2 ? styles.subNavContentShow : ""
          }`}
        >
          {servicesSubList}
        </ul>
      )}
    </li>
  ));

  // -----
  // RENDU
  // -----

  return (
    <>
      <ul className={styles.navContainer}>
        {primaryNav}
        <AdherentBtn />
      </ul>
    </>
  );
}

export default Nav;
