import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MindCare | Home</title>
        </Helmet>
        <header id="home">
          <section className="text-white">
            <h1>Know Your Mental Health Status</h1>

            <div className="take-test-container">
              <p>
                <Link
                  to="/categories"
                  className="text-button"
                >
                  Take a Test
                </Link>
              </p>
            </div>
          </section>
        </header>
      </>
    );
  }
}

export default Home;
