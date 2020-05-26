import React, { Component } from "react";

export default class TakeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.location.category,
    };
  }

  render() {
    return (
      <div className="container" style={{ padding: "100px 16px" }}>
        <div className="col-md-9 mt-3 mb-3 mx-auto">
          <h1 className="h3  text-center font-weight-normal">
            {this.state.category.condition.condition
              ? this.state.category.condition.condition + " Test"
              : null}
          </h1>
        </div>
      </div>
    );
  }
}
