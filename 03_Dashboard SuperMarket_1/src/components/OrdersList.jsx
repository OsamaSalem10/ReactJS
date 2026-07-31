
import { Link, useNavigate, useLocation } from "react-router-dom";

export const OrdersList = ({main , setMain, update }) => {
  const navigate = useNavigate();
const location = useLocation();

const order = location.state?.order;

const orderId = order?.id;

const userOrder = main.orderLists.filter(
  (item) => item.order_id === orderId
);


  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Order List</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Order Single
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-primary" to="/orders">
                  Back to all orders
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex align-items-center mb-2 mb-md-0">
                    {order && order.id && (
                      <h2 className="mb-0">Order ID: # {order.id}</h2>
                    )}
                    <span className="badge bg-light-warning text-dark-warning ms-2">
                      Pending
                    </span>
                  </div>
                  <div className="d-md-flex">
                    <div className="mb-2 mb-md-0">
                      <select className="form-select">
                        <option>Status</option>
                        <option value="Success">Success</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </div>
                    <div className="ms-md-3">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate(`/add-order-list`, {
                            state: { order },
                          })
                        }
                      >
                        Add Order List
                      </button>
                    </div>
                  </div>
                </div>
                {order && order ? (
                  <div className="mt-8">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="mb-6">
                          <h6>Customer Details</h6>
                          <p className="mb-1 lh-lg">
                            Name :{" "}
                            {
                             main && main.users.find((user) => user.id === order.user_id)
                                ?.name
                            }
                            <br />
                            Email :{" "}
                            {
                             main && main.users.find((user) => user.id === order.user_id)
                                ?.email
                            }
                            <br />
                            Phone :{" "}
                            {
                            main &&  main.users.find((user) => user.id === order.user_id)
                                ?.phone
                            }
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="mb-6">
                          <h6>Shipping Address</h6>
                          <p className="mb-1 lh-lg">
                            Gerg Harvell
                            <br />
                            568, Suite Ave.
                            <br />
                            Austrlia, 235153
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="mb-6">
                          <h6>Order Details</h6>
                          <p className="mb-1 lh-lg">
                            Order ID:
                            <span className="text-dark">FC001</span>
                            <br />
                            Order Date:
                            <span className="text-dark">October 22, 2023</span>
                            <br />
                            Order Total:
                            <span className="text-dark">$734.28</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table mb-0 text-nowrap table-centered">
                      <thead className="bg-light">
                        <tr>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        { userOrder && userOrder.length > 0 ? (
                          userOrder.map((order) => (
                            <tr key={order.id}>
                              <td>
                                <Link className="text-inherit" to="#">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        alt=""
                                        className="icon-shape icon-lg"
                                        src="../assets/images/products/product-img-2.jpg"
                                      />
                                    </div>
                                    <div className="ms-lg-4 mt-2 mt-lg-0">
                                      <h5 className="mb-0 h6">
                                        NutriChoice Digestive
                                      </h5>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                <span className="text-body">$24.0</span>
                              </td>
                              <td>1</td>
                              <td>$24.00</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center">
                              No orders found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card-body p-6">
                <div className="row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <h6>Payment Info</h6>
                    <span>Cash on Delivery</span>
                  </div>
                  <div className="col-md-6">
                    <h5>Notes</h5>
                    <textarea
                      className="form-control mb-3"
                      placeholder="Write note for order"
                      rows="3"
                    />
                    <Link className="btn btn-primary" to="#">
                      Save Notes
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
