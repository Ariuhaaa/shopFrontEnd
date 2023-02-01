import React from "react";

export default function AdminPanel() {
  return (
    <div className="container ">
      <div className="d-flex">
        <div className="left col-2 container">
          <div className="menu">
            <div className="d-flex">
              <i class="bi bi-person-circle"></i>
              <div className="space">Profile</div>
            </div>
            <div className="d-flex">
              <i class="bi bi-box-seam"></i>
              <div className="space">Dashboard</div>
            </div>
            <div className="space">Category</div>
            <div className="space">Products</div>
          </div>
        </div>
        <div className="right col-10 container">
          <div>
            <div className="d-flex gap-3 justify-content-end">
              <div className="d-flex">
                <i class="bi bi-person-circle"></i>
                <div>User</div>
              </div>
              <div className="d-flex">
                <i class="bi bi-box-arrow-right"></i>
                <div>Log Out</div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex border">
                <i class="bi bi-cart-check"></i>
                <div>New orders</div>
              </div>
              <div>
                <div className="border">New product</div>
              </div>
              <div className="d-flex border">
                <i class="bi bi-person-plus"></i>
                <div>New User</div>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="form-control w-50"
          />
        </div>
      </div>
    </div>
  );
}
