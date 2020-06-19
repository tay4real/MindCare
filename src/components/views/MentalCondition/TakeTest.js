import React, { Component } from "react";
import { Helmet } from "react-helmet";
import isEmpty from "../../../utils/is-empty";
import { Link } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Utils/Common";

export default class TakeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: "",
      id: "",
      questions: [],
      answers: [],
      currentOptions: {},
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      numberOfQuestions: 0,
      totalAssignedScore: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      loggedIn: false,
    };
  }

  async componentDidMount() {
    if (!isEmpty(this.props.location.category)) {
      var { slug } = this.props.location.category;
      this.setState({
        condition: this.props.location.category.condition.condition,
        loggedIn: this.props.loggedIn,
      });

      const url =
        `https://evening-mesa-59655.herokuapp.com/api/mental-conditions/` +
        slug.slug +
        `/questions`;

      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        questions: data.data,
      });
    }

    let {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion,
    currentOptions,
    numberOfQuestions
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      currentOptions = currentQuestion.options;
      numberOfQuestions = questions.length;

      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        currentOptions,
        numberOfQuestions,
      });
    }
  };

  computeScore = (question_id, option_id) => {
    this.setState(
      (prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
        totalAssignedScore:
          prevState.totalAssignedScore + prevState.currentOptions.length,
        answers: [
          ...prevState.answers,
          {
            question: question_id.toString(),
            option: option_id.toString(),
          },
        ],
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.displayResults();
        } else {
          this.displayQuestions(
            this.state.question,
            this.state.currentOptions,
            this.state.nextQuestion,
            this.state.previousQuestion,
            this.state.currentOptions,
            this.state.numberOfQuestions
          );
        }
      }
    );
  };

  displayResults = () => {
    alert("You have come to the end of the test. Click OK to view your result");
    var { slug } = this.props.location.category;
    const { answers } = this.state;
    const token = getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const api =
      `https://evening-mesa-59655.herokuapp.com/api/mental-conditions/` +
      slug.slug +
      `/answers`;

    axios
      .post(
        api,
        {
          answers: answers,
        },
        config
      )
      .then((response) => {
        var userStats = {
          result: response.data.data,
          loggedIn: this.props.loggedIn,
        };
        setTimeout(() => {
          this.props.history.push("/result", userStats);
        }, 1000);
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            errors: err.response.data,
            displayErrors: true,
            success: "",
          });
        }
      });
  };

  render() {
    const {
      currentQuestion,
      condition,
      numberOfQuestions,
      currentQuestionIndex,
    } = this.state;
    const { id, question, options } = currentQuestion;

    let displayTest;
    if (condition) {
      if (question) {
        displayTest = (
          <>
            <section className="col-md-9 mt-3 mb-3 mx-auto">
              <h1 className="h3  text-center font-weight-normal">
                {condition} Test
              </h1>
              {
                <div className="questions">
                  <div className="text-center">
                    <p>
                      <span>
                        Question{" "}
                        {currentQuestionIndex !== numberOfQuestions
                          ? currentQuestionIndex + 1
                          : numberOfQuestions}{" "}
                        of {numberOfQuestions}
                      </span>
                    </p>
                  </div>
                  <h5>{question}</h5>
                  <div className=" grid-container">
                    {options && options.length > 0
                      ? options.map((option) => {
                          return (
                            <div
                              id={option.id}
                              onClick={this.computeScore.bind(
                                this,
                                id,
                                option.id
                              )}
                              className="option"
                              key={option.id}
                            >
                              {option.option}
                            </div>
                          );
                        })
                      : "Loading..."}
                  </div>
                </div>
              }
            </section>
          </>
        );
      }
    } else {
      displayTest = (
        <>
          <section className="col-md-9 mt-3 mb-3  mx-auto">
            <div className="take-test-container ">
              <p className="pt-7">
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
          <title>Mind Care | Mental Test</title>
        </Helmet>
        <div id="mentaltest">{displayTest}</div>
      </>
    );
  }
}
