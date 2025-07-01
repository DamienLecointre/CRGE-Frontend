//REACT IMPORTS
import React, { useEffect } from "react";

//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import ActualiteCards from "./UIKit/ActualiteCards";

function Events() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.homepage.events);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("events"));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero heroStyle={"whiteBg"} />
        <div className={`paddingInline`}>
          <div className={"sectionWrapper"}>
            <ActualiteCards
              pageLocation="events"
              cardsData={events}
              // visibleCount={visibleCount}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Events;
