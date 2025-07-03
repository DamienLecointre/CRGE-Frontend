//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";
import { useRouter } from "next/router";

//COMPONENTS IMPORTS
import Button from "./UIKit/Button";

//STYLES IMPORTS
import styles from "../styles/JoinUs.module.css";

function JoinUs() {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  const handleClickGoToSignUp = () => {
    router.push("/signUp");
  };

  return (
    <div className={`paddingInline ${styles.joinUsContainer}`}>
      <div className={`sectionWrapper ${styles.joinUsWrapper}`}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <Image
              className={styles.actualiteLeafIllustration}
              src="/illustrations/greenLeaf.svg"
              alt="illustration feuille verte"
              height={110}
              width={110}
            />
            <h2 className={styles.title}>Rejoignez le CRGE</h2>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              Vous êtes une entreprise engagée dans la responsabilité sociétale
              et le développement durable ? Vous souhaitez mutualiser vos
              besoins en recrutement et sécuriser vos parcours professionnels ?
            </p>
            <p className={styles.text}>
              Le CRGE est là pour vous accompagner !
            </p>
          </div>
          <Button
            btnLocation="joinUs"
            btnStyle="white"
            onClickSignup={handleClickGoToSignUp}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.illustartion}
            src="/illustrations/rejoindre.svg"
            alt="illustration femme qui tend la main"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
