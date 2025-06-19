//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import NavBurgerMenu from "./Header/NavBurgerMenu";
import ServiceCards from "./UIKit/ServiceCards";
import Button from "../components/UIKit/Button";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

function Home() {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

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

  // ----------------------------
  // FUNCTION TO GO TO EVENT PAGE
  // ----------------------------

  const handleClickGoToEvent = () => {
    // console.log("event page");
    router.push("/events");
  };

  return (
    <div className={styles.sectionContainer}>
      <Header />
      <main>
        <Hero />
        <div className={`sectionPaddingInline `}>
          <Button btnStyle="black" btnLocation="hero" />
        </div>
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
        <div className={`sectionPaddingInline ${styles.actualiteContainer}`}>
          <Image
            className={styles.actualiteIllustartion}
            src="/illustrations/actualite.svg"
            alt="illustration homme assis entrain de lire"
            height={350}
            width={400}
          />
          <h5 className={styles.actualiteTitle}>Restez informé</h5>
        </div>
        <div className={styles.actualiteBtn}>
          <Button
            btnStyle="black"
            btnLocation="homeActualite"
            onClickToEvent={handleClickGoToEvent}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
