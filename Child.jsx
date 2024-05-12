import React from "react";

import "./Child.css";

function Child(props) {
  return (
    <div>
      <h3 className={props.className}>{props.feed}</h3>
    </div>
  );
}

export default Child;