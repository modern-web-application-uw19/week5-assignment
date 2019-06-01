import React, { Component } from "react";
import CreatureDetail from "./CreatureDetail";
import { Link } from "react-router-dom";
import "./Creature.css";

class Creature extends Component {
  render() {
    const { creatureInfo } = this.props;
    console.log(this.props);
    return (
      <ul>
        <Link
          to={{
            pathname: `/CreatureDetail/${creatureInfo.name}`,
            state: { creatureInfo }
          }}
          Component={CreatureDetail}
          className="creature"
        >
          {creatureInfo.name}
        </Link>
      </ul>
    );
  }
}

export default Creature;
