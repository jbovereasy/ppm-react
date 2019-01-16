import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="navbar-fixed-bottom" defaultChecked>
        <div className="container">
          <div className="row">
            <span>
              Physical Plant Management, Management Information Systems © 2019
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
