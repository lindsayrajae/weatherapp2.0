import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Weather from "./weather" 

function App() {
  return (
    <div className="App">
      <h1>Royal Blue Weather App</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

