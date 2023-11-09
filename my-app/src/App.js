// import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPreviousState from './components/StatefulGreetingWithPreviousState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you! " name= "John" age="32"/>
      <StatefulGreeting />
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPreviousState />
    </div>
  );
}

export default App;
