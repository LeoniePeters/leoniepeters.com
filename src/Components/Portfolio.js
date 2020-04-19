import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-item natuurstad">
        <a href="https://www.natuurstad.nl/" target="_blank">
          <h3>Natuurstad</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>Drupal, Sass, jQuery</p>
          <p>Ontwerpwerk for Natuurstad</p>
          <p>Development: Leonie Peters</p>
        </a>
      </div>
      <div className="portfolio-item kor-utrecht">
        <a href="https://www.kunstinopenbareruimte-utrecht.nl/" target="_blank">
          <h3>Kunst in de openbare ruimte Utrecht</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>Headless Drupal, React, Next.js, Sass, GraphQL</p>
          <p>Ontwerpwerk for Gemeente Utrecht</p>
          <p>Development: Stef Kors, Leonie Peters</p>
          <p>Design: Jeffrey Grin</p>
        </a>
      </div>
      <div className="portfolio-item nsob">
        <a href="https://www.nsob.nl/" target="_blank">
          <h3>Nederlandse School voor Openbaar Bestuur</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>Drupal, Sass, jQuery</p>
          <p>Ontwerpwerk for NSOB</p>
          <p>Development: Jeroen Harkes, Leonie Peters</p>
          <p>Design: Jeffrey Grin</p>
        </a>
      </div>
      <div className="portfolio-item leraarvanbuiten">
        <a href="https://www.leraarvanbuiten.nl/" target="_blank">
          <h3>Leraar van buiten</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>Drupal, Sass, jQuery</p>
          <p>Ontwerpwerk for Leraar van Buiten</p>
          <p>Development: Leonie Peters</p>
          <p>Design: Bart Mulder</p>
        </a>
      </div>
      <div className="portfolio-item hollandhightech">
        <a href="https://www.hollandhightech.nl/" target="_blank">
          <h3>Holland High Tech</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>Drupal, Sass, jQuery</p>
          <p>Ontwerpwerk for Holland High Tech</p>
          <p>Development: Leonie Peters</p>
          <p>Design: Ruben Huis in 't Veld</p>
        </a>
      </div>
      <div className="portfolio-item ohmmmm">
        <a href="https://ohmmmm.netlify.app/" target="_blank">
          <h3>Ohmmmm</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>React, Redux, Phaser, Express, Postgres, Phaser</p>
          <p>Codaisseur study project</p>
          <p>Development: Rogier Verkaik, Dusty Wood Saunders, Leonie Peters</p>
          <p>Design: Aliénor de Haan</p>
        </a>
      </div>
      <div className="portfolio-item drawbsurd">
        <a href="https://drawbsurd.netlify.app/" target="_blank">
          <h3>Drawbsurd</h3>
          <i className="icon-link-ext">&#xf08e;</i>
          <p>React, Redux, TypeScript, Koa, TypeORM, Socket.IO</p>
          <p>Codaisseur study project</p>
          <p>Development: Izabela Nowosada, Leonie Peters</p>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
