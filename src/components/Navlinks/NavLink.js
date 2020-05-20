import React, { Component } from 'react'
import { Link } from 'react-router-dom'


   

export class NavLink extends Component {
  render() {
    return <Link {...this.props}/>
  }
}

export default NavLink
