import React, { useEffect, useState } from "react";

export default function Category() {
  let Newobj = {
    categoryId: "",
    categoryName: "",
  };

  const [myData, setMyData] = useState(Newobj);
  const [tableData, setTableData] = useState([]);
  const [orNot, setOrNot] = useState(false);

  // console.log(myData);
  // const obj = { categoryName: myData };
  // console.log(obj);

  function addCate() {
    //POST
    fetch("http://localhost:8000/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setMyData(Newobj);
        getData();
      });
  }

  function getData() {
    //GET
    fetch("http://localhost:8000/api/category")
      .then((res) => res.json())
      .then((data) => {
        setTableData(data.result);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function cateDelete(id) {
    //DELETE
    fetch(`http://localhost:8000/api/category/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyData(data.result);
        getData();
      });
  }

  function cateEdit(id) {
    setOrNot(true);
    //UPDATE
    fetch(`http://localhost:8000/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data.result[0]);
      });
  }

  const Edit = () => {
    console.log("here");
    const id = myData.categoryId;
    console.log(id);
    //put
    fetch(`http://localhost:8000/api/category/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMyData(Newobj);
        getData();
      });
    setOrNot(false);
  };

  return (
    <div className="container">
      <div>
        <h1>Category</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Category Name"
          value={myData.categoryName}
          onChange={(e) => {
            setMyData({ ...myData, categoryName: e.target.value });
          }}
        />

        <div className="m-3">
          <button
            className="btn btn-success"
            onClick={() => (orNot ? Edit() : addCate())}
          >
            {orNot ? "hadgalah" : "nemeh"}
          </button>
          <button className="btn btn-primary">Гарах</button>
        </div>
      </div>
      <hr />
      <h3>Category list</h3>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.categoryName}</td>
                <td>{e.categoryId}</td>
                <td className="d-flex gap-2">
                  <div
                    className="btn btn-primary"
                    onClick={() => cateEdit(e.categoryId)}
                  >
                    Edit
                  </div>
                  <div
                    className="btn btn-danger"
                    onClick={() => cateDelete(e.categoryId)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
