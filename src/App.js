import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld  name="Luke" greeting="Yo" />
        <HelloWorld  name="World" />
      </header>
    </div>
  );
}

function HelloWorld({greeting = "Hello", name}) {
  return <h1>{greeting} {name}!</h1>;
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
}

export default App;
