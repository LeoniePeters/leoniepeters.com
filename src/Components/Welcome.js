import React from "react";
import "./Welcome.scss";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="whoami hexagon">
        <h1>Leonie Peters: web developer</h1>
      </div>
      <div className="hoi hexagon">
        <p>👋🏼</p>
      </div>
      <div className="history hexagon">
        <p>
          Art historian turned coder thanks to{" "}
          <a href="https://codaisseur.com/">Codaisseur</a>.
        </p>
      </div>
      <div className="job hexagon">
        <p>
          Currently front-end developer @{" "}
          <a href="https://www.ontwerpwerk.nl/">Ontwerpwerk</a>.
        </p>
      </div>
      <div className="stack hexagon">
        <p>♥ Sass, JavaScript, React</p>
      </div>
    </div>
  );
}

export default Welcome;
