import React from "react";
// could also use: import React { Component } from "react";
// class StatefulGreeting extends Component {

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props); //super()-must , ensures react.component is called
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({ //setState is an asynchronous so console.log (listed after this function) executes before this one hence console prints old 'state' values
            introduction: "goodbye!",
            buttonText: "enter"
        }, () => {
            console.log("new state", this.state.introduction);
        });
        console.log(this.state.introduction);
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}
export default StatefulGreetingWithCallback;