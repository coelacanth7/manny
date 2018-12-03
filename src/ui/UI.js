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

	renderPaneNodes() {
		return this.nodes.map((node, i) => (
			<div key={i}>
				<div className="item">{node}</div>
			</div>
		));
	}

  nodes = [
  	<Home />,
  	<About />,
  	<Gigs />,
  	<Art />,
  	<Links />
  ];

	render() {
		return (
			<div className="center">
				{/* <button onClick={() => this.onClickNode(2)}>2</button> */}
				<ReactSwipe
					ref={reactSwipe => (this.reactSwipe = reactSwipe)}
					className="mySwipe"
					swipeOptions={swipeOptions}
				>
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
