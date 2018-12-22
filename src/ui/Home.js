import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);

		// this.next = this.next.bind(this);
		// this.prev = this.prev.bind(this);
		this.clickContent = this.clickContent.bind(this);
		this.tableOfContents = this.tableOfContents.bind(this);
	}

	contents = ["ABOUT", "GIGS", "LINKS", "ART"];

	clickContent(e) {
		this.props.onClickNode(e.target.value);
	}

	tableOfContents() {
		return this.contents.map((el, i) => (
			<h3 onClick={this.clickContent} key={i} value={i}>
				{el}
			</h3>
		));
	}

	render() {
		return <div className="pane">{this.tableOfContents()}</div>;
	}
}

export default Home;
