import React, { Component } from 'react';
import MethodsAsPropsChild from './MethodsAsPropsChild';


export class MethodsAsPropsParent extends Component {
constructor(props) {
  super(props)
  this.state = {
     isloggedin : false
  }
}

handleSignIn = () => {
    this.setState({
        isloggedin: true
    })
    console.log(this)
}

handleSignOut = () => {
    this.setState({
      isloggedin: false,
    });
    console.log(this);
  };

//   // single method that handles both SignIn and SignOut
//   toggleIsLoggedIn = () => {
//     this.setState((prevState) => ({
//       isLoggedIn: !prevState.isLoggedIn,
//     }));
//   };


  render() {
    return (
      <div>
        <h1>MethodsAsPropsParent</h1>
       <MethodsAsPropsChild 
       isloggedin = {this.state.isloggedin} 
       handleSignIn = {this.handleSignIn} 
       handleSignOut={this.handleSignOut}/>
      </div>
    )
  }
}

export default MethodsAsPropsParent;