// import React, {useState} from 'react';
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const handlerAddOne = e => {
    setCount(count + 1);
  };

  const handlerSubOne = e => {
    setCount(count - 1);
  };

  const handlerReset = e => {
    setCount(0);
  };



  // const countArray = useState(0);
  // const count = countArray[0];
  // const setCount = countArray[1];

  console.log("count = ", count);
  console.log("setCount ", setCount);

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked <span> {count}</span> times!
      </p>
      <div className="button_container">
        <button onClick={handlerAddOne}>Add 1</button>
        <button onClick={handlerSubOne}>Sub 1</button>
        <button onClick={handlerReset}>Reset</button>

      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
