//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Link from "next/link";

//DATAS IMPORTS
import actuData from "../../data/actuData.json";

//STYLES IMPORTS
import styles from "../../styles/UIKit/ActualiteCards.module.css";

function ActualiteCards() {
  // ------------------------------
  // FUNCTION TO DISPLAY ACTU CARDS
  // ------------------------------

  const actuCards = actuData.actualiteData.slice(0, 12).map((data, i) => (
    <div key={i} className={styles.actuCardswrapper}>
      <h5 className={styles.categoryTitle}>{data.category}</h5>
      <div className={styles.cardsContent}>
        <h3 className={styles.cardsTitle}>{data.title}</h3>
        <p className={styles.cardsIntro}>{data.intro}</p>
        <Link href="/" className={styles.cardsLink}>
          LIRE LA SUITE
        </Link>
      </div>
    </div>
  ));

  return <div className={styles.actuCardsContainer}>{actuCards}</div>;
}

export default ActualiteCards;
