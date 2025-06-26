//REACT IMPORTS
import React, { useEffect } from "react";

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

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  useEffect(() => {
    dispatch(addContentToHero("actualite"));
  }, []);

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
      <Hero heroStyle={"whiteBg"} />
      <div className={"paddingInline"}>
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
          <ActualiteCards pageLocation="actualité" cardsData={actualites} />
          <div className={styles.btnContainer}>
            <Button btnLocation="actualité" />
          </div>
        </div>
      </div>
      <Footer />
      <Mentions />
    </div>
  );
}

export default Actualite;
