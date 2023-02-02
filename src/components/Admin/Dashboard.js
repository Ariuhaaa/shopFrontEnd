export default function Dashboard() {
  return (
    <div className="d-flex justify-content-between gap-2">
      <div className="col-md-3">
        <div className="card p-3">
          <h4 className="card-title text-danger">New orders</h4>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <i class="bi bi-cart-check" style={{ fontSize: "40px" }}></i>
            <h3>-</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card p-3">
          <h4 className="card-title text-warning">New product</h4>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <i class="bi bi-box" style={{ fontSize: "40px" }}></i>

            <h3>-</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card p-3">
          <h4 className="card-title text-info">New User</h4>
          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <i class="bi bi-person-plus" style={{ fontSize: "40px" }}></i>
            <h3>-</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
