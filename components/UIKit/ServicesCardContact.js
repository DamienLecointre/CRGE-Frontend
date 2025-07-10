//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../../reducers/heros";

//COMPONENTS IMPORTS
import Button from "../UIKit/Button";

//STYLES IMPORTS
import styles from "../../styles/UIKit/ServicesCardContact.module.css";

function ServicesCardContact() {
  const dispatch = useDispatch();

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("servicesCardContact"));
  }, []);

  // ------------------------------
  // FUNCTION TO GO TO FORM CONTACT
  // ------------------------------

  const handleClickGoToContactForm = () => {
    router.push("/contactForm");
  };

  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardtext}>
        Vous souhaitez obtenir des informations supplémentaires ?
      </p>
      <Button
        btnLocation="servicesCardContact"
        onClickToFormContact={handleClickGoToContactForm}
      />
    </div>
  );
}

export default ServicesCardContact;
