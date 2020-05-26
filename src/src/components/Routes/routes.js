import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// available on all pages
import TopNavBar from "../views/TopNavBar";
import SideNavBar from "../views/SideNavBar";
import Footer from "../views/Footer";

// navigate between pages
import Home from "../views/Home";
import About from "../views/About";
import MentalHealthCategory from "../views/MentalCondition/MentalHealthCategory";
import SignIn from "../views/SignIn";
import Register from "../views/Register";
import TakeTest from "../views/MentalCondition/TakeTest";

var hist = createBrowserHistory();

export class Routes extends Component {
  state = {
    showSidebar: false,
    mentalconditions: [],
    isLoading: true,
    errors: null,
  };

  async componentDidMount() {
    const url =
      "https://evening-mesa-59655.herokuapp.com/api/mental-conditions";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      mentalconditions: data.data,
      isLoading: false,
    });
  }

  closeSidebar = () => {
    this.setState({ showSidebar: false });
  };

  SidebarToggle = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <Router history={hist}>
        <TopNavBar toggleSidebar={this.SidebarToggle} />
        <SideNavBar closed={this.SidebarToggle} show={this.state.showSidebar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/categories"   render={(props) => <MentalHealthCategory {...props} isLoading={this.state.isLoading}  mentalconditions = {this.state.mentalconditions} />} />
          <Route path="/mentaltest" component={TakeTest} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Register} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default Routes;
