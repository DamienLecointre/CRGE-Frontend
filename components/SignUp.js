//REACT IMPORTS
import React, { useEffect, useState } from "react";

//NEXT IMPORTS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { addTextToSignInButton } from "../reducers/buttons";

//COMPONENTS IMPORTS
import Button from "./UIKit/Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

//STYLES IMPORTS
import styles from "../styles/Sign.module.css";

const backendUsersAddNewUsers =
  process.env.NEXT_PUBLIC_URL_BACKEND_USERS_ADDNEWUSERS;

function SignUp() {
  // CONST REDIRECTION TO WEBSITE PAGE
  const router = useRouter();

  // CONST INPUT VALUE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // CONST TO SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // CONST ALERT MESSAGES
  const [isEmptyFiled, setIsEmptyFiled] = useState(false);
  const [isWrongEmailFormat, setIsWrongEmailFormat] = useState(false);
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const [isWrongPasswordFormat, setIsWrongPasswordFormat] = useState(false);
  const [isMatchinPassword, setIsMatchinPassword] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);

  // -------------------------
  // FUNCTION TO SHOW PASSWORD
  // -------------------------
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  // ----------------------
  // DISPATCH TEXTE BUTTON
  // ----------------------
  const dispatch = useDispatch();

  const updateSignInButtonText = (pageLocation) => {
    dispatch(addTextToSignInButton(pageLocation));
  };

  useEffect(() => {
    updateSignInButtonText("signup");
  }, []);

  // ---------------------------
  // // FUNCTION TO HIDDEN ERROR
  // ---------------------------
  const showTemporaryError = (setErrorFunction, duration = 3000) => {
    setErrorFunction(true);
    setTimeout(() => {
      setErrorFunction(false);
    }, duration);
  };

  // ---------------------------
  // HANDLE CLICK CREATE ACCOUNT
  // ---------------------------

  const handleClickSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showTemporaryError(setIsEmptyFiled);
      return;
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      if (!emailRegex.test(email)) {
        showTemporaryError(setIsWrongEmailFormat);
        return;
      }
      if (!passwordRegex.test(password)) {
        showTemporaryError(setIsWrongPasswordFormat);
        return;
      }
      if (password !== confirmPassword) {
        showTemporaryError(setIsMatchinPassword);
        return;
      }
      fetch(`${backendUsersAddNewUsers}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.error === "Email already used") {
            showTemporaryError(setIsEmailUsed);
            return;
          } else {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            showTemporaryError(setIsUserCreated);
            setTimeout(() => {
              setIsUserCreated(false);
              router.push("/");
            }, 3000);
          }
        });
    }
  };

  return (
    <div className={styles.signContainer}>
      <svg
        className={styles.signLogo}
        width="215"
        height="60"
        viewBox="0 0 215 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2385_106240)">
          <path
            d="M92.4602 53.9303C88.7198 53.9303 85.336 53.0608 82.3089 51.3247C79.2789 49.5856 76.8973 47.2158 75.1612 44.2152C73.4221 41.2146 72.5555 37.8692 72.5555 34.1818C72.5555 30.4945 73.4251 27.0871 75.1612 24.1101C76.9002 21.136 79.2818 18.778 82.3089 17.039C85.336 15.2999 88.7198 14.4333 92.4602 14.4333C95.4078 14.4333 98.1608 14.9993 100.716 16.1311C103.269 17.263 105.441 18.8841 107.233 20.9887L101.545 26.754C100.439 25.4394 99.1069 24.452 97.5536 23.7918C96.0002 23.1345 94.3025 22.8043 92.4573 22.8043C90.2968 22.8043 88.3897 23.2907 86.7302 24.2663C85.0708 25.242 83.7798 26.5713 82.8601 28.2573C81.9375 29.9433 81.4777 31.9181 81.4777 34.1818C81.4777 36.4455 81.9375 38.3555 82.8601 40.0681C83.7798 41.7806 85.0708 43.1217 86.7302 44.0973C88.3897 45.073 90.2968 45.5593 92.4573 45.5593C94.2995 45.5593 95.9973 45.2321 97.5536 44.5719C99.1069 43.9146 100.436 42.9272 101.545 41.6096L107.233 47.375C105.441 49.4825 103.269 51.1007 100.716 52.2325C98.1608 53.3644 95.4107 53.9303 92.4602 53.9303Z"
            fill="white"
          />
          <path
            d="M109.523 53.1404V15.2233H118.213V53.1404H109.523ZM118.213 32.0478L115.212 30.5475C115.212 25.7548 116.279 21.8729 118.41 18.8959C120.544 15.9219 123.769 14.4333 128.087 14.4333C129.982 14.4333 131.695 14.7753 133.222 15.4591C134.748 16.1429 136.169 17.2512 137.487 18.778L131.798 24.623C131.114 23.8861 130.348 23.3585 129.508 23.0431C128.665 22.7277 127.692 22.5685 126.584 22.5685C124.161 22.5685 122.16 23.332 120.58 24.8588C119 26.3856 118.21 28.7819 118.21 32.0478H118.213Z"
            fill="white"
          />
          <path
            d="M156.224 53.7475C153.495 53.7475 150.925 53.2317 148.51 52.2001C146.096 51.1684 143.977 49.7301 142.15 47.8878C140.325 46.0456 138.896 43.9057 137.864 41.474C136.832 39.0423 136.317 36.4249 136.317 33.6218C136.317 30.8187 136.841 28.213 137.893 25.7961C138.943 23.382 140.39 21.2628 142.235 19.4353C144.077 17.6108 146.235 16.2018 148.705 15.2056C151.175 14.2093 153.848 13.7112 156.722 13.7112C159.929 13.7112 162.868 14.3007 165.541 15.4797C168.215 16.6587 170.452 18.3359 172.259 20.5111L167.115 25.6546C165.936 24.0334 164.442 22.7984 162.635 21.9495C160.828 21.1006 158.839 20.6792 156.663 20.6792C154.193 20.6792 152.009 21.2244 150.111 22.3091C148.213 23.3968 146.727 24.9177 145.66 26.8719C144.59 28.8261 144.057 31.0751 144.057 33.6188C144.057 36.1625 144.59 38.5235 145.66 40.4748C146.73 42.429 148.177 43.9499 150.002 45.0376C151.826 46.1252 153.881 46.6676 156.168 46.6676C158.638 46.6676 160.74 46.2254 162.473 45.3412C164.206 44.4569 165.532 43.1394 166.455 41.3885C167.375 39.6377 167.837 37.4889 167.837 34.9452L172.76 38.3732L155.729 38.2081V31.5732H175.581V32.6786C175.581 37.3239 174.752 41.2146 173.093 44.3449C171.433 47.4781 169.149 49.8303 166.237 51.3954C163.325 52.9635 159.988 53.7446 156.227 53.7446L156.224 53.7475Z"
            fill="white"
            stroke="white"
            strokeWidth="0.147377"
            strokeMiterlimit="10"
          />
          <path
            d="M197.018 53.9303C193.228 53.9303 189.817 53.0755 186.787 51.363C183.757 49.6535 181.364 47.2954 179.598 44.2919C177.833 41.2913 176.951 37.9193 176.951 34.1789C176.951 30.4385 177.821 27.0842 179.557 24.1072C181.296 21.1331 183.651 18.7751 186.628 17.036C189.602 15.297 192.909 14.4304 196.541 14.4304C200.172 14.4304 203.187 15.2469 205.902 16.8798C208.614 18.5128 210.748 20.7499 212.301 23.5943C213.854 26.4387 214.633 29.678 214.633 33.3094C214.633 33.9402 214.594 34.5857 214.515 35.2459C214.435 35.9062 214.317 36.6283 214.158 37.4182H183.035V30.3088H209.657L206.418 33.1532C206.312 30.8364 205.864 28.8881 205.074 27.3082C204.284 25.7283 203.164 24.5169 201.716 23.6739C200.266 22.8309 198.489 22.4094 196.384 22.4094C194.174 22.4094 192.249 22.8839 190.619 23.8301C188.986 24.7792 187.722 26.1086 186.828 27.8181C185.932 29.5306 185.484 31.5703 185.484 33.9402C185.484 36.31 185.959 38.3909 186.905 40.1801C187.854 41.9722 189.195 43.3546 190.934 44.3273C192.673 45.3029 194.672 45.7892 196.939 45.7892C198.887 45.7892 200.691 45.4473 202.35 44.7635C204.01 44.0797 205.419 43.0775 206.577 41.7629L212.107 47.3721C210.261 49.5326 208.024 51.1626 205.392 52.2709C202.757 53.3762 199.969 53.9303 197.018 53.9303Z"
            fill="white"
          />
          <path
            d="M21.3687 26.1941C20.4549 26.1941 19.5618 26.2796 18.6953 26.4387C18.5066 27.5175 18.4005 28.6229 18.4005 29.7547C18.4005 38.9717 24.9588 46.6559 33.6658 48.3979C35.0659 46.1666 35.8764 43.5285 35.8764 40.6989C35.8764 32.6875 29.383 26.1941 21.3716 26.1941H21.3687Z"
            fill="white"
          />
          <path
            d="M24.832 32.4488C24.1747 32.4488 23.5351 32.5107 22.9102 32.6256C22.7746 33.4008 22.698 34.1937 22.698 35.0072C22.698 41.6274 27.4082 47.1452 33.6599 48.3949C34.665 46.7915 35.2457 44.8962 35.2457 42.8653C35.2457 37.1117 30.5827 32.4458 24.8261 32.4458L24.832 32.4488Z"
            fill="#2B2B5F"
          />
          <path
            d="M41.1673 49.4116C39.5521 49.4116 37.9309 49.2525 36.3481 48.9341L33.6658 48.3977L35.119 46.0809C36.6458 43.6463 37.4534 40.8343 37.4534 37.9457C37.4534 29.4922 30.5768 22.6156 22.1233 22.6156C21.1742 22.6156 20.2221 22.704 19.2966 22.875L16.6202 23.3731L17.0918 20.6909C18.0763 15.0994 21.015 9.98542 25.3685 6.29216C29.7751 2.55469 35.3842 0.497314 41.1703 0.497314C47.702 0.497314 53.8446 3.04103 58.4634 7.65982C63.0822 12.2786 65.6259 18.4183 65.6259 24.953C65.6259 31.4877 63.0822 37.6274 58.4634 42.2462C53.8446 46.865 47.7049 49.4087 41.1703 49.4087L41.1673 49.4116ZM39.6405 45.5798C40.1504 45.6182 40.6603 45.6359 41.1673 45.6359C52.5684 45.6359 61.8472 36.36 61.8472 24.956C61.8472 13.5519 52.5713 4.27605 41.1673 4.27605C31.9798 4.27605 24.0362 10.2713 21.407 18.8516C21.6458 18.8428 21.8845 18.8369 22.1233 18.8369C32.6578 18.8369 41.2263 27.4083 41.2263 37.9398C41.2263 40.5838 40.6839 43.1806 39.6375 45.574L39.6405 45.5798Z"
            fill="white"
          />
          <path
            d="M17.6577 59.793C13.2069 59.793 8.99782 58.0274 5.76143 54.791C2.43955 51.4721 0.535447 46.9948 0.405756 42.1874C0.169953 33.5069 5.8528 25.8846 13.9231 24.0512L16.6201 23.3762L16.237 26.144C16.0778 27.2847 16.0129 28.4283 16.0454 29.5425C16.2959 38.7329 22.6714 46.535 31.2016 48.0942L33.6687 48.3978L32.5368 50.8266L32.5044 50.8856L32.4749 50.9386C31.0306 53.5 28.988 55.6635 26.5651 57.2021C24.0273 58.8115 21.1092 59.7046 18.1263 59.7871C17.9731 59.7901 17.8198 59.793 17.6665 59.793H17.6577ZM12.2637 28.5757C7.30298 30.8423 4.01648 36.1449 4.1786 42.0842C4.28471 45.9219 5.79385 49.4855 8.42894 52.1206C11.0375 54.7291 14.4419 56.1086 18.0143 56.0113C21.8373 55.9082 25.3507 54.1161 27.7942 51.1155C23.9094 49.848 20.39 47.4546 17.6871 44.1976C14.3387 40.1654 12.4111 34.9954 12.2666 29.6427C12.2578 29.289 12.2548 28.9323 12.2607 28.5727L12.2637 28.5757Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2385_106240">
            <rect width="214.821" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.signWrapper}>
        <div className={styles.signForm}>
          <h1 className={`${styles.txtColor} ${styles.txtTitle}`}>
            <Image
              className={styles.waveHandIcon}
              src="/illustrations/emojihand.svg"
              alt="hand wave"
              height={50}
              width={80}
            ></Image>
            Bienvenue sur l'espace de création de compte !
          </h1>
          <p className={`${styles.txtColor} ${styles.txtParagraphe}`}>
            Créez votre compte pour pouvoir accéder à toutes les ressources
            exclusives, bénéficier de nos services spécialisés et rester informé
            des dernières actualités du CRGE.
          </p>
          {isEmptyFiled && (
            <p className={styles.alertMessage}>
              Veuillez remplir tous les champs de saisie
            </p>
          )}
          <div className={styles.inputContainer}>
            <label htmlFor="firstName" className={styles.label}>
              Prénom
            </label>
            <input
              type="text"
              placeholder="john"
              name="firstName"
              className={styles.input}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lasttName" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              placeholder="doe"
              name="lasttName"
              className={styles.input}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          {isWrongEmailFormat && (
            <p className={styles.alertMessage}>
              Le format d'email est incorrect
            </p>
          )}
          {isEmailUsed && (
            <p className={styles.alertMessage}>Cet email est déjà utilisé</p>
          )}
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>
              Mot de passe
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="--------"
              name="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={`${styles.txtColor} ${styles.eyeIcon}`}
              onClick={togglePassword}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>
              Confirmez le mot de passe
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="--------"
              name="password"
              className={styles.input}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={`${styles.txtColor} ${styles.eyeIcon}`}
              onClick={togglePassword}
            />
          </div>
          {isWrongPasswordFormat && (
            <p className={styles.alertMessage}>
              le mot de passe doit contenir au moins 8 caractères dont :{" "}
              <span>- une lettre majuscule</span> <span>- une miniscule</span>{" "}
              <span>- un chiffre</span> <span>- un caractère spécial</span>
            </p>
          )}
          {isMatchinPassword && (
            <p className={styles.alertMessage}>
              Les mots de passe ne correspondent pas
            </p>
          )}
          {isUserCreated && (
            <p className={styles.alertMessage}>Compte créé avec succes !!!</p>
          )}
          <Button btnStyle="white" onClickSignup={handleClickSignup} />
          <Link href="/signIn" className={styles.txtQuestion}>
            Déjà un compte ?
          </Link>
          <Image
            className={styles.illustartion}
            src="/illustrations/signup.svg"
            alt="illustration sign in"
            height={700}
            width={700}
          />
          <Link
            href="/home"
            className={`${styles.txtColor} ${styles.txtGoHomeLink}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowIcon} />
            Aller sur CRGE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
