import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from "../src/components/todoList/TodoList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          /*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */
        }
         
         <Router>
      <div >
        <Switch>
        <Route path="/" exact component = {TodoList}/>
        <Route path="/update:id" exact component = {TodoList}/>
        </Switch>
      </div>
      </Router>
      </header>
    </div>
  );
}

export default App;
