import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./useFetch";
// Hooks are reusable functions.

export const CustomHook = () => {
  const url = "https://jsonplaceholder.typecode.com/todos";

  const [data] = useFetch(url);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

// ricky has bugs