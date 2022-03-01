import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import AdminLayout from "../page/_base/AdminLayout";

const AdminRoute = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoute;
