import { AccountNavbar } from "./AccountNavbar";
import { Link } from "react-router-dom";
export const Account = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                aria-controls="offcanvasAccount"
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                data-bs-target="#offcanvasAccount"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi bi-text-indent-left fs-3" />
              </button>
            </div>
          </div>
          <AccountNavbar />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6">Your Orders</h2>
              <div className="table-responsive-xxl border-0">
                <table className="table mb-0 text-nowrap table-centered">
                  <thead className="bg-light">
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-1.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="fw-semibold text-inherit" to="#">
                          <h6 className="mb-0">
                            Haldiram's Nagpur Aloo Bhujia
                          </h6>
                        </Link>
                        <span>
                          <small className="text-muted">400g</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #14899
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        March 5, 2023
                      </td>
                      <td className="align-middle border-top-0">1</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-warning">Processing</span>
                      </td>
                      <td className="align-middle border-top-0">$15.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-2.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="fw-semibold text-inherit" to="#">
                          <h6 className="mb-0">Nutri Choise Biscuit</h6>
                        </Link>
                        <span>
                          <small className="text-muted">2 Pkt</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #14658
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        July 9, 2023
                      </td>
                      <td className="align-middle border-top-0">2</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td className="align-middle border-top-0">$45.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-3.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          <h6 className="mb-0">
                            Cadbury Dairy Milk 5 Star Bites
                          </h6>
                          <span>
                            <small className="text-muted">202 g</small>
                          </span>
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #13778
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        Oct 03, 2023
                      </td>
                      <td className="align-middle border-top-0">4</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td className="align-middle border-top-0">$99.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-4.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="fw-semibold text-inherit" to="#">
                          <h6 className="mb-0">Onion Flavour Potato</h6>
                        </Link>
                        <span>
                          <small className="text-muted">100 g</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #13746
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        March 5, 2023
                      </td>
                      <td className="align-middle border-top-0">1</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td className="align-middle border-top-0">$12.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-5.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="fw-semibold text-inherit" to="#">
                          <h6 className="mb-0">Salted Instant Popcorn</h6>
                        </Link>
                        <span>
                          <small className="text-muted">500 g</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #13566
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        July 9, 2023
                      </td>
                      <td className="align-middle border-top-0">2</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-danger">Cancel</span>
                      </td>
                      <td className="align-middle border-top-0">$6.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0 w-0">
                        <Link to="#">
                          <img
                            alt="Ecommerce"
                            className="icon-shape icon-xl"
                            src="../assets/images/products/product-img-6.jpg"
                          />
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="fw-semibold text-inherit" to="#">
                          <h6 className="mb-0">Blueberry Greek Yogurt</h6>
                        </Link>
                        <span>
                          <small className="text-muted">500 g</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">
                        <Link className="text-inherit" to="#">
                          #12094
                        </Link>
                      </td>
                      <td className="align-middle border-top-0">
                        Oct 03, 2023
                      </td>
                      <td className="align-middle border-top-0">4</td>
                      <td className="align-middle border-top-0">
                        <span className="badge bg-success">Completed</span>
                      </td>
                      <td className="align-middle border-top-0">$18.00</td>
                      <td className="text-muted align-middle border-top-0">
                        <Link
                          className="text-inherit"
                          data-bs-placement="top"
                          data-bs-title="View"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="feather-icon icon-eye" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const AccountSettings = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                aria-controls="offcanvasAccount"
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                data-bs-target="#offcanvasAccount"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi bi-text-indent-left fs-3" />
              </button>
            </div>
          </div>
          <AccountNavbar />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <div className="mb-6">
                <h2 className="mb-0">Account Setting</h2>
              </div>
              <div>
                <h5 className="mb-4">Account details</h5>
                <div className="row">
                  <div className="col-lg-5">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          className="form-control"
                          placeholder="jitu chauhan"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          placeholder="example@gmail.com"
                          type="email"
                        />
                      </div>
                      <div className="mb-5">
                        <label className="form-label">Phone</label>
                        <input
                          className="form-control"
                          placeholder="Phone number"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <button className="btn btn-primary">
                          Save Details
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <hr className="my-10" />
              <div className="pe-lg-14">
                <h5 className="mb-4">Password</h5>
                <form className="row row-cols-1 row-cols-lg-2">
                  <div className="mb-3 col">
                    <label className="form-label">New Password</label>
                    <input
                      className="form-control"
                      placeholder="**********"
                      type="password"
                    />
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">Current Password</label>
                    <input
                      className="form-control"
                      placeholder="**********"
                      type="password"
                    />
                  </div>
                  <div className="col-12">
                    <p className="mb-4">
                      Can’t remember your current password?
                      <Link to="#">Reset your password. </Link>
                    </p>
                    <Link className="btn btn-primary" to="#">
                      Save Password
                    </Link>
                  </div>
                </form>
              </div>
              <hr className="my-10" />
              <div>
                <h5 className="mb-4">Delete Account</h5>
                <p className="mb-2">Would you like to delete your account?</p>
                <p className="mb-5">
                  This account contain 12 orders, Deleting your account will
                  remove all the order details associated with it.
                </p>
                <Link className="btn btn-outline-danger" to="#">
                  I want to delete my account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const AccountAddress = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                aria-controls="offcanvasAccount"
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                data-bs-target="#offcanvasAccount"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi bi-text-indent-left fs-3" />
              </button>
            </div>
          </div>
          <AccountNavbar />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <div className="d-flex justify-content-between mb-6">
                <h2 className="mb-0">Address</h2>
                <Link
                  className="btn btn-outline-primary"
                  data-bs-target="#addAddressModal"
                  data-bs-toggle="modal"
                  to="#"
                >
                  Add a new address
                </Link>
              </div>
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-xxl-4 col-12 mb-4">
                  <div className="card">
                    <div className="card-body p-6">
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          defaultChecked
                          id="homeRadio"
                          name="flexRadioDefault"
                          type="radio"
                        />
                        <label
                          className="form-check-label text-dark fw-semibold"
                          htmlFor="homeRadio"
                        >
                          Home
                        </label>
                      </div>
                      <p className="mb-6">
                        Jitu Chauhan
                        <br />
                        4450 North Avenue Oakland,
                        <br />
                        Nebraska, United States,
                        <br />
                        402-776-1106
                      </p>
                      <Link className="btn btn-info btn-sm" to="#">
                        Default address
                      </Link>
                      <div className="mt-4">
                        <Link className="text-inherit" to="#">
                          Edit
                        </Link>
                        <Link
                          className="text-danger ms-3"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                          to="#"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xk-5 col-lg-6 col-xxl-4 col-12 mb-4">
                  <div className="card">
                    <div className="card-body p-6">
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          id="officeRadio"
                          name="flexRadioDefault"
                          type="radio"
                        />
                        <label
                          className="form-check-label text-dark fw-semibold"
                          htmlFor="officeRadio"
                        >
                          Office
                        </label>
                      </div>
                      <p className="mb-6">
                        Nitu Chauhan
                        <br />
                        3853 Coal Road
                        <br />
                        Tannersville, Pennsylvania, 18372, United States
                        <br />
                        402-776-1106
                      </p>
                      <Link className="link-primary" to="#">
                        Set as Default
                      </Link>
                      <div className="mt-4">
                        <Link className="text-inherit" to="#">
                          Edit
                        </Link>
                        <Link
                          className="text-danger ms-3"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                          to="#"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
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
export const AccountPaymentMethod = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                aria-controls="offcanvasAccount"
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                data-bs-target="#offcanvasAccount"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi bi-text-indent-left fs-3" />
              </button>
            </div>
          </div>
          <AccountNavbar />
          <div className="col-lg-9 col-md-8 col-12">
  <div className="py-6 p-md-6 p-lg-10">
    <div className="d-flex justify-content-between mb-6 align-items-center">
      <h2 className="mb-0">Payment Methods</h2>
      <Link
        className="btn btn-outline-primary"
        data-bs-target="#paymentModal"
        data-bs-toggle="modal"
        href="#">
        Add Payment
      </Link>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item py-5 px-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img alt="" src="../assets/images/svg-graphics/visa.svg" />
            <div className="ms-4">
              <h5 className="mb-0 h6 h6">**** 1234</h5>
              <p className="mb-0 small">Expires in 10/2023</p>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline-gray-400 disabled btn-sm" href="#">
              Remove
            </Link>
          </div>
        </div>
      </li>
      <li className="list-group-item px-0 py-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              alt=""
              className="me-3"
              src="../assets/images/svg-graphics/mastercard.svg"
            />
            <div>
              <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
              <p className="mb-0 small">Expires in 03/2026</p>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline-gray-400 text-muted btn-sm" href="#">
              Remove
            </Link>
          </div>
        </div>
      </li>
      <li className="list-group-item px-0 py-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              alt=""
              className="me-3"
              src="../assets/images/svg-graphics/discover.svg"
            />
            <div>
              <h5 className="mb-0 h6">Discover ending in 1234</h5>
              <p className="mb-0 small">
                Expires in 07/2020
                <span className="badge bg-warning text-dark">
                  This card is expired.
                </span>
              </p>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline-gray-400 text-muted btn-sm" href="#">
              Remove
            </Link>
          </div>
        </div>
      </li>
      <li className="list-group-item px-0 py-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              alt=""
              className="me-3"
              src="../assets/images/svg-graphics/americanexpress.svg"
            />
            <div>
              <h5 className="mb-0 h6">American Express ending in 1234</h5>
              <p className="mb-0 small">Expires in 12/2021</p>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline-gray-400 text-muted btn-sm" href="#">
              Remove
            </Link>
          </div>
        </div>
      </li>
      <li className="list-group-item px-0 py-5 border-bottom">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              alt=""
              className="me-3"
              src="../assets/images/svg-graphics/paypal.svg"
            />
            <div>
              <h5 className="mb-0 h6">Paypal Express ending in 1234</h5>
              <p className="mb-0 small">Expires in 10/2021</p>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline-gray-400 text-muted btn-sm" href="#">
              Remove
            </Link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
        </div>
      </div>
    </main>
  );
};
export const AccountNotification = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                aria-controls="offcanvasAccount"
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                data-bs-target="#offcanvasAccount"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi bi-text-indent-left fs-3" />
              </button>
            </div>
          </div>
          <AccountNavbar />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <div className="mb-6">
                <h2 className="mb-0">Notification settings</h2>
              </div>
              <div className="mb-10">
                <div className="border-bottom pb-3 mb-5">
                  <h5 className="mb-0">Email Notifications</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h6 className="mb-1">Weekly Notification</h6>
                    <p className="mb-0">
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose .
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      id="flexSwitchCheckDefault"
                      role="switch"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">Account Summary</h6>
                    <p className="mb-0 pe-12">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis eguris eu sollicitudin massa.
                      Nulla ipsum odio, aliquam in odio et, fermentum blandit
                      nulla.
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="flexSwitchCheckChecked"
                      role="switch"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="border-bottom pb-3 mb-5">
                  <h5 className="mb-0">Order updates</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h6 className="mb-0">Text messages</h6>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      id="flexSwitchCheckDefault2"
                      role="switch"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">Call before checkout</h6>
                    <p className="mb-0">
                      We'll only call if there are pending changes
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="flexSwitchCheckChecked2"
                      role="switch"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked2"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border-bottom pb-3 mb-5">
                  <h5 className="mb-0">Website Notification</h5>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultChecked
                      defaultValue=""
                      id="flexCheckFollower"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckFollower"
                    >
                      New Follower
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultValue=""
                      id="flexCheckPost"
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="flexCheckPost">
                      Post Like
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultValue=""
                      id="flexCheckPosted"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckPosted"
                    >
                      Someone you followed posted
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultValue=""
                      id="flexCheckCollection"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckCollection"
                    >
                      Post added to collection
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultValue=""
                      id="flexCheckOrder"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckOrder"
                    >
                      Order Delivery
                    </label>
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
