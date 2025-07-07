//REACT IMPORTS
import React, { useEffect, useState } from "react";

//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import EventCards from "./UIKit/EventCards";
import Button from "./UIKit/Button";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

//STYLES IMPORTS
import styles from "../styles/Events.module.css";

function Events() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.homepage.events);

  // CONST TO KNOW HOW MUCH CARDS SHOWN
  const [visibleCount, setVisibleCount] = useState(6);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("events"));
  }, []);

  // -------------------------------
  // HANDLE CLICK TO SHOW MORE CARDS
  // -------------------------------

  const handleClickToLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const hasMoreCards = Array.isArray(events) && visibleCount < events.length;

  if (!Array.isArray(events)) {
    return (
      <div style={{ padding: "100px", fontSize: "24px" }}>
        Chargement des événements...
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Hero heroStyle={"whiteBg"} />
        <div className={`paddingInline ${styles.eventsContainer}`}>
          <div className={`sectionWrapper ${styles.eventsWrapper}`}>
            <EventCards
              pageLocation="events"
              cardsData={events}
              visibleCount={visibleCount}
            />
            {hasMoreCards && (
              <div className={styles.btnContainer}>
                <Button
                  btnLocation="events"
                  onClickToLoadMoreActu={handleClickToLoadMore}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
        <Mentions />
      </footer>
    </div>
  );
}

export default Events;
