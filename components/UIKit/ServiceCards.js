//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//DATAS IMPORTS
import serviceCardsData from "../../data/serviceCardsData.json";

//STYLES IMPORTS
import styles from "../../styles/UIKit/serviceCard.module.css";

function ServiceCards() {
  // -----------------
  // FUNCTIONS DISPLAY
  // -----------------

  const serviceCard = serviceCardsData.cardsData.map((data, i) => (
    <div key={i} className={styles.cardWrapper}>
      <Image
        className={styles.cardImg}
        src={data.img}
        alt={`illustration service ${data.title}`}
        height={200}
        width={200}
      />
      <div className={styles.cardTextWrapper}>
        <h5 className={styles.cardTitle}>{data.title}</h5>
        <p className={styles.cardText}>{data.text}</p>
        <span className={styles.numberBg}>0{i + 1}</span>
      </div>
    </div>
  ));

  return <div className={styles.cardsContainer}>{serviceCard}</div>;
}

export default ServiceCards;
