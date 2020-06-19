import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../Utils/Common";

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      loggedIn: false,
      showModal: true,
      profile: "",
    };
  }
  componentDidMount() {
    const { state } = this.props.location;

    if (state) {
      this.setState({
        result: state.result,
        loggedIn: state.loggedIn,
      });
    }

    getUserProfile()
      .then((res) => {
        this.setState({
          profile: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
    const { name } = this.state.profile;

    const {
      mental_condition,
      possible_ailment,
      scored_point,
    } = this.state.result;
    console.log(state);
    let stats;

    if (state !== undefined) {
      if (this.state.loggedIn) {
        stats = (
          <>
            <section className="col-md-9 mt-3 mb-3 mx-auto">
              <h1 className="h3  text-center font-weight-normal">
                Test Result
              </h1>

              {
                <div className="questions">
                  <div className="text-justify text-center">
                    <h5>Hi! {name}</h5>
                    <br />
                    <p>Thank you for taking the test on mindcare</p>
                    <p>Here is the summary of your test result</p>
                    <p>Name of </p>
                    <p>Your Score Point is {scored_point}.</p>
                    <p>
                      Your result shows that {possible_ailment.toLowerCase()}
                    </p>
                    <p>
                      <small>
                        Note: This is only a summary of your test result. We
                        have sent a detailed result to your email. Thanks for
                        using MindCare{" "}
                      </small>
                    </p>
                  </div>
                  <div className=" grid-container">
                    <div></div>
                    <div>
                      <Link to="/categories" className="take-test">
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

              <div className="grid-container">
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

            <div className="grid-container">
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
