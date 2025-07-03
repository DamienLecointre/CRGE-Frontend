//REACT IMPORTS
import React, { useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useSelector } from "react-redux"; //
import { useDispatch } from "react-redux";
import { addContentToHero } from "../reducers/heros";
import {
  setHomepageData,
  setLoading,
  setError,
} from "../reducers/homepageSlice";

//COMPONENTS IMPORTS
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import NavBurgerMenu from "./Header/NavBurgerMenu";
import ServiceCards from "./UIKit/ServiceCards";
import ActualiteCards from "./UIKit/ActualiteCards";
import EventCards from "./UIKit/EventCards";
import JoinUs from "./JoinUs";
import SocialNetworks from "./SocialNetworks";
import Footer from "./UIKit/Footer";
import Mentions from "./UIKit/Mentions";
import Button from "../components/UIKit/Button";

//STYLES IMPORTS
import styles from "../styles/Home.module.css";

const backendHeroData = process.env.NEXT_PUBLIC_URL_BACKEND_HERO_CONTENT;
const backendNavData = process.env.NEXT_PUBLIC_URL_BACKEND_NAV_CONTENT;
const backendServiceCardsData =
  process.env.NEXT_PUBLIC_URL_BACKEND_SERVICECARDS_CONTENT;
const backendActualiteData =
  process.env.NEXT_PUBLIC_URL_BACKEND_ACTUALITE_CONTENT;
const backendEventData = process.env.NEXT_PUBLIC_URL_BACKEND_EVENT_CONTENT;

