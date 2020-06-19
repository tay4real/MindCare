import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class RegistrationStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    console.log(state);
    if (state) {
      this.setState({
        success: state.success,
      });
    }
  }
  render() {
    let stats;

    if (this.state.success) {
      stats = (
        <div className="container" style={{ padding: "100px 16px" }}>
          <div className="row card">
            <div className="col-md-6 mt-5 mb-5 mx-auto">
              <div className="card-header bg-transparent border-primary">
                <h5>
                  Thank you for registering on our platform. An email has been
                  sent to you. Please verify your email to complete your
                  registration.
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>MindCare | User Registration</title>
        </Helmet>
        {stats}
      </>
    );
  }
}
