//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTextToSignInButton } from "../../reducers/buttons";

//COMPONENTS IMPORTS
import Button from "../UIKit/Button";

//STYLES IMPORTS
import styles from "../../styles/Hero/Hero.module.css";

function Hero() {
  const herosContent = useSelector((state) => state.heros.value);
  // ----------------------
  // DISPATCH TEXTE BUTTON
  // ----------------------
  const dispatch = useDispatch();

  const updateSignInButtonText = (pageLocation) => {
    dispatch(addTextToSignInButton(pageLocation));
  };

  useEffect(() => {
    updateSignInButtonText("hero");
  }, []);
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.txtContainer}>
          <h1 className={styles.title}>
            {herosContent === "home"
              ? "Une équipe pluridisciplinaire à votre écoute"
              : ""}
          </h1>
          <nav>{herosContent === "home" ? "" : ""}</nav>
          <p className={styles.paragraph}>
            {herosContent === "home"
              ? "Le CRGE, Centre de Ressources pour les Groupements d'Employeurs, est un organisme national qui accompagne les Groupements d'Employeurs (GE) dans leur création, leur développement et leur gestion. Il propose un large éventail de services, notamment : le conseil juridique, social et financier, la formation des gestionnaires de GE, la mise à disposition d'outils et de ressources, ainsi que l'animation du réseau des GE."
              : ""}
          </p>
        </div>
        <Image
          className={styles.illustartion}
          src={herosContent === "home" ? "/illustrations/team.svg" : ""}
          alt={herosContent === "home" ? "/team illustrations" : ""}
          height={500}
          width={600}
        />
      </div>
      <Button btnStyle="black" />
    </div>
  );
}

export default Hero;
