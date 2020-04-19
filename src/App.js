import React from "react";
import "./App.css";
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
          >
            <i className="icon-linkedin">&#xf0e1;</i>
          </a>

          <a href="https://github.com/LeoniePeters" target="_blank">
            <i className="icon-github-circled">&#xf09b;</i>
          </a>
        </div>
      </header>
      <main>
        <Welcome />
        <About />
        <Portfolio />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
