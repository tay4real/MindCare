import React, { Component } from 'react'

import { Link } from 'react-router-dom'


export class Home extends Component {
    render() {
        return (
            <header className="bgimg-1 w3-display-container  w3-grayscale-min" id="home">
                <div className="w3-display-left w3-text-white" style={{padding:"48px"}}>
                    <span className="w3-jumbo w3-hide-small">Know Your Mental Health Status</span><br/>
                    <span className="w3-xxlarge w3-hide-large w3-hide-medium">Know Your Mental Health Status</span><br />
                    
                    <span className="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
                    <p><Link to="/signIn" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Take a Test</Link></p>
                </div> 
                <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding:"24px 48px"}}>
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
            </header>
        )
    }
}

export default Home
