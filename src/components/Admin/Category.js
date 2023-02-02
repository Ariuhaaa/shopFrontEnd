import React from "react";

export default function Category() {
  return (
    <div className="container">
      <div>
        <h1>Category</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Category Name"
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Category Name"
        />
        <div className="m-3">
          <button className="btn btn-success">Нэмэх</button>
          <button className="btn btn-primary">Гарах</button>
        </div>
      </div>
    </div>
  );
}
