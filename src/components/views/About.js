import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "128px 16px" }}>
        <h1 className="w3-center">ABOUT MINDCARE</h1>

        <center>
          <p className="row">
            MindCare is an app that measure people’s mental health by taking
            simple test based on the mental illness. Test results will be sent
            to your email after completion.
          </p>
        </center>
      </div>
    );
  }
}

export default About;
