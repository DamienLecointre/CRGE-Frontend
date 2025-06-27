//REACT IMPORTS
import React, { useEffect, useState } from "react";

//NEXT IMPORTS
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import ActualiteCards from "./UIKit/ActualiteCards";
import Button from "../components/UIKit/Button";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/Actualite.module.css";

function Actualite() {
  const dispatch = useDispatch();
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST DISPLAY PERMISSION TO UPDATE WEBSITE
  const allowToUpdateFile = useSelector((state) => state.connection.value);
  const actualites = useSelector((state) => state.homepage.actualites);

  // CONST TO KNOW HOW MUCH CARDS SHOWN
  const [visibleCount, setVisibleCount] = useState(12);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("actualite"));
  }, []);

  // -------------------------------
  // HANDLE CLICK TO SHOW MORE CARDS
  // -------------------------------

  const handleClickToLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const hasMoreCards = visibleCount < actualites.length;

  // ------------------------------
  // HANDLE CLICK TO UPDATE SECTION
  // ------------------------------

  const handleClickToCreateActu = () => {
    console.log("edit");
    // router.push("/actualiteDetail");
  };

  return (
    <div>
      <Header />
      <main>
        <Hero heroStyle={"whiteBg"} />
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <div className={"sectionWrapper"}>
            {allowToUpdateFile.isAdmin === true && (
              <span className={styles.updateText}>
                Modifier le contenu de cette section
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={styles.updateIcon}
                  // onClick={handleClickToCreateActu}
                />
              </span>
            )}
            <ActualiteCards
              pageLocation="actualité"
              cardsData={actualites}
              visibleCount={visibleCount}
            />
            {hasMoreCards && (
              <div className={styles.btnContainer}>
                <Button
                  btnLocation="actualité"
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

export default Actualite;
