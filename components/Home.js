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
import ServiceCards from "./UIKit/ServiceCards";

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
        <div className={`paddingInline`}>
          <div className={`sectionWrapper ${styles.sectionMarginTop}`}>
            <Image
              className={styles.serviceLeafIllustration}
              src="/illustrations/greenLeaf.svg"
              alt="illustration feuille verte"
              height={110}
              width={110}
            />
            <h2 className={styles.sectionTitle}>
              Des services sur mesure pour votre réussite
            </h2>
            <ServiceCards />
          </div>
        </div>
        <div className={`paddingInline`}>
          <div className={`sectionWrapper ${styles.sectionMarginTop}`}>
            <Image
              className={styles.actualiteLeafIllustration}
              src="/illustrations/greenLeaf.svg"
              alt="illustration feuille verte"
              height={110}
              width={110}
            />
            <h2 className={styles.sectionTitle}>Actualité</h2>
          </div>
        </div>
        <div className={styles.serviceBg}></div>
        <div className={styles.sectionServiceWrapper}></div>
      </main>
    </div>
  );
}

export default Home;
