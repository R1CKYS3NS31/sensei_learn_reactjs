import React from "react";

export const Destructuring = () => {
  // destructuring arrays
  const vehicles = ["mustang", "f-150", "expenditure"];
  const [car, truck, suv] = vehicles;

  //
  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  };

  const [add, subtract, multiply, divide] = calculate(4, 7);

  //   destructuring objects
  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
  };

  const myVehicle =({ type,color,brand, model})=>{
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message
  }
  

  
//   console.log(myVehicle(vehicleOne));

  return (
    <div>
      <h1>Destructuring</h1>
      
    </div>
  );
};
