import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { _getCarts } from "../server/get";
import { _deleteCart } from "../server/delete";
import { toast } from "react-toastify";
export const Carts = ({ main, setMain, update }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const [userCart, setUserCart] = useState([]);
  const updateCart = async () => {
    if (!user?.id) return;

    try {
      const cart = await _getCarts(user.id);
      setUserCart(cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateCart();
  }, [user]);

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Carts</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Carts
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/add-cart`, {
                      state: { user },
                    })
                  }
                >
                  Add Cart
                </button>
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
                        <th>Name Customer</th>
                        <th>Image</th>
                        <th>Name Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Order</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCart && userCart.length > 0 ? (
                        userCart.map((cart) => (
                          <tr key={cart.cart_id}>
                            <td>
                              <Link className="text-reset" to="#">
                                {
                                  main.users?.find((e) => e.id === cart.user_id)
                                    ?.name
                                }
                              </Link>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src={
                                    main.products?.find(
                                      (e) => e.id === cart.product_id,
                                    )?.image ??
                                    "../assets/images/icons/bakery.svg"
                                  }
                                />
                              </Link>
                            </td>

                            <td>
                              {main &&
                                main.products?.find(
                                  (e) => e.id === cart.product_id,
                                )?.name}
                            </td>
                            <td>$ {cart.price}</td>
                            <td>$ {cart.quantity}</td>
                            <td> {cart.discount}</td>
                            <td>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  navigate(`/edit-customer`, {
                                    state: { user },
                                  })
                                }
                              >
                                <i className="bi bi-pencil-square me-1" />
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  const confirmDelete = window.confirm(
                                    "Are you sure you want to delete this Cart ?",
                                  );
                                  if (!confirmDelete) {
                                    return;
                                  } else {
                                    try {
                                      await _deleteCart(cart.cart_id);

                                      toast.success(
                                        "cart deleted successfully",
                                      );

                                      update();
                                    } catch (error) {
                                      toast.error(
                                        error.response?.data?.message ||
                                          "Delete failed",
                                      );
                                    }
                                  }
                                }}
                              >
                                <i className="bi bi-trash3 me-1" />
                                Delete
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  navigate("/order-list", {
                                    state: { cart },
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
                            No Carts found
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
