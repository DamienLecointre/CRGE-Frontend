//REACT IMPORTS
import React, { useEffect } from "react";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

function Events() {
  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  const dispatch = useDispatch();
  const updateHeroContent = (pageLocation) => {
    dispatch(addContentToHero(pageLocation));
  };

  useEffect(() => {
    updateHeroContent("events");
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <Header />
      <Hero />
    </div>
  );
}

export default Events;
