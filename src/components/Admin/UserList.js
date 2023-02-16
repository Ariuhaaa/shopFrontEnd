import React, { useEffect, useState } from "react";
import User from "./User";
// import { useNavigate } from "react-router-dom";

export default function UserList() {
  //   const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);

  function getData() {
    //GET
    fetch("http://localhost:8080/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.result);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const onSave = (user) => {
    console.log(user);
    fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getData();
        // setUser(data.result);
      });
  };

  return (
    <div className="container">
      <h5>User List</h5>
      <br />
      <button className="btn btn-primary" onClick={() => setShow(true)}>
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
          {user.map((e, index) => {
            return (
              <tr>
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
              </tr>
            );
          })}
        </tbody>
      </table>
      <User show={show} setShow={setShow} onSave={onSave} />
    </div>
  );
}
