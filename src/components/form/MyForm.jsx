import React from "react";
import { useState } from "react";

export const MyForm = () => {
  const [name, setName] = useState("");
  
  return (
    <div>
      <h1 onSubmit={handleSubmit}>Form</h1>
      <form>
        <label htmlFor="name">
          Enter your name:
          <input
           type="text"
           value={name}
           onChange={(e)=>setName(e.target.value)}
            />
        </label>
      </form>
    </div>
  );
};
