//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//DATAS IMPORTS
import heroData from "../../data/heroData.json";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

function Hero() {
  const herosContent = useSelector((state) => state.heros.value);
  const allowToUpdateFile = useSelector((state) => state.connection.value);
  // ----
  // DATA
  // ----
  const { title, paragraph, imgSrc, imgAlt } = heroData.heroHome;

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
      </div>
    </div>
  );
}

export default Hero;
