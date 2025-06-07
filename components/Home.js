//REACT IMPORTS
import React from "react";

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
