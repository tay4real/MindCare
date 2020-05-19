import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
    <div className="w3-container" style={{padding: "128px 16px"}}>
        <h3 class="w3-center">ABOUT MINDCARE</h3>
        <p className="w3-row-padding w3-center">Key features of mindcare</p>
        <div class="w3-quarter">
      <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
      <p class="w3-large">Responsive</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Passion</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Design</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Support</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    </div>
    )
  }
}

export default About

