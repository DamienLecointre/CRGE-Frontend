//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import NavBurgerMenu from "./Header/NavBurgerMenu";
import TeamSection from "./ServicesSections/TeamSection";
import ServicesCardContact from "./UIKit/ServicesCardContact";
import OffersSection from "./ServicesSections/OffersSection";
import CustomSupportSection from "./ServicesSections/CustomSupportSection";
import EventsLink from "./ServicesSections/EventsLink";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

//STYLES IMPORTS
import styles from "../styles/Services.module.css";

function Services() {
  // CONST DISPATCH
  const dispatch = useDispatch();

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST FOR HERO CONTENT FIELD
  const herosContent = useSelector((state) => state.heros.value);

  // CONST TO GET SERVICES TITLE
  const servicesContent = useSelector((state) => state.services.value);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("services"));
  }, []);

  // CONST URL CUSTOM DISPLAY
  const displayNames = {
    services: ["Nos services", `${servicesContent}`],
  };

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

  return (
    <>
      <Header />
      <Hero heroStyle="blueBg" />
      <main>
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <NavBurgerMenu />
          <div className={`sectionWrapper`}>
            {/* File d'ariane  */}
            {breadcrumb()}
            <div className={styles.container}>
              <div className={styles.textContainer}>
                <TeamSection />
                <OffersSection />
                <CustomSupportSection />
              </div>
              <ServicesCardContact />
            </div>
            <EventsLink />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
        <Mentions />
      </footer>
    </>
  );
}

export default Services;
