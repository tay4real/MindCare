import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getToken, removeUserSession } from "../Utils/Common";

// available on all pages
import TopNavBar from "../views/TopNavBar";
import SideNavBar from "../views/SideNavBar";
import Footer from "../views/Footer";

// navigate between pages
import Home from "../views/Home";
import About from "../views/About";
import MentalHealthCategory from "../views/MentalCondition/MentalHealthCategory";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import TakeTest from "../views/MentalCondition/TakeTest";
import Result from "../views/MentalCondition/Result";
import ResultUnAuth from "../views/MentalCondition/Result_unauthenticated";
import RegistrationStatus from "../views/RegistrationStatus";
import FindExperts from "../views/MentalCondition/FindExperts";
import Learn from "../views/MentalCondition/Learn";
import BipolarDisorder from "../views/MentalInformation/BipolarDisorder";
import AnxietyDisorder from "../views/MentalInformation/AnxietyDisorder";
import ADHD from "../views/MentalInformation/adhd";

//var hist = createBrowserHistory();

export class Routes extends Component {
  state = {
    showModal: false,
    showSidebar: false,
    mentalconditions: [],
    isLoading: true,
    loggedIn: false,
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

  handleLogout = () => {
    removeUserSession();
    this.setState({
      loggedIn: false,
    });
  };

  LoginToggle = () => {
    this.setState((prevState) => {
      return { loggedIn: !prevState.loggedIn };
    });
  };
  handleLogin = () => {
    const token = getToken();
    if (token && token !== null) {
      this.setState({
        loggedIn: true,
      });
    }
  };

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
      <BrowserRouter>
        <TopNavBar
          toggleSidebar={this.SidebarToggle}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          openModal={this.openModal}
          loggedIn={this.state.loggedIn}
        />
        <SideNavBar
          closed={this.SidebarToggle}
          show={this.state.showSidebar}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          openModal={this.openModal}
          loggedIn={this.state.loggedIn}
        />

        <Switch>
          {this.state.loggedIn ? (
            <Route exact path="/" component={Dashboard} />
          ) : (
            <Route path="/" exact component={Home} />
          )}
          <Route path="/about" exact component={About} />
          <Route
            path="/categories"
            render={(props) => (
              <MentalHealthCategory
                {...props}
                isLoading={this.state.isLoading}
                mentalconditions={this.state.mentalconditions}
                ModalToggle={this.ModalToggle}
                showModal={this.state.showModal}
              />
            )}
          />
          <Route path="/learn" exact component={Learn} />
          <Route
            path="/mentaltest"
            render={(props) => (
              <TakeTest {...props} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route path="/anxiety-disorders" exact component={AnxietyDisorder} />
          <Route path="/bipolar-disorder" exact component={BipolarDisorder} />
          <Route path="/adhd" exact component={ADHD} />
          <Route path="/result" exact component={Result} />
          <Route path="/resultunauth" exact component={ResultUnAuth} />
          <Route
            path="/signin"
            render={(props) => (
              <Login
                {...props}
                LoginToggle={this.LoginToggle}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
          <Route path="/findhelp" exact component={FindExperts} />
          <Route path="/signup" exact component={Register} />
          <Route
            path="/registration-status"
            exact
            component={RegistrationStatus}
          />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
