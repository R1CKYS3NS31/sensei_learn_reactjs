import React from "react";

export const Todos = () => {
  return (
    <>
      <h2>My Todos</h2>
      {Todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};
