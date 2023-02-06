import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then((res) => setProducts(res.data.result));
  }, []);

  return (
    <div>
      <h2> Product List</h2>
      <button className="btn btn-primary" onClick={() => navigate("/product")}>
        Add new product
      </button>
      <br />
      <br />

      <table className="table col">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Id</th>
            <th scope="col">CategoryId</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Sale</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(
            (
              {
                id,
                productName,
                price,
                categoryId,
                thumbImage,
                salePercent,
                description,
                quantity,
              },
              index
            ) => (
              <tr>
                <td>{index + 1}</td>
                <td>{productName}</td>
                <td>{id}</td>
                <td>{categoryId}</td>
                <td>{price}</td>
                <td>
                  <img width={50} src={thumbImage} alt="hs" />
                </td>
                <td>{salePercent}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <div className="d-flex">
                  <button className="btn btn-danger">Edit</button>
                  <button className="btn btn-warning">Delete</button>
                </div>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
