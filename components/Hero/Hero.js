//REACT IMPORTS
import React, { useEffect, useState } from "react";

//NEXT IMPORTS
import Image from "next/image";
import { useRouter } from "next/router";

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

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST TO SAVE HERO DATA
  const [heroHomeData, setHeroHomeData] = useState([]);

  // -------------------------------------
  // FUNCTIONTO FIND MATCHING HEROSCONTENT
  // -------------------------------------

  const currentSectionData = heroHomeData.find(
    (item) => item.section === herosContent
  );

  // CONST TO DATA CONTENT
  const title = currentSectionData?.title || "";
  const paragraph = currentSectionData?.paragraph || "";
  const imgSrc = currentSectionData?.imgSrc || "";
  const imgAlt = currentSectionData?.imgAlt || "";

  useEffect(() => {
    fetch(`${backendHeroContent}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Résultat du fetch heroComponent : ", data.heroData);
        setHeroHomeData(data.heroData);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  // CONST TO CUT URL IN DIFFERENTS PARTS
  const pathSegments =
    router.pathname === "/"
      ? ["accueil"]
      : ["accueil", ...router.pathname.split("/").filter(Boolean)];

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
            <h1 className={styles.title}>{title}</h1>
            {herosContent !== "home" && (
              <ul className={styles.breadcrumb}>
                {pathSegments.map((segment, index) => (
                  <li key={index}>
                    {segment.replace(/-/g, "·")}{" "}
                    {index < pathSegments.length - 1 && " . "}
                  </li>
                ))}
              </ul>
            )}
            <p className={styles.paragraph}>{paragraph}</p>
          </div>
          {imgSrc && imgAlt && (
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
