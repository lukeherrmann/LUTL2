import React from "react";
import { Counter } from "./Counter";
import { Opposite } from "./Opposite";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <Counter />
      <Opposite />
    </div>
  );
}

function HelloWorld({ greeting = "Hello", name }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
};

export default App;
