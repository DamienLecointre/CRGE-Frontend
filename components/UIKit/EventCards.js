//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addeventDetailToStore } from "../../reducers/eventDetail";

//STYLES IMPORTS
import styles from "../../styles/UIKit/EventCards.module.css";

// console.log(eventData);

function EventCards({ pageLocation, cardsData = [], visibleCount }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const displayedCards = pageLocation === "events" ? visibleCount : 3;

  // ------------------------------------------------------------
  // FUNCTION TO DISPATCH CARDS CONTENT & GO TO ACTU DETAILS PAGE
  // ------------------------------------------------------------

  const handleCardClick = (data) => {
    dispatch(
      addeventDetailToStore({
        id: data.title,
        category: data.category || "",
        title: data.title || "",
        lieu: data.lieu || "",
        description: data.description || [],
        speaker: data.speaker || { name: "", role: "" },
        audience: data.audience || { description: "", prerequisites: "" },
        objectives: data.objectives || [],
        programme: data.programme || [],
        funding: data.funding || "",
        pricing: data.pricing || [],
      })
    );
    router.push("/eventsDetail");
  };

  return (
    <>
      {cardsData.slice(0, displayedCards).map((data, i) => (
        <div
          key={i}
          className={styles.cardsContainer}
          onClick={() => handleCardClick(data)}
        >
          <div className={styles.textContainer}>
            <h5 className={styles.category}>{data.category}</h5>
            <h3 className={styles.title}>{data.title}</h3>
            <Link href={"/eventsDetail"} className={styles.link}>
              EN SAVOIR PLUS
            </Link>
          </div>
          <div className={styles.dateContainer}>
            <h6 className={styles.dateNumber}>
              {data.pricing[0].date.slice(0, 2)}
            </h6>
            <h6 className={styles.datetext}>
              {`${data.pricing[0].date.slice(3, 7)}.`}
            </h6>
          </div>
        </div>
      ))}
    </>
  );
}

export default EventCards;
