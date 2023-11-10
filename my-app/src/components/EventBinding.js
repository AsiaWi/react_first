import React from "react";
// could also use: import React { Component } from "react";
   // class StatefulGreeting extends Component {

class EventBinding extends React.Component {
     
    // THIRD BINDING METHOD
    // constructor(props){
    //     super(props); //super()-must , ensures react.component is called
    //     this.state = {
    //         introduction: "Hello",
    //         buttonText: "Exit",
    //     };
    // this.handleClick = this.handleClick.bind(this)
    // }

    constructor(props){
        super(props); //super()-must , ensures react.component is called
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }
   //FIRST BINDING METHOD
    // handleClick(){
    //     this.setState({
    //         introduction: "goodbye!",
    //         buttonText: "enter",
    //     });
    //     console.log(this.state.introduction);
    // }


    // FOURTH BINDING METHOD
    // handleClick = () => {
    //     this.setState({
    //         introduction: "goodbye!",
    //         buttonText: "enter",
    //     });
    //     console.log(this.state.introduction);
    // }
    handleClick(){
        this.setState({
            introduction: "goodbye!",
            buttonText: "enter",
        });
        console.log(this.state.introduction);
    }

    render(){
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            {/* FIRST BINDING METHOD
             <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button> */}
            {/* SECOND BINDING METHOD */}
            {/* <button onClick = {this.handleClick.bind(this)}>{this.state.buttonText}</button> */}
            {/* THIRD BINDING METHOD */}
            {/* <button onClick = {this.handleClick}>{this.state.buttonText}</button> */}
            <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
        )
    }

}
export default EventBinding;