//REACT IMPORTS
import React, { useState } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//COMPONENTS IMPORTS
import Button from "./Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../../styles/UIKit/BookingCard.module.css";

function BookingCard() {
  // CONST TO DISPATCH EVENTS CONTENT
  const eventContent = useSelector((state) => state.eventDetail.value);

  // CONST TO CHECK IF ADHERENT IS TRUE OR NOT
  const [isAdherent, setIsAdherent] = useState(true);
  const [isNotAdherent, setIsNotAdherent] = useState(false);

  const handleClickAdherent = (value) => {
    if (value === "Adhérent") {
      setIsAdherent(true);
      setIsNotAdherent(false);
    } else if (value === "Non adhérent") {
      setIsAdherent(false);
      setIsNotAdherent(true);
    }
  };

  if (!eventContent || !eventContent.pricing) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div className={styles.cardContainer}>
      {eventContent.category !== "Webinaire" && (
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btn} ${isAdherent ? styles.active : ""}`}
            onClick={(e) => handleClickAdherent(e.target.innerText)}
          >
            Adhérent
          </button>
          <button
            className={`${styles.btn} ${isNotAdherent ? styles.active : ""}`}
            onClick={(e) => handleClickAdherent(e.target.innerText)}
          >
            Non adhérent
          </button>
        </div>
      )}

      {isAdherent === true && (
        <div className={styles.textContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.titleInfoWrapper}>
              <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
              <span className={styles.text}>Date</span>
            </div>
            <div className={styles.infoWrapper}>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[0]?.date} |{" "}
              </span>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[0]?.time}
              </span>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.titleInfoWrapper}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              <span className={styles.text}>Durée</span>
            </div>
            <div className={styles.infoWrapper}>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[0]?.duration}
              </span>
            </div>
          </div>
          {eventContent.category === "Formation" ||
          eventContent.category === "Formation flash" ? (
            <>
              <div className={styles.infoContainer}>
                <div className={styles.titleInfoWrapper}>
                  <FontAwesomeIcon icon={faEuroSign} className={styles.icon} />
                  <span className={styles.text}>Prix</span>
                </div>
                <div className={styles.infoWrapper}>
                  <span className={`${styles.text} ${styles.textPrice}`}>
                    {eventContent.pricing?.[0]?.price}
                  </span>
                  <span className={`${styles.text} ${styles.textNota}`}>
                    Net de TVA par participant
                  </span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className={styles.btnUiContainer}>
            <Button btnLocation="bookingCard" />
          </div>
        </div>
      )}
      {isNotAdherent && eventContent.pricing?.[1] && (
        <div className={styles.textContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.titleInfoWrapper}>
              <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
              <span className={styles.text}>Date</span>
            </div>
            <div className={styles.infoWrapper}>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[1]?.date} |{" "}
              </span>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[1]?.time}
              </span>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.titleInfoWrapper}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              <span className={styles.text}>Durée</span>
            </div>
            <div className={styles.infoWrapper}>
              <span className={`${styles.text} ${styles.textStrong}`}>
                {eventContent.pricing?.[1]?.duration}
              </span>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.titleInfoWrapper}>
              <FontAwesomeIcon icon={faEuroSign} className={styles.icon} />
              <span className={styles.text}>Prix</span>
            </div>
            <div className={styles.infoWrapper}>
              <span className={`${styles.text} ${styles.textPrice}`}>
                {eventContent.pricing?.[1]?.price}
              </span>
              <span className={`${styles.text} ${styles.textNota}`}>
                Net de TVA par participant
              </span>
            </div>
          </div>
          <div className={styles.btnUiContainer}>
            <Button btnLocation="bookingCard" />
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingCard;
