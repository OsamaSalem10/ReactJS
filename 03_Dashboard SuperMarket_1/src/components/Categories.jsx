import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { _deleteCategory } from "../server/delete";
import { useState } from "react";
export const Categories = ({main, setMain, update}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Categories</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Categories
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-primary" to="/add-category">
                  Add Category
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
                  <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                    <form className="d-flex" role="search">
                      <input
                        aria-label="Search"
                        className="form-control"
                        placeholder="Search Category"
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                      onKeyUp={() => {
                          if (search === "") {
                            update();
                          } else {
                       
                            setMain((prev) => ({
                              ...prev,
                              categories: prev.categories.filter(
                                (category) =>
                                  category.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) 
                              ),
                            }));
                          }
                        }}
                      />
                    </form>
                  </div>
                  <div className="col-xl-2 col-md-4 col-12">
                    <select
                      className="form-select"
                      onChange={(e) => {
                        const selectedStatus = e.target.value;
                        if (
                          selectedStatus === "" ||
                          selectedStatus === "Status"
                        ) {
                          update();
                        } else {
                          setMain((prev) => ({
                              ...prev,
                              categories: prev.categories.filter(
                                (category) =>
                                 category.status === selectedStatus
                              ),
                            }));
                        }
                      }}
                    >
                      <option>Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
                    <thead className="bg-light">
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {main && main.categories && main.categories.length > 0 ? (
                        main.categories.map((category) => (
                          <tr key={category.id}>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src={category.image}
                                />
                              </Link>
                            </td>

                            <td>{category.name}</td>
                            <td>
                            
                                {category.status === "Active" ? (
                                  <span className="badge bg-light-primary text-dark-success">
                                    {category.status}
                                  </span>
                                ) : (
                                  <span className="badge bg-light-danger text-dark-danger">
                                    {category.status}
                                  </span>
                                )}
                              
                            </td>
                            <td>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  navigate(`/edit-category`, {
                                    state: { category },
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
                                    "Are you sure you want to delete this category ?",
                                  );
                                  if (!confirmDelete) {
                                    return;
                                  } else {
                                    try {
                                      await _deleteCategory(category.id);

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
                          <td colSpan="5" className="text-center">
                            No categories found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav>
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
