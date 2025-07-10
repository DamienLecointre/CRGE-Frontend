//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//STYLES IMPORTS
import styles from "../../styles/ServicesSections/TeamSection.module.css";

function TeamSection() {
  // CONST TO GET SERVICES DATA
  const servicesData = useSelector((state) => state.homepage.services);

  // CONST TO GET SERVICES TITLE
  const servicesContent = useSelector((state) => state.services.value);

  // SÉCURISATION : IF DATA NOT FOUND
  if (!servicesData || !servicesContent) return null;

  // -------------------------------------
  // FUNCTION TO SELECT MATCHING TEAM DATA
  // -------------------------------------

  const findServicesData = servicesData.find(
    (data) => data.serviceData.title === servicesContent
  );
  const selectedServicesData = findServicesData.serviceData;

  // CONST TO DISPLAY INTRO
  const introSection = selectedServicesData.sections.find(
    (section) => section.type === "intro"
  );
  const introContent = introSection?.content || "";

  // --------------------------------
  // FUNCTION TO DISPLAY TEAM DETAILS
  // --------------------------------

  const teamSection = selectedServicesData.sections.find(
    (section) => section.type === "team"
  );

  const teamDetailData = teamSection?.members || [];

  let hasShownAvocatTitle = false;
  let hasShownSubTitle = false;

  const teamDetails =
    teamDetailData.length > 0
      ? teamDetailData.map((data, i) => {
          const showAvocatTitle =
            data.name.endsWith("Avocat") && !hasShownAvocatTitle;
          if (showAvocatTitle) {
            hasShownAvocatTitle = true;
          }
          const ShownSubTitleExpert =
            data.name === "Pierre FADEUILHE" ||
            (data.name === "Jean DALICHOUX" && !hasShownSubTitle);
          if (ShownSubTitleExpert) {
            hasShownSubTitle = true;
          }
          const ShownSubTitleSalarie =
            !data.name.endsWith("Avocat") &&
            data.name !== "Pierre FADEUILHE" &&
            data.name !== "Jean DALICHOUX" &&
            !hasShownSubTitle;
          if (ShownSubTitleSalarie) {
            hasShownSubTitle = true;
          }
          return (
            <div key={i} className={styles.teamDetailsWrapper}>
              {ShownSubTitleSalarie ? (
                <h3 className={styles.sectionSubtitle}>Salariée de CRGE</h3>
              ) : null}
              {ShownSubTitleExpert ? (
                <h3 className={styles.sectionSubtitle}>Expert associé</h3>
              ) : null}
              {showAvocatTitle ? (
                <h3 className={styles.sectionSubtitle}>
                  Cabinets d'avocats référencés
                </h3>
              ) : null}
              <p className={styles.text}>
                {data.name}
                <span className={`${styles.text} ${styles.textLight}`}>
                  {" "}
                  - {data.role}
                </span>
              </p>
              {data.picture ? (
                <div>
                  <Image
                    className={styles.illustartion}
                    src={data.picture}
                    alt={`${data.name} ${data.role}`}
                    height={180}
                    width={170}
                  />
                </div>
              ) : null}
            </div>
          );
        })
      : null;

  return (
    <>
      <div className={styles.introContainer}>
        <p className={`${styles.text} ${styles.textLight}`}>{introContent}</p>
        {servicesContent !== "Formation" && (
          <h2 className={styles.sectionTitle}>
            Équipe {`${servicesContent}`.toLowerCase()}
          </h2>
        )}
        {teamDetails}
      </div>
    </>
  );
}

export default TeamSection;
