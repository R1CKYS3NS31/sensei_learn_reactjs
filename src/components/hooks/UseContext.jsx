import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

const UserContext = createContext()

export const UseContext = () => {

  const Component1 = () => {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value = {user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    );
  };

  const Component2 = () => {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  };

  const Component3 = () => {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  };

  const Component4 = () => {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  };

  const Component5 = () => {
    const user = useContext(UserContext)

    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  };
  return (
    <>
      <Component1 />
    </>
  );
};
