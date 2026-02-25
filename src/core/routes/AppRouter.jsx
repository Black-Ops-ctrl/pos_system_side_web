import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/inventory" element={<Inventory />} /> */}
    </Routes>
  );
};

export default AppRouter;
