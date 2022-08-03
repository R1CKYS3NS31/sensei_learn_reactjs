import React from "react";
import { memo } from "react";

const Todos = ({todos,addTodo}) => {
  console.log("Child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos)