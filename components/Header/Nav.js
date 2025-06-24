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
  const [navData, setNavData] = useState({
    listData: [],
    crgeSubListdata: [],
    geSubListdata: [],
    servicesSubListdata: [],
  });

  // -------------------------------
  // USEEFFECT TO GET NAV DATA FILES
  // -------------------------------
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${backendNavContent}`)
      .then((response) => {
        if (!response.ok) throw new Error("Serveur ne répond pas");
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.navData)) {
          setNavData({
            listData: data.navData[0].listData,
            crgeSubListdata: data.navData[0].crgeSubListdata,
            geSubListdata: data.navData[0].geSubListdata,
            servicesSubListdata: data.navData[0].servicesSubListdata,
          });
          setError(null);
        } else {
          setError("Données navData manquantes ou invalides");
        }
      })
      .catch((err) => {
        console.error("Fetch error :", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
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

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

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
