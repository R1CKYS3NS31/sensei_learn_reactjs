import React from "react";

export const Css = () => {
  // js object for styling
  const myStyle = {
    padding: "50px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={{ color: "green", backgroundColor: "black" }}>Hello Style!</h1>
      <p style={myStyle}>Styling JS object</p>
    </>
  );
};
