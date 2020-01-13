import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [color, setColor] = React.useState("");

  return (
    <div className="counter">
      <p>{`Color: ` + color}</p>
      <div className="button_container">
        <button
          className="color_button"
          onClick={() => {
            setColor("blue");
          }}
        >
          <span role="img" aria-label="blue heart">
            💙
          </span>
        </button>
        <button
          className="color_button"
          onClick={() => {
            setColor("green");
          }}
        >
          <span role="img" aria-label="green heart">
            💚
          </span>
        </button>
        <button
          className="color_button"
          onClick={() => {
            setColor("pink");
          }}
        >
          <span role="img" aria-label="pink heart">
            💗
          </span>
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
