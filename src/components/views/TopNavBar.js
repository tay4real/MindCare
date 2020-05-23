import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class TopNavBar extends Component {
  render() {
    return (
     
      <div className="w3-top">
        
        <div className="w3-bar w3-container w3-white w3-card" id="myNavbar">
            <Link to="/" className="w3-bar-item w3-button w3-wide" >MINDCARE</Link>
           
            <div className="w3-right  w3-hide-small">
              <Link to="/about" className="w3-bar-item w3-button">ABOUT</Link>
              <Link to="/categories" className="w3-bar-item w3-button">MENTAL HEALTH TEST</Link>
              <Link to="/signup" className="w3-bar-item w3-button">SIGN UP</Link>
              <Link  to="/signin" className="w3-bar-item w3-button" >SIGN IN</Link>
            </div>
 
            <Link to="#" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={this.props.toggleSidebar}>
                <i className="fa fa-bars"></i>
            </Link>  
        </div>
      </div>
      
      
    )
  }
}

export default TopNavBar

