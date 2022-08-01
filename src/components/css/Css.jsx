import React from "react";
import styles from './my_style.module.css'

export const Css = () => {
  // js object for styling
  const myStyle = {
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={{ color: "rgb(0, 255, 10)", backgroundColor: "black" }}>Hello Style!</h1>
      <p style={myStyle}>Styling JS object</p>
      <h3 className={styles.bigblue}>Css Module</h3>
    </>
  );
};
