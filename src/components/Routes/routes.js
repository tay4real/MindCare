import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";



// pages for this product
import TopNavBar from '../views/TopNavBar'
import SideNavBar from '../views/SideNavBar'
import Home from '../views/Home'
import About from '../views/About'

import SignIn from '../views/SignIn'
import Register from '../views/Register'
import Footer from '../views/Footer'


import Aux from '../hoc/Auxiliary'


var hist = createBrowserHistory();

export class Routes extends Component {

  state = {
    showSidebar: false,
  };

  

  closeSidebar = () => {
    this.setState({ showSidebar: false });
  };

  SidebarToggle = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  

  render(){
   
  
    return (
        <Router history={hist}>
        <Aux>
            <Route path="/" render={(props) => <TopNavBar {...props} toggleSidebar={this.SidebarToggle} />} />
            <Route path="/" render={(props) => <SideNavBar {...props} closed={this.SidebarToggle} show={this.state.showSidebar} />} />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={Register}/>
              

            </Switch>
            <Footer />
          </Aux>
        </Router>
      
    )
  }
}

export default Routes
