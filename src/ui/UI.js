import React, { Component } from "react";
import ReactSwipe from "react-swipe";

import Home from "./Home";
import About from "./About";
import Gigs from "./Gigs";
import Links from "./Links";
import Art from "./Art";

// generate slide panes
const numberOfSlides = 5;
let currentSlide;
const nodes = [
	<Home className="item" key={0} />,
	<About className="item" key={1} />,
	<Gigs className="item" key={2} />,
	<Art className="item" key={2} />,
	<Links className="item" key={3} />
];
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
	currentSlide = i;
	return (
		<div key={i}>
			<div className="item">{nodes[i]}</div>
		</div>
	);
});

// change Swipe.js options by query params
// const startSlide = 0;
const swipeOptions = {
	callback: function callback() {
		console.log("slide changed");
	},
	transitionEnd: function transitionEnd() {
		console.log("ended transition");
	}
};

class UI extends Component {
	constructor(props) {
		super(props);

		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.onClickNode = this.onClickNode.bind(this);
	}

	next() {
		this.reactSwipe.next();
	}

	prev() {
		this.reactSwipe.prev();
	}

	onClickNode(num) {
		this.reactSwipe.slide(num);
	}

	render() {
		return (
			<div className="center">
				{/* <button onClick={() => this.onClickNode(2)}>2</button> */}
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
