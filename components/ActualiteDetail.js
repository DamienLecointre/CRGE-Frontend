//REACT IMPORTS
import React, { useEffect } from "react";

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

//STYLES IMPORTS
import styles from "../styles/ActualiteDetail.module.css";

function ActualiteDetail() {
  const dispatch = useDispatch();

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST FOR HERO CONTENT FIELD
  const herosContent = useSelector((state) => state.heros.value);

  // CONST TO DISPATCH ACTUALITY CONTENT
  const actuContent = useSelector((state) => state.actualiteDetail.value);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  useEffect(() => {
    dispatch(addContentToHero("actualiteDetail"));
  }, []);

  // CONST URL CUSTOM DISPLAY
  const displayNames = {
    actualiteDetail: ["Notre actualité", `${actuContent.title}`],
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

  // ------------------------------------
  // FUNCTION TO DISPLAY SECTIONS DETAILS
  // ------------------------------------

  const sectionDetail = actuContent.sections.map((data, i) => (
    <div key={i} className={styles.sectionWrapper}>
      <h4 className={styles.sectionTitle}>{data.title}</h4>
      <p className={styles.text}>{data.content}</p>
    </div>
  ));

  return (
    <div>
      <Header />
      <Hero heroStyle={"blueBg"} />
      <main>
        <div className={`paddingInline`}>
          <div className={`sectionWrapper`}>
            {/* File d'ariane  */}
            {breadcrumb()}
            <div className={styles.introContainer}>
              <div className={styles.illustartionContainer}>
                <Image
                  className={styles.illustartion}
                  src={actuContent.introImg}
                  alt={actuContent.title}
                  fill={true}
                />
              </div>
              <p className={styles.text}>{actuContent.intro}</p>
            </div>
            <div className={styles.sectionContainer}>{sectionDetail}</div>
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

export default ActualiteDetail;
