import React, { Component } from "react";

export default class HeroListItem extends Component {
  state = {
    isHovered: false
  };

  mouseOver = e => {
    this.setState({ isHovered: true });
    // let className = e.currentTarget.children[1].innerHTML;
  };

  mouseOut = e => {
    this.setState({ isHovered: false });
  };

  render() {
    const { heroClass } = this.props;
    return (
      <button
        className={`hero-grid__item ${
          this.state.isHovered ? "hero-grid__item-hovered" : ""
        }`}
        onMouseOut={this.mouseOut}
        onMouseOver={this.mouseOver}
      >
        <img src={`/images/${heroClass}.png`} alt="" />
        <h2>{heroClass}</h2>
      </button>
    );
  }
}
