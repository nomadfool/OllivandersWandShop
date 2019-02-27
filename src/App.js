import React, { Component } from "react";
import "./App.css";
import wands from "./wands";

//Componants
import WandList from "./WandsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WandList wands={wands} />
      </div>
    );
  }
}

export default App;
