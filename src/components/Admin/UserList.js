import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function UserList() {
  //   const navigate = useNavigate();
  const [user, setUser] = useState([]);

  function getData() {
    //GET
    fetch("http://localhost:8080/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.result);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h5>User List</h5>
      <br />
      <button className="btn btn-primary" onClick={Modal}>
        {/* onClick={() => navigate("/UserList")} */}
        Add User
      </button>
      <br />

      <br />
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>{index + 1}</td>
            <td>{e.username + e.lastname}</td>
            <td>{e.id}</td>
            <td>{e.email}</td>
            <td className="d-flex gap-2">
              <div className="btn btn-primary" onClick={() => e.id}>
                Edit
              </div>
              <div className="btn btn-danger" onClick={() => e.id}>
                Delete
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
