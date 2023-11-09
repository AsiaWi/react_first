import React from "react";
// could also use: import React { Component } from "react";
// class StatefulGreeting extends Component {

class StatefulGreetingWithPreviousState extends React.Component {

    constructor(props) {
        super(props); //super()-must , ensures react.component is called
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0
        };
    }
    incrementButton(){
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                count: prevState.count + 1
            }
        })
    };
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);

            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        }

        )
    };
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick = {() => this.incrementButton()}>{this.state.count}</button>
            </div>
        )
    }

}
export default StatefulGreetingWithPreviousState;