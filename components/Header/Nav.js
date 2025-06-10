//REACT IMPORTS
import React, { useState } from "react";

//COMPONENTS IMPORTS
import AdherentBtn from "../UIKit/AdherentBtn";
import BurgerMenu from "../UIKit/BurgerMenu";

//DATAS IMPORTS
import navData from "../../data/navData.json";

//STYLES IMPORTS
import styles from "../../styles/Header/Nav.module.css";

function Nav() {
  // -----
  // DATA
  // -----
  const { listData, crgeSubListdata, geSubListdata, servicesSubListdata } =
    navData;

  // ----------
  // CONSTANTS
  // ----------
  // CONST STATE HOVER
  const [hoveredId, setHoveredId] = useState(null);

  // ---------------------------------------
  // FUNCTIONS TO SHOW SUBTITLE NAV ON HOVER
  // ---------------------------------------

  const handleMouseEnter = (id) => {
    setHoveredId(id);
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
      className={styles.navWrapper}
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
      {/* Sous-menu SERVICES */}
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

  // -------
  // DISPLAY
  // -------

  return (
    <>
      <ul className={styles.navContainer}>
        {primaryNav}
        <AdherentBtn />
        <BurgerMenu />
      </ul>
    </>
  );
}

export default Nav;
