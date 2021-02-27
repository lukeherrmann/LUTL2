import React, { useState } from "react";

export function Opposite() {

const [ opposite, setOpposite ] = useState(true);

  return(
    <div>
      <h2>Click to see the Opposite</h2>
      <button onClick={() =>setOpposite(!opposite) }> Opposite Button</button>
      <h3>{opposite ? "True" : "False"}</h3>
    </div>
  )
}