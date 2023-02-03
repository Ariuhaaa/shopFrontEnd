import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="left col-3 container ">
          <div className="menu mt-3">
            <h4 className="text">Online Shop</h4>
            <hr className="text" />
            <div className=" space text">
              <Link to="/user" className="line">
                Users
              </Link>
            </div>
            <div className="space text">
              <Link to="/menu" className="line ">
                Menu
              </Link>
            </div>
            <div className="space text">
              <Link to="/admin" className="line ">
                Dashboard
              </Link>
            </div>
            <div className="space text">
              <Link to="/category" className="line space text">
                Category
              </Link>
            </div>
            <div className="space text">
              <Link to="/products" className="line ">
                Products
              </Link>
            </div>
          </div>
        </div>
        <div className="right col-9 container ">
          <div className="d-flex gap-4 justify-content-end mb-4 mt-3 ">
            <div className="d-flex gap-1">
              <i class="bi bi-person-circle"></i>
              <div>User</div>
            </div>
            <div className="d-flex  gap-1">
              <i class="bi bi-box-arrow-right"></i>
              <div>Log Out</div>
            </div>
          </div>
          <div class="input-group mb-5 w-50">
            <input
              type="text"
              className="form-control "
              placeholder="search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
