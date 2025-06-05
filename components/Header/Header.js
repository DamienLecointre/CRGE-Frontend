import React from "react";

//NEXT IMPORTS
import Image from "next/image";

//COMPONENTS IMPORTS
import Nav from "./Nav";
// import AdherentBtn from "../UIKit/AdherentBtn";

//STYLES IMPORTS
import styles from "../../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Image
        src="/logo_icons/logoTxt.svg"
        alt="logo CRGE avec texte"
        height={100}
        width={200}
        style={{ objectFit: "contain" }}
      />
      <Nav />
      {/* <AdherentBtn /> */}
    </div>
  );
}

export default Header;
