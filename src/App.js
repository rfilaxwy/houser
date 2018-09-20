import React, { Component } from 'react';
import './App.css';

//Components
import Dashboard from './component/Dashboard/Dashboard.js';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Dashboard />
        < Wizard />
        < Header />

      </div>
    );
  }
}

export default App;
