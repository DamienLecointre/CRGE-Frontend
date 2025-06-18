//NEXT IMPORTS
import Head from "next/head";

//REDUX IMPORTS
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import buttons from "../reducers/buttons";
import heros from "../reducers/heros";
import burgerMenu from "../reducers/burgerMenu";
import connection from "../reducers/isConnected";

//STYLES IMPORTS
import "../styles/globals.css";
import "../styles/Variables.css";

//STORE CONFIG
const store = configureStore({
  reducer: { buttons, heros, burgerMenu, connection },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>
          CRGE - Conseil et Ressource pour les Groupements d'Employeurs
        </title>
        <meta
          name="description"
          content="CRGE est le réseau national qui réunit une centaine de Groupements d'Employeurs représentant plus de 5 000 salariés."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="https://www.tonsite.com/ton-url/" /> */}
        <link rel="icon" type="image/svg+xml" href="/logo_icons/Favicon.svg" />
        {/* Open Graph
        <meta property="og:title" content="Titre pour les réseaux sociaux" />
        <meta
          property="og:description"
          content="Description pour les réseaux sociaux"
        />
        <meta
          property="og:image"
          content="https://www.tonsite.com/images/partage.jpg"
        />
        <meta property="og:url" content="https://www.tonsite.com/ton-url/" />
        <meta property="og:type" content="website" />

        Twitter Card
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Titre Twitter" />
        <meta name="twitter:description" content="Description Twitter" />
        <meta
          name="twitter:image"
          content="https://www.tonsite.com/images/twitter.jpg"
        /> */}
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
