import React, { Component } from 'react';
import Curas from './Components/Line/Curas.js';
import Casos from './Components/Line/Casos.js';
class App extends Component {
  render() {
    return (
      <div className="container-header">
        <Casos />
        <Curas />
      </div>
    );
  }
}

export default App;
