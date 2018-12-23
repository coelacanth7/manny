import React, { Component } from "react";
import ReactSwipe from "react-swipe";

import About from "./About";
import Gigs from "./Gigs";
import Links from "./Links";
import Art from "./Art";

class UI extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pos: 0
		};

		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.onClickNode = this.onClickNode.bind(this);
		this.renderPaneNodes = this.renderPaneNodes.bind(this);
	}

	next() {
		this.reactSwipe.next();
	}

	prev() {
		this.reactSwipe.prev();
	}

	onClickNode(num) {
		this.reactSwipe.slide(num);
		this.setState({ pos: this.reactSwipe.getPos() });
	}

	renderPaneNodes() {
		return this.nodes.map((node, i) => (
			<div key={i}>
				<div className="item">{node}</div>
			</div>
		));
	}

	nodes = [
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
			<span onClick={() => this.onClickNode(0)}>HOME / </span>
			<span onClick={() => this.onClickNode(1)}>ABOUT / </span>
			<span onClick={() => this.onClickNode(2)}>GIGS / </span>
			<span onClick={() => this.onClickNode(3)}>LINKS / </span>
			<span onClick={() => this.onClickNode(4)}>ART / </span>
		</div>
	);

	// change Swipe.js options by query params
	swipeOptions = {
		callback: () => {
			this.setState({ pos: this.reactSwipe.swipe.getPos() });
		},
		transitionEnd: function transitionEnd() {
			console.log("ended transition");
		},
		continuous: false
	};

	render() {
		return (
			<div className="center">
				{this.state.pos !== 0 ? this.header : <div className="xt-space" />}
				<ReactSwipe
					ref={reactSwipe => (this.reactSwipe = reactSwipe)}
					className="mySwipe"
					swipeOptions={this.swipeOptions}
					id="slider"
				>
					{this.renderPaneNodes()}
				</ReactSwipe>
			</div>
		);
	}
}

export default UI;
