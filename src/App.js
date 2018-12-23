import React, { Component } from "react";
import "./App.css";

// import Canvas from './Canvas'
import Player from "./Player";
import UI from "./ui/UI";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>sunsets_</h1>
				</header>
				<UI />
				{/* <Canvas /> */}
				<Player />
			</div>
		);
	}
}

export default App;
