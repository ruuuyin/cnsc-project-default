import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../page/_base/AdminLayout";

//This will serve as the base router for all pages
const GlobalRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRoute;
