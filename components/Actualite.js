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
import ActualiteCards from "./UIKit/ActualiteCards";
import Button from "../components/UIKit/Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/Actualite.module.css";

function Actualite() {
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
    updateHeroContent("actualite");
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
          <ActualiteCards pageLocation="actualité" />
          <div className={styles.btnContainer}>
            <Button btnLocation="actualité" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualite;
