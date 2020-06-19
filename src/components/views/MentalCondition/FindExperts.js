import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ExpertList from "./ExpertList";

class FindExperts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expert: "",
    };
  }

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
              Here is a List of professional medical experts that can be of help
              to you. You can also use the search box to find the nearest
              professional closest to you.
            </p>

            <ExpertList />
          </div>
        </div>
      </>
    );
  }
}

export default FindExperts;
