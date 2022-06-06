import React from "react";

export const ArrayMethods = () => {
  const myArray = ["apple", "banana", "orange"];

  return (
    <div>
      <h1>ArrayMethods</h1>
      {myArray.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
