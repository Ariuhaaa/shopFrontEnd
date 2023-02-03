import axios from "axios";
import React, { useState } from "react";

export default function Products() {
  //   const ProductNew = { searchParams, setSearchParams, title, onSave };
  const [productItem, setProductItem] = useState([]);

  return (
    <div>
      <div>
        <h3>Products</h3>
        <div>
          <label>Бүтээгдэхүүний нэр</label>
          <input type="text" className="form-control" />
        </div>
        <div>
          <label>Үнэ</label>
          <input type="text" className="form-control" />
        </div>
        <div class="input-group mt-3 mb-3">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            onChange={(e) => {
              const url = "https://api.cloudinary.com/v1_1/dno2srn4n/upload";

              const formData = new FormData();

              let file = e.target.files[0];
              formData.append("file", file);
              formData.append("api-key", "827464371697588");
              formData.append("folder", "onlineShop");
              formData.append("upload_present", "fhnodb1h");

              axios
                .post(url, formData)
                .then((res) => {
                  console.log(res);

                  setProductItem({
                    ...productItem,
                    thumbImage: res.data.secure_url,
                  });
                })
                .catch((err) => console.log(err));
            }}
          />
          <div>
            {/* <button
              class="btn btn-outline-secondary"
              type="button"
              id="inputGroupFileAddon04"
            >
              Button
            </button> */}
          </div>
        </div>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger">Close</button>
      </div>
    </div>
  );
}
