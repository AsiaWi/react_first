import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the class clickHandler button");
    }
  render() {
    return (
      <div>
        {/* this handler call works as no state change exists */}
        <button onClick = {this.clickHandler}>click me - class component</button>
        </div>
    )
  }
}

export default EventsClass