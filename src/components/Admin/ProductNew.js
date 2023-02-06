import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function ProductNew() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const init = {
    productName: "",
    categoryId: 0,
    price: 0,
    thumbImage: "",
    images: [],
    salePercent: 0,
    quantity: 0,
    description: "",
  };

  const [productItem, setProductItem] = useState(init);

  const onSave = () => {
    axios
      .post("http://localhost:8080/api/product", productItem)
      .then((res) => {
        if (res.data.status) {
          navigate("/products");
        } else {
          alert("Hadgalahad ued aldaa garlaa");
        }
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div>
          <h4>Product name</h4>
          <input
            type="text"
            className="form-control w-75"
            value={productItem.productName}
            onChange={(e) => {
              setProductItem({
                ...productItem,
                productName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <br />
          <h4>Price</h4>
          <input
            type="text"
            className="form-control w-75"
            value={productItem.price}
            onChange={(e) => {
              setProductItem({ ...productItem, price: e.target.value });
            }}
          />
        </div>
        <br />
        <h5>Sale</h5>
        <input
          type="text"
          className="form-control w-75"
          value={productItem.salePercent}
          onChange={(e) => {
            setProductItem({ ...productItem, salePercent: e.target.value });
          }}
        />
        <br />
        <h5>Quantity</h5>
        <input
          type="text"
          className="form-control w-75"
          value={productItem.quantity}
          onChange={(e) => {
            setProductItem({ ...productItem, quantity: e.target.value });
          }}
        />
        <br />
        <h5>Description</h5>
        <input
          type="text"
          className="form-control w-75"
          value={productItem.description}
          onChange={(e) => {
            setProductItem({ ...productItem, description: e.target.value });
          }}
        />
        <br />

        <h5>Upload File</h5>
        <div class="input-group mt-3 mb-3">
          <div>
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              onChange={(e) => {
                setLoading(true);
                const url = "https://api.cloudinary.com/v1_1/dno2srn4n/upload";

                const formData = new FormData();

                let file = e.target.files[0];
                formData.append("file", file);
                formData.append("api-key", "827464371697588");
                formData.append("folder", "onlineShop");
                formData.append("upload_preset", "fhnodb1h");

                axios
                  .post(url, formData)
                  .then((res) => {
                    console.log(res);

                    setProductItem({
                      ...productItem,
                      thumbImage: res.data.secure_url,
                    });
                    setLoading(false);
                  })
                  .catch((err) => console.log(err));
              }}
              multiple
            />
            {loading && "Uploading ..."}
            <br />
          </div>
        </div>
        <hr />
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={onSave}>
            Save
          </button>
          <button className="btn btn-danger" onClick={() => console.log("JH")}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
