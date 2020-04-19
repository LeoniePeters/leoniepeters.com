import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-item natuurstad">
        <a href="https://www.natuurstad.nl/" target="_blank">
          Natuurstad
        </a>
      </div>
      <div className="portfolio-item kor-utrecht">
        <a href="https://www.kunstinopenbareruimte-utrecht.nl/" target="_blank">
          Kunst in de openbare ruimte Utrecht
        </a>
      </div>
      <div className="portfolio-item nsob">
        <a href="https://www.nsob.nl/" target="_blank">
          Nederlandse School voor Openbaar Bestuur
        </a>
      </div>
      <div className="portfolio-item leraarvanbuiten">
        <a href="https://www.leraarvanbuiten.nl/" target="_blank">
          Leraar van buiten
        </a>
      </div>
      <div className="portfolio-item hollandhightech">
        <a href="https://www.hollandhightech.nl/" target="_blank">
          Holland High Tech
        </a>
      </div>
      <div className="portfolio-item ohmmmm">
        <a href="https://ohmmmm.netlify.app/" target="_blank">
          Ohmmmm
        </a>
      </div>
      <div className="portfolio-item drawbsurd">
        <a href="https://drawbsurd.netlify.app/" target="_blank">
          Drawbsurd
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
