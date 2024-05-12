import React, { useState } from "react";

import "./App.css";

import Parent from "./Components/Parent.jsx";

function App() {
  let [a, setA] = useState(true);
  return (
    <div className="container">
      <h1>Grand Parent: </h1>
      <Parent
        className={a === null ? "" : a ? "green-color" : "cyan-color"}
        feed="Parent: Data passed from grand parent to parent."
      />
      <button onClick={()=>setA(!a)}>Color</button>
      <button onClick={()=>setA(null)}>Remove</button>
    </div>
  );
}

export default App;
