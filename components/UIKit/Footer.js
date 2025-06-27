//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";

//STYLES IMPORTS
import styles from "../../styles/UIKit/Footer.module.css";

function Footer() {
  return (
    <div className={`paddingInline ${styles.footerContainer}`}>
      <div className={`sectionWrapper ${styles.topFooterContainer}`}>
        <div className={styles.contactContainer}>
          <div className={styles.logoContainer}>
            <Link href={"/"}>
              <Image
                src={"/logo_icons/LogoWhite.svg"}
                alt={"logo cgre"}
                // fill={true}
                height={80}
                width={200}
              />
            </Link>
          </div>
          <div className={styles.contactTxtWrapper}>
            <h6 className={`${styles.contactTitle} ${styles.text}`}>
              CENTRE DE RESSOURCES POUR LES GROUPEMENTS D'EMPLOYEURS
            </h6>
            <h6 className={styles.text}>37 rue Carnot - 86000 POITIERS</h6>
            <div className={styles.contact}>
              <h6 className={styles.text}>05 49 88 25 57</h6>
              <Link href={"/contactForm"} className={styles.text}>
                Nous contacter par mail
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.partenaireContainer}>
          <h6 className={styles.text}>Avec le concours financier :</h6>
          <div className={styles.partenaireLogoContainer}>
            <Image
              className={styles.logo}
              src={"/logo_icons/logoNouvelleAquitaine.svg"}
              alt={"logo Nouvelle Aquitaine"}
              height={80}
              width={100}
            />
            <Image
              className={styles.logo}
              src={"/logo_icons/logoNouvelleAquitaineWhite.svg"}
              alt={"logo Nouvelle Aquitaine"}
              height={80}
              width={140}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
