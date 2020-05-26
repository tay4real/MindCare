import React, { Component } from "react";
import { Link } from "react-router-dom";
import mindCareLogo from "../../assets/images/mindcare_logo.jpg";

export class TopNavBar extends Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-container w3-white w3-card" id="myNavbar">
          <Link
            to="/"
            className="w3-bar-item w3-button w3-wide"
            style={{ textDecoration: "none" }}
          >
            <span>
              <img src={mindCareLogo} width="15" alt="logo" />
            </span>
            {"  "}
            MINDCARE
          </Link>

          <div className="w3-right  w3-hide-small">
            <Link
              to="/about"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              ABOUT
            </Link>
            <Link
              to="/categories"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              MENTAL HEALTH TEST
            </Link>
            <Link
              to="/signup"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              SIGN UP
            </Link>
            <Link
              to="/signin"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              SIGN IN
            </Link>
          </div>

          <Link
            to="#"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={this.props.toggleSidebar}
          >
            <i className="fa fa-bars"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
