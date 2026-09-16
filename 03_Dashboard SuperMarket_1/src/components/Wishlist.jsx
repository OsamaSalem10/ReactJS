import { Link, useNavigate } from "react-router-dom";
import { _deleteWishlist } from "../server/delete";
import { toast } from "react-toastify";
export const Wishlist = ({ main, setMain, update }) => {
  const navigate = useNavigate();
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Wishlist</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/customers");
                  }}
                >
                  Back Customers
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
                      {main.wishlist?.length > 0 ? (
                        main.wishlist.map((like) => (
                          <tr key={like.id}>
                            <td>
                              <Link className="text-reset" to="#">
                               {main.users?.find(
                                (user) => user.id === like.user_id,
                              )?.name ?? "Unknown User"}
                              </Link>
                            </td>

                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src={
                                    main.products?.find(
                                      (product) =>
                                        product.id === like.product_id,
                                    )?.image ??
                                    "../assets/images/icons/bakery.svg"
                                  }
                                />
                              </Link>
                            </td>

                            <td>
                              {main.products?.find(
                                (product) => product.id === like.product_id,
                              )?.name ?? "Unknown Product"}
                            </td>

                            <td>$ {like.price}</td>

                            <td>{like.quantity}</td>

                            <td>$ {like.discount}</td>

                            <td>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  navigate("/edit-wishlist", {
                                    state: { like },
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
                                    "Are you sure you want to delete this Wishlist item?",
                                  );

                                  if (!confirmDelete) return;

                                  try {
                                    await _deleteWishlist(like.id);

                                    toast.success("Wishlist item deleted successfully");

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
                                        navigate("/edit-wishlist", {
                                          state: { like },
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
                                          await _deleteWishlist(like.id);
                                          toast.success(
                                            "Wishlist item deleted successfully",
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
                        ))
                      ) : (
                        <tr>
                          <td colSpan="9" className="text-center">
                            No Wishlist found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
