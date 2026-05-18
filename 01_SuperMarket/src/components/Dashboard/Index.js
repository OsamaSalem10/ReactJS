import { Link } from "react-router-dom";
import { NavbarVertical } from "./NavbarVertical";
import { NavbarDashboard } from "./NavbarDashboard";
export const Index = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <section className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div
                  className="card bg-light border-0 rounded-4"
                  style={{
                    backgroundImage:
                      "url(../assets/images/slider/slider-image-1.jpg)",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body p-lg-12">
                    <h1>Welcome back! FreshCart</h1>
                    <p>
                      FreshCart is simple & clean design for developer and
                      designer.
                    </p>
                    <Link className="btn btn-primary" to="/create-product">
                      Create Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive-xl mb-6 mb-lg-0">
              <div className="row flex-nowrap pb-3 pb-lg-0">
                <div className="col-lg-4 col-12 mb-6">
                  <div className="card h-100 card-lg">
                    <div className="card-body p-6">
                      <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                          <h4 className="mb-0 fs-5">Earnings</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                          <i className="bi bi-currency-dollar fs-5" />
                        </div>
                      </div>
                      <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                        <span>Monthly revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-6">
                  <div className="card h-100 card-lg">
                    <div className="card-body p-6">
                      <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                          <h4 className="mb-0 fs-5">Orders</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                          <i className="bi bi-cart fs-5" />
                        </div>
                      </div>
                      <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                        <span>
                          <span className="text-dark me-1">35+</span>
                          New Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-6">
                  <div className="card h-100 card-lg">
                    <div className="card-body p-6">
                      <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                          <h4 className="mb-0 fs-5">Customer</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                          <i className="bi bi-people fs-5" />
                        </div>
                      </div>
                      <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                        <span>
                          <span className="text-dark me-1">30+</span>
                          new in 2 days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-6 col-md-12 col-12 mb-6">
                <div className="card h-100 card-lg">
                  <div className="card-body p-6">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="mb-1 fs-5">Revenue</h3>
                        <small>(+63%) than last year)</small>
                      </div>
                      <div>
                        <select className="form-select">
                          <option selected>2019</option>
                          <option value="2023">2020</option>
                          <option value="2024">2021</option>
                          <option value="2025">2022</option>
                          <option value="2025">2023</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6" id="revenueChart" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12 mb-6">
                <div className="card h-100 card-lg">
                  <div className="card-body p-6">
                    <h3 className="mb-0 fs-5">Total Sales</h3>
                    <div
                      className="mt-6 d-flex justify-content-center"
                      id="totalSale"
                    />
                    <div className="mt-4">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <svg
                            className="bi bi-circle-fill text-primary"
                            fill="currentColor"
                            height="8"
                            viewBox="0 0 16 16"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="ms-1">
                            <span className="text-dark">Shippings $32.98</span>
                            (2%)
                          </span>
                        </li>
                        <li className="mb-2">
                          <svg
                            className="bi bi-circle-fill text-warning"
                            fill="currentColor"
                            height="8"
                            viewBox="0 0 16 16"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="ms-1">
                            <span className="text-dark">Refunds $11</span>
                            (11%)
                          </span>
                        </li>
                        <li className="mb-2">
                          <svg
                            className="bi bi-circle-fill text-danger"
                            fill="currentColor"
                            height="8"
                            viewBox="0 0 16 16"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="ms-1">
                            <span className="text-dark">Order $14.87</span>
                            (1%)
                          </span>
                        </li>
                        <li>
                          <svg
                            className="bi bi-circle-fill text-info"
                            fill="currentColor"
                            height="8"
                            viewBox="0 0 16 16"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="ms-1">
                            <span className="text-dark">Income 3,271</span>
                            (86%)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                <div className="card h-100 card-lg">
                  <div className="card-body p-6">
                    <h3 className="mb-0 fs-5">Sales Overview</h3>
                    <div className="mt-6">
                      <div className="mb-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="fs-6">Total Profit</h5>
                          <span>
                            <span className="me-1 text-dark">$1,619</span>
                            (8.6%)
                          </span>
                        </div>
                        <div>
                          <div
                            className="progress bg-light-primary"
                            style={{
                              height: "6px",
                            }}
                          >
                            <div
                              aria-label="Example 1px high"
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="25"
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{
                                width: "25%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="fs-6">Total Income</h5>
                          <span>
                            <span className="me-1 text-dark">$3,571</span>
                            (86.4%)
                          </span>
                        </div>
                        <div>
                          <div
                            className="progress bg-info-soft"
                            style={{
                              height: "6px",
                            }}
                          >
                            <div
                              aria-label="Example 1px high"
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="88"
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width: "88%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="fs-6">Total Expenses</h5>
                          <span>
                            <span className="me-1 text-dark">$3,430</span>
                            (74.5%)
                          </span>
                        </div>
                        <div>
                          <div
                            className="progress bg-light-danger"
                            style={{
                              height: "6px",
                            }}
                          >
                            <div
                              aria-label="Example 1px high"
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="45"
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{
                                width: "45%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                <div className="position-relative h-100">
                  <div className="card card-lg mb-6">
                    <div className="card-body px-6 py-8">
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            className="bi bi-bell text-warning"
                            fill="currentColor"
                            height="32"
                            viewBox="0 0 16 16"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                          </svg>
                        </div>
                        <div className="ms-4">
                          <h5 className="mb-1">
                            Start your day with New Notification.
                          </h5>
                          <p className="mb-0">
                            You have
                            <Link className="link-info" to="/notifications">
                              2 new notification
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-lg">
                    <div className="card-body px-6 py-8">
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            className="bi bi-lightbulb text-success"
                            fill="currentColor"
                            height="32"
                            viewBox="0 0 16 16"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                          </svg>
                        </div>
                        <div className="ms-4">
                          <h5 className="mb-1">
                            Monitor your Sales and Profitability
                          </h5>
                          <p className="mb-0">
                            <Link className="link-info" to="/performance">
                              View Performance
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
                <div className="card h-100 card-lg">
                  <div className="p-6">
                    <h3 className="mb-0 fs-5">Recent Order</h3>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-borderless text-nowrap table-hover">
                        <thead className="bg-light">
                          <tr>
                            <th scope="col">Order Number</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#FC0005</td>
                            <td>Haldiram's Sev Bhujia</td>
                            <td>28 March 2023</td>
                            <td>$18.00</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Shipped
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>#FC0004</td>
                            <td>NutriChoice Digestive</td>
                            <td>24 March 2023</td>
                            <td>$24.00</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>#FC0003</td>
                            <td>Onion Flavour Potato</td>
                            <td>8 Feb 2023</td>
                            <td>$9.00</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Cancel
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>#FC0002</td>
                            <td>Blueberry Greek Yogurt</td>
                            <td>20 Jan 2023</td>
                            <td>$12.00</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>#FC0001</td>
                            <td>Slurrp Millet Chocolate</td>
                            <td>14 Jan 2023</td>
                            <td>$8.00</td>
                            <td>
                              <span className="badge bg-light-info text-dark-info">
                                Processing
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export const Categories = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
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
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Categories
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link className="btn btn-primary" to="/add-category">
                      Add New Category
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
                          />
                        </form>
                      </div>
                      <div className="col-xl-2 col-md-4 col-12">
                        <select className="form-select">
                          <option selected>Status</option>
                          <option value="Published">Published</option>
                          <option value="Unpublished">Unpublished</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
                        <thead className="bg-light">
                          <tr>
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAll"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Proudct</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryOne"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/snacks.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Snack & Munchies
                              </Link>
                            </td>
                            <td>12</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryTwo"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/bakery.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Bakery & Biscuits
                              </Link>
                            </td>
                            <td>8</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryThree"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/baby-food.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Baby Care
                              </Link>
                            </td>
                            <td>32</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryFour"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/wine.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Cold Drinks & Juices
                              </Link>
                            </td>
                            <td>34</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryFive"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryFive"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/toiletries.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Toiletries
                              </Link>
                            </td>
                            <td>23</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Unpublished
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categorySeven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categorySeven"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/dairy.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Dairy, Bread & Eggs
                              </Link>
                            </td>
                            <td>16</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryEight"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryEight"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/fish.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Chicken, Meat & Fish
                              </Link>
                            </td>
                            <td>14</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryNine"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryNine"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/fruit.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Fruits & Vegetables
                              </Link>
                            </td>
                            <td>32</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="categoryTen"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="categoryTen"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-sm"
                                  src="../assets/images/icons/petfoods.svg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Pet Food
                              </Link>
                            </td>
                            <td>25</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Unpublished
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
      </div>
    </div>
  );
};
export const Customers = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
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
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
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
                            id="searchCustomers"
                            placeholder="Search Customers"
                            type="search"
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
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAll"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Purchase Date</th>
                            <th>Phone</th>
                            <th>Spent</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerOne"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-1.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Bonnie Howe
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>bonniehowe@gmail.com</td>
                            <td>17 May, 2023 at 3:18pm</td>
                            <td>-</td>
                            <td>$49.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerTwo"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-2.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Judy Nelson
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>judynelson@gmail.com</td>
                            <td>27 April, 2023 at 2:47pm</td>
                            <td>435-239-6436</td>
                            <td>$490.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerThree"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-3.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    John Mattox
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>johnmattox@gmail.com</td>
                            <td>27 April, 2023 at 2:47pm</td>
                            <td>347-424-9526</td>
                            <td>$29.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerFour"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-4.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Wayne Rossman
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>waynerossman@gmail.com</td>
                            <td>27 April, 2023 at 2:47pm</td>
                            <td>-</td>
                            <td>$39.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerFive"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerFive"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-5.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Rhonda Pinson
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>rhondapinson@gmail.com</td>
                            <td>18 March, 2023 at 2:47pm</td>
                            <td>304-471-8451</td>
                            <td>$213.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerSix"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerSix"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-6.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    John Mattox
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>johnmattox@gmail.com</td>
                            <td>18 March, 2023 at 2:47pm</td>
                            <td>410-636-2682</td>
                            <td>$490.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerSeven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerSeven"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-7.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Wayne Rossman
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>waynerossman@gmail.com</td>
                            <td>18 March, 2023 at 2:47pm</td>
                            <td>845-294-6681</td>
                            <td>$39.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerEight"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerEight"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-8.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Richard Shelton
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>richarddhelton@jourrapide.com</td>
                            <td>12 March, 2023 at 9:47am</td>
                            <td>313-887-8495</td>
                            <td>$19.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerNine"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerNine"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-9.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Stephanie Morales
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>stephaniemorales@gmail.com</td>
                            <td>22 Feb, 2023 at 9:47pm</td>
                            <td>812-682-1588</td>
                            <td>$250.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerTen"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerTen"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-10.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Stephanie Morales
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>stephaniemorales@gmail.com</td>
                            <td>22 Feb, 2023 at 9:47pm</td>
                            <td>812-682-1588</td>
                            <td>$250.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="customerEleven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customerEleven"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  alt=""
                                  className="avatar avatar-xs rounded-circle"
                                  src="../assets/images/avatar/avatar-11.jpg"
                                />
                                <div className="ms-2">
                                  <Link
                                    aria-controls="offcanvasRight"
                                    className="text-inherit"
                                    data-bs-target="#offcanvasRight"
                                    data-bs-toggle="offcanvas"
                                    to="#!"
                                  >
                                    Pasquale Kidd
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>pasqualekidd@rhyta.com</td>
                            <td>22 Feb, 2023 at 9:47pm</td>
                            <td>336-396-0658</td>
                            <td>$159.00</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../dashboard/customers-edits.html"
                                    >
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
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
          <div
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
                    <span className="text-black-50">
                      anitaparmar@example.com
                    </span>
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
                            <span className="text-dark fw-semibold">
                              $134.00
                            </span>
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
                            <span className="text-dark fw-semibold">
                              $134.00
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export const BlogGrid = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-9">
              <div className="col-md-12">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <h2>Blog Grid</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link className="text-inherit" to="#">
                            Dashboard
                          </Link>
                        </li>
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Blog
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link className="btn btn-primary" to="/add-blog">
                      New Post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-12 mb-9">
                <div className="row justify-content-between d-flex flex-md-row flex-column gap-2">
                  <div className="col-lg-4 col-md-4 col-12">
                    <form className="d-flex" role="search">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="postSearch"
                      >
                        Search Post
                      </label>
                      <input
                        aria-label="Search"
                        className="form-control"
                        id="postSearch"
                        placeholder="Search Post"
                        type="search"
                      />
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12">
                    <label
                      className="form-label visually-hidden"
                      htmlFor="postbyDate"
                    >
                      Post by Date
                    </label>
                    <select className="form-select" id="postbyDate">
                      <option selected>Latest</option>
                      <option value="Popular">Popular</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-6">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-1.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-danger text-dark-danger">
                        Draft
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Garlic Cream Bucatini with Peas and Asparagus
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">05 June, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-2.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Harissa Chickpeas with Whipped Feta
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">02 June, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-3.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Almond Butter Chocolate Chip Zucchini Bars
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">1 June, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-4.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">26 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-5.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Red Chile Chicken Tacos with Creamy Corn
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">24 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-8.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Basic + Awesome Broccoli Cheese Soup
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">20 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-6.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-danger text-dark-danger">
                        Draft
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        No-Boil Baked Penne with Meatballs
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">20 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-7.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Red Chile Chicken Tacos with Creamy Corn
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">10 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift h-100">
                  <Link
                    className="img-zoom rounded-bottom-0"
                    to="../pages/blog-single.html"
                  >
                    <img
                      alt="blog img"
                      className="img-fluid rounded-top-4"
                      src="../assets/images/blog/blog-img-9.jpg"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column gap-4 p-6">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <span className="badge bg-light-success text-dark-success">
                        Published
                      </span>
                      <div>
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
                                <i className="bi bi-eye-fill me-3" />
                                View
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="bi bi-pencil-square me-3" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-danger"
                                to="#"
                              >
                                <i className="bi bi-trash me-3" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0 h5">
                      <Link
                        className="text-reset"
                        to="../pages/blog-single.html"
                      >
                        Basic + Awesome Broccoli Cheese Soup
                      </Link>
                    </h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <small className="text-black-50">08 May, 2024</small>
                      <small className="text-black-50">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div>
                  <nav className="mt-7 mt-lg-10">
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
        </main>
      </div>
    </div>
  );
};
export const BlogList = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-9">
              <div className="col-md-12">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <h2>Blog List</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link className="text-inherit" to="#">
                            Dashboard
                          </Link>
                        </li>
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Blog
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link className="btn btn-primary" to="/add-blog">
                      New Post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-12 mb-9">
                <div className="row justify-content-between d-flex flex-md-row flex-column gap-2">
                  <div className="col-lg-4 col-md-4 col-12">
                    <form className="d-flex" role="search">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="postSearch"
                      >
                        Search Post
                      </label>
                      <input
                        aria-label="Search"
                        className="form-control"
                        id="postSearch"
                        placeholder="Search Post"
                        type="search"
                      />
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12">
                    <label
                      className="form-label visually-hidden"
                      htmlFor="postbyDate"
                    >
                      Post by Date
                    </label>
                    <select className="form-select" id="postbyDate">
                      <option selected>Latest</option>
                      <option value="Popular">Popular</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-6">
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-1.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-danger text-dark-danger">
                              Draft
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Quickly get a project started Bootstrap 5 Example
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">02 June, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-2.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Quickly get a project started Bootstrap 5 Example
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">1 June, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-3.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Harissa Chickpeas with Whipped Feta
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">26 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-4.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Almond Butter Chocolate Chip Zucchini Bars
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">24 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-5.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">20 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-9.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Quickly get a project started Bootstrap 5 Example
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center h-100">
                          <small className="">16 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-7.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-danger text-dark-danger">
                              Draft
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Red Chile Chicken Tacos with Creamy Corn
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">10 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card card-lg rounded-4 border-0 card-lift">
                  <div className="row g-1 p-4">
                    <div className="col-md-4">
                      <div className="img-zoom">
                        <Link to="../pages/blog-single.html">
                          <img
                            alt="blog img"
                            className="rounded-3 object-fit-cover thumbnail-cover-img"
                            src="../assets/images/blog/blog-img-8.jpg"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="badge bg-light-success text-dark-success">
                              Published
                            </span>
                            <div>
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
                                      <i className="bi bi-eye-fill me-3" />
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="bi bi-pencil-square me-3" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item text-danger"
                                      to="#"
                                    >
                                      <i className="bi bi-trash me-3" />
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h3 className="mb-0 h5">
                            <Link
                              className="text-reset"
                              to="../pages/blog-single.html"
                            >
                              Garlic Cream Bucatini with Peas and Asparagus
                            </Link>
                          </h3>
                        </div>
                        <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                          <small className="">08 May, 2024</small>
                          <small className="">
                            Read time:
                            <small className="text-dark">12min</small>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div>
                  <nav className="mt-7 mt-lg-10">
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
        </main>
      </div>
    </div>
  );
};
export const OrderList = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div>
                  <h2>Order List</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Dashboard</Link>
                      </li>
                      <li
                        aria-current="page"
                        className="breadcrumb-item active"
                      >
                        Order List
                      </li>
                    </ol>
                  </nav>
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
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAll"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>Image</th>
                            <th>Order Name</th>
                            <th>Customer</th>
                            <th>Date & TIme</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderOne"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-1.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1007
                              </Link>
                            </td>
                            <td>Jennifer Sullivan</td>
                            <td>01 May 2023 (10:12 am)</td>
                            <td>Paypal</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Success
                              </span>
                            </td>
                            <td>$12.99</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderTwo"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-2.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1006
                              </Link>
                            </td>
                            <td>Willie Hanson</td>
                            <td>20 April 2023 (9:20 am)</td>
                            <td>COD</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Success
                              </span>
                            </td>
                            <td>$8.19</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderThree"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-3.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1005
                              </Link>
                            </td>
                            <td>Dori Stewart</td>
                            <td>11 March 2023 (7:12 pm)</td>
                            <td>Paypal</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Pending
                              </span>
                            </td>
                            <td>$8.19</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderFour"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-4.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1004
                              </Link>
                            </td>
                            <td>Ezekiel Rogerson</td>
                            <td>09 March 2023 (6:23 pm)</td>
                            <td>Stripe</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Success
                              </span>
                            </td>
                            <td>$23.11</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderFive"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderFive"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-5.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1003
                              </Link>
                            </td>
                            <td>Maria Roux</td>
                            <td>18 Feb 2022 (12:20 pm)</td>
                            <td>COD</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Success
                              </span>
                            </td>
                            <td>$2.00</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderSix"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderSix"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-6.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1002
                              </Link>
                            </td>
                            <td>Robert Donald</td>
                            <td>12 Feb 2022 (4:56 pm)</td>
                            <td>Paypal</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Cancel
                              </span>
                            </td>
                            <td>$56.00</td>
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="orderSeven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="orderSeven"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-7.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                FC#1001
                              </Link>
                            </td>
                            <td>Diann Watson</td>
                            <td>22 Jan 2023 (1:20 pm)</td>
                            <td>Paypal</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Success
                              </span>
                            </td>
                            <td>$23.00</td>
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
      </div>
    </div>
  );
};
export const OrderSingle = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                  <div>
                    <h2>Order Single</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link className="text-inherit" to="#">
                            Dashboard
                          </Link>
                        </li>
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Order Single
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link className="btn btn-primary" to="#">
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
                        <h2 className="mb-0">Order ID: #FC001</h2>
                        <span className="badge bg-light-warning text-dark-warning ms-2">
                          Pending
                        </span>
                      </div>
                      <div className="d-md-flex">
                        <div className="mb-2 mb-md-0">
                          <select className="form-select">
                            <option selected>Status</option>
                            <option value="Success">Success</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancel">Cancel</option>
                          </select>
                        </div>
                        <div className="ms-md-3">
                          <Link className="btn btn-primary" to="#">
                            Save
                          </Link>
                          <Link className="btn btn-secondary" to="#">
                            Download Invoice
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="mb-6">
                            <h6>Customer Details</h6>
                            <p className="mb-1 lh-lg">
                              John Alex
                              <br />
                              anderalex@example.com
                              <br />
                              +998 99 22123456
                            </p>
                            <Link to="#">View Profile</Link>
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
                              <br />
                              Contact No. +91 99999 12345
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
                              <span className="text-dark">
                                October 22, 2023
                              </span>
                              <br />
                              Order Total:
                              <span className="text-dark">$734.28</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                            <tr>
                              <td>
                                <Link className="text-inherit" to="#">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        alt=""
                                        className="icon-shape icon-lg"
                                        src="../assets/images/products/product-img-1.jpg"
                                      />
                                    </div>
                                    <div className="ms-lg-4 mt-2 mt-lg-0">
                                      <h5 className="mb-0 h6">
                                        Haldiram's Sev Bhujia
                                      </h5>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                <span className="text-body">$18.0</span>
                              </td>
                              <td>1</td>
                              <td>$18.00</td>
                            </tr>
                            <tr>
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
                            <tr>
                              <td>
                                <Link className="text-inherit" to="#">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        alt=""
                                        className="icon-shape icon-lg"
                                        src="../assets/images/products/product-img-3.jpg"
                                      />
                                    </div>
                                    <div className="ms-lg-4 mt-2 mt-lg-0">
                                      <h5 className="mb-0 h6">
                                        Cadbury 5 Star Chocolate
                                      </h5>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                <span className="text-body">$32.0</span>
                              </td>
                              <td>1</td>
                              <td>$32.0</td>
                            </tr>
                            <tr>
                              <td>
                                <Link className="text-inherit" to="#">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        alt=""
                                        className="icon-shape icon-lg"
                                        src="../assets/images/products/product-img-4.jpg"
                                      />
                                    </div>
                                    <div className="ms-lg-4 mt-2 mt-lg-0">
                                      <h5 className="mb-0 h6">
                                        Onion Flavour Potato
                                      </h5>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                <span className="text-body">$3.0</span>
                              </td>
                              <td>2</td>
                              <td>$6.0</td>
                            </tr>
                            <tr>
                              <td className="border-bottom-0 pb-0" />
                              <td className="border-bottom-0 pb-0" />
                              <td className="fw-medium text-dark" colSpan="1">
                                Sub Total :
                              </td>
                              <td className="fw-medium text-dark">$80.00</td>
                            </tr>
                            <tr>
                              <td className="border-bottom-0 pb-0" />
                              <td className="border-bottom-0 pb-0" />
                              <td className="fw-medium text-dark" colSpan="1">
                                Shipping Cost
                              </td>
                              <td className="fw-medium text-dark">$10.00</td>
                            </tr>
                            <tr>
                              <td />
                              <td />
                              <td className="fw-semibold text-dark" colSpan="1">
                                Grand Total
                              </td>
                              <td className="fw-semibold text-dark">$90.00</td>
                            </tr>
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
      </div>
    </div>
  );
};
export const Products = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
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
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
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
                          />
                        </form>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12">
                        <select className="form-select">
                          <option selected>Status</option>
                          <option value="1">Active</option>
                          <option value="2">Deactive</option>
                          <option value="3">Draft</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                        <thead className="bg-light">
                          <tr>
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAll"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>Image</th>
                            <th>Proudct Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Create at</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productOne"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-1.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Haldiram's Sev Bhujia
                              </Link>
                            </td>
                            <td>Snack & Munchies</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Active
                              </span>
                            </td>
                            <td>$18.00</td>
                            <td>24 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productTwo"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-2.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                NutriChoice Digestive
                              </Link>
                            </td>
                            <td>Bakery & Biscuits</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Active
                              </span>
                            </td>
                            <td>$24.00</td>
                            <td>20 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productThree"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-3.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Cadbury 5 Star Chocolate
                              </Link>
                            </td>
                            <td>Snack & Munchies</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Active
                              </span>
                            </td>
                            <td>$3.00</td>
                            <td>14 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productFour"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-4.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Onion Flavour Potato
                              </Link>
                            </td>
                            <td>Snack & Munchies</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Draft
                              </span>
                            </td>
                            <td>$13.00</td>
                            <td>08 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productFive"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productFive"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-5.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Salted Instant Popcorn
                              </Link>
                            </td>
                            <td>Instant Food</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Draft
                              </span>
                            </td>
                            <td>$9.00</td>
                            <td>09 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productSix"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productSix"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-6.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Blueberry Greek Yogurt
                              </Link>
                            </td>
                            <td>Dairy, Bread & Eggs</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Deactive
                              </span>
                            </td>
                            <td>$11.00</td>
                            <td>02 Nov 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productSeven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productSeven"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-7.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Britannia Cheese Slices
                              </Link>
                            </td>
                            <td>Dairy, Bread & Eggs</td>
                            <td>
                              <span className="badge bg-light-success text-dark-success">
                                Active
                              </span>
                            </td>
                            <td>$24.00</td>
                            <td>15 Oct 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productEight"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productEight"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-8.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Blueberry Greek Yogurt
                              </Link>
                            </td>
                            <td>Instant Food</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Deactive
                              </span>
                            </td>
                            <td>$12.00</td>
                            <td>24 Oct 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productNine"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productNine"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-9.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Slurrp Millet Chocolate
                              </Link>
                            </td>
                            <td>Instant Food</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Active
                              </span>
                            </td>
                            <td>$8.00</td>
                            <td>08 Oct 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="productTen"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productTen"
                                />
                              </div>
                            </td>
                            <td>
                              <Link to="#!">
                                <img
                                  alt=""
                                  className="icon-shape icon-md"
                                  src="../assets/images/products/product-img-10.jpg"
                                />
                              </Link>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Amul Butter - 500 g
                              </Link>
                            </td>
                            <td>Instant Food</td>
                            <td>
                              <span className="badge bg-light-primary text-dark-primary">
                                Active
                              </span>
                            </td>
                            <td>$8.00</td>
                            <td>09 Oct 2022</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  aria-expanded="false"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  to="#"
                                >
                                  <i className="bi bi-three-dots-vertical fs-5" />
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
      </div>
    </div>
  );
};
export const Reviews = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div>
                  <h2>Reviews</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link className="text-inherit" to="/">
                          Dashboard
                        </Link>
                      </li>
                      <li
                        aria-current="page"
                        className="breadcrumb-item active"
                      >
                        Reviews
                      </li>
                    </ol>
                  </nav>
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
                            placeholder="Search Reviews"
                            type="search"
                          />
                        </form>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12">
                        <select className="form-select">
                          <option selected>Select Rating</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAll"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Reviews</th>
                            <th>Rating</th>
                            <th>Date</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewOne"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Haldiram's Sev Bhujia
                              </Link>
                            </td>
                            <td>Barry McKenzie</td>
                            <td>
                              <span className="text-truncate">
                                Nice & fresh oranges with value for money..
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewTwo"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                NutriChoice Digestive
                              </Link>
                            </td>
                            <td>Dale Jenkins</td>
                            <td>
                              <span className="text-truncate">
                                Nice product 👌 quality 👌...
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="checkAllThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAllThree"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Cadbury 5 Star Chocolate
                              </Link>
                            </td>
                            <td>Michael Phillips</td>
                            <td>
                              <span className="text-truncate">
                                Good quality product delivered...
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewFour"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Onion Flavour Potato
                              </Link>
                            </td>
                            <td>James Parker</td>
                            <td>
                              <span className="text-truncate">
                                Excellent Quality by an Indian company..
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewFive"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewFive"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Salted Instant Popcorn
                              </Link>
                            </td>
                            <td>William Hansen</td>
                            <td>
                              <span className="text-truncate">
                                Very expensive. Cheaper at local stores...
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewSix"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewSix"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Blueberry Greek Yogurt
                              </Link>
                            </td>
                            <td>Helen Speller</td>
                            <td>
                              <span className="text-truncate">
                                Etiam in felis eget eros dictum
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewSeven"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewSeven"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Britannia Cheese Slices
                              </Link>
                            </td>
                            <td>Larry Anderson</td>
                            <td>
                              <span className="text-truncate">
                                is good but had to wait for a late delivery.
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewEight"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewEight"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Kellogg's Original Cereals
                              </Link>
                            </td>
                            <td>William McCulloch</td>
                            <td>
                              <span className="text-truncate">
                                Very expensive. Cheaper at local stores
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewNine"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewNine"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Slurrp Millet Chocolate
                              </Link>
                            </td>
                            <td>Louise Brown</td>
                            <td>
                              <span className="text-truncate">
                                My toddler loved the flavor and enjoys...
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
                          <tr>
                            <td className="pe-0">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  defaultValue=""
                                  id="reviewTen"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reviewTen"
                                />
                              </div>
                            </td>
                            <td>
                              <Link className="text-reset" to="#">
                                Amul Butter - 500 g
                              </Link>
                            </td>
                            <td>John Meyer</td>
                            <td>
                              <span className="text-truncate">
                                Good Product but packaging needs...
                              </span>
                            </td>
                            <td>
                              <div>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-warning" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                                <span>
                                  <i className="bi bi-star-fill text-light" />
                                </span>
                              </div>
                            </td>
                            <td>23 Nov,2022</td>
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
        </main>
      </div>
    </div>
  );
};
export const VendorGrid = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />

        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2>Vendors</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link className="text-inherit" to="#">
                            Dashboard
                          </Link>
                        </li>
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Vendors
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link
                      className="btn btn-primary btn-icon"
                      to="/vendors-grid"
                    >
                      <svg
                        className="bi bi-grid"
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 16 16"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                      </svg>
                    </Link>
                    <Link className="btn btn-light btn-icon" to="/vendors-list">
                      <svg
                        className="bi bi-list-task"
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 16 16"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                          fillRule="evenodd"
                        />
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                        <path
                          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-6">
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-1.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          E-Grocery Super Market
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #009</div>
                      <div>heathercarpenter@dayrep.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$200.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$200.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-2.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          DealShare Mart
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #008</div>
                      <div>werve1962@superrito.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$350.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$150.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-3.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          DMart
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #007</div>
                      <div>trablinever@armyspy.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$120.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$45.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-4.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          Blinkit Store
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #006</div>
                      <div>steened@rhyta.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$1200.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$400.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-5.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          StoreFront Super Market
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #005</div>
                      <div>mansper@einrot.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$230.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$50.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-6.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          BigBasket
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #004</div>
                      <div>lizin@armyspy.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$560.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$120.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-7.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          Swiggy Instamart
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #003</div>
                      <div>tured@jourrapide.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$780.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$360.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-8.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          Online Grocery Mart
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #002</div>
                      <div>liturname@einrot.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$460.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$175.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-center card-lg">
                  <div className="card-body p-6">
                    <div>
                      <img
                        alt=""
                        className="rounded-circle icon-shape icon-xxl mb-6"
                        src="../assets/images/stores-logo/stores-logo-9.svg"
                      />
                      <h2 className="mb-2 h5">
                        <Link className="text-inherit" to="#!">
                          Spencers
                        </Link>
                      </h2>
                      <div className="mb-2">Seller ID: #001</div>
                      <div>fark1952@rhyta.com</div>
                    </div>
                    <div className="row justify-content-center mt-8">
                      <div className="col">
                        <div>Gross Sale</div>
                        <h5 className="mb-0 mt-1">$630.00</h5>
                      </div>
                      <div className="col">
                        <div>Earning</div>
                        <h5 className="mb-0 mt-1">$190.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export const VendorList = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2>Vendors</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link className="text-inherit" to="/">
                            Dashboard
                          </Link>
                        </li>
                        <li
                          aria-current="page"
                          className="breadcrumb-item active"
                        >
                          Vendors
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <Link className="btn btn-light btn-icon" to="/vendors-grid">
                      <svg
                        className="bi bi-grid"
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 16 16"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                      </svg>
                    </Link>
                    <Link
                      className="btn btn-primary btn-icon"
                      to="/vendors-list"
                    >
                      <svg
                        className="bi bi-list-task"
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 16 16"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                          fillRule="evenodd"
                        />
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                        <path
                          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-12 mb-5">
                <div className="card h-100 card-lg">
                  <div className="p-6">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <form className="d-flex" role="search">
                          <input
                            aria-label="Search"
                            className="form-control me-2"
                            placeholder="Search Seller"
                            type="search"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                        <thead className="bg-light">
                          <tr>
                            <th>Seller Id</th>
                            <th>Store Name</th>
                            <th>Email</th>
                            <th>Gross Sale</th>
                            <th>Earning</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#010</td>
                            <td>
                              <Link className="text-reset" to="#">
                                E-Grocery Super Market
                              </Link>
                            </td>
                            <td>egrocery@dayrep.com</td>
                            <td>$200.00</td>
                            <td>$60.00</td>
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
                          <tr>
                            <td>#009</td>
                            <td>
                              <Link className="text-reset" to="#">
                                DealShare Mart
                              </Link>
                            </td>
                            <td>werve1962@superrito.com</td>
                            <td>$350.00</td>
                            <td>$150.00</td>
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
                          <tr>
                            <td>#008</td>
                            <td>
                              <Link className="text-reset" to="#">
                                DMart
                              </Link>
                            </td>
                            <td>trablinever@armyspy.com</td>
                            <td>$120.00</td>
                            <td>$45.00</td>
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
                          <tr>
                            <td>#007</td>
                            <td>
                              <Link className="text-reset" to="#">
                                Blinkit Store
                              </Link>
                            </td>
                            <td>steened@rhyta.com</td>
                            <td>$1200.00</td>
                            <td>$400.00</td>
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
                          <tr>
                            <td>#006</td>
                            <td>
                              <Link className="text-reset" to="#">
                                StoreFront Super Market
                              </Link>
                            </td>
                            <td>mansper@einrot.com</td>
                            <td>$230.00</td>
                            <td>$50.00</td>
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
                          <tr>
                            <td>#005</td>
                            <td>
                              <Link className="text-reset" to="#">
                                BigBasket
                              </Link>
                            </td>
                            <td>lizin@armyspy.com</td>
                            <td>$560.00</td>
                            <td>$120.00</td>
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
                          <tr>
                            <td>#004</td>
                            <td>
                              <Link className="text-reset" to="#">
                                Swiggy Instamart
                              </Link>
                            </td>
                            <td>tured@jourrapide.com</td>
                            <td>$780.00</td>
                            <td>$360.00</td>
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
                          <tr>
                            <td>#003</td>
                            <td>
                              <Link className="text-reset" to="#">
                                Online Grocery Mart
                              </Link>
                            </td>
                            <td>liturname@einrot.com</td>
                            <td>$460.00</td>
                            <td>$175.00</td>
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
                          <tr>
                            <td>#002</td>
                            <td>
                              <Link className="text-reset" to="#">
                                Spencer
                              </Link>
                            </td>
                            <td>fark1952@rhyta.com</td>
                            <td>$630.00</td>
                            <td>$190.00</td>
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
                          <tr>
                            <td>#001</td>
                            <td>
                              <Link className="text-reset" to="#">
                                E-Grocery Super Market
                              </Link>
                            </td>
                            <td>heathercarpenter@dayrep.com</td>
                            <td>$200.00</td>
                            <td>$80.00</td>
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
      </div>
    </div>
  );
};
