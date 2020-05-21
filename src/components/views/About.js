import React, { Component } from 'react'
import axios from 'axios'

export class About extends Component {

  constructor(props){
    super(props)

    this.state = {
      homeState: ""
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) =>{
        // console.log(data)
        this.setState({
          homeState: data
        }, () => {
          console.log(this.state.homeState)
        })
      }).catch((err)=>{
        console.log(err)
      })    
  }
  postData(){
    const data = {
      "userId": 1,
      "id":1,
      "title":"Testing Post",
      "body": "It is working"
    }

    axios.post('https://jsonplaceholder.typicode.com/posts',data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>{
        console.log(err)
      })
  }
  render() {
    return (
    <div className="w3-container" style={{padding: "128px 16px"}}>
        <h3 className="w3-center">ABOUT MINDCARE</h3>
        <button onClick={this.postData}>Submit</button>
        <p className="w3-row-padding w3-center">Key features of mindcare</p>
        <div className="w3-quarter">
      <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
      <p className="w3-large">Responsive</p>
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

