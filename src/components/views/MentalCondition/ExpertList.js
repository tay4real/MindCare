import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Expert from "./Expert";

const SPACE_ID = "[INSERT YOUR CONTENTFUL SPACE ID HERE]";
const ACCESS_TOKEN = "[INSERT YOUR CONTENTFUL ACCESS TOKEN HERE]";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class ExpertList extends Component {
  state = {
    experts: [],
    searchString: "",
  };

  constructor() {
    super();
    this.getExperts();
  }

  getExperts = () => {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString,
      })
      .then((response) => {
        this.setState({ courses: response.items });
      })
      .catch((error) => {
        console.log("Error occured while fetching data");
        console.log(error);
      });
  };

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.experts.map((currentExpert) => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Expert expert={currentExpert} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No experts found"
        )}
      </div>
    );
  }
}
export default ExpertList;
