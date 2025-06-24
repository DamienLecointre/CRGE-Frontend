//REACT IMPORTS
import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addactualiteDetailToStore } from "../../reducers/actualiteDetail";

//STYLES IMPORTS
import styles from "../../styles/UIKit/ActualiteCards.module.css";

const backendActualiteContent =
  process.env.NEXT_PUBLIC_URL_BACKEND_ACTUALITE_CONTENT;

function ActualiteCards({ pageLocation }) {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST FOR SERVICECARDS CONTENT FIELD
  const [actualityDataFromDb, setActualityDataFromDb] = useState([]);

  // ------------------------------
  // FUNCTION TO GET ACTUALITE DATA
  // ------------------------------

  useEffect(() => {
    fetch(`${backendActualiteContent}`)
      .then((response) => {
        if (!response.ok) throw new Error("Serveur doesn't answer");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data && Array.isArray(data.actualiteData)) {
          setActualityDataFromDb(data.actualiteData);
        } else {
          console.warn("heroData manquant ou invalide :", data);
        }
      });
  }, []);

  // ------------------------------------------------------------
  // FUNCTION TO DISPATCH CARDS CONTENT & GO TO ACTU DETAILS PAGE
  // ------------------------------------------------------------

  const dispatch = useDispatch();

  const addCardsContent = (
    cardsId,
    cardCategory,
    cardTitle,
    cardDate,
    cardTitleImg,
    cardIntroImg,
    cardIntro,
    sections = []
  ) => {
    dispatch(
      addactualiteDetailToStore({
        id: cardsId,
        category: cardCategory,
        title: cardTitle,
        date: cardDate,
        titleImg: cardTitleImg,
        introImg: cardIntroImg,
        intro: cardIntro,
        sections,
      })
    );
    router.push("/actualiteDetail");
  };

  // ------------------------------
  // FUNCTION TO DISPLAY ACTU CARDS
  // ------------------------------

  // AJOUTER .sort() pour le tri par date de publication des actus

  const actuCards = (nbr) => {
    return actualityDataFromDb.slice(0, nbr).map((data, i) => (
      <div
        key={i}
        id={data.title}
        className={styles.actuCardswrapper}
        onClick={() =>
          addCardsContent(
            data.title,
            data.category,
            data.title,
            data.date,
            data.titleImg,
            data.introImg,
            data.intro,
            data.sections
          )
        }
      >
        <h5 className={styles.categoryTitle}>{data.category}</h5>
        <div className={styles.cardsContent}>
          <h3 className={styles.cardsTitle}>{data.title}</h3>
          <p className={styles.cardsIntro}>{data.intro}</p>
          <Link href="/actualiteDetail" className={styles.cardsLink}>
            LIRE LA SUITE
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div
      className={
        pageLocation === "actualité"
          ? styles.actuCardsContainer
          : styles.actuCardsHomeContainer
      }
    >
      {pageLocation === "actualité" && actuCards(12)}
      {pageLocation === "homeActualite" && actuCards(3)}
    </div>
  );
}

export default ActualiteCards;
