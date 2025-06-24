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
  // STATE pour toutes les données de navigation regroupées
  const [navData, setNavData] = useState({
    listData: [],
    crgeSubListdata: [],
    geSubListdata: [],
    servicesSubListdata: [],
  });

  // Etats pour loading et erreur
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNav() {
      setLoading(true);
      try {
        const response = await fetch(`${backendNavContent}`);
        if (!response.ok) throw new Error("Serveur ne répond pas");
        const data = await response.json();
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
      } catch (err) {
        setError(err.message);
        console.error("Fetch error :", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNav();
  }, []);

  // Etats pour hover menu
  const [hoveredId, setHoveredId] = useState(null);
  const handleMouseEnter = (id) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  // Extraction pour lisibilité
  const { listData, crgeSubListdata, geSubListdata, servicesSubListdata } =
    navData;

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
