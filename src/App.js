import React from "react";
import "./App.scss";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <div className="social-media-links">
          <a
            href="https://www.linkedin.com/in/leonie-e-peters/"
            rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-linkedin"></i>
          </a>

          <a
            href="https://github.com/LeoniePeters"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-github-circled"></i>
          </a>
        </div>
      </header>
      <main>
        <Welcome />
        <Portfolio />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
