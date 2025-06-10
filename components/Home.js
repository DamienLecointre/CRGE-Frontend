//REACT IMPORTS
import React, { useEffect } from "react";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import NavBurgerMenu from "./Header/NavBurgerMenu";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

function Home() {
  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  const dispatch = useDispatch();
  const updateHeroContent = (pageLocation) => {
    dispatch(addContentToHero(pageLocation));
  };

  useEffect(() => {
    updateHeroContent("home");
  }, []);
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Hero />
      <NavBurgerMenu />
    </div>
  );
}

export default Home;
