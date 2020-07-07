import React, { Component } from "react";

import { Link } from "react-router-dom";

export class SideNavBar extends Component {
  state = {
    loggedIn: false,
  };

  disclaimer() {
    const { openModal } = this.props;
    openModal();
    //closed();
  }
  logout() {
    const { handleLogout } = this.props;
    handleLogout();
    //closed();
  }
  componentDidMount() {
    const { handleLogin } = this.props;
    handleLogin();
  }
  render() {
    return (
      <nav
        className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: this.props.show ? "block" : "none", zIndex: 100 }}
        id="mySidebar"
      >
        <Link
          to="#"
          className="w3-bar-item w3-button w3-large w3-padding-32"
          onClick={this.props.closed}
        >
          CLOSE <i className="fa fa-window-close" aria-hidden="true"></i>
        </Link>

        <Link
          to="/about"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.closed}
        >
          ABOUT
        </Link>
        <Link
          to="/categories"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.closed}
        >
          MENTAL HEALTH TEST
        </Link>
        <Link
          to="/findhelp"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.closed}
        >
          FIND HELP
        </Link>
        <Link
          to="/signup"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.closed}
          style={{ display: this.props.loggedIn ? "none" : "block" }}
        >
          SIGN UP
        </Link>
        <Link
          to="/signin"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.closed}
          style={{ display: this.props.loggedIn ? "none" : "block" }}
        >
          SIGN IN
        </Link>
        <Link
          to="/"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={this.props.handleLogout}
          style={{ display: this.props.loggedIn ? "block" : "none" }}
        >
          LOGOUT
        </Link>
      </nav>
    );
  }
}

export default SideNavBar;
