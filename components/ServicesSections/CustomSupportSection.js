//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/ServicesSections/OffersSection.module.css";

function CustomSupportSection() {
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

  console.log("selectedServicesData : ", selectedServicesData);

  // CONST TO DISPLAY OFFERS PRICING DATA
  const offersCustomSupportData = selectedServicesData.sections.find(
    (section) => section.type === "custom_support"
  );

  // console.log("offersCustomSupportData : ", offersCustomSupportData);

  // CONST TO DISPLAY CUSTOM SUPPORT

  const offersCustomSupport = offersCustomSupportData?.topics.map((data, i) => (
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
  return (
    <div>
      {offersCustomSupport && (
        <div>
          <h3 className={styles.sectionSubtitle}>
            Des accompagnements sur-mesure
          </h3>
          <h4 className={styles.paragraphTitle}>Quelles thématiques ?</h4>
          {offersCustomSupport}
        </div>
      )}
    </div>
  );
}

export default CustomSupportSection;
