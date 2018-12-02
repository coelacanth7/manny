import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
const mix1 = "./mix1.mp3";

class Player extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = { isOn: true };
	}

	render() {
		return (
			<div>
				<ReactAudioPlayer
					src={mix1}
					autoPlay
					controls
					ref={el => {
						console.log(el);
					}}
				/>
			</div>
		);
	}
}

export default Player;
