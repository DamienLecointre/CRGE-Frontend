//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Link from "next/link";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addeventDetailToStore } from "../../reducers/eventDetail";

//STYLES IMPORTS
import styles from "../../styles/UIKit/EventCards.module.css";

// console.log(eventData);

function EventCards({ pageLocation, cardsData = [], visibleCount }) {
  const dispatch = useDispatch();

  const displayedCards = pageLocation === "events" ? visibleCount : 3;

  // console.log(cardsData);

  return (
    <>
      {cardsData.slice(0, displayedCards).map((data, i) => (
        <div key={i} className={styles.cardsContainer}>
          <div className={styles.textContainer}>
            <h5 className={styles.category}>{data.category}</h5>
            <h3 className={styles.title}>{data.title}</h3>
            <Link href={"/"} className={styles.link}>
              EN SAVOIR PLUS
            </Link>
          </div>
          <div className={styles.dateContainer}>
            <h6 className={styles.dateNumber}>
              {data.pricing[0].date.slice(0, 2)}
            </h6>
            <h6 className={styles.datetext}>{data.pricing[0].date.slice(2)}</h6>
          </div>
        </div>
      ))}
    </>
  );
}

export default EventCards;
