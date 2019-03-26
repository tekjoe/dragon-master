import React, { Component } from "react";
import Header from "../components/Header";
import HeroList from "./HeroList";

class App extends Component {
  state = {
    party: []
  };

  handleAddHero = hero => {
    this.setState(prevState => {
      return {
        party: [...prevState.party, hero]
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <HeroList addHero={this.handleAddHero} />
      </div>
    );
  }
}

export default App;
