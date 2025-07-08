//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import NavBurgerMenu from "./Header/NavBurgerMenu";
import Button from "./UIKit/Button";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";

//STYLES IMPORTS
import styles from "../styles/About.module.css";

function About() {
  const dispatch = useDispatch();

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------
  useEffect(() => {
    dispatch(addContentToHero("about"));
  }, []);

  return (
    <>
      <header>
        <Header />
        <Hero heroStyle="blueBg" />
      </header>
      <main>
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <NavBurgerMenu />
          <div className={`sectionWrapper`}>
            <ul className={styles.breadcrumb}>
              <li className={styles.linkBreadcrumb}>
                <a href="/" className={styles.linkBreadcrumb}>
                  Accueil
                </a>
              </li>
              <li className={styles.linkBreadcrumb}>CRGE</li>
              <li
                className={`${styles.linkBreadcrumb} ${styles.lastBreadcrumb}`}
              >
                Qui sommes-nous ?
              </li>
            </ul>
            <div className={styles.introContainer}>
              <p className={styles.paragraph}>
                CRGE est le réseau national qui réunit une centaine de
                Groupements d'Employeurs représentant plus de 5 000 salariés (en
                équivalent temps plein) et autant d'entreprises adhérentes
                intervenant dans tous les secteurs d'activité, de l'agriculture
                à la santé en passant notamment par l'industrie et l'artisanat
                ainsi que par le sport, les loisirs et la culture.
              </p>
              <p className={styles.paragraph}>
                L'association est dirigée par un Conseil d'Administration
                composé de représentants de GE ainsi que de syndicats
                d'employeurs et de salariés qui ont pour projet de « Libérer les
                GE » de sorte qu'ils jouent pleinement leur rôle de création
                d'emplois durables et de sécurisation des parcours
                professionnels dans les territoires.
              </p>
            </div>
            <div className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Notre vision</h2>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Dynamiser les bassins de vie locaux en permettant à chaque
                  personne de s'épanouir dans et par son travail et à chaque
                  employeur de développer son projet,
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Faciliter l'accès à l'emploi grâce à la mutualisation des
                  ressources humaines, via le dispositif GE.
                </p>
              </div>
            </div>
            <div className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Nos valeurs</h2>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/Schema_Nos-Valeurs.png"}
                  alt={"schéma valeur crge"}
                  height={200}
                  width={800}
                />
              </div>
            </div>
            <div className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Nos missions</h2>
              <p className={`${styles.paragraph} ${styles.paragraphMaginBot}`}>
                L'équipe de collaborateurs poursuit au quotidien les objectifs
                suivants :
              </p>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Aider les Groupements d'Employeurs à se mettre en place et à
                  développer, sur leurs territoires, l'emploi à temps partagé de
                  qualité,
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Mettre en réseau les GE de France pour favoriser le partage
                  d'expériences et la création de liens,
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Défendre les intérêts des GE et les représenter au niveau
                  national pour garantir leur fonctionnement et assurer leur
                  pérennité.
                </p>
              </div>
              <div className={styles.subSectionContainer}>
                <div className={styles.subSectionWrapper}>
                  <h3 className={styles.subSectionTitle}>Au service des GE</h3>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Accompagner la création de nouveaux GE
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Conseiller et former les GE
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Apporter des services aux GE
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Représenter et défendre les intérêts professionnels des GE
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Faire évoluer le cadre légal des GE
                    </p>
                  </div>
                </div>
                <div className={styles.subSectionWrapper}>
                  <h3 className={styles.subSectionTitle}>Et plus largement…</h3>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Promouvoir et valoriser les Groupements d'Employeurs
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Observer et recenser les GE (action réalisée uniquement en
                      Nouvelle-Aquitaine)
                    </p>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <Image
                      className={styles.illustartion}
                      src={"/illustrations/greenLeaf.svg"}
                      alt={"feuille verte"}
                      height={20}
                      width={20}
                    />
                    <p className={styles.paragraph}>
                      Encourager le dialogue social dans les Groupements
                      d'Employeurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.illustartionContainer}>
              <Image
                className={styles.illustartion}
                src={
                  "/illustrations/NouveauSiteInternet_Icone_AuServicedesGE.png"
                }
                alt={"icone au service des ge"}
                height={250}
                width={250}
              />
            </div>
            <p className={styles.paragraph}>
              Les personnalités qualifiées et les membres du Bureau sur commande
              du Conseil d'Administration produisent régulièrement des travaux
              de réflexion et d'exploration auprès des GE qui donnent lieu à des
              publications régulières :
            </p>
            <div className={styles.publishContainer}>
              <div className={styles.publishTextContainer}>
                <p className={`${styles.paragraph} ${styles.paragraphBold}`}>
                  Pistes de réflexion emploi des seniors et GE 2024
                </p>
                <span
                  className={`${styles.paragraph} ${styles.paragraphLight}`}
                >
                  Publié le 16 décembre 2024 - pdf - 285 Ko
                </span>
              </div>
              <Button btnLocation="about" />
            </div>
            <div className={styles.publishContainer}>
              <div className={styles.publishTextContainer}>
                <p className={`${styles.paragraph} ${styles.paragraphBold}`}>
                  Action « Encourager le dialogue social et la négociation
                  collective dans les Groupements d'Employeurs (GE) »
                </p>
                <span
                  className={`${styles.paragraph} ${styles.paragraphLight}`}
                >
                  Publié le 16 décembre 2024 - pdf - 226 Ko
                </span>
              </div>
              <Button btnLocation="about" />
            </div>
            <div className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Notre expertise</h2>
              <h3 className={styles.subSectionTitle}>
                25 ans au service du développement et de la professionnalisation
                des Groupements d'Employeurs
              </h3>
              <p className={`${styles.paragraph} ${styles.paragraphMaginBot}`}>
                Chaque année :
              </p>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  1000 réponses juridiques apportées
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  1800 bulletins de paye de salariés de GE réalisés
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  20 sessions de formation organisées ; 120 stagiaires formés ;
                  200 heures de formation dispensées
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>35 newsletters diffusées</p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>30 webinaires animés</p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  15 porteurs de projets de GE rencontrés
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Une vingtaine d'actions conduites pour faire évoluer le cadre
                  légal des GE et leur apporter des réponses fiables quant à
                  l'application des textes. CRGE est la seule organisation de GE
                  déclarée en tant que représentant des intérêts des GE auprès
                  de la Haute Autorité pour la Transparence de la Vie Publique.
                </p>
              </div>
              <h3 className={styles.subSectionTitle}>
                Des partenaires réputés, à nos côtés depuis de nombreuses années
              </h3>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Expert juridique associé : Pierre Fadeuilhe - Avocat à la Cour
                  et Maître de conférences à l'Université de Toulouse spécialisé
                  dans les aspects stratégiques et juridiques des Groupements
                  d'Employeurs.
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Partenaires juridiques : Arnaud Pilloix et Laurène Deschet -
                  Avocats spécialisés en droit du travail et droit de la
                  sécurité sociale - Cabinet Ellipse Avocats.
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Partenaire privilégié : Jean Dalichoux - Consultant sénior
                  spécialisé dans les Groupements d'Employeurs et fondateur du
                  cabinet ASPARAGUS.
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <Image
                  className={styles.illustartion}
                  src={"/illustrations/greenLeaf.svg"}
                  alt={"feuille verte"}
                  height={20}
                  width={20}
                />
                <p className={styles.paragraph}>
                  Partenaires spécialisés : LFC Dialogue Social et La Faabrick
                  Cherdet
                </p>
              </div>
              <h3 className={styles.subSectionTitle}>
                Un développement des GE corrélé aux actions de CRGE
              </h3>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    1986 :{" "}
                  </span>
                  Monsieur France Joubert - toujours membre du Bureau de CRGE à
                  ce jour - alors secrétaire régional de la CFDT contribue au
                  lancement, dans la région Poitou-Charentes, des premiers GE
                  agricoles de France
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    1989 :{" "}
                  </span>
                  La Région Poitou-Charentes encourage la création de GLEPA
                  (Groupements Locaux d'Employeurs en Agriculture) pour
                  favoriser l'emploi en milieu rural
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    1997 :{" "}
                  </span>
                  Les premiers GE dans l'artisanat voient le jour dans les
                  Deux-Sèvres, en Poitou-Charentes
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    1999 :{" "}
                  </span>
                  AVERTIR (Association Volontaire pour l'Emploi, la
                  Reconversion, le Travail, l'Insertion et la Réussite),
                  association paritaire préfiguratrice de CRGE, est créée à
                  l'initiative de France Joubert
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    2000 :{" "}
                  </span>
                  L'activité de CRGE (à l'époque appelé C2RGE : Centre de
                  Ressources Régional pour les GE) démarre
                </p>
              </div>
              <h3 className={styles.subSectionTitle}>
                CRGE, première structure à avoir fédéré des GE de toute la
                France
              </h3>
              <p className={`${styles.paragraph} ${styles.paragraphMaginBot}`}>
                Dès sa création, CRGE historiquement de dimension régionale
                accueille des GE de toute la France.
              </p>
              <p className={`${styles.paragraph} ${styles.paragraphMaginBot}`}>
                A ce jour, il réunit 120 GE de toute taille (représentant plus
                de 5 000 salariés en équivalent temps plein et autant
                d'entreprises adhérentes) intervenant dans tous les secteurs
                d'activités et implantés dans toutes les régions de France.
              </p>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    2006 :{" "}
                  </span>
                  CRGE organise à La Rochelle la convention européenne des GE
                  avant d'installer en 2008, à Bruxelles, le CERGE (Centre
                  Européen de Ressources pour les Groupements d'Employeurs)
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    Depuis 2007 :{" "}
                  </span>
                  Chaque année, CRGE accueille une quarantaine de GE lors du
                  séminaire national annuel
                </p>
              </div>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  <span
                    className={`${styles.paragraph} ${styles.paragraphBold}`}
                  >
                    2022 :{" "}
                  </span>
                  CRGE lance le séminaire d'hiver des GE qui se tient au mois de
                  décembre à Paris
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Mentions />
      </main>
    </>
  );
}

export default About;
