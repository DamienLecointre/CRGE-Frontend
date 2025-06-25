//REACT IMPORTS
import React, { useState } from "react";

//NEXT IMPORTS
import Link from "next/link";

// REDUX IMPORTS
import { useSelector } from "react-redux";

//COMPONENTS IMPORTS
import AdherentBtn from "../UIKit/AdherentBtn";
import BurgerMenu from "../UIKit/BurgerMenu";

//STYLES IMPORTS
import styles from "../../styles/Header/Nav.module.css";

const backendNavContent = process.env.NEXT_PUBLIC_URL_BACKEND_NAV_CONTENT;

function Nav() {
  // DATA GET FROM REDUX
  const navData = useSelector((state) => state.homepage.navData);
  // STATE pour toutes les données de navigation regroupées
  const {
    listData = [],
    crgeSubListdata = [],
    geSubListdata = [],
    servicesSubListdata = [],
  } = navData?.[0] || {}; // accès sécurisé au premier objet

  // HOVER STATE MENU
  const [hoveredId, setHoveredId] = useState(null);
  const handleMouseEnter = (id) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

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
