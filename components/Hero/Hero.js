//REACT IMPORTS
import React, { forwardRef } from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

const Hero = forwardRef(({ heroStyle }, ref) => {
  // CONST TO DISPLAY BREADCRUMB NAME
  const displayNames = {
    accueil: "Accueil",
    actualite: ["CRGE", "Notre actualité"],
    actualiteDetail: ["Notre actualité", "TITRE DE L'ACTUALITE"],
    events: ["Nos évènements"],
  };

  const herosContent = useSelector((state) => state.heros.value);
  const heroHomeData = useSelector((state) => state.homepage.heroData);
  const serviceCardsTitle = useSelector((state) => state.services.value);
  const actuContent = useSelector((state) => state.actualiteDetail.value);
  const eventsContent = useSelector((state) => state.eventDetail.value);
  const allowToUpdateFile = useSelector((state) => state.connection.value);

  const router = useRouter();

  const currentSectionData = heroHomeData.find(
    (item) => item.section === herosContent
  );

  const title = currentSectionData?.title || "";
  const paragraph = currentSectionData?.paragraph || "";
  const imgSrc = currentSectionData?.imgSrc || "";
  const imgAlt = currentSectionData?.imgAlt || "";

  // ------------------------------
  // FUNCTION TO DISPLAY BREADCRUMB
  // ------------------------------

  const rawSegments =
    router.pathname === "/"
      ? ["Accueil"]
      : ["Accueil", ...router.pathname.split("/").filter(Boolean)];

  const displaySegments = rawSegments.flatMap((segment) => {
    const value = displayNames[segment];
    return Array.isArray(value) ? value : value || segment;
  });

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

  const handleClickToEdit = () => {
    // console.log("edit");
  };

  return (
    <div
      ref={ref}
      className={`paddingInline ${styles.responsivepaddingInline} ${
        heroStyle === "blueBg" ? styles.heroBlueBgContainer : ""
      }`}
    >
      <div className={`sectionWrapper`}>
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
              {herosContent === "actualiteDetail" && (
                <p className={styles.categoryTitle}>{actuContent.category}</p>
              )}
              {herosContent === "eventsDetail" && (
                <p className={styles.categoryTitle}>{eventsContent.category}</p>
              )}
              <h1
                className={
                  heroStyle === "blueBg"
                    ? `${styles.titleBlueBg} ${styles.whiteText}`
                    : ""
                }
              >
                {herosContent === "actualiteDetail" ? actuContent.title : ""}
                {herosContent === "eventsDetail" ? eventsContent.title : ""}
                {herosContent === "contactForm" ? "Nous contacter" : ""}
                {herosContent === "about" ? "Qui sommes-nous ?" : ""}
                {herosContent === "services" ? `${serviceCardsTitle}` : ""}
              </h1>
              <p
                className={
                  heroStyle === "blueBg"
                    ? `${styles.paragraph} ${styles.whiteText}`
                    : ""
                }
              >
                {herosContent === "actualiteDetail" ? actuContent.date : ""}
                {herosContent === "eventsDetail" ? eventsContent.lieu : ""}
              </p>
            </div>
            {herosContent === "actualiteDetail" ? (
              actuContent.titleImg && (
                <Image
                  className={styles.illustartionBlueBg}
                  src={actuContent.titleImg}
                  alt={actuContent.title || "Image d'actualité"}
                  height={400}
                  width={400}
                />
              )
            ) : (
              <Image
                className={styles.illustartionBlueBg}
                src={"/illustrations/personnagedoigtenlair.svg"}
                alt={"personnage doigt en l'air"}
                height={600}
                width={600}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default Hero;
