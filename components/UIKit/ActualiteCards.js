//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addactualiteDetailToStore } from "../../reducers/actualiteDetail";

//STYLES IMPORTS
import styles from "../../styles/UIKit/ActualiteCards.module.css";

function ActualiteCards({ pageLocation, cardsData = [], visibleCount }) {
  const dispatch = useDispatch();
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // ------------------------------------------------------------
  // FUNCTION TO DISPATCH CARDS CONTENT & GO TO ACTU DETAILS PAGE
  // ------------------------------------------------------------

  const handleCardClick = (data) => {
    dispatch(
      addactualiteDetailToStore({
        id: data.title,
        category: data.category,
        title: data.title,
        date: data.date,
        titleImg: data.titleImg,
        introImg: data.introImg,
        intro: data.intro,
        sections: data.sections || [],
      })
    );
    router.push("/actualiteDetail");
  };

  const displayedCards = pageLocation === "actualité" ? visibleCount : 3;

  return (
    <div
      className={
        pageLocation === "actualité"
          ? styles.actuCardsContainer
          : styles.actuCardsHomeContainer
      }
    >
      {cardsData.slice(0, displayedCards).map((data, i) => (
        <div
          key={i}
          id={data.title}
          className={styles.actuCardswrapper}
          onClick={() => handleCardClick(data)}
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
      ))}
    </div>
  );
}

export default ActualiteCards;
