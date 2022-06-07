import React from "react";

export const MissedGoal = () => {
    return <h4>Missed</h4>;
};
export const MadeGoal = () => {
  return <h4>Goal!</h4>;
};


export const Goal = (isGoal) => {
  const Goal = isGoal;
  return (
    <div>
      <h1>Operators</h1>
      {Goal ? <MadeGoal /> : <MissedGoal />}
    </div>
  );
};
