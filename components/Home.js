//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";

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
    <div className={styles.sectionContainer}>
      <Header />
      <main>
        <Hero />
        <NavBurgerMenu />
        <div
          className={`${styles.sectionContainer} ${styles.sectionMarginTop}`}
        >
          <Image
            className={styles.sectionTitleIllustration}
            src="/illustrations/greenLeaf.svg"
            alt="illustration feuille verte"
            height={110}
            width={110}
          />
          <h2 className={styles.sectionTitle}>
            Des services sur mesure pour votre réussite
          </h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
