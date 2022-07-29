import React from "react";
import { useState } from "react";

export const MultipleInputs = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      [name]: name,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="age">
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
