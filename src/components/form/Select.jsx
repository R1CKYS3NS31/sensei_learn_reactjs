import React from "react";
import { useState } from "react";

export const Select = () => {
    const [myCar, setMyCar] = useState('choose car')

    const handleChange=(event)=>{
        setMyCar(event.target.value)
    }
  return (
    <form>
      <select name="myCar" id="" onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
};
