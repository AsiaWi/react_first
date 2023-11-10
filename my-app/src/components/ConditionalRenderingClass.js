import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
constructor(props) {
  super(props)

  this.state = {
     isloaded : true,
     isloggedin : true
  }
}

  render() {
    return (
      <div>
        <h1> {this.state.isloaded ? 'Data Loaded' : 'Loading....'}</h1>
        {this.state.isloggedin ? (
          <div> 
            <p>Welsome to the site! Please complete the steps below:</p>
            <ol>
              <li>Confirm your email</li>
              <li>Complete your profile</li>
              <li>sSubscribe to the newsletter</li>
            </ol>
          </div>
        ) : (
          <p>Please sign in</p>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass