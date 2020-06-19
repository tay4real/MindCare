import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//import Agreement from "./Agreement";

class FindExperts extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MindCare | Find Help</title>
        </Helmet>
        <div
          id="categories"
          className="container"
          style={{ padding: "100px 16px" }}
        >
          <div className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">Find Help</h1>

            <p className="text-center">
              Select the mental health test to see if you may benefit from
              further diagnosis and treatment from a mental heath professional
            </p>

            <div className="grid-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default FindExperts;
