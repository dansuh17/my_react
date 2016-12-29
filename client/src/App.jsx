import React from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get Started...
    </p>
    <PeopleContainer />
  </div>
);

export default App;
