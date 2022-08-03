import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Todos from "./Todos";
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New todo with useCallback"]);
  }, [todos]);
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count} <button onClick={increment}>+</button>
      </div>
    </>
  );
};
