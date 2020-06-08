import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: "",
      score: 0,
      numberOfQuestions: 0,
      totalAssignedScore: 0,
      percentageScore: 0,
      level: "",
      recommendation: "",
    };
  }
  componentDidMount() {
    const { state } = this.props.location;

    if (state) {
      this.setState({
        condition: state.condition,
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        totalAssignedScore: state.totalAssignedScore,
        percentageScore: state.percentageScore,
        level: state.level,
        recommendation: state.recommendation,
      });
    }
  }
  render() {
    const { state } = this.props.location;

    let stats;
    if (state !== undefined) {
      stats = (
        <>
          <section className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              {this.state.condition} Test Result
            </h1>
            {
              <div className="questions">
                <div className="text-center">
                  <p>
                    <span>
                      Your total score was {this.state.score} out of{" "}
                      {this.state.totalAssignedScore}
                    </span>
                  </p>
                </div>
                <h5>{this.state.recommendation}</h5>
                <div className=" grid-container">
                  <div>
                    <Link to="/categories" className="take-test">
                      Take another Test
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className="exit">
                      Exit
                    </Link>
                  </div>
                </div>
              </div>
            }
          </section>
        </>
      );
    } else {
      stats = (
        <>
          <section className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              Sorry, You did not take a test
            </h1>

            <div className="take-test-container">
              <p>
                <Link to="/categories" className="text-button">
                  Take a Test
                </Link>
              </p>
            </div>
          </section>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>MindCare | Mental Test Result</title>
        </Helmet>
        <div id="result">{stats}</div>
      </>
    );
  }
}

export default Result;
