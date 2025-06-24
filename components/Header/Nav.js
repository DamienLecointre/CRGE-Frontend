//REACT IMPORTS
import React, { useEffect, useState } from "react";

//NEXT IMPORTS
import Link from "next/link";

//COMPONENTS IMPORTS
import AdherentBtn from "../UIKit/AdherentBtn";
import BurgerMenu from "../UIKit/BurgerMenu";

//STYLES IMPORTS
import styles from "../../styles/Header/Nav.module.css";

const backendNavContent = process.env.NEXT_PUBLIC_URL_BACKEND_NAV_CONTENT;

function Nav() {
  // CONST TO SAVE NAV DATA
  const [listData, setListData] = useState([]);
  const [crgeSubListdata, setCrgeSubListdata] = useState([]);
  const [geSubListdata, setGeSubListdata] = useState([]);
  const [servicesSubListdata, setServicesSubListdata] = useState([]);

  // -------------------------------
  // USEEFFECT TO GET NAV DATA FILES
  // -------------------------------

  useEffect(() => {
    fetch(`${backendNavContent}`)
      .then((response) => {
        if (!response.ok) throw new Error("Serveur doesn't answer");
        return response.json();
      })
      .then((data) => {
        // console.log(
        //   "Résultat du fetch navComponent : ",
        //   data.navData[0].listData
        // );
        if (data && Array.isArray(data.navData)) {
          setListData(data.navData[0].listData);
          setCrgeSubListdata(data.navData[0].crgeSubListdata);
          setGeSubListdata(data.navData[0].geSubListdata);
          setServicesSubListdata(data.navData[0].servicesSubListdata);
        } else {
          console.warn("navData manquant ou invalide :", data);
        }
      })
      .catch((error) => console.error("Fetch error :", error));
  }, []);

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
