import React from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";
import "./index.css";

class App extends React.Component {
  render() {
    return <Filter />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
