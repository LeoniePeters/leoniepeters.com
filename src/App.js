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
            <div>
              <a
                href="https://www.linkedin.com/in/leonie-e-peters/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a href="https://github.com/LeoniePeters" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="portfolio">
            <h2>Portfolio</h2>
            <div className>
              <a href="https://www.natuurstad.nl/" target="_blank">
                Natuurstad
              </a>
            </div>
            <div className>
              <a
                href="https://www.kunstinopenbareruimte-utrecht.nl/"
                target="_blank"
              >
                Kunst in de openbare ruimte Utrecht
              </a>
            </div>
            <div className>
              <a href="https://www.nsob.nl/" target="_blank">
                Nederlandse School voor Openbaar Bestuur
              </a>
            </div>
            <div className>
              <a href="https://www.leraarvanbuiten.nl/" target="_blank">
                Leraar van buiten
              </a>
            </div>
            <div className>
              <a href="https://www.hollandhightech.nl/" target="_blank">
                Holland High Tech
              </a>
            </div>
            <div className>
              <a href="https://ohmmmm.netlify.app/" target="_blank">
                Ohmmmm
              </a>
            </div>
            <div className>
              <a href="https://drawbsurd.netlify.app/" target="_blank">
                Drawbsurd
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
