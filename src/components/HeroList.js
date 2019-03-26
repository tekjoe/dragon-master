import React, { Component } from "react";
import HeroListItem from "./HeroListItem";

export default class HeroList extends Component {
  state = {
    heroes: [
      { id: 1, class: "Warrior" },
      { id: 2, class: "Paladin" },
      { id: 3, class: "Tracker" },
      { id: 4, class: "Shadow Assassin" },
      { id: 5, class: "Rogue" },
      { id: 6, class: "Shaman" },
      { id: 7, class: "Priest" }
    ]
  };

  render() {
    return (
      <div className="hero-grid">
        {this.state.heroes.map(hero => (
          <HeroListItem key={hero.id} heroClass={hero.class} />
        ))}
      </div>
    );
  }
}
