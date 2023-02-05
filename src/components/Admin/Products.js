import axios from "axios";
import React, { useState } from "react";

export default function Products() {
  //   const ProductNew = { searchParams, setSearchParams, title, onSave };
  const [productItem, setProductItem] = useState([]);

  return (
    <div>
      <div>
        <div>
          <h4>Product name</h4>
          <input type="text" className="form-control w-75" />
        </div>
        <div>
          <br />
          <h4>Price</h4>
          <input type="text" className="form-control w-75" />
        </div>
        <br />
        <h4>Upload File</h4>
        <div class="input-group mt-3 mb-3">
          <div>
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
            <br />
          </div>
        </div>
        <hr />
        <div className="d-flex gap-2">
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-danger">Close</button>
        </div>
      </div>
    </div>
  );
}
