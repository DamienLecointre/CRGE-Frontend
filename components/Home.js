import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <h1>
        Home
        <FontAwesomeIcon icon={faArrowRight} />
      </h1>
    </div>
  );
}

export default Home;
