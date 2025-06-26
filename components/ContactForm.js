//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Button from "./UIKit/Button";

//STYLES IMPORTS
import styles from "../styles/Contact.module.css";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

function ContactForm() {
  // CONST DISPATCH
  const dispatch = useDispatch();

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST FOR HERO CONTENT FIELD
  const herosContent = useSelector((state) => state.heros.value);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("contactForm"));
  }, []);

  // CONST URL CUSTOM DISPLAY
  const displayNames = {
    contactForm: ["Nous contacter"],
  };

  // CONST TO CUT URL IN DIFFERENTS PARTS
  const rawSegments =
    router.pathname === "/"
      ? ["Accueil"]
      : ["Accueil", ...router.pathname.split("/").filter(Boolean)];

  const displaySegments = rawSegments.flatMap((segment) => {
    const value = displayNames[segment];
    return Array.isArray(value) ? value : value || segment;
  });

  // ------------------------------
  // FUNCTION TO DISPLAY BREADCRUMB
  // ------------------------------

  const breadcrumb = () => {
    return (
      herosContent !== "home" && (
        <ul className={styles.breadcrumb}>
          {displaySegments.map((segment, index) => {
            const isLast = index === displaySegments.length - 1;
            return (
              <li
                key={index}
                className={`${styles.linkBreadcrumb} ${
                  isLast ? styles.lastBreadcrumb : ""
                }`}
              >
                {index === 0 && index !== isLast ? (
                  <Link href="/" className={styles.linkBreadcrumb}>
                    {segment}
                  </Link>
                ) : (
                  segment
                )}
              </li>
            );
          })}
        </ul>
      )
    );
  };

  // ---------------------
  // FUNCTION TO SEND FORM
  // ---------------------

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <Header />
      <main>
        <Hero heroStyle={"blueBg"} />
        <div className={`paddingInline`}>
          <div className={`sectionWrapper ${styles.section}`}>
            {/* File d'ariane  */}
            {breadcrumb()}
            <div className={styles.container}>
              <div className={styles.formContainer}>
                <div className={styles.textWrapper}>
                  <p className={styles.text}>
                    Vous souhaitez en savoir plus sur les Groupements
                    d'Employeurs et sur notre offre de conseil et de ressource ?
                  </p>
                  <p className={styles.text}>N'hésitez pas à nous contacter.</p>
                  <p className={styles.text}>
                    Nous vous répondrons dans les meilleurs délais.
                  </p>
                </div>
                <div className={styles.inputContainerSidebySide}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="firstName" className={styles.label}>
                      Prénom <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label htmlFor="lastName" className={styles.label}>
                      Nom <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="structureName" className={styles.label}>
                    Structure <span className={styles.asterisk}>*</span>
                  </label>
                  <input
                    type="text"
                    name="structureName"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainerSidebySide}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="email" className={styles.label}>
                      Adresse email <span className={styles.asterisk}>*</span>
                    </label>
                    <input type="text" name="email" className={styles.input} />
                  </div>
                  <div className={styles.inputContainer}>
                    <label htmlFor="phoneNumber" className={styles.label}>
                      Numéro de téléphone
                      <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="message" className={styles.label}>
                    Votre message
                    <span className={styles.asterisk}>*</span>
                  </label>
                  <textarea
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                  ></textarea>
                  <h6 className={styles.textAreaCounter}>0/180</h6>
                  <input type="checkbox" name="" />
                  <h6>
                    Les champs avec un astérisque (
                    <span className={styles.asterisk}>*</span>) sont
                    obligatoires.
                  </h6>
                </div>
                <Button
                  btnLocation="contactForm"
                  onClickToSendContactForm={handleSubmit}
                />
              </div>
              <div className={styles.contactContainer}>
                <div className={styles.contactWrapper}>
                  <h3 className={styles.contactTitle}>Nos coordonnées</h3>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactSubtitle}>Adresse postale</h4>
                    <h5 className={styles.contactDetail}>
                      47 Promenade des Cours
                    </h5>
                    <h5 className={styles.contactDetail}>86000 POITIERS</h5>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactSubtitle}>Téléphone</h4>
                    <a href="tel:0549882557" className={styles.contactLink}>
                      05 49 88 25 57
                    </a>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactSubtitle}>E-mail</h4>
                    <a
                      href="mailto:contact@crge.com"
                      className={styles.contactLink}
                    >
                      contact@crge.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Mentions />
      </main>
    </div>
  );
}

export default ContactForm;
