//REACT IMPORTS
import React from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";

//COMPONENTS IMPORTS
import Nav from "./Nav";

//STYLES IMPORTS
import styles from "../../styles/Header/Header.module.css";

function Header() {
  return (
    <header className={`paddingInline ${styles.responsivepaddingInline}`}>
      <div className={`sectionWrapper ${styles.headerContainer}`}>
        <Link href={"/"}>
          <Image
            className={styles.imgContainer}
            src="/logo_icons/logoTxt.svg"
            alt="logo CRGE avec texte"
            height={100}
            width={200}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
