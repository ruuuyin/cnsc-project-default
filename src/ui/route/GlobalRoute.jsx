import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import PlainLayout from "../page/_base/PlainLayout";

//This will serve as the base router for all pages
const GlobalRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PlainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRoute;
