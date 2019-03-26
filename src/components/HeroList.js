import React, { Component } from "react";
import HeroListItem from "./HeroListItem";

export default class HeroList extends Component {
  state = {
    heroes: [
      {
        id: 1,
        class: "Warrior",
        description:
          "A TANK class that is designed to execellent at defensive maneuvers and can taunt enemies to attack him, protecting his allies. ABILITIES: Attack, Protect, Taunt, Sunder Armor"
      },
      {
        id: 2,
        class: "Paladin",
        description:
          "A TANK or HEALER class that can can play a defensive role in the party including healing the party and taking the damage. ABILITIES: Attack, Taunt, Heal, Holy Smite"
      },
      {
        id: 5,
        class: "Rogue",
        description:
          "A DAMAGE class that specializes in attacking opponents with quick strikes and pinpoint accuracy. ABILITIES: Attack, Bleed, Back Stab, Sunder Armor"
      },
      {
        id: 7,
        class: "Priest",
        description:
          "A HEALER class that protects the party with her ability to heal everyone at once and can provide some damage too! ABILITIES: Attack, Heal, Heal Party, Holy Smite"
      },
      {
        id: 8,
        class: "Warlock",
        description:
          "A DAMAGE class that will use dark magics to sacrifice its own health in order to win at any costs. ABILITIES: Attack, Curse of Agony, Shadow Strike, Fireball"
      },
      {
        id: 9,
        class: "Mage",
        description:
          "A DAMAGE class that uses many schools of magic to damage her enemies and replensh her own powers. ABILITIES: Arcane Weapon, Fireball, Wind Furry, Arcane Focus"
      }
    ]
  };

  render() {
    return (
      <div className="hero-grid">
        {this.state.heroes.map(hero => (
          <HeroListItem
            key={hero.id}
            heroClass={hero.class}
            description={hero.description}
            addHero={this.props.addHero}
          />
        ))}
      </div>
    );
  }
}
