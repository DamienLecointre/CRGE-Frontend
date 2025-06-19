//REACT IMPORTS
import React, { useEffect, useState } from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

const backendHeroContent = process.env.NEXT_PUBLIC_URL_BACKEND_HERO_CONTENT;
function Hero() {
  const herosContent = useSelector((state) => state.heros.value);
  const allowToUpdateFile = useSelector((state) => state.connection.value);

  // CONST TO SAVE HERO DATA
  const [heroHomeData, setHeroHomeData] = useState(null);

  useEffect(() => {
    fetch(`${backendHeroContent}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "Résultat du fetch heroComponent : ",
          data.heroData[0].heroHome
        );
        setHeroHomeData(data.heroData[0]);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  return (
    <div className={`paddingInline`}>
      <div className={styles.heroContainer}>
        {allowToUpdateFile.isAdmin === true && (
          <span className={styles.updateText}>
            Modifier le contenu de cette section
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles.updateIcon}
            />
          </span>
        )}
        <div className={styles.heroWrapper}>
          <div className={styles.txtContainer}>
            <h1 className={styles.title}>
              {herosContent === "home" && heroHomeData
                ? `${heroHomeData.heroHome.title}`
                : null}
            </h1>
            <p className={styles.paragraph}>
              {herosContent === "home" && heroHomeData
                ? `${heroHomeData.heroHome.paragraph}`
                : null}
            </p>
          </div>
          {herosContent === "home" && (
            <Image
              className={styles.illustartion}
              src={heroHomeData ? heroHomeData.heroHome.imgSrc : null}
              alt={heroHomeData ? heroHomeData.heroHome.imgAlt : null}
              height={500}
              width={600}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
