import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Agreement extends Component {
  render() {
    return (
      <div
        id="agreement"
        className="w3-modal"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <div className="w3-center">
            <br />
            <span
              onClick={this.props.close}
              className="w3-button w3-xlarge w3-text-black w3-display-topright"
            >
              ×
            </span>
          </div>

          <div className="agreement-container">
            <h5>
              By clicking “I Agree” below you acknowledge that this is not a
              diagnostic instrument and is only to be used by you if you are 18
              years or older. You agree that this application is for information
              purposes only and is not intended to replace a consultation with
              your doctor or mental health professional. We disclaim any
              liability, loss, or risk incurred as a consequence, directly or
              indirectly, from the use and application of this test.
            </h5>

            <div className="grid-container">
              <div>
                <Link
                  to="/mentaltest"
                  onClick={this.props.close}
                  className="agree-button"
                >
                  I AGREE
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  onClick={this.props.close}
                  className="cancel-button"
                >
                  CANCEL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
