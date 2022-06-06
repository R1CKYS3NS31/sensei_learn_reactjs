import React from "react";

export default function ArrowFucntions() {
  // function with return
  const arrow = () => {
    return "I am arrow function";
  };
  const arrow2 = () => "Hello, arrow function is me";

  //   function with parameters
  const hello = (val) => "Hello " + val;
  //   function with parameters without parenthis
  const hello1 = (val) => "Hello " + val;

  //   this in functions
  class Header {
    constructor() {
      this.color = "Red";
    }

    changeColor = () => {
    //   document.getElementById("changeColor").innerHTML += this;
    // use useRef
    };
  }
  const myHeader = new Header();

  
  return (
    <div>
      <h1>ArrowFucntions</h1>
      <p>{arrow()}</p>
      {/* <p id="changeColor">Change my Color</p> */}
      {/* <button onClick={myHeader.changeColor()}></button> */}


    </div>
  );
}
