import React from "react";
import leonie from "./leonie-portret.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div className="sidebar">
          <div className="portrait">
            <img src={leonie} />
          </div>
          <div className="personal-info">
            <h2>Personal info</h2>
            <p>1989, Amsterdam</p>
            <p>Art historian turned web developer</p>
            <p>Codaisseur graduate</p>
            <p>Front-end / full-stack</p>
            <p>♥ Sass, JavaScript, React</p>
            <p>Fluent in Dutch, English and Spanish</p>
            <a
              href="https://www.linkedin.com/in/leonie-e-peters/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/LeoniePeters" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="main-content">
          <div className="portfolio">
            <h2>Portfolio</h2>
            <div className></div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
