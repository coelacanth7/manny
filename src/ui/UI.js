import React, { Component } from "react";
import ReactSwipe from "react-swipe";

import Home from "./Home";
import About from "./About";
import Gigs from "./Gigs";
import Links from "./Links";
import Art from "./Art";

// change Swipe.js options by query params
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
		this.renderPaneNodes = this.renderPaneNodes.bind(this);
		this.getPosition = this.getPosition.bind(this);
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

	getPosition() {
		this.reactSwipe.getPos();
	}

	renderPaneNodes() {
		return this.nodes.map((node, i) => (
			<div key={i}>
				<div className="item">{node}</div>
			</div>
		));
	}

	nodes = [
		// <Home onClickNode={this.onClickNode} />,
		<div className="pane">
			<h3 onClick={() => this.onClickNode(1)}>ABOUT</h3>
			<h3 onClick={() => this.onClickNode(2)}>GIGS</h3>
			<h3 onClick={() => this.onClickNode(3)}>LINKS</h3>
			<h3 onClick={() => this.onClickNode(4)}>ART</h3>
		</div>,
		<About />,
		<Gigs />,
		<Links />,
		<Art />
	];

	header = (
		<div>
			<span onClick={() => this.onClickNode(0)}>HOME</span>
			<span onClick={() => this.onClickNode(1)}>ABOUT</span>
			<span onClick={() => this.onClickNode(2)}>GIGS</span>
			<span onClick={() => this.onClickNode(3)}>LINKS</span>
			<span onClick={() => this.onClickNode(4)}>ART</span>
		</div>
	);

	render() {
		return (
			<div className="center">
				{/* <button onClick={() => this.onClickNode(1)}>2</button> */}
				<ReactSwipe
					ref={reactSwipe => (this.reactSwipe = reactSwipe)}
					className="mySwipe"
					swipeOptions={swipeOptions}
				>
					{/* <div>{this.getPosition()}</div> */}
					{this.renderPaneNodes()}
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
