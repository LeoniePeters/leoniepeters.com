import React, { Component } from "react";

class PortfolioItem extends Component {
  state = {
    open: false,
  };

  handleOnClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <li
        className={`portfolio-item ${this.props.project.class} ${
          this.state.open ? "open" : ""
        }`}
        onClick={this.handleOnClick}
      >
        <div className="info">
          <a
            href={this.props.project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              {this.props.project.title} <i className="icon-link-ext"></i>
            </h3>
          </a>
          <p>{this.props.project.technique}</p>
          <p>{this.props.project.boss}</p>
          <p>{this.props.project.dev}</p>
          {this.props.project.design && <p>{this.props.project.design}</p>}
        </div>
      </li>
    );
  }
}

export default PortfolioItem;
