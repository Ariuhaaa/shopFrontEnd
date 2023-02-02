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
              <Link to="/profile" className="line">
                Profile
              </Link>
            </div>
            <div className="space text">
              <Link to="/dashboard" className="line ">
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
              placeholder="..."
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

          <div className="d-flex justify-content-between gap-2">
            <div className="col-md-3">
              <div className="card p-3">
                <h4 className="card-title text-danger">New orders</h4>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <i class="bi bi-cart-check" style={{ fontSize: "40px" }}></i>
                  <h3>-</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h4 className="card-title text-warning">New product</h4>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <i class="bi bi-box" style={{ fontSize: "40px" }}></i>

                  <h3>-</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h4 className="card-title text-info">New User</h4>
                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <i class="bi bi-person-plus" style={{ fontSize: "40px" }}></i>
                  <h3>-</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
