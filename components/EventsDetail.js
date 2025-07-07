//REACT IMPORTS
import React, { useState, useEffect, useRef } from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/EventsDetail.module.css";

function EventsDetail() {
  const dispatch = useDispatch();

  // CONST FOR HERO CONTENT FIELD
  const herosContent = useSelector((state) => state.heros.value);

  // CONST TO DISPATCH EVENTS CONTENT
  const eventContent = useSelector((state) => state.eventDetail.value);
  // console.log("VALEUR RECU SUR LA PAGE EVENT DETAIL :", eventContent);

  // CONST TO SHOW PROGRAMME MENU
  const [selectedMenu, setSelectedMenu] = useState();

  // CONST TOGGLE PROGRAMME MENU
  const toggleProgramme = (index) => {
    setSelectedMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  useEffect(() => {
    dispatch(addContentToHero("eventsDetail"));
  }, []);

  // ------------------------------
  // FUNCTION TO DISPLAY BREADCRUMB
  // ------------------------------

  const breadcrumb = () => {
    const segments = [
      "Accueil",
      "Nos évènements",
      eventContent?.title || "Chargement...",
    ];
    return (
      herosContent !== "home" && (
        <ul className={styles.breadcrumb}>
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
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

  // ---------------------------------------
  // FUNCTION TO DISPLAY DESCRIPTION DETAILS
  // ---------------------------------------

  const description = eventContent.description.map((data, i) => (
    <p key={i} className={styles.paragraph}>
      {data}
    </p>
  ));

  // -------------------------------------
  // FUNCTION TO DISPLAY OBJECTIFS DETAILS
  // -------------------------------------

  const objectif = eventContent.objectives.map((data, i) => (
    <div className={styles.sectionContainer}>
      <Image
        className={styles.illustartion}
        src={"/illustrations/greenLeaf.svg"}
        alt={"feuille verte"}
        height={20}
        width={20}
      />
      <p key={i} className={`${styles.paragraph} ${styles.paragraphWhite}`}>
        {data}
      </p>
    </div>
  ));

  // -------------------------------------
  // FUNCTION TO DISPLAY PROGRAMME DETAILS
  // -------------------------------------

  const programme = eventContent.programme.map((data, i) => (
    <div key={i} className={styles.programmeContainer}>
      <div className={styles.programmeTitleContainer}>
        <h2 className={styles.sectionTitleWhite}>{data.subtitle}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.programmeTitleIcon} ${
            selectedMenu === i ? styles.programmeTitleIconOpen : ""
          }`}
          onClick={() => toggleProgramme(i)}
        />
      </div>
      <div
        className={`${styles.programmeWrapper} ${
          selectedMenu === i ? styles.programmeWrapperOpen : ""
        }`}
      >
        {data.points.map((point, j) => (
          <div key={j} className={styles.programme}>
            <Image
              className={styles.illustartion}
              src={"/illustrations/greenLeaf.svg"}
              alt={"feuille verte"}
              height={20}
              width={20}
            />
            <h3 className={styles.paragraph}>{point}</h3>
          </div>
        ))}
      </div>
    </div>
  ));

  // CONST TO CHECK IF HERO IS VISIBLE ON WINDOW
  const heroRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  // --------------------
  // FUNCTION TO SHOW NAV
  // --------------------

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting); // Si le hero n'est pas visible, on affiche la nav
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero heroStyle={"blueBg"} ref={heroRef} />
      {(eventContent.category === "Formation" ||
        eventContent.category === "Formation Flash") &&
        showNav && (
          <nav
            className={`${styles.hiddenNavContainer} ${
              showNav ? styles.visible : ""
            }`}
          >
            <div className={`paddingInline ${styles.hiddenNavTopContainer}`}>
              <div className={`sectionWrapper ${styles.hiddenNavTopWrapper}`}>
                <p className={styles.hiddenNavTitle}>{eventContent.title}</p>
              </div>
            </div>
            <div className={`paddingInline ${styles.hiddenNavBottomContainer}`}>
              <div className={`sectionWrapper`}>
                <div className={styles.hiddenNavLinkContainer}>
                  <a href="#description" className={styles.hiddenNavLink}>
                    Description
                  </a>
                  <a href="#pour" className={styles.hiddenNavLink}>
                    Pour qui ?
                  </a>
                  <a href="#objectifs" className={styles.hiddenNavLink}>
                    Objectifs
                  </a>
                  <a href="#programme" className={styles.hiddenNavLink}>
                    Programme
                  </a>
                  <a href="#financement" className={styles.hiddenNavLink}>
                    Financement
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      <main>
        <div
          className={`paddingInline ${styles.container} ${styles.responsivepaddingInline}`}
        >
          <div className={`sectionWrapper`}>
            {/* File d'ariane  */}
            {breadcrumb()}
            <div className={styles.textContainer}>
              <h2 id="description" className={styles.sectionTitle}>
                Description
              </h2>
              <div className={styles.sectionParagraph}>{description}</div>
              <h3 className={styles.sectionSubTitle}>Formateur</h3>
              <div className={styles.sectionContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <h5 className={`${styles.paragraph} ${styles.speakerName}`}>
                  {eventContent.speaker.name},
                </h5>
                <h5 className={styles.paragraph}>
                  {eventContent.speaker.role}
                </h5>
              </div>
              {eventContent.category !== "Webinaire" && (
                <>
                  <h2
                    id="pour"
                    className={`${styles.sectionTitle} ${styles.sectionMagin}`}
                  >
                    Pour qui ?
                  </h2>
                  <div className={styles.sectionContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      {eventContent.audience.description}
                    </p>
                  </div>
                  <h3 className={styles.sectionSubTitle}>Prérequis :</h3>
                  <div className={styles.sectionContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      {eventContent.audience.prerequisites}
                    </p>
                  </div>
                  <h2
                    id="objectifs"
                    className={`${styles.sectionTitle} ${styles.sectionMagin}`}
                  >
                    Objectifs
                  </h2>
                  <div className={styles.objectifContainer}>{objectif}</div>
                  <h2
                    id="programme"
                    className={`${styles.sectionTitle} ${styles.sectionMagin}`}
                  >
                    Programme
                  </h2>
                  {programme}
                  <h2
                    id="financement"
                    className={`${styles.sectionTitle} ${styles.sectionMagin}`}
                  >
                    Solutions de financement
                  </h2>
                  <p
                    className={`${styles.paragraph} ${styles.paragraphFinance}`}
                  >
                    {eventContent.funding}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
        <Mentions />
      </footer>
    </div>
  );
}

export default EventsDetail;
