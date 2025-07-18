//REACT IMPORTS
import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/ServicesSections/Funding.module.css";

function Funding() {
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

  // CONST TO DISPLAY FUNDING
  const offersSection = selectedServicesData.sections.find(
    (section) => section.type === "funding"
  );
  if (!offersSection) {
    return null;
  }

  // CONST TO DISPLAY OFFERS CONTENT
  const offersContent = offersSection?.content || "";
  if (!offersContent) {
    return null;
  }

  // ---------------------------------------
  // FUNCTION TO SELECT MATCHING OFFERS DATA
  // ---------------------------------------

  const funding = offersContent.map((data, i) => (
    <p key={i} className={`${styles.sectionDetail} ${styles.margin}`}>
      {data}{" "}
    </p>
  ));

  return (
    <div>
      <h3 className={styles.sectionTitle}>Financements Nouvelle-Aquitaine</h3>
      {funding}
    </div>
  );
}

export default Funding;
