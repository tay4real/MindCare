import React, { Component } from "react";
import { Helmet } from "react-helmet";
import isEmpty from "../../../utils/is-empty";

export default class TakeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: "",
      id: "",
      questions: [],
      currentOptions: {},
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      score: 0,
      numberOfQuestions: 0,
      currentQuestionIndex: 0,
    };
  }

  async componentDidMount() {
    if (!isEmpty(this.props.location.category)) {
      var { slug } = this.props.location.category;
      this.setState({
        condition: this.props.location.category.condition.condition,
      });

      const url =
        `https://evening-mesa-59655.herokuapp.com/api/mental-conditions/` +
        slug.slug +
        `/questions`;

      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        questions: data.data,
        isLoading: false,
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
    currentOptions
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      currentOptions = currentQuestion.options;

      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        currentOptions,
      });
    }
  };

  handleOptionClick = (e) => {
    return console.log(e);
  };

  render() {
    const { currentQuestion, condition } = this.state;
    const { question, options } = currentQuestion;
    return (
      <>
        <Helmet>
          <title>Mind Care | Mental Test</title>
        </Helmet>
        <div className="container" style={{ padding: "100px 16px" }}>
          <div className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              {condition ? condition + " Test" : "No Test Available"}
            </h1>
            <div className="questions">
              <div className="question-number-container">
                <p>
                  <span className="left">1 of 10</span>
                </p>
              </div>
              <h5>{question}</h5>
              <div className="options-container">
                {options && options.length > 0
                  ? options.map((option) => {
                      return (
                        <p
                          onClick={this.handleOptionClick(option.option)}
                          className="option"
                          key={option.id}
                        >
                          {option.option}
                        </p>
                      );
                    })
                  : "Loading..."}
              </div>

              <div className="button-container">
                <button>Previous</button>
                <button>Next</button>
                <button>Quit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
