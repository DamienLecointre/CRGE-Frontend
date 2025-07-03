//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/SocialNetworks.module.css";

function SocialNetworks() {
  return (
    <div className={`paddingInline ${styles.socialContainer}`}>
      <div className={`sectionWrapper ${styles.socialWrapper}`}>
        <div className={styles.textContainer}>
          <h5 className={styles.title}>Suivez-nous sur les réseaux !</h5>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Quis egestas gravida
            consequat vel in tristique lacus nisl commodo.{" "}
          </p>
          <div className={styles.iconContainer}>
            <Link
              href={
                "https://www.linkedin.com/company/conseil-et-ressource-pour-les-groupements-demployeurs/"
              }
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
            </Link>
            <Link
              href={"https://www.facebook.com/CRGENational"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCLP3V6FhPWm0BS30hxgVrdQ"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.illustartionContainer}>
          <div className={styles.illustartionWrapper}>
            <Image
              className={styles.socialIllustration}
              src="/illustrations/reseauxSociaux.svg"
              alt="illustration réseaux sociaux"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterWrapper}>
            <Image
              className={styles.newsletterIllustration}
              src="/illustrations/mailSent.svg"
              alt="illustration enveloppe qui vole"
              height={450}
              width={350}
            />
            <h5 className={styles.newsletterTitle}>
              Inscrivez-vous à notre newsletter et restez informé !
            </h5>
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className={styles.input}
              />
              <div className={styles.inputIconWrapper}>
                <FontAwesomeIcon
                  className={styles.inputIcon}
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialNetworks;
