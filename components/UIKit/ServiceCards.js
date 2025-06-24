//REACT IMPORTS
import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import Image from "next/image";

//STYLES IMPORTS
import styles from "../../styles/UIKit/serviceCard.module.css";

const backendServiceCardsContent =
  process.env.NEXT_PUBLIC_URL_BACKEND_SERVICECARDS_CONTENT;

function ServiceCards() {
  // CONST FOR SERVICECARDS CONTENT FIELD
  const [serviceCardsDataFromDb, setServiceCardsDataFromDb] = useState([]);

  // CONST FOR CARROUSSEL
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const totalCards = serviceCardsDataFromDb.length;

  const maxIndex = Math.max(totalCards - cardsPerPage, 0);
  const handleSpanClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      let newCardsPerPage;
      if (window.innerWidth >= 1024) {
        newCardsPerPage = 3;
      } else if (window.innerWidth >= 768) {
        newCardsPerPage = 2;
      } else {
        newCardsPerPage = 1;
      }

      setCardsPerPage((prev) => {
        const newMaxIndex = Math.max(totalCards - newCardsPerPage, 0);
        if (activeIndex > newMaxIndex) {
          setActiveIndex(newMaxIndex);
        }
        return newCardsPerPage;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, totalCards]);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (swipeDistance < -50 && activeIndex < maxIndex) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // -------------------------------------
  // USEEFFECT TO GET SERVICECARDS CONTENT
  // -------------------------------------

  useEffect(() => {
    fetch(`${backendServiceCardsContent}`)
      .then((response) => {
        if (!response.ok) throw new Error("Serveur doesn't answer");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data && Array.isArray(data.serviceCardsData)) {
          // console.log(data.serviceCardsData[0].cardsData);
          setServiceCardsDataFromDb(data.serviceCardsData[0].cardsData);
        } else {
          console.warn("heroData manquant ou invalide :", data);
        }
      });
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.cardsWrapper}
          style={{
            transform: `translateX(-${(100 / totalCards) * activeIndex}%)`,
            width: `${(100 / cardsPerPage) * totalCards}%`,
          }}
        >
          {serviceCardsDataFromDb.map((data, i) => (
            <div
              key={i}
              className={styles.cardWrapper}
              style={{ width: `${100 / totalCards}%` }}
            >
              <Image
                className={styles.cardImg}
                src={data.img}
                alt={`illustration service ${data.title}`}
                height={200}
                width={200}
              />
              <div className={styles.cardTextWrapper}>
                <h5 className={styles.cardTitle}>{data.title}</h5>
                <p className={styles.cardText}>{data.text}</p>
                <span className={styles.numberBg} data-text={`0${i + 1}`}>
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollBarContainer}>
        {Array.from({ length: totalCards - cardsPerPage + 1 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.scrollBar} ${
              i === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleSpanClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
