//REACT IMPORTS
import React from "react";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

function Events() {
  return (
    <div className={styles.sectionContainer}>
      <Header />
      <Hero />
    </div>
  );
}

export default Events;
