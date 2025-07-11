//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//COMPONENTS IMPORTS
import EventCards from "../UIKit/EventCards";

//STYLES IMPORTS
import styles from "../../styles/ServicesSections/EventsLink.module.css";

function EventsLink() {
  // CONST TO GET SERVICES TITLE
  const servicesContent = useSelector((state) => state.services.value);
  console.log("servicesContent :", servicesContent);

  // CONT TO GET ALL EVENTS
  const events = useSelector((state) => state.homepage.events);
  console.log("events : ", events);

  // CONST TO FILTER EVENTS BY TOPICS
  const filteredEvents = events?.filter(
    (event) => event.topic === servicesContent
  );

  return (
    <div>
      <div className={styles.eventContainer}>
        <h2 className={styles.eventTitle}>Les évènements liés</h2>
        <Image
          className={styles.serviceLeafIllustration}
          src="/illustrations/greenLeaf.svg"
          alt="illustration feuille verte"
          height={110}
          width={110}
        />
      </div>
      {filteredEvents && filteredEvents.length > 0 ? (
        <div className={styles.cardsContainer}>
          <EventCards
            pageLocation="services"
            cardsData={filteredEvents}
            visibleCount={3}
          />
        </div>
      ) : (
        <p className={`${styles.sectionDetail} ${styles.margin}`}>
          Aucun événement lié
        </p>
      )}
    </div>
  );
}

export default EventsLink;
