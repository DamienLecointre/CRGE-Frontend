//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//COMPONENTS IMPORTS
import Button from "../UIKit/Button";

//DATAS IMPORTS
import heroData from "../../data/heroData.json";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

function Hero() {
  const herosContent = useSelector((state) => state.heros.value);
  // ----
  // DATA
  // ----
  const { title, paragraph, imgSrc, imgAlt } = heroData.heroHome;

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.txtContainer}>
          <h1 className={styles.title}>
            {herosContent === "home" ? `${title}` : null}
          </h1>
          <p className={styles.paragraph}>
            {herosContent === "home" ? `${paragraph}` : null}
          </p>
        </div>
        {herosContent === "home" && (
          <Image
            className={styles.illustartion}
            src={imgSrc}
            alt={imgAlt}
            height={500}
            width={600}
          />
        )}
      </div>
      <Button btnStyle="black" btnLocation="hero" />
    </div>
  );
}

export default Hero;
