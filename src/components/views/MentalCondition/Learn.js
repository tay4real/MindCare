import React, { Component } from "react";

import { Helmet } from "react-helmet";
import MentalHealthService from "../MentalHealthService";
import MentalInfoPreview from "./MentalInfoPreview";

export default class Learn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentalInfoBank: [],
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  getMentalInfo = () => {
    MentalHealthService().then((condition) => {
      this.setState({
        mentalInfoBank: condition,
      });
    });
  };

  componentDidMount() {
    this.getMentalInfo();
  }

  render() {
    let filteredMentalInfo = this.state.mentalInfoBank.filter((MentalInfo) => {
      return (
        MentalInfo.condition
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        MentalInfo.synopsis
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <>
        <Helmet>
          <title>MindCare | Mental Information</title>
        </Helmet>

        <div
          id="categories"
          className="container"
          style={{ padding: "100px 16px" }}
        >
          <div className="col-md-12 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              MENTAL INFORMATION AND SUPPORT
            </h1>
            <form>
              <div className="searchinfo-container">
                <div className="search-container">
                  <div className="search">
                    <input
                      id="zip-code-input"
                      type="text"
                      placeholder="Search by keyword or title"
                      onChange={this.updateSearch.bind(this)}
                    />
                    <i className="fas fa-search" />
                  </div>
                </div>
              </div>
            </form>

            <div className="grid-container">
              {filteredMentalInfo.length > 0 &&
                filteredMentalInfo.map(
                  ({ slug, condition, imgpath, intro_title, synopsis }) => (
                    <MentalInfoPreview
                      slug={slug}
                      imgpath={imgpath}
                      intro_title={intro_title}
                      condition={condition}
                      key={slug}
                      synopsis={synopsis}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
