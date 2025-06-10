//REACT IMPORTS
import React, { useEffect, useState } from "react";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addBurgerMenu } from "../../reducers/burgerMenu";

//STYLES IMPORTS
import styles from "../../styles/UIKit/BurgerMenu.module.css";

function BurgerMenu() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu((prev) => !prev);
  };

  // --------------------------
  // DISPATCH TOGGLE BURGERMENU
  // --------------------------
  const dispatch = useDispatch();

  const isBurgerMenuOpen = (value) => {
    dispatch(addBurgerMenu(value));
  };

  useEffect(() => {
    isBurgerMenuOpen(openBurgerMenu);
  }, [openBurgerMenu]);
  return (
    <div
      className={
        openBurgerMenu === false
          ? styles.burgerMenuContainer
          : styles.burgerMenuFocus
      }
      onClick={toggleBurgerMenu}
    >
      <span
        className={`${styles.line} ${
          openBurgerMenu === false ? styles.upperLine : styles.upperLineRotate
        }`}
      ></span>
      <span
        className={`${styles.line} ${
          openBurgerMenu === false ? styles.middleLine : styles.middleLineHidden
        }`}
      ></span>
      <span
        className={`${styles.line} ${
          openBurgerMenu === false ? styles.downLine : styles.downLineRotate
        }`}
      ></span>
    </div>
  );
}

export default BurgerMenu;
