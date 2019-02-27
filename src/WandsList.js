import React, { Component } from "react";

//Componants
import Wand from "./Wand";

class WandList extends Component {
  render() {
    let wand = this.props.wands.map(wand => <Wand wand={wand} />);
    return (
      <div className="container-fluid">
        <div className="row">{wand}</div>
      </div>
    );
  }
}
export default WandList;
