import React, { Component } from "react";

import { Helmet } from "react-helmet";
import MentalHealthService from "../MentalHealthService";
import MentalInfoPreview from "./MentalInfoPreview";

export default class Learn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentalInfoBank: [],
    };
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
    return (
      <>
        <Helmet>
          <title>MindCare | Mental Information</title>
        </Helmet>

        <div id="categories" className="container">
          <div className="col-md-12 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              MENTAL INFORMATION AND SUPPORT
            </h1>
            <div className="searchinfo-container">
              <div className="search-container">
                <div className="search">
                  <input
                    id="zip-code-input"
                    type="text"
                    placeholder="Search by keyword or title"
                  />
                  <i className="fas fa-search" />
                </div>
              </div>
            </div>

            <div className="grid-container">
              {this.state.mentalInfoBank.length > 0 &&
                this.state.mentalInfoBank.map(
                  ({
                    slug,
                    condition,
                    imgpath,
                    intro_title,
                    
                    synopsis,
                  }) => (
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
