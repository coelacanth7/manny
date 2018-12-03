import React, { Component } from 'react';
import './App.css';

import Canvas from './Canvas'
import Player from './Player'
import UI from './UI'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>sunsets</h1>
          <UI />
          <Canvas />
          <Player />
        </header>
      </div>
    );
  }
}

export default App;
