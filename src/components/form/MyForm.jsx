import React from "react";
import { useState } from "react";

export const MyForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered is: ${name}`);
  };
  console.log(name);
  return (
    <div>
      <h1 >Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit name" />
      </form>
    </div>
  );
};
