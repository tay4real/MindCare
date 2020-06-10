import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FindExperts extends Component {
  render() {
    return (
      <div
        id="agreement"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div className="findhelp-container">
          <div className="w3-center">
            <br />

            <div>
              <Link to="/findhelp" className="findhelp">
                Find Nearby Mental Experts Here
              </Link>
            </div>
            <span
              onClick={this.props.close}
              className="w3-button w3-xlarge w3-text-black w3-display-topright"
            >
              ×
            </span>
          </div>
        </div>
      </div>
    );
  }
}
