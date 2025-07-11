//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/ServicesSections/OffersSection.module.css";

function OffersSection() {
  // CONST TO GET SERVICES DATA
  const servicesData = useSelector((state) => state.homepage.services);

  // CONST TO GET SERVICES TITLE
  const servicesContent = useSelector((state) => state.services.value);

  // SÉCURISATION : IF DATA NOT FOUND
  if (!servicesData || !servicesContent) return null;

  // CONST TO DISPLAY FIND SERVICES DATA
  const findServicesData = servicesData.find(
    (data) => data.serviceData.title === servicesContent
  );

  // CONST TO DISPLAY SELECTED SERVICES DATA
  const selectedServicesData = findServicesData.serviceData;
  if (!selectedServicesData) {
    return null;
  }

  // CONST TO DISPLAY OFFERS
  const offersSection = selectedServicesData.sections.find(
    (section) => section.type === "offers"
  );
  if (!offersSection) {
    return null;
  }

  // CONST TO DISPLAY OFFERS CONTENT
  const offersContent = offersSection?.items || "";
  if (!offersContent) {
    return null;
  }

  // CONST TO DISPLAY SELECTED SERVICES DATA
  const offersScopeSection = selectedServicesData.sections.find(
    (section) => section.type === "offer_scope"
  );

  // CONST TO DISPLAY OFFERS PRICING DATA
  const offersPricingData = selectedServicesData.sections.find(
    (section) => section.type === "pricing_offers"
  );

  // ---------------------------------------
  // FUNCTION TO SELECT MATCHING OFFERS DATA
  // ---------------------------------------

  const offers = offersContent.map((data, i) => {
    const offersDetails = data.details.map((data, i) =>
      data ? (
        <div key={i} className={styles.sectionDetailWrapper}>
          <Image
            className={styles.serviceLeafIllustration}
            src="/illustrations/greenLeaf.svg"
            alt="illustration feuille verte"
            height={12}
            width={12}
          />
          <p className={`${styles.sectionDetail} ${styles.padding}`}>{data}</p>
        </div>
      ) : (
        ""
      )
    );
    return (
      <div key={i} className={styles.sectionDetailContainer}>
        {data.title && <h3 className={styles.sectionSubtitle}>{data.title}</h3>}
        {data.picture && (
          <Image
            className={styles.illustartion}
            src={data.picture}
            alt={`Illustration ${data.title}`}
            height={180}
            width={170}
          />
        )}
        {data.subtitle && (
          <h4 className={styles.paragraphTitle}>{data.subtitle}</h4>
        )}
        {offersDetails}
      </div>
    );
  });

  // CONST TO DISPLAY OFFERS SCOPE DATA
  let offersScopeExclusions = null;

  if (offersScopeSection?.exclusions) {
    offersScopeExclusions = offersScopeSection.exclusions.map((data, i) => (
      <div key={i} className={styles.sectionDetailWrapper}>
        <Image
          className={styles.serviceLeafIllustration}
          src="/illustrations/greenLeaf.svg"
          alt="illustration feuille verte"
          height={12}
          width={12}
        />
        <p className={`${styles.sectionDetail} ${styles.padding}`}>{data}</p>
      </div>
    ));
  }

  const offersScope = offersScopeSection ? (
    <>
      <p className={`${styles.sectionDetail} ${styles.margin}`}>
        {offersScopeSection.content}
      </p>
      <p
        className={`${styles.sectionDetail} ${styles.margin} ${styles.strong}`}
      >
        N'est pas considérée comme une question juridique et n'entre donc pas
        dans le cadre de l'abonnement juridique :
      </p>
      <div>{offersScopeExclusions}</div>
    </>
  ) : null;

  // CONST TO DISPLAY CARDS OFFERS SCOPE

  const offersPricing = offersPricingData?.pricing.map((data, i) => (
    <div key={i} className={styles.offersPricingContent}>
      <h5 className={styles.offersPricingTitle}>{data.title}</h5>
      <h6 className={styles.offersPricingPrice}>{data.price}</h6>
      <span className={styles.nota}>{data.unit}</span>
    </div>
  ));

  return (
    <div className={styles.offersContainer}>
      <h2 className={styles.sectionTitle}>Niveaux d'offre</h2>
      {offers}
      {offersScopeExclusions && (
        <div className={styles.offersScopeContainer}>
          {offersScope}
          <p className={`${styles.sectionDetail} ${styles.margin}`}>
            Toutefois, si la question posée nécessite l'examen partiel et ciblé
            d'un document relatif à un acte juridique pour apporter une réponse
            circonstanciée, il est admis que cette situation entre dans le cadre
            de l'abonnement juridique.
          </p>
          <p
            className={`${styles.sectionDetail} ${styles.margin} ${styles.strong}`}
          >
            N'entre pas non plus dans le cadre de l'abonnement juridique :
          </p>
          <p className={`${styles.sectionDetail} ${styles.margin}`}>
            toute demande faisant ou étant susceptible de faire l'objet d'une
            prestation de service dédiée de la part de CRGE.
          </p>
          <h4 className={styles.paragraphTitle}>Comment y accéder ?</h4>
          <p className={`${styles.sectionDetail} ${styles.margin}`}>
            {offersScopeSection?.access}
          </p>
        </div>
      )}
      {offersPricing && (
        <div className={styles.offersPricingContainer}>
          <div className={styles.offersPricingWrapper}>{offersPricing}</div>
          <p
            className={`${styles.sectionDetail} ${styles.margin} ${styles.nota}`}
          >
            * Forfait unique par GE sur l'année : en cas de dépassement du
            forfait annuel, les questions supplémentaires seront facturées au
            prix unitaire correspondant au forfait contractualisé. Pas de report
            de questions restantes d'une année sur l'autre : un forfait = une
            année civile.
          </p>
        </div>
      )}
    </div>
  );
}

export default OffersSection;
