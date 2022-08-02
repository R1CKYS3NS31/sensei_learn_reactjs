import React from "react";
import { useState } from "react"; // useState Hook allows us to track state in a function component.

export const UseState = () => {
  const [color, setColor] = useState("green");
  const [car, setCar] = useState({
    brand:'Ford',
    model:'Mustang',
    year:'1964',
    color:'red'
  })

  const updateColor=()=>{
    setCar(previousState=>{
      return{...previousState,color:'blue'}
    })
  }

  return (
    <>
      <h5>My favourite color is {color}!</h5>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <p>My {car.brand} is a {car.color} from {car.year}</p>
      <button type="button" onClick={updateColor}>
        Blue Car
      </button>
    </> // use of initial state
  );
};
