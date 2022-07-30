import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { NoPage } from "../pages/NoPage";

export const ReactRouterDom = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        {" "}
        // ricky has a bug here
        <Route
          index
          element={
            <>
              <Layout />
              <Home />
            </>
          }
        />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
