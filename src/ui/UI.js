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

		this.onClickNode = this.onClickNode.bind(this);
		this.renderPaneNodes = this.renderPaneNodes.bind(this);
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

	renderHomeNodes() {
		const nodes = ["ABOUT", "GIGS", "LINKS", "ART"];
		return nodes.map((node, i) => (
			<h3 key={node} onClick={() => this.onClickNode(i + 1)}>
				{node}
			</h3>
		));
	}

	nodes = [
		<div className="pane">{this.renderHomeNodes()}</div>,
		<About />,
		<Gigs />,
		<Links />,
		<Art />
	];

	renderHeader() {
		const headNodes = ["HOME", "ABOUT", "GIGS", "LINKS", "ART"];
		const isSelected = i => this.reactSwipe.swipe.getPos() === i;
		return (
			<div>
				{headNodes.map((node, i) => (
					<span key={node} onClick={() => this.onClickNode(i)}>
						<span className={isSelected(i) ? "selected-header-node" : ""}>
							{node}
						</span>
						<span> / </span>
					</span>
				))}
			</div>
		);
	}

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
				{/* {this.state.pos !== 0 ? this.header : <div className="xt-space" />} */}
				{this.state.pos !== 0 ? (
					this.renderHeader()
				) : (
					<div className="xt-space" />
				)}
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
