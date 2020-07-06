import React, { Component } from "react";
import "./Welcome.scss";

class Welcome extends Component {
  state = {
    lightmode: false,
  };

  toggleMode = () => {
    this.setState({ lightmode: !this.state.lightmode });
    this.state.lightmode
      ? document.body.classList.add("lightmode-on")
      : document.body.classList.remove("lightmode-on");
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
            <button type="button" onClick={this.toggleMode}>
              <i class="icon-sun"></i>
            </button>
          )}
          {this.state.lightmode && (
            <button type="button" onClick={this.toggleMode}>
              <i class="icon-moon"></i>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Welcome;
