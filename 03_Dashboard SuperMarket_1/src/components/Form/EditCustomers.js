import { Link } from "react-router-dom";

export const EditCustomers = () => {
    return (
    <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
          <div>
            <h2>Edit Customer Name</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="/">
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Customer Name
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Edit
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <button
              className="btn btn-danger"
              data-bs-target="#delete"
              data-bs-toggle="modal"
              type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-8 g-5">
      <div className="col-lg-8 col-12">
        <div className="card card-lg border-0">
          <div className="card-body d-flex flex-column gap-8 p-7">
            <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
              <div>
                <img
                  alt=""
                  className="image avatar avatar-lg rounded-3"
                  src="../assets/images/docs/placeholder-img.jpg"
                />
              </div>
              <div className="file-upload btn btn-light ms-md-4">
                <input className="file-input opacity-0" type="file" />
                Upload Photo
              </div>
              <span className="ms-md-2">JPG, GIF or PNG. 1MB Max.</span>
            </div>
            <div className="d-flex flex-column gap-4">
              <h4 className="mb-0 h6">Customer Information</h4>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-lg-6 col-12">
                  <div>
                    <label className="form-label" htmlFor="customerEditName">
                      Name
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      id="customerEditName"
                      placeholder="Customer Name"
                      required
                      type="text"
                    />
                    <div className="invalid-feedback">
                      Please enter category name
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div>
                    <label className="form-label" htmlFor="customerEditEmail">
                      Email
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      id="customerEditEmail"
                      placeholder="Email Address"
                      required
                      type="email"
                    />
                    <div className="invalid-feedback">Please enter email</div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div>
                    <label className="form-label" htmlFor="customerEditPhone">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="customerEditPhone"
                      placeholder="Number"
                      required
                      type="text"
                    />
                    <div className="invalid-feedback">Please enter phone</div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <label className="form-label" htmlFor="customerEditBirthdate">
                    Birthday
                  </label>
                  <input
                    className="form-control flatpickr"
                    id="customerEditBirthdate"
                    placeholder="dd/mm/yyyy"
                    required
                    type="text"
                  />
                  <div className="invalid-feedback">Please enter date</div>
                </div>
                <div>
                  <div className="col-12 mt-3">
                    <div className="d-flex flex-column flex-md-row gap-2">
                      <button className="btn btn-primary" type="submit">
                        Create New Customer
                      </button>
                      <button className="btn btn-secondary" type="submit">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card card-lg border-0">
          <div className="card-body p-6 d-flex flex-column gap-6">
            <div>
              <h4 className="mb-0 h6">Customer Details</h4>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-row justify-content-between">
                <span className="fw-medium text-dark">Created at</span>
                <span className="fw-medium">8 month ago</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span className="fw-medium text-dark">Last modified at</span>
                <span className="fw-medium">2 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <ul
          className="nav nav-pills justify-content-center mb-6 bg-white border d-inline-flex rounded-3 p-2"
          id="myTab"
          role="tablist">
          <li className="nav-item" role="presentation">
            <button
              aria-controls="address-tab-pane"
              aria-selected="true"
              className="nav-link active"
              data-bs-target="#address-tab-pane"
              data-bs-toggle="tab"
              id="address-tab"
              role="tab"
              type="button">
              Address
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              aria-controls="payment-tab-pane"
              aria-selected="false"
              className="nav-link"
              data-bs-target="#payment-tab-pane"
              data-bs-toggle="tab"
              id="payment-tab"
              role="tab"
              type="button">
              Payment
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            aria-labelledby="address-tab"
            className="tab-pane fade show active"
            id="address-tab-pane"
            role="tabpanel"
            tabIndex="0">
            <div className="card h-100 card-lg">
              <div className="p-6">
                <div className="d-flex justify-content-between flex-row align-items-center">
                  <div>
                    <h3 className="mb-0 h6">Addresses</h3>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      data-bs-target="#address"
                      data-bs-toggle="modal"
                      type="button">
                      New Address
                    </button>
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
                              id="addressOne"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="addressOne"
                            />
                          </div>
                        </th>
                        <th>Street</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="addressTwo"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="addressTwo"
                            />
                          </div>
                        </td>
                        <td>123 Elm St.</td>
                        <td>IL</td>
                        <td>Springfield</td>
                        <td>USA</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                  <span>Showing 1 result</span>
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
          <div
            aria-labelledby="payment-tab"
            className="tab-pane fade"
            id="payment-tab-pane"
            role="tabpanel"
            tabIndex="0">
            <div className="card h-100 card-lg">
              <div className="p-6">
                <div className="d-flex justify-content-between flex-row align-items-center">
                  <div>
                    <h3 className="mb-0 h6">Payments</h3>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      data-bs-target="#payment"
                      data-bs-toggle="modal"
                      type="button">
                      New Payment
                    </button>
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
                              id="paymentOne"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentOne"
                            />
                          </div>
                        </th>
                        <th>Order ID</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="paymentTwo"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentTwo"
                            />
                          </div>
                        </td>
                        <td>#101</td>
                        <td>TXN001</td>
                        <td>17 May, 2023 at 3:18pm</td>
                        <td>$34.00</td>
                        <td>Credit Card</td>
                        <td>
                          <span className="badge bg-light-success text-dark-success">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                              id="paymentThree"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentThree"
                            />
                          </div>
                        </td>
                        <td>#102</td>
                        <td>TXN002</td>
                        <td>17 May, 2023 at 3:18pm</td>
                        <td>$34.00</td>
                        <td>PayPal</td>
                        <td>
                          <span className="badge bg-light-warning text-dark-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                              id="paymentFour"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentFour"
                            />
                          </div>
                        </td>
                        <td>#103</td>
                        <td>TXN003</td>
                        <td>17 May, 2023 at 3:18pm</td>
                        <td>$34.00</td>
                        <td>Debit Card</td>
                        <td>
                          <span className="badge bg-light-danger text-dark-danger">
                            Failed
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#">
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
                  <span>Showing 1 result</span>
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
    </div>
  </div>
  <div>
  <div
    aria-hidden="true"
    aria-labelledby="addressLabel"
    className="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="address"
    tabIndex="-1">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content p-6 d-flex flex-column gap-6">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h5 className="modal-title" id="addressLabel">
            Create address
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body p-0">
          <form className="row needs-validation g-3" noValidate>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerEditAdd">
                Street
              </label>
              <input
                className="form-control"
                id="customerEditAdd"
                placeholder="Street Address"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter address</div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerZip">
                Zip Code
              </label>
              <input
                className="form-control"
                id="customerZip"
                placeholder="Enter Zip"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter zip</div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerCity">
                City
              </label>
              <input
                className="form-control"
                id="customerCity"
                placeholder=" City"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter city</div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerCity">
                State
              </label>
              <input
                className="form-control"
                id="customerState"
                placeholder=" State"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter state</div>
            </div>
            <div className="col-lg-8 col-12">
              <label className="form-label" htmlFor="customerCountry">
                Country
              </label>
              <select className="form-select" id="customerCountry" required>
                <option disabled selected value="">
                  Country
                </option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-row gap-3">
          <button className="btn btn-primary" type="button">
            Create
          </button>
          <button
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="paymentLabel"
    className="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="payment"
    tabIndex="-1">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content p-6 d-flex flex-column gap-6">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h5 className="modal-title" id="paymentLabel">
            Create payment
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body p-0">
          <form className="row needs-validation g-3" noValidate>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerpayment">
                Order*
              </label>
              <input
                className="form-control"
                id="customerpayment"
                placeholder="Order Id"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter order id</div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerTransction">
                Transaction Id
              </label>
              <input
                className="form-control"
                id="customerTransction"
                placeholder="Transaction Id"
                required
                type="number"
              />
              <div className="invalid-feedback">
                Please enter transaction id
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerAmount">
                Amount*
              </label>
              <input
                className="form-control"
                id="customerAmount"
                placeholder=" Amount"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter city</div>
            </div>
            <div className="col-lg-6 col-12">
              <label className="form-label" htmlFor="customerStatus">
                Status*
              </label>
              <select className="form-select" id="customerStatus" required>
                <option disabled selected value="">
                  Status
                </option>
                <option value="Complete">Complete</option>
                <option value="Failed">Failed</option>
                <option value="Pending">Pending</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid status.
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <span className="fw-medium text-dark mb-0">Method*</span>
              <div className="d-flex flex-column flex-md-row gap-2">
                <input
                  autoComplete="off"
                  className="btn-check"
                  defaultChecked
                  id="btnradio1"
                  name="btnradio"
                  type="radio"
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Credit Card
                </label>
                <input
                  autoComplete="off"
                  className="btn-check"
                  id="btnradio2"
                  name="btnradio"
                  type="radio"
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="btnradio2">
                  Bank Transfer
                </label>
                <input
                  autoComplete="off"
                  className="btn-check"
                  id="btnradio3"
                  name="btnradio"
                  type="radio"
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="btnradio3">
                  PayPal
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-row gap-3">
          <button className="btn btn-primary" type="button">
            Create
          </button>
          <button
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    className="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="delete"
    tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-6 d-flex flex-column gap-6">
        <div className="d-flex justify-content-end">
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body p-0">
          <div className="d-flex flex-column align-items-center d-flex flex-column gap-6">
            <div className="bg-danger rounded-circle icon-xl bg-light-danger text-center">
              <svg
                className="bi bi-trash3-fill text-danger"
                fill="currentColor"
                height="24"
                viewBox="0 0 16 16"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </div>
            <div className="d-flex flex-column gap-2 text-center">
              <h3 className="mb-0 h4">Delete Customer name</h3>
              <p className="mb-0">are you sure you would like to to this?</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <Link
                aria-label="Close"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                href="#!">
                Cancel
              </Link>
              <Link className="btn btn-danger" to="#!">
                Confim
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
}