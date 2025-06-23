//REACT IMPORTS
import React, { useState } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addactualiteDetailToStore } from "../../reducers/actualiteDetail";

//DATAS IMPORTS
import actuData from "../../data/actuData.json";

//STYLES IMPORTS
import styles from "../../styles/UIKit/ActualiteCards.module.css";

function ActualiteCards({ pageLocation }) {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST KNOW WICH CARDS IS SELECTED
  const [cardSelected, setCardSelected] = useState(null);

  // CONST ENTER OF DATA ACTU
  const actualiteData = actuData.actualiteData;

  // ----------------------------------
  // FUNCTION TO DISPATCH CARDS CONTENT
  // ----------------------------------

  const dispatch = useDispatch();

  const addCardsContent = (
    cardsId,
    cardCategory,
    cardTitle,
    cardDate,
    cardTitleImg,
    cardIntroImg,
    cardIntro,
    section = []
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
        section,
      })
    );
  };

  // -------------------------------------------
  // FUNCTION TO SELECT & VIEW MORE ACTU DETAILS
  // -------------------------------------------

  const handleClickViewMoreDetails = () => {
    console.log("details from card :", actualiteData);
    // router.push("/actualiteDetail");
  };

  // ------------------------------
  // FUNCTION TO DISPLAY ACTU CARDS
  // ------------------------------

  // AJOUTER .sort() pour le tri par date de publication des actus

  const actuCards = (nbr) => {
    return actualiteData.slice(0, nbr).map((data, i) => (
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
            data.section
          )
        }
        // onClick={() => handleClickViewMoreDetails()}
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
