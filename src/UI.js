import React, { Component } from "react";
import ReactSwipe from "react-swipe";

const imageStyles = {
	margin: "0 auto",
	width: "100%",
	height: "400px"
};

// generate slide panes
const numberOfSlides = 20;
let currentSlide;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  currentSlide = i;
	return (
		<div key={i}>
			<div className="item">
				<img
					style={imageStyles}
					alt={`slide${i}`}
					src={`https://placehold.it/400x400/ffffff/c0392b/&text=slide${i}`}
				/>
			</div>
		</div>
	);
});

// change Swipe.js options by query params
const startSlide = 0;
const swipeOptions = {
	startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
	auto: 1000,
	speed: 1000,
	disableScroll: true,
	continuous: true,
	callback() {
		console.log("slide changed");
	},
	transitionEnd() {
		console.log("ended transition");
	}
};

class UI extends Component {
  constructor(props) {
    super(props)

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

	next() {
		this.reactSwipe.next();
	}

	prev() {
		this.reactSwipe.prev();
	}

	render() {
		return (
			<div className="center">
				<h1 style={{ textAlign: "center" }}>ReactSwipe.js Playground {currentSlide}</h1>

				<ReactSwipe
					ref={reactSwipe => (this.reactSwipe = reactSwipe)}
					className="mySwipe"
					swipeOptions={swipeOptions}
				>
					{paneNodes}
				</ReactSwipe>

				<div style={{ textAlign: "center" }}>
					<button type="button" onClick={this.prev}>
						Prev
					</button>
					<button type="button" onClick={this.next}>
						Next
					</button>
				</div>
			</div>
		);
	}
}
export default UI;
