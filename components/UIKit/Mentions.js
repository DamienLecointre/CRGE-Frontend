//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Footer.module.css";

function Mentions() {
  return (
    <div className={styles.mentionsContainer}>
      <div className={styles.mentionsWrapper}>
        <h6 className={styles.text}>Mentions légales</h6>
        <h6 className={styles.text}>Politique de confidentialité</h6>
        <h6 className={styles.text}>Gestion des cookies</h6>
      </div>
      <div className={styles.madeContainer}>
        <h6 className={styles.text}>
          Mentions légales paticulière : Ce site est une reproduction non
          commerciale réalisée à des fins pédagogiques. Tous droits sur la
          maquette graphique appartiennent à l'
          <Link
            href="https://agence-sba.com/"
            target="_blank"
            className={styles.websitLink}
          >
            agence SBA
          </Link>
          . Développement effectué par{" "}
          <Link
            href="https://damienlecointre.github.io/"
            target="_blank"
            className={styles.websitLink}
          >
            Damien Lecointre
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Mentions;
