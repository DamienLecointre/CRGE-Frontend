//REACT IMPORTS
import React, { useState } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

//DATAS IMPORTS
import navData from "../../data/navData.json";

//STYLES IMPORTS
import styles from "../../styles/Header/NavBurgerMenu.module.css";

function NavBurgerMenu() {
  const showNav = useSelector((state) => state.burgerMenu.value);
  // -----
  // DATA
  // -----
  const { listData, crgeSubListdata, geSubListdata, servicesSubListdata } =
    navData;
  // ---------------
  // DISPLAY SUBMENU
  // ---------------
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const openSubMenu = (i) => {
    setSelectedSubMenu(i);
  };

  const closeSubMenu = () => {
    setSelectedSubMenu(null);
  };

  const getSubMenuItems = () => {
    switch (selectedSubMenu) {
      case 0:
        return crgeSubListdata;
      case 1:
        return geSubListdata;
      case 2:
        return servicesSubListdata;
      default:
        return [];
    }
  };
  // ----------------------
  // FUNCTIONS DISPLAY LIST
  // ----------------------
  const primaryNav = listData.map((data, i) => (
    <li key={i} className={styles.navList} onClick={() => openSubMenu(i)}>
      {data} <FontAwesomeIcon icon={faChevronRight} />
    </li>
  ));

  const subMenuItems = getSubMenuItems().map((data, i) => (
    <li key={i} className={`${styles.navList} ${styles.subNavList}`}>
      {data} <FontAwesomeIcon icon={faChevronRight} />
    </li>
  ));

  return (
    <>
      <ul
        className={`${styles.navContainer} ${
          showNav ? styles.navContainerShow : ""
        }`}
      >
        {primaryNav}
        <ul
          className={`${styles.subNavContainer} ${
            selectedSubMenu !== null ? styles.subNavContainerShow : ""
          }`}
        >
          {selectedSubMenu !== null && (
            <>
              <div className={styles.goBackContainer} onClick={closeSubMenu}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styles.subNavIcon}
                  role="button"
                  tabIndex={0}
                  aria-label="Retour au menu principal"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") closeSubMenu();
                  }}
                />
                <h3>Retour</h3>
              </div>
              {subMenuItems}
            </>
          )}
        </ul>
      </ul>
    </>
  );
}

export default NavBurgerMenu;
