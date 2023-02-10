import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Admin/AdminLayout";
import Category from "./components/Admin/Category";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import Menu from "./components/Admin/Menu";
import User from "./components/Admin/User";
import ProductNew from "./components/Admin/ProductNew";
import UserList from "./components/Admin/UserList";

function App() {
  return (
    <div className="container-fluid p-0">
      <Routes>
        <Route path="/" element={<AdminLayout />} />
        <Route element={<AdminLayout />}>
          <Route index path="/admin" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<ProductNew />} />
          <Route path="/users" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
