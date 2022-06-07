import React from "react";

export const Goal = (isGoal) => {
  const MissedGoal = () => {
    return <h4>Missed</h4>;
  };
  const MadeGoal = () => {
    return <h4>Goal!</h4>;
  };
  const Goal = isGoal;
  return (
    <div>
      <h1>Operators</h1>
      <>{Goal ? <MadeGoal /> : <MissedGoal />}</>
    </div>
  );
};
