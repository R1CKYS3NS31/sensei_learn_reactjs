import React from "react";
const Car = (props) => {
  return <li>I am a {props.brand}</li>;
};
export const Lists = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car} brand={car} />
        ))}
      </ul>
    </div>
  );
};
