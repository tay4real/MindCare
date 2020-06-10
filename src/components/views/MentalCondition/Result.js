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
      showModal: true,
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
        loggedIn: state.loggedIn,
      });
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };
  ModalToggle = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };
  openModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { state } = this.props.location;
    console.log(this.state.loggedIn);
    let stats;

    if (state !== undefined) {
      if (this.state.loggedIn) {
        stats = (
          <>
            <section className="col-md-9 mt-3 mb-3 mx-auto">
              <h1 className="h3  text-center font-weight-normal">
                Your {this.state.condition} Test Result
              </h1>

              {
                <div className="questions">
                  <h5 className="text-bold">
                    <span>YOUR RESULT IS </span>
                    {this.state.level + " " + this.state.condition}
                  </h5>
                  <h5>{this.state.recommendation}</h5>
                  <div className="text-center">
                    <h5 className="text-bold">
                      Your Score: {this.state.score}
                    </h5>
                  </div>
                  <div className=" grid-container">
                    <div>
                      <Link to="/categories" className="email-result">
                        EMAIL RESULT
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className="take-test">
                        GO BACK TO TEST
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
                Please Login or Register to view your Result
              </h1>

              <div className="take-test-container">
                <p>
                  <Link to="/signin" className="text-button">
                    Login
                  </Link>
                </p>
                |
                <p>
                  <Link to="/signup" className="text-button">
                    Register
                  </Link>
                </p>
              </div>
            </section>
          </>
        );
      }
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
