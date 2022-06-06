import React from "react";

export const Variables = () => {
  var v = 5.6; // has a function scope, not block scope
  let l = 6.7; // let is the block version of var, limited to the block it is defined
  const c = 3.4; // once created it can't change, has block scope
  return (
    <div>
      <h1>Variables</h1>
      <p>
        {v}, {l}, {c}
      </p>
    </div>
  );
};
