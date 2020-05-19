import React, { Component } from 'react'
import NavLink from '../Navlinks/NavLink'

export class SideNavBar extends Component {
     

    render() {
       
        return (
            
            <aux>
              <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: this.props.show ? "block" : "none"}} id="mySidebar">
                <NavLink className="w3-bar-item w3-button w3-large w3-padding-16" onClick={this.props.closed}>
                Close x
                </NavLink>

                <NavLink to="/about" className="w3-bar-item w3-button" onClick={this.props.closed}>ABOUT</NavLink>
                <NavLink activeClassName="active" to="/signup" className="w3-bar-item w3-button" onClick={this.props.closed}>SIGN UP</NavLink>
                <NavLink activeClassName="active" to="/signin" className="w3-bar-item w3-button" onClick={this.props.closed}>SIGN IN</NavLink> 
            </nav>      
                
            </aux>
            
        )
    }
}

export default SideNavBar
