import React, { Component } from 'react';
import Canvas from './Canvas'
import Player from './Player'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>sunsets</h1>
          <Canvas />
          <Player />
        </header>
      </div>
    );
  }
}

export default App;
