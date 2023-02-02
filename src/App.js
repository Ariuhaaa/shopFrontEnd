import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Admin/AdminLayout";
import Category from "./components/Admin/Category";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* <AdminLayout /> */}
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route element={<AdminLayout />}>
          <Route index path="/admin" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
