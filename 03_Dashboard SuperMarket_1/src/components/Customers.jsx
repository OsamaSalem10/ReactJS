import { Link } from "react-router-dom";
import { _deleteUser } from "../server/delete";
import { toast } from "react-toastify";
import { useState } from "react";
export const Customers = ({ main, setMain, update }) => {
  const [search, setSearch] = useState("");
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Customers</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/">
                        Dashboard
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Customers
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-primary" to="/add-customer">
                  Add New Customer
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
                  <div className="col-md-4 col-12">
                    <form className="d-flex" role="search">
                      <label
                        className="visually-hidden"
                        htmlFor="searchCustomers"
                      >
                        Search Customers
                      </label>
                      <input
                        aria-label="Search"
                        className="form-control"
                        placeholder="Search Customers"
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyUp={() => {
                          if (search === "") {
                            update();
                          } else {
                            console.log("users", main.users);
                            setMain((prev) => ({
                              ...prev,
                              users: prev.users.filter((user) =>
                                user.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase()),
                              ),
                            }));
                          }
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                    <thead className="bg-light">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>location</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Carts</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {main && main.users && main.users.length > 0 ? (
                        main.users.map((user) => {
                          return (
                            <tr key={user.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="avatar avatar-xs rounded-circle"
                                    src={user.image}
                                    alt={user.name}
                                  />
                                  <div className="ms-2">
                                    <Link
                                      aria-controls="offcanvasRight"
                                      className="text-inherit"
                                      data-bs-target="#offcanvasRight"
                                      data-bs-toggle="offcanvas"
                                      to="#!"
                                    >
                                      {user.name}
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.location}</td>
                              <td>
                                {user.description
                                  ? user.description.slice(0, 10)
                                  : "No Description"}
                              </td>
                              <td>
                                <Link
                                  to={`/edit-customer/${user.id}`}
                                 
                                  className="btn btn-success btn-sm"
                                
                                  
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
                                      "Are you sure you want to delete this user?",
                                    );
                                    if (!confirmDelete) {
                                      return;
                                    } else {
                                      try {
                                        await _deleteUser(user.id);

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
                              <td>
                                <div className="position-relative d-inline-block">
                                  {main.carts?.filter(
                                    (cart) =>
                                      Number(cart.user_id) === Number(user.id),
                                  ).length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      {
                                        main.carts.filter(
                                          (cart) =>
                                            Number(cart.user_id) ===
                                            Number(user.id),
                                        ).length
                                      }
                                      <span className="visually-hidden">
                                        cart items
                                      </span>
                                    </span>
                                  )}

                                  <Link
                                    to={`/carts-user/${user.id}`}
                                    className={`btn btn-info btn-sm text-center ${
                                      main.carts?.some(
                                        (cart) =>
                                          Number(cart.user_id) ===
                                          Number(user.id),
                                      )
                                        ? ""
                                        : "disabled"
                                    }`}
                                  >
                                    <i className="bi bi-cart me-1"></i>
                                    Cart
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No Customer found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
      </div>
      {/* <div
        aria-labelledby="offcanvasRightLabel"
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Customer Details
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            type="button"
          />
        </div>
        <div className="offcanvas-body d-flex flex-column gap-4">
          <div className="d-flex flex-row align-items-center gap-4 w-100">
            <div className="flex-shrink-0">
              <img
                alt="avatar"
                className="avatar avatar-xl rounded-circle"
                src="../assets/images/avatar/avatar-1.jpg"
              />
            </div>
            <div className="d-flex flex-column gap-1 flex-grow-1">
              <h3 className="mb-0 h5 d-flex flex-row gap-3">
                Anita Parmar
                <span className="badge bg-light-success text-dark-success">
                  Verified
                </span>
              </h3>
              <div className="d-md-flex align-items-center justify-content-between">
                <div className="">#CU001</div>
                <div className="text-black-50">
                  Last Active:
                  <span className="text-dark">31 May, 2025 3:24PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-md-row flex-column gap-md-6 gap-2">
            <div className="d-flex flex-row gap-2">
              <span className="text-dark fw-semibold">Email</span>
              <span className="text-black-50">anitaparmar@example.com</span>
            </div>
            <div className="d-flex flex-row gap-2">
              <span className="text-dark fw-semibold">Phone Number</span>
              <span className="text-black-50">123-456-7890</span>
            </div>
          </div>
          <div className="card rounded">
            <div className="card-body">
              <div className="row">
                <div className="border-end col-4">
                  <div className="d-flex flex-column gap-1">
                    <span className="text-black-50">Join Date</span>
                    <span className="text-dark">31 May, 2024</span>
                  </div>
                </div>
                <div className="border-end col-4">
                  <div className="d-flex flex-column gap-1">
                    <span className="text-black-50">Total Spent</span>
                    <span className="text-dark">$105</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column gap-1">
                    <span className="text-black-50">Total Order</span>
                    <span className="text-dark">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="border-bottom p-4">
              <h3 className="mb-0 h6">Details</h3>
            </div>
            <div className="card-body p-4 d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-2 lh-1">
                <div className="h6 mb-0">Email</div>
                <span className="text-black-50">anitaparmar@example.com</span>
              </div>
              <div className="d-flex flex-column gap-2 lh-1">
                <div className="h6 mb-0">Phone Number</div>
                <span className="text-black-50">123-456-7890</span>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="h6 mb-0">Address</div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="flexRadioDefault1"
                      name="flexRadioDefault"
                      type="radio"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      123 Apple St., Springfield, IL, 62701, USA
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="flexRadioDefault2"
                      name="flexRadioDefault"
                      type="radio"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      456 Banana St., Metropolis, NY, 10001, USA
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bg-light rounded-top px-4 py-3">
              <Link
                aria-controls="collapseOne"
                aria-expanded="true"
                className="d-flex align-items-center justify-content-between text-inherit"
                data-bs-target="#collapseOne"
                data-bs-toggle="collapse"
                to="#"
              >
                <div className="d-flex flex-row align-items-center gap-2">
                  <h3 className="mb-0 h5">Orders</h3>
                  <span className="text-black-50 lh-1">#001</span>
                </div>
                <div className="d-flex flex-row gap-6 align-items-center">
                  <div>
                    <span className="text-inherit">
                      Date:
                      <span className="text-dark">31 May, 2025</span>
                    </span>
                  </div>
                  <svg
                    className="bi bi-chevron-down chevron-down"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="card-body py-0 px-4">
              <div
                className="accordion d-flex flex-column"
                id="accordionExample1"
              >
                <div
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample1"
                  id="collapseOne"
                >
                  <ul className="list-group list-group-flush mb-0">
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-18.jpg"
                          />
                          <span className="h6 mb-0">Organic Banana</span>
                        </div>
                        <span className="text-black-50">$35.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-15.jpg"
                          />
                          <span className="h6 mb-0">Fresh Apple</span>
                        </div>
                        <span className="text-black-50">$70.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-19.jpg"
                          />
                          <span className="h6 mb-0">BeetRoot</span>
                        </div>
                        <span className="text-black-50">$29.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-3">
                      <div className="d-flex flex-row justify-content-between">
                        <span className="text-dark fw-semibold">
                          Total Order Amount
                        </span>
                        <span className="text-dark fw-semibold">$134.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bg-light rounded-top px-4 py-3">
              <Link
                aria-controls="collapseTwo"
                aria-expanded="false"
                className="d-flex align-items-center justify-content-between text-inherit"
                data-bs-target="#collapseTwo"
                data-bs-toggle="collapse"
                to="#"
              >
                <div className="d-flex flex-row align-items-center gap-2">
                  <h3 className="mb-0 h5">Orders</h3>
                  <span className="text-black-50 lh-1">#002</span>
                </div>
                <div className="d-flex flex-row gap-6 align-items-center">
                  <div>
                    <span className="text-inherit">
                      Date:
                      <span className="text-dark">12 May, 2025</span>
                    </span>
                  </div>
                  <svg
                    className="bi bi-chevron-down chevron-down"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="card-body py-0 px-4">
              <div
                className="accordion d-flex flex-column"
                id="accordionExample2"
              >
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                  id="collapseTwo"
                >
                  <ul className="list-group list-group-flush mb-0">
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-18.jpg"
                          />
                          <span className="h6 mb-0">Organic Banana</span>
                        </div>
                        <span className="text-black-50">$35.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-15.jpg"
                          />
                          <span className="h6 mb-0">Fresh Apple</span>
                        </div>
                        <span className="text-black-50">$70.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <Link
                        className="text-inherit d-flex flex-row align-items-center justify-content-between"
                        to="#!"
                      >
                        <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                          <img
                            alt="product img"
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-19.jpg"
                          />
                          <span className="h6 mb-0">BeetRoot</span>
                        </div>
                        <span className="text-black-50">$29.00</span>
                      </Link>
                    </li>
                    <li className="list-group-item px-0 py-3">
                      <div className="d-flex flex-row justify-content-between">
                        <span className="text-dark fw-semibold">
                          Total Order Amount
                        </span>
                        <span className="text-dark fw-semibold">$134.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};