function Home() {
  // CONST DISPATCH
  const dispatch = useDispatch();

  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST TO SHOW LOADING OR ERROR
  const { loading, error } = useSelector((state) => state.homepage);

  // CONST TO GET SERVICECARDS DATA
  const { serviceCards } = useSelector((state) => state.homepage);

  // CONST TO GET ACTUCARDS DATA
  const { actualites } = useSelector((state) => state.homepage);

  // CONST TO GET ACTUCARDS DATA
  const { events } = useSelector((state) => state.homepage);

  // ----------------------
  // DISPATCH HERO CONTENTS
  // ----------------------

  useEffect(() => {
    dispatch(addContentToHero("home"));
  }, []);

  // -----------------------------
  // FUNCTION TO DISPLAY HOME DATA
  // -----------------------------

  useEffect(() => {
    async function fetchHomepageData() {
      dispatch(setLoading(true));
      try {
        const [heroRes, navRes, serviceRes, actuRes, eventRes] =
          await Promise.all([
            fetch(`${backendHeroData}`),
            fetch(`${backendNavData}`),
            fetch(`${backendServiceCardsData}`),
            fetch(`${backendActualiteData}`),
            fetch(`${backendEventData}`),
          ]);

        if (
          !heroRes.ok ||
          !navRes.ok ||
          !serviceRes.ok ||
          !actuRes.ok ||
          !eventRes.ok
        ) {
          throw new Error("Erreur serveur");
        }

        const [heroData, navData, serviceData, actuData, eventData] =
          await Promise.all([
            heroRes.json(),
            navRes.json(),
            serviceRes.json(),
            actuRes.json(),
            eventRes.json(),
          ]);
        // console.log(
        //   "heroPromise :",
        //   heroData,
        //   "navPromise :",
        //   navData,
        //   "servicePromise :",
        //   serviceData,
        //   "actuPromise :",
        //   actuData,
        //   "eventPromise :",
        //   eventData
        // );

        dispatch(
          setHomepageData({
            heroData: heroData.heroData,
            navData: navData.navData,
            serviceCards: serviceData.serviceCardsData[0].cardsData,
            actualites: actuData.actualiteData,
            events: eventData.eventData,
          })
        );
      } catch (err) {
        console.error("Erreur fetch home :", err);
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchHomepageData();
  }, []);

  if (loading) return <div className={styles.loading}>Chargement...</div>;
  if (error) return <div className={styles.error}>Erreur : {error}</div>;

  // ----------------------------
  // FUNCTION TO GO TO ACTUALITE PAGE
  // ----------------------------

  const handleClickGoToActualite = () => {
    // console.log("event page");
    router.push("/actualite");
  };

  // ----------------------------
  // FUNCTION TO GO TO EVENT PAGE
  // ----------------------------

  const handleClickGoToEvents = () => {
    // console.log("event page");
    router.push("/events");
  };

  return (
    <div className={styles.sectionContainer}>
      <Header />
      <main>
        <Hero heroStyle={"whiteBg"} />
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <div class="sectionWrapper">
            <Button btnStyle="black" btnLocation="hero" />
          </div>
        </div>
        <NavBurgerMenu />
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <div className={`sectionWrapper ${styles.sectionMarginTop}`}>
            <Image
              className={styles.serviceLeafIllustration}
              src="/illustrations/greenLeaf.svg"
              alt="illustration feuille verte"
              height={110}
              width={110}
            />
            <h2
              className={`${styles.sectionTitle} ${styles.sectionTitleMargin}`}
            >
              Des services sur mesure pour votre réussite
            </h2>
            <ServiceCards cardsData={serviceCards} />
          </div>
        </div>
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <div className={`sectionWrapper ${styles.sectionMarginTop}`}>
            <Image
              className={styles.actualiteLeafIllustration}
              src="/illustrations/greenLeaf.svg"
              alt="illustration feuille verte"
              height={110}
              width={110}
            />
            <h2
              className={`${styles.sectionTitle} ${styles.sectionTitleMargin}`}
            >
              Actualité
            </h2>
          </div>
        </div>
        <div
          className={`sectionPaddingInline ${styles.actualiteContainer} ${styles.responsivepaddingInline}`}
        >
          <Image
            className={styles.actualiteIllustartion}
            src="/illustrations/actualite.svg"
            alt="illustration homme assis entrain de lire"
            height={350}
            width={400}
          />
          <h5 className={styles.actualiteTitle}>Restez informé</h5>
          <ActualiteCards pageLocation="homeActualite" cardsData={actualites} />
        </div>
        <div className={`paddingInline ${styles.responsivepaddingInline}`}>
          <div className={styles.actualiteBtn}>
            <Button
              btnStyle="black"
              btnLocation="homeActualite"
              onClickToActualite={handleClickGoToActualite}
            />
          </div>
        </div>
        <div
          className={`paddingInline ${styles.eventsContainer} ${styles.sectionMarginTop} ${styles.responsivepaddingInline}`}
        >
          <div className={`sectionWrapper ${styles.eventsContainer}`}>
            <div className={styles.textContainer}>
              <div className={styles.titleContainer}>
                <Image
                  className={styles.eventLeafIllustration}
                  src="/illustrations/greenLeaf.svg"
                  alt="illustration feuille verte"
                  height={110}
                  width={110}
                />
                <h2 className={`${styles.sectionTitle} ${styles.eventTitle}`}>
                  Rejoignez-nous lors de nos formations & webinaires.
                </h2>
              </div>
              <p className={styles.eventParagraph}>
                Participez à nos événements professionnels pour élargir vos
                connaissances et votre réseau. Consultez notre calendrier
                d'événements pour trouver des opportunités de développement
                professionnel passionnantes.
              </p>
              <Button
                btnStyle="black"
                btnLocation="homeEvents"
                onClickToEvents={handleClickGoToEvents}
              />
            </div>
            <div className={styles.eventsCardsContainer}>
              <EventCards pageLocation="homeEvents" cardsData={events} />
            </div>
          </div>
        </div>
        <JoinUs />
        <SocialNetworks />
      </main>
      <footer>
        <Footer />
        <Mentions />
      </footer>
    </div>
  );
}

export default Home;
