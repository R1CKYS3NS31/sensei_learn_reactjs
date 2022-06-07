import React from "react";

export const SpreadOperator = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [one, two, ...rest] = numbers;

  // combine two objects
  const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
  };

  const updateMyVehicle = {
    type: "car",
    year: 2022,
    colo: "yellow",
  };

  const myUpdatedVehicle = {
    ...myVehicle,
    ...updateMyVehicle,
  }
  console.log(myUpdatedVehicle);

  return (
    <div>
      <h1>SpreadOperator</h1>
      
    </div>
  );
};
