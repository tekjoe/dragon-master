import React, { Component } from "react";

export default class HeroListItem extends Component {
  state = {
    isHovered: false
  };

  mouseOver = e => {
    this.setState({ isHovered: true });
  };

  mouseOut = e => {
    this.setState({ isHovered: false });
  };

  render() {
    const { heroClass, description } = this.props;
    return (
      <button
        className="hero-grid__item"
        onClick={() => this.props.addHero(heroClass)}
      >
        <img src={`/images/${heroClass}.png`} alt="" />
        <span className={this.state.isHovered ? "tooltip-hovered" : "tooltip"}>
          {description}
        </span>
        <h2 onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {heroClass} ℹ️
        </h2>
      </button>
    );
  }
}
