// import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPreviousState from './components/StatefulGreetingWithPreviousState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you! " name= "John" age="32"/>
      <StatefulGreeting />
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPreviousState />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingFunctional connected = {true} />
      <ConditionalRenderingClass />
      <NestingComponents />
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;
