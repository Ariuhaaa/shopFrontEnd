import React from "react";

export default function User() {
  return (
    <div>
      <h3>User information</h3>
      <br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="d-flex gap-2">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
