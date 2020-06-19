import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Agreement from "./Agreement";

export class MentalHealthCategory extends Component {
  render() {
    const { isLoading, mentalconditions } = this.props;
    return (
      <>
        <Helmet>
          <title>MindCare | Mental Conditions</title>
        </Helmet>
        <div
          id="categories"
          className="container"
          style={{ padding: "100px 16px" }}
        >
          <div className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              Select Test Type
            </h1>

            <div className="take-test-container">
              <Agreement
                close={this.props.ModalToggle}
                show={this.props.showModal}
              />
            </div>

            <p className="text-center">
              Select the mental health test to see if you may benefit from
              further diagnosis and treatment from a mental heath professional
            </p>

            <div className="grid-container">
              {!isLoading ? (
                mentalconditions.map((mentalcondition) => {
                  const { condition, slug } = mentalcondition;
                  return (
                    <Link
                      to={{
                        pathname: "/mentaltest",
                        category: {
                          condition: { condition },
                          slug: { slug },
                        },
                      }}
                      key={slug}
                      style={{ textDecoration: "none", flex: "auto" }}
                    >
                      <div className="card">
                        <h5>{condition} Test</h5>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MentalHealthCategory;
