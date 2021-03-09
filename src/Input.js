import React, { useState } from "react";

export function Input() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h3>{inputValue && <h3>{inputValue}</h3>}</h3>
      <input
        value={inputValue}
        onChange={(e) => {
          if (!e.target.value.includes("e")) {
            setInputValue(e.target.value);
          }
        }}
      />
    </div>
  );
}
