import React from "react";

function FunctionalGreetingWithProps(props){
    return <h1>Hello to props!{props.greeting} I've heard your name is {props.name} and you're {props.age} years old</h1>
}

export default FunctionalGreetingWithProps;