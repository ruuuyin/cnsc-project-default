import { useSessionStorageState } from "ahooks";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlainLayout from "../page/_base/PlainLayout";
import { NavigatorProvider } from "../../service/context/NavigatorContext";
import AdminLayout from "../page/_base/AdminLayout";
import HomePage from "../page/home/HomePage";

//This will serve as the base router for all pages
const GlobalRoute = () => {
  const [selectedKey, setSelectedKey] = useSessionStorageState(
    "selected-menu",
    "home"
  );
  return (
    <NavigatorProvider
      value={{ selectedKey: selectedKey, setSelectedKey: setSelectedKey }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<PlainLayout />} />
        </Routes>
      </BrowserRouter>
    </NavigatorProvider>
  );
};

export default GlobalRoute;
