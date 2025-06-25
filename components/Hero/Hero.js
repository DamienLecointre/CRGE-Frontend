//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image"; //
import Link from "next/link";
import { useRouter } from "next/router"; //

//REDUX IMPORTS
import { useSelector } from "react-redux"; //

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

function Hero({ heroStyle }) {
  // CONST URL CUSTOM DISPLAY
  const displayNames = {
    accueil: "Accueil",
    actualite: ["CRGE", "Notre actualité"],
    actualiteDetail: ["Notre actualité", "TITRE DE L'ACTUALITE"],
  };

  // CONST FOR HERO CONTENT FIELD
  const herosContent = useSelector((state) => state.heros.value);
  const heroHomeData = useSelector((state) => state.homepage.heroData);

  // CONST FOR HERO ACTUALITY CONTENT FIELD
  const actuContent = useSelector((state) => state.actualiteDetail.value);

  // CONST DISPLAY PERMISSION TO UPDATE WEBSITE
  const allowToUpdateFile = useSelector((state) => state.connection.value);

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // -------------------------------------
  // FUNCTION TO FIND MATCHING HEROSCONTENT
  // -------------------------------------

  const currentSectionData = heroHomeData.find(
    (item) => item.section === herosContent
  );

  // CONST TO DATA CONTENT
  const title = currentSectionData?.title || "";
  const paragraph = currentSectionData?.paragraph || "";
  const imgSrc = currentSectionData?.imgSrc || "";
  const imgAlt = currentSectionData?.imgAlt || "";

  // ------------------------
  // FUNCTION TO EDIT CONTENT
  // ------------------------

  const handleClickToEdit = () => {
    console.log("edit");
  };

  // CONST TO CUT URL IN DIFFERENTS PARTS
  const rawSegments =
    router.pathname === "/"
      ? ["Accueil"]
      : ["Accueil", ...router.pathname.split("/").filter(Boolean)];

  const displaySegments = rawSegments.flatMap((segment) => {
    const value = displayNames[segment];
    return Array.isArray(value) ? value : value || segment;
  });

  // ------------------------------
  // FUNCTION TO DISPLAY BREADCRUMB
  // ------------------------------

  const breadcrumb = () => {
    return (
      herosContent !== "home" && (
        <ul className={styles.breadcrumb}>
          {displaySegments.map((segment, index) => {
            const isLast = index === displaySegments.length - 1;
            return (
              <li
                key={index}
                className={`${styles.linkBreadcrumb} ${
                  isLast ? styles.lastBreadcrumb : ""
                }`}
              >
                {index === 0 && index !== isLast ? (
                  <Link href="/" className={styles.linkBreadcrumb}>
                    {segment}
                  </Link>
                ) : (
                  segment
                )}
              </li>
            );
          })}
        </ul>
      )
    );
  };

  return (
    <div
      className={`paddingInline ${
        heroStyle === "blueBg" ? styles.heroBlueBgContainer : ""
      }`}
    >
      <div className={`sectionWrapper`}>
        {/* Span pour modifier contenu */}
        {allowToUpdateFile.isAdmin === true && (
          <span className={styles.updateText}>
            Modifier le contenu de cette section
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles.updateIcon}
              onClick={handleClickToEdit}
            />
          </span>
        )}
        {heroStyle === "whiteBg" && (
          <div className={styles.heroWrapper}>
            <div className={styles.txtContainer}>
              <h1 className={styles.title}>{title}</h1>
              {/* File d'ariane  */}
              {breadcrumb()}
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
        )}
        {heroStyle === "blueBg" && (
          <div className={styles.heroWrapperBlueBg}>
            <div className={styles.txtContainerBlueBg}>
              <p className={styles.categoryTitle}>{actuContent.category}</p>
              <h1
                className={
                  heroStyle === "blueBg"
                    ? `${styles.titleBlueBg} ${styles.whiteText}`
                    : ""
                }
              >
                {actuContent.title}
              </h1>
              <p
                className={
                  heroStyle === "blueBg"
                    ? `${styles.paragraph} ${styles.whiteText}`
                    : ""
                }
              >
                {actuContent.date}
              </p>
            </div>
            {imgSrc && imgAlt && (
              <Image
                className={styles.illustartionBlueBg}
                src={actuContent.titleImg}
                alt={actuContent.title}
                height={400}
                width={400}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
