import React from "react";

import "./Parent.css";

import Child from "./Child.jsx";

function Parent(props) {
  return (
    <div>
      <h2 className={props.className}>{props.feed}</h2>
      <Child className={props.className} feed="Child: Data passed from parent to child." />
    </div>
  );
}

export default Parent;
