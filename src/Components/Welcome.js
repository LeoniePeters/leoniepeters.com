import React from "react";
import leonie from "../static/media/leonie-portret.jpg";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="welcome-message">
        <h1>Welcome!</h1>
        <h2>I am Leonie, web developer</h2>
        <a href="#portfolio" className="button portfolio">
          What I build
        </a>
        <a href="#about" className="button about">
          About me
        </a>
      </div>
      <div className="portrait">
        <img src={leonie} alt="portrait Leonie" />
      </div>
    </div>
  );
}

export default Welcome;
