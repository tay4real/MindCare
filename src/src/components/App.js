import React, { Component, Fragment } from './node_modules/react'
import {Header, Footer} from './Layouts'
import MentalTests from './MentalTests'
import {mentalConditions, tests} from '../store.js'


export default class extends Component {

  state = {
    tests
  }

  getTestsByMentalConditions(){
    return Object.entries(
      this.state.tests.reduce((tests, test) => { 
        const {mentalConditions} = test

        tests[mentalConditions] = tests[mentalConditions]
        ? [...test[mentalConditions], test]
        : [test]

        return tests
      }, {})
    )
  }

  render() {
    const tests = this.getTestsByMentalConditions()
    return (
     
      <Fragment>
        <Header />

        <MentalTests tests = {tests} />

        <Footer 
          mentalConditions = {mentalConditions}
        />
      </Fragment>
    )
  }
}


