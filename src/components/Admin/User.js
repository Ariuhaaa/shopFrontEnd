import React, { useState } from "react";

export default function User() {
  const UserNew = ({ searchParams, setSearchParams, title, onSave }) => {
    const [show, setShow] = useState(searchParams && true);

    const init = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
    };

    const [userItem, setUserItem] = useState(init);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState([]);

    const onClose = () => {
      setSearchParams({});
      setShow(false);
    };
  };
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
