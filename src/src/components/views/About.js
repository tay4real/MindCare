import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "100px 16px" }}>
        <div className="col-md-9 mt-3 mb-3 mx-auto">
          <h1 className="h3  text-center font-weight-normal">About MindCare</h1>

          <p className="text-center">
            MindCare is an app that measure people’s mental health by taking
            simple test based on the mental illness. Test results will be sent
            to your email after completion.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
