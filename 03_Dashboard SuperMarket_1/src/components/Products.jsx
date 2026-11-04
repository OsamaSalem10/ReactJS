import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { _deleteProduct } from "../server/delete";
import { useState } from "react";
export const Products = ({ main, setMain, update }) => {
  const [search, setSearch] = useState("");

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Products</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Products
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-primary" to="/add-product">
                  Add Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="px-6 py-6">
                <div className="row justify-content-between">
                  <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                    <form className="d-flex" role="search">
                      <input
                        aria-label="Search"
                        className="form-control"
                        placeholder="Search Products"
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyUp={() => {
                          if (search === "") {
                            update();
                          } else {
                            setMain((prev) => ({
                              ...prev,
                              products: prev.products.filter(
                                (product) =>
                                  product.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) ||
                                  product.description
                                    .toLowerCase()
                                    .includes(search.toLowerCase()),
                              ),
                            }));
                          }
                        }}
                      />
                    </form>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <select
                      className="form-select"
                      onChange={(e) => {
                        const selectedCategoryId = e.target.value;

                        if (
                          selectedCategoryId === "" ||
                          selectedCategoryId === "Category"
                        ) {
                          update();
                        } else {
                          setMain((prev) => ({
                            ...prev,
                            products: prev.products.filter(
                              (product) =>
                                product.category_id ===
                                parseInt(selectedCategoryId),
                            ),
                          }));
                        }
                      }}
                    >
                      <option>Category</option>
                      {main &&
                        main.categories?.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                    <thead className="bg-light">
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {main && main.products && main.products.length > 0 ? (
                        main.products.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src={
                                    product.image
                                      ? product.image
                                      : "../assets/images/products/product-img-1.jpg"
                                  }
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                {product.name}
                              </Link>
                            </td>
                            <td>
                              {" "}
                              {main &&
                                main.categories &&
                                main.categories.find(
                                  (e) => e.id === product.category_id,
                                )?.name}
                            </td>
                            <td>
                              {product.description
                                ? product.description.slice(0, 10)
                                : "No Description"}
                            </td>

                            <td>${product.price}</td>
                            <td>${product.discount}</td>

                            <td>
                              {product.status === "Active" ? (
                                <span className="badge bg-light-primary text-dark-success">
                                  {product.status}
                                </span>
                              ) : (
                                <span className="badge bg-light-danger text-dark-danger">
                                  {product.status}
                                </span>
                              )}
                            </td>
                            <td>
                              <Link
                                className="btn btn-success btn-sm"
                                to={`/edit-product/${product.id}`}
                              >
                                <i className="bi bi-pencil-square me-1" />
                                Edit
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  const confirmDelete = window.confirm(
                                    "Are you sure you want to delete this product ?",
                                  );
                                  if (!confirmDelete) {
                                    return;
                                  } else {
                                    try {
                                      await _deleteProduct(product.id);

                                      toast.success(
                                        "User deleted successfully",
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
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="text-center">No Products found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="border-top d-md-flex justify-content-between align-items-center px-6 py-6">
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
