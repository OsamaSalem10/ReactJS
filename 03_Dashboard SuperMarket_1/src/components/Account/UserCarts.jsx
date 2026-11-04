import { Link, useNavigate, useParams } from "react-router-dom";
import { _deleteCart } from "../../server/delete";
import { toast } from "react-toastify";
export const UserCarts = ({ main, setMain, update }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = main.carts?.filter((cart) => cart.user_id === parseInt(id));

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
                <Link className="btn btn-light" to={`/customers`}>
                  Back Customers
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
                    <Link className="btn btn-primary" to={`/add-cart/${id}`}>Add Cart</Link>
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
                      </tr>
                    </thead>
                    <tbody>
                      {user?.length > 0 ? (
                        user.map((cart) => {
                          const product = main.products?.find(
                            (product) => product.id === cart.product_id,
                          );

                          return (
                            <tr key={cart.cart_id ?? cart.id}>
                              <td>
                                <Link className="text-reset" to="#">
                                  {main.user?.name ?? "Unknown User"}
                                </Link>
                              </td>

                              <td>
                                <Link to="#!">
                                  <img
                                    alt={product?.name ?? ""}
                                    className="icon-shape icon-md"
                                    src={
                                      product?.image ??
                                      "../assets/images/icons/bakery.svg"
                                    }
                                  />
                                </Link>
                              </td>

                              <td>{product?.name ?? "Unknown Product"}</td>

                              <td>$ {cart.price}</td>

                              <td>{cart.quantity}</td>

                              <td>$ {cart.discount}</td>

                              <td>
                                <button
                                  className="btn btn-success btn-sm"
                                  onClick={() =>
                                    navigate("/edit-cart", {
                                      state: { cart },
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
                                  onClick={async () => {
                                    const confirmDelete = window.confirm(
                                      "Are you sure you want to delete this Cart?",
                                    );

                                    if (!confirmDelete) return;

                                    try {
                                      await _deleteCart(cart.cart_id);

                                      toast.success(
                                        "Cart deleted successfully",
                                      );

                                      await update();
                                    } catch (error) {
                                      toast.error(
                                        error.response?.data?.message ||
                                          "Delete failed",
                                      );
                                    }
                                  }}
                                >
                                  <i className="bi bi-trash3 me-1" />
                                  Delete
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
                                      <button
                                        type="button"
                                        className="dropdown-item"
                                        onClick={() =>
                                          navigate("/edit-cart", {
                                            state: { cart },
                                          })
                                        }
                                      >
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </button>
                                    </li>

                                    <li>
                                      <button
                                        type="button"
                                        className="dropdown-item text-danger"
                                        onClick={async () => {
                                          try {
                                            await _deleteCart(cart.cart_id);

                                            toast.success(
                                              "Cart deleted successfully",
                                            );

                                            await update();
                                          } catch (error) {
                                            toast.error(
                                              error.response?.data?.message ||
                                                "Delete failed",
                                            );
                                          }
                                        }}
                                      >
                                        <i className="bi bi-trash me-3" />
                                        Delete
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="9" className="text-center">
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
                  <Link className="btn btn-info" to={"/add-order"}>
                    Create Order
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
