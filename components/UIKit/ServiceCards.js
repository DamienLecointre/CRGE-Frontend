//REACT IMPORTS
import React, { useState } from "react";

//NEXT IMPORTS
import Image from "next/image";

//DATAS IMPORTS
import serviceCardsData from "../../data/serviceCardsData.json";

//STYLES IMPORTS
import styles from "../../styles/UIKit/serviceCard.module.css";

function ServiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerPage = 3;
  const totalCards = serviceCardsData.cardsData.length;
  const maxIndex = totalCards - cardsPerPage;

  const handleSpanClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.viewport}>
        <div
          className={styles.cardsWrapper}
          style={{
            transform: `translateX(-${activeIndex * (100 / cardsPerPage)}%)`,
          }}
        >
          {serviceCardsData.cardsData.map((data, i) => (
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
                <span className={styles.numberBg} data-text={`0${i + 1}`}>
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollBarContainer}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.scrollBar} ${
              i === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleSpanClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
