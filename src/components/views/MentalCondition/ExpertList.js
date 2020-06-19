import React, { Component } from "react";

import Expert from "./Expert";
import { getMedicalExpert } from "../../Utils/Common";

class ExpertList extends Component {
  state = {
    experts: [],
    searchString: "",
    states: [],
  };
  constructor() {
    super();

    this.getExperts();
  }

  getExperts = () => {
    const { searchString } = this.state;
    console.log(searchString);

    getMedicalExpert(searchString)
      .then((res) => {
        this.setState({
          experts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async componentDidMount() {
    this._isMounted = true;

    const url = "https://evening-mesa-59655.herokuapp.com/api/states";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      states: data.data,
    });
  }

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getExperts();
  };

  render() {
    const { states } = this.state;
    let stateList;
    if (states !== undefined) {
      stateList = states.map((state) => {
        const { id, name } = state;
        return (
          <option key={id} value={id}>
            {name}
          </option>
        );
      });
    }
    return (
      <div>
        {this.state.experts ? (
          <div>
            <div className="form-group">
              <label htmlFor="state">Search by State</label>
              <select
                className="custom-select"
                onChange={this.onSearchInputChange}
                name="state"
              >
                <option>-- State --</option>
                {stateList}
              </select>
            </div>

            <div className="grid-container">
              {this.state.experts.map((currentExpert) => (
                <div
                  className="card"
                  style={{ margin: 0, padding: 0 }}
                  key={currentExpert.phone_number}
                >
                  <Expert expert={currentExpert} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          "No experts found"
        )}
      </div>
    );
  }
}
export default ExpertList;
