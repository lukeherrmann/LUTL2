import React, { useState } from "react";

export function Accordion() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      { isToggled ? 
      <h1>Big</h1> : <h4>Small</h4>
    }
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}
