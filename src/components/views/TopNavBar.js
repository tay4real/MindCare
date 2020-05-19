import React, { Component } from 'react'
import NavLink from '../Navlinks/NavLink'


export class TopNavBar extends Component {
  render() {
    return (
     <aux>
      <div className="w3-top">
        
        <div className="w3-bar w3-container w3-white w3-card" id="myNavbar">
            <NavLink to="/" onlyActiveOnIndex className="w3-bar-item w3-button w3-wide" >MINDCARE</NavLink>
           
            <div className="w3-right  w3-hide-small">
              <NavLink activeClassName="active" to="/about" className="w3-bar-item w3-button">ABOUT</NavLink>
              <NavLink activeClassName="active" to="/signup" className="w3-bar-item w3-button">SIGN UP</NavLink>
              <NavLink activeClassName="active" to="/signin" className="w3-bar-item w3-button" >SIGN IN</NavLink>
            </div>
 
            <a href className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={this.props.toggleSidebar}>
                <i className="fa fa-bars"></i>
            </a>  
        </div>
      </div>
      
      </aux>
    )
  }
}

export default TopNavBar

