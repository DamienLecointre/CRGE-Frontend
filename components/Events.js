//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";
import { useSelector } from "react-redux";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import ActualiteCards from "./UIKit/actualiteCards";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/Events.module.css";

function Events() {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST DISPLAY PERMISSION TO UPDATE WEBSITE
  const allowToUpdateFile = useSelector((state) => state.connection.value);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  const dispatch = useDispatch();
  const updateHeroContent = (pageLocation) => {
    dispatch(addContentToHero(pageLocation));
  };

  useEffect(() => {
    updateHeroContent("events");
  }, []);

  // ------------------------------
  // HANDLE CLICK TO UPDATE SECTION
  // ------------------------------

  const handleClickToCreateEvent = () => {
    // console.log("edit");
    router.push("/edit/eventsEdit");
  };

  return (
    <div className={styles.sectionContainer}>
      <Header />
      <Hero />
      <div className={"paddingInline"}>
        <div className={"sectionWrapper"}>
          {allowToUpdateFile.isAdmin === true && (
            <span className={styles.updateText}>
              Modifier le contenu de cette section
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={styles.updateIcon}
                onClick={handleClickToCreateEvent}
              />
            </span>
          )}
          <ActualiteCards />
        </div>
      </div>
    </div>
  );
}

export default Events;
