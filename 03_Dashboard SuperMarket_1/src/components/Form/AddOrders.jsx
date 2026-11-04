import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PostService from "../../server/post";
import { toast } from "react-toastify";
export const AddOrders = ({ main, setMain, update }) => {
  const [user_id, setUserId] = useState(0);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [payment_status, setPaymentStatus] = useState("");
  const navigate = useNavigate();
 
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Add New order</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/add-order">
                        Orders
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Add New Order
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-light" to="/orders">
                  Back to Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="card mb-6 shadow border-0">
              <div className="card-body p-6">
                <h4 className="mb-4 h5 mt-5">Order Information</h4>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">User</label>
                    <select
                      className="form-select"
                      value={user_id}
                      onChange={(e) => setUserId(e.target.value)}
                    >
                      <option value="">Select user</option>

                      {main && main.users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Total</label>
                    <input
                      className="form-control"
                      placeholder="Total"
                      type="text"
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Payment Status</label>
                    <select
                      className="form-select"
                      value={payment_status}
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                      <option value="">Select Payment Status</option>
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="failed">Failed</option>
                      <option value="Refunded">Refunded</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={async (e) => {
                        e.preventDefault();

                        try {
                          await createOrder({
                            user_id,
                            total,
                            status,
                            payment_status,
                          });
                          toast.success("Order created successfully");
                          navigate("/orders");
                          update();
                        } catch (error) {
                          toast.error(
                            error.response?.data?.message ||
                              "Something went wrong",
                          );
                        }
                      }}
                    >
                      Create order
                    </button>
                    <Link className="btn btn-secondary ms-2" to="#">
                      Save
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
