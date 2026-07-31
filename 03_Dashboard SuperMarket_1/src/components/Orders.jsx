import { Link, useNavigate } from "react-router-dom";
export const Orders = ({ main , setMain, update}) => {
  const navigate = useNavigate();
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
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
                      Order List
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-primary" to="/add-order">
                  Add Order
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="p-6">
                <div className="row justify-content-between">
                  <div className="col-md-4 col-12 mb-2 mb-md-0">
                    <form className="d-flex" role="search">
                      <input
                        aria-label="Search"
                        className="form-control"
                        placeholder="Search"
                        type="search"
                      />
                    </form>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <select className="form-select">
                      <option selected>Status</option>
                      <option value="Success">Success</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                    <thead className="bg-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Image</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Date & Time</th>
                        <th>List Order</th>
                      </tr>
                    </thead>
                    <tbody>
                      {main && main.orders && main.orders.length > 0 ? (
                        main.orders.map((order) => (
                          <tr key={order.id}>
                            <td>
                              <Link className="text-reset" to="#">
                                {order.id}
                              </Link>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src={
                                    main.users?.find((e) => e.id === order.user_id)
                                      ?.image ??
                                    "../assets/images/icons/bakery.svg"
                                  }
                                />
                              </Link>
                            </td>

                            <td>
                              {main &&
                                main.users?.find((e) => e.id === order.user_id)
                                  ?.name}
                            </td>
                            <td>${order.total}</td>
                            <td>
                              {" "}
                              <span className="badge bg-light-primary text-dark-primary">
                                {order.status}
                              </span>
                            </td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                {order.payment_status}
                              </span>
                            </td>
                            <td>
                              {new Date(order.created_at).toLocaleString()}
                            </td>
                            <td>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  navigate("/order-list", {
                                    state: { order },
                                  })
                                }
                              >
                                List Order
                              </button>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="feather-icon icon-more-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No orders found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav className="mt-2 mt-md-0">
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <Link className="page-link" to="#!">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="#!">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
