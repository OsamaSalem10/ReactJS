import { Link } from "react-router-dom";
export const ShopCheckout = () => {
  return <main>
  <div className="mt-4">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="#!">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#!">Shop</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Shop Checkout
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <section className="mb-lg-14 mb-8 mt-8">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            <div className="mb-8">
              <h1 className="fw-bold mb-0">Checkout</h1>
              <p className="mb-0">
                Already have an account? Click here to
                <Link to="#!">Sign in</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-12">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample">
              <div className="accordion-item py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    aria-controls="flush-collapseOne"
                    aria-expanded="true"
                    className="fs-5 text-inherit collapsed h4"
                    data-bs-target="#flush-collapseOne"
                    data-bs-toggle="collapse"
                    to="#">
                    <i className="feather-icon icon-map-pin me-2 text-muted" />
                    Add delivery address
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    data-bs-target="#addAddressModal"
                    data-bs-toggle="modal"
                    to="#">
                    Add a new address
                  </Link>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionFlushExample"
                  id="flush-collapseOne">
                  <div className="mt-5">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                        <div className="card card-body p-6">
                          <div className="form-check mb-4">
                            <input
                              className="form-check-input"
                              defaultChecked
                              id="homeRadio"
                              name="flexRadioDefault"
                              type="radio"
                            />
                            <label
                              className="form-check-label text-dark"
                              htmlFor="homeRadio">
                              Home
                            </label>
                          </div>
                          <address>
                            <strong>Jitu Chauhan</strong>
                            <br />
                            4450 North Avenue Oakland,
                            <br />
                            Nebraska, United States,
                            <br />
                            <abbr title="Phone">P: 402-776-1106</abbr>
                          </address>
                          <span className="text-danger">Default address</span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                        <div className="card card-body p-6">
                          <div className="form-check mb-4">
                            <input
                              className="form-check-input"
                              id="officeRadio"
                              name="flexRadioDefault"
                              type="radio"
                            />
                            <label
                              className="form-check-label text-dark"
                              htmlFor="officeRadio">
                              Office
                            </label>
                          </div>
                          <address>
                            <strong>Nitu Chauhan</strong>
                            <br />
                            3853 Coal Road,
                            <br />
                            Tannersville, Pennsylvania, 18372, USA,
                            <br />
                            <abbr title="Phone">P: 402-776-1106</abbr>
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item py-4">
                <Link
                  aria-controls="flush-collapseTwo"
                  aria-expanded="false"
                  className="text-inherit collapsed h5"
                  data-bs-target="#flush-collapseTwo"
                  data-bs-toggle="collapse"
                  to="#">
                  <i className="feather-icon icon-clock me-2 text-muted" />
                  Delivery time
                </Link>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                  id="flush-collapseTwo">
                  <ul
                    className="nav nav-pills nav-pills-light mb-3 nav-fill mt-5"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-today"
                        aria-selected="true"
                        className="nav-link active"
                        data-bs-target="#pills-today"
                        data-bs-toggle="pill"
                        id="pills-today-tab"
                        role="tab"
                        type="button">
                        Today
                        <br />
                        <small>Oct 3</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-monday"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-monday"
                        data-bs-toggle="pill"
                        id="pills-monday-tab"
                        role="tab"
                        type="button">
                        Mon
                        <br />
                        <small>Oct 4</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-Tue"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-Tue"
                        data-bs-toggle="pill"
                        id="pills-Tue-tab"
                        role="tab"
                        type="button">
                        Tue
                        <br />
                        <small>Oct 5</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-Wed"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-Wed"
                        data-bs-toggle="pill"
                        id="pills-Wed-tab"
                        role="tab"
                        type="button">
                        Wed
                        <br />
                        <small>Oct 6</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-Thu"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-Thu"
                        data-bs-toggle="pill"
                        id="pills-Thu-tab"
                        role="tab"
                        type="button">
                        Thu
                        <br />
                        <small>Oct 7</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-Fri"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-Fri"
                        data-bs-toggle="pill"
                        id="pills-Fri-tab"
                        role="tab"
                        type="button">
                        Fri
                        <br />
                        <small>Oct 8</small>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="pills-Sat"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#pills-Sat"
                        data-bs-toggle="pill"
                        id="pills-Sat-tab"
                        role="tab"
                        type="button">
                        Sat
                        <br />
                        <small>Oct 9</small>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      aria-labelledby="pills-today-tab"
                      className="tab-pane fade show active"
                      id="pills-today"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault1"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault2"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2">
                                <span>Within 3 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault3"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault3">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault4"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault4">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault5"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault5">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-monday-tab"
                      className="tab-pane fade"
                      id="pills-monday"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault6"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault6">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault7"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault7">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault8"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault8">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault9"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault9">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault10"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault10">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-Tue-tab"
                      className="tab-pane fade"
                      id="pills-Tue"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault11"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault11">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault12"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault12">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault13"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault13">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault14"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault14">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault15"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault15">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-Wed-tab"
                      className="tab-pane fade"
                      id="pills-Wed"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault16"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault16">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault17"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault17">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault18"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault18">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault19"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault19">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault20"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault20">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-Thu-tab"
                      className="tab-pane fade"
                      id="pills-Thu"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault21"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault21">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault22"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault22">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault23"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault23">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault24"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault24">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault25"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault25">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-Fri-tab"
                      className="tab-pane fade"
                      id="pills-Fri"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault26"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault26">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault27"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault27">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault28"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault28">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault29"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault29">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault30"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault30">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      aria-labelledby="pills-Sat-tab"
                      className="tab-pane fade"
                      id="pills-Sat"
                      role="tabpanel"
                      tabIndex="0">
                      <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault31"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault31">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault32"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault32">
                                <span>Within 2 Hours</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault33"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault33">
                                <span>1pm - 2pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$0.00</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-success">Free</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault34"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault34">
                                <span>2pm - 3pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="col-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="flexRadioDefault35"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault35">
                                <span>3pm - 4pm</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 text-center">$3.99</div>
                          <div className="col-3 text-center">
                            <span className="badge bg-danger">Paid</span>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              className="btn btn-outline-gray-400 btn-sm text-muted"
                              to="#">
                              Choose
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 d-flex justify-content-end">
                    <Link
                      aria-controls="flush-collapseOne"
                      aria-expanded="false"
                      className="btn btn-outline-gray-400 text-muted"
                      data-bs-target="#flush-collapseOne"
                      data-bs-toggle="collapse"
                      to="#">
                      Prev
                    </Link>
                    <Link
                      aria-controls="flush-collapseThree"
                      aria-expanded="false"
                      className="btn btn-primary ms-2"
                      data-bs-target="#flush-collapseThree"
                      data-bs-toggle="collapse"
                      to="#">
                      Next
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item py-4">
                <Link
                  aria-controls="flush-collapseThree"
                  aria-expanded="false"
                  className="text-inherit h5"
                  data-bs-target="#flush-collapseThree"
                  data-bs-toggle="collapse"
                  to="#">
                  <i className="feather-icon icon-shopping-bag me-2 text-muted" />
                  Delivery instructions
                </Link>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                  id="flush-collapseThree">
                  <div className="mt-5">
                    <label
                      className="form-label sr-only"
                      htmlFor="DeliveryInstructions">
                      Delivery instructions
                    </label>
                    <textarea
                      className="form-control"
                      id="DeliveryInstructions"
                      placeholder="Write delivery instructions "
                      rows="3"
                    />
                    <p className="form-text">
                      Add instructions for how you want your order shopped
                      and/or delivered
                    </p>
                    <div className="mt-5 d-flex justify-content-end">
                      <Link
                        aria-controls="flush-collapseTwo"
                        aria-expanded="false"
                        className="btn btn-outline-gray-400 text-muted"
                        data-bs-target="#flush-collapseTwo"
                        data-bs-toggle="collapse"
                        to="#">
                        Prev
                      </Link>
                      <Link
                        aria-controls="flush-collapseFour"
                        aria-expanded="false"
                        className="btn btn-primary ms-2"
                        data-bs-target="#flush-collapseFour"
                        data-bs-toggle="collapse"
                        to="#">
                        Next
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item py-4">
                <Link
                  aria-controls="flush-collapseFour"
                  aria-expanded="false"
                  className="text-inherit h5"
                  data-bs-target="#flush-collapseFour"
                  data-bs-toggle="collapse"
                  to="#">
                  <i className="feather-icon icon-credit-card me-2 text-muted" />
                  Payment Method
                </Link>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                  id="flush-collapseFour">
                  <div className="mt-5">
                    <div>
                      <div className="card card-bordered shadow-none mb-2">
                        <div className="card-body p-6">
                          <div className="d-flex">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="paypal"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="paypal"
                              />
                            </div>
                            <div>
                              <h5 className="mb-1 h6">Payment with Paypal</h5>
                              <p className="mb-0 small">
                                You will be redirected to PayPal website to
                                complete your purchase securely.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-bordered shadow-none mb-2">
                        <div className="card-body p-6">
                          <div className="d-flex mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="creditdebitcard"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="creditdebitcard"
                              />
                            </div>
                            <div>
                              <h5 className="mb-1 h6">Credit / Debit Card</h5>
                              <p className="mb-0 small">
                                Safe money transfer using your bank accou k
                                account. We support Mastercard tercard, Visa,
                                Discover and Stripe.
                              </p>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-12">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="card-mask">
                                  Card Number
                                </label>
                                <input
                                  className="form-control"
                                  id="card-mask"
                                  placeholder="xxxx-xxxx-xxxx-xxxx"
                                  required
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="mb-3 mb-lg-0">
                                <label
                                  className="form-label"
                                  htmlFor="nameoncard">
                                  Name on card
                                </label>
                                <input
                                  className="form-control"
                                  id="nameoncard"
                                  placeholder="Enter name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-3 col-12">
                              <div className="mb-3 mb-lg-0 position-relative">
                                <label
                                  className="form-label"
                                  htmlFor="expirydate">
                                  Expiry date
                                </label>
                                <input
                                  className="form-control"
                                  id="expirydate"
                                  placeholder="MM/YY"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-3 col-12">
                              <div className="mb-3 mb-lg-0">
                                <label
                                  className="form-label"
                                  htmlFor="digit-mask">
                                  CVV Code
                                  <i
                                    className="fe fe-help-circle ms-1"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="A 3 - digit number, typically printed on the back of a card."
                                  />
                                </label>
                                <input
                                  className="form-control"
                                  id="digit-mask"
                                  inputMode="numeric"
                                  maxLength="3"
                                  name="digit-mask"
                                  placeholder="xxx"
                                  required
                                  type="password"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-bordered shadow-none mb-2">
                        <div className="card-body p-6">
                          <div className="d-flex">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="payoneer"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="payoneer"
                              />
                            </div>
                            <div>
                              <h5 className="mb-1 h6">Pay with Payoneer</h5>
                              <p className="mb-0 small">
                                You will be redirected to Payoneer website to
                                complete your purchase securely.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-bordered shadow-none">
                        <div className="card-body p-6">
                          <div className="d-flex">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="cashonDelivery"
                                name="flexRadioDefault"
                                type="radio"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="cashonDelivery"
                              />
                            </div>
                            <div>
                              <h5 className="mb-1 h6">Cash on Delivery</h5>
                              <p className="mb-0 small">
                                Pay with cash when your order is delivered.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 d-flex justify-content-end">
                        <Link
                          aria-controls="flush-collapseThree"
                          aria-expanded="false"
                          className="btn btn-outline-gray-400 text-muted"
                          data-bs-target="#flush-collapseThree"
                          data-bs-toggle="collapse"
                          to="#">
                          Prev
                        </Link>
                        <Link className="btn btn-primary ms-2" to="#">
                          Place Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 offset-xl-1 col-xl-4 col-lg-6">
            <div className="mt-4 mt-lg-0">
              <div className="card shadow-sm">
                <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-4 py-3">
                    <div className="row align-items-center">
                      <div className="col-2 col-md-2">
                        <img
                          alt="Ecommerce"
                          className="img-fluid"
                          src="../assets/images/products/product-img-1.jpg"
                        />
                      </div>
                      <div className="col-5 col-md-5">
                        <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                        <span>
                          <small className="text-muted">.98 / lb</small>
                        </span>
                      </div>
                      <div className="col-2 col-md-2 text-center text-muted">
                        <span>1</span>
                      </div>
                      <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                        <span className="fw-bold">$5.00</span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="row align-items-center">
                      <div className="col-2 col-md-2">
                        <img
                          alt="Ecommerce"
                          className="img-fluid"
                          src="../assets/images/products/product-img-2.jpg"
                        />
                      </div>
                      <div className="col-5 col-md-5">
                        <h6 className="mb-0">NutriChoice Digestive</h6>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                      </div>
                      <div className="col-2 col-md-2 text-center text-muted">
                        <span>1</span>
                      </div>
                      <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                        <span className="fw-bold">$20.00</span>
                        <div className="text-decoration-line-through text-muted small">
                          $26.00
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="row align-items-center">
                      <div className="col-2 col-md-2">
                        <img
                          alt="Ecommerce"
                          className="img-fluid"
                          src="../assets/images/products/product-img-3.jpg"
                        />
                      </div>
                      <div className="col-5 col-md-5">
                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                        <span>
                          <small className="text-muted">1 kg</small>
                        </span>
                      </div>
                      <div className="col-2 col-md-2 text-center text-muted">
                        <span>1</span>
                      </div>
                      <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                        <span className="fw-bold">$15.00</span>
                        <div className="text-decoration-line-through text-muted small">
                          $20.00
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="row align-items-center">
                      <div className="col-2 col-md-2">
                        <img
                          alt="Ecommerce"
                          className="img-fluid"
                          src="../assets/images/products/product-img-4.jpg"
                        />
                      </div>
                      <div className="col-5 col-md-5">
                        <h6 className="mb-0">Onion Flavour Potato</h6>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                      </div>
                      <div className="col-2 col-md-2 text-center text-muted">
                        <span>1</span>
                      </div>
                      <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                        <span className="fw-bold">$15.00</span>
                        <div className="text-decoration-line-through text-muted small">
                          $20.00
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>Item Subtotal</div>
                      <div className="fw-bold">$70.00</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        Service Fee
                        <i
                          className="feather-icon icon-info text-muted"
                          data-bs-toggle="tooltip"
                          title="Default tooltip"
                        />
                      </div>
                      <div className="fw-bold">$3.00</div>
                    </div>
                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between fw-bold">
                      <div>Subtotal</div>
                      <div>$73.00</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
};
