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

  const findServicesData = servicesData.find(
    (data) => data.serviceData.title === servicesContent
  );
  const selectedServicesData = findServicesData.serviceData;
  if (!selectedServicesData) {
    return null;
  }
  console.log("selectedServicesData : ", selectedServicesData);

  // CONST TO DISPLAY OFFERS
  const offersSection = selectedServicesData.sections.find(
    (section) => section.type === "offers"
  );
  if (!offersSection) {
    return null;
  }
  console.log("offersSection : ", offersSection);

  const offersContent = offersSection?.items || "";
  if (!offersContent) {
    return null;
  }

  console.log("offersContent : ", offersContent);

  // ---------------------------------------
  // FUNCTION TO SELECT MATCHING OFFERS DATA
  // ---------------------------------------

  const offers = offersContent.map((data, i) => {
    const offersDetails = data.details.map((data, i) =>
      data ? (
        <div className={styles.sectionDetailContainer}>
          <Image
            className={styles.serviceLeafIllustration}
            src="/illustrations/greenLeaf.svg"
            alt="illustration feuille verte"
            height={12}
            width={12}
          />
          <p key={i} className={styles.sectionDetail}>
            {data}
          </p>
        </div>
      ) : (
        ""
      )
    );
    return (
      <div key={i}>
        <h3 className={styles.sectionSubtitle}>
          {data.title ? data.title : ""}
        </h3>
        <h4 className={styles.paragraphTitle}>
          {data.subtitle ? data.subtitle : ""}
        </h4>

        {offersDetails}
        {data.picture ? (
          <Image
            className={styles.illustartion}
            src={data.picture}
            alt={data.picture}
            height={180}
            width={170}
          />
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <h2 className={styles.sectionTitle}>Niveaux d'offre</h2>
      {offers}
    </div>
  );
}

export default OffersSection;
