import React from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";
import Store from "./components/Store";
import "./index.css";

class App extends React.Component {
  render() {
    return <Filter />;
  }
}

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("app")
);
