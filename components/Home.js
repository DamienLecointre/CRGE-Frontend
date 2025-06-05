import React from "react";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//COMPONENTS IMPORTS
import Header from "./Header/Header";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
}

export default Home;
