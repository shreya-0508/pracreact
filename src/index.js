//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1> yoo shreya </h1>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
    <p>copyright {year} </p>
  </div>,
  document.getElementById("root")
);
