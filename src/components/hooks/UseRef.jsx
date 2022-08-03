// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  // useRef to access DOM elements
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };

//   Tracking state changes
//   The useRef Hook can also be used to keep track of previous state values.
const previousInputValue = useRef('')
useEffect(()=>{
    previousInputValue.current= inputValue // update useRef current value each time inputValue is updated at input
},[inputValue])

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h3>Render Count: {count.current}</h3>
      <h5>Current value: {inputValue}</h5>
      <h5>Previous value:{previousInputValue.current}</h5>

      {/* DOM element */}
      <input type="text" ref={inputElement}/>
      <button onClick={focusInput}>Focus input</button>
    </>
  );
};
