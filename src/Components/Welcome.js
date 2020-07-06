import React, { Component } from "react";
import "./Welcome.scss";

class Welcome extends Component {
  state = {
    lightmode: false,
  };

  enableLightMode = () => {
    this.setState({ lightmode: true });
    document.body.classList.add("lightmode");
  };

  enableDarkMode = () => {
    this.setState({ lightmode: false });
    document.body.classList.remove("lightmode");
  };

  render() {
    return (
      <div className="Welcome">
        <div className="whoami hexagon">
          <h1>Leonie Peters: web developer</h1>
        </div>
        <div className="hoi hexagon">
          <span role="img" aria-label="zwaaiende hand">
            👋🏻
          </span>
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
        <div className="mode-icons hexagon">
          {!this.state.lightmode && (
            <button type="button" onClick={this.enableLightMode}>
              <i className="icon-sun"></i>
              Light mode
            </button>
          )}
          {this.state.lightmode && (
            <button type="button" onClick={this.enableDarkMode}>
              <i className="icon-moon"></i>
              Dark mode
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Welcome;
