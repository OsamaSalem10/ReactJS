import { Link } from "react-router-dom";

export const Offcanvas = () => {
  return (
    <>
      {/* Register And Login */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="needs-validation" noValidate="">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Name"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email address"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter email.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter password.</div>
                  <small className="form-text">
                    By Signup, you agree to our
                    <Link to="#!">Terms of Service</Link>
                    &amp;
                    <Link to="#!">Privacy Policy</Link>
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Already have an account?
              <Link to="#">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop Cart --> */}
      <div
  aria-labelledby="offcanvasRightLabel"
  className="offcanvas offcanvas-end"
  id="offcanvasRight"
  tabIndex="-1">
  <div className="offcanvas-header border-bottom">
    <div className="text-start">
      <h5 className="mb-0 fs-4" id="offcanvasRightLabel">
        Shop Cart
      </h5>
      <small>Location in 382480</small>
    </div>
    <button
      aria-label="Close"
      className="btn-close text-reset"
      data-bs-dismiss="offcanvas"
      type="button"
    />
  </div>
  <div className="offcanvas-body">
    <div>
      <div className="alert alert-danger p-2" role="alert">
        You’ve got FREE delivery. Start
        <a className="alert-link" href="#!">
          checkout now!
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-3 ps-0 border-top">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-7">
              <div className="d-flex">
                <img
                  alt="Ecommerce"
                  className="icon-shape icon-xxl"
                  src="../assets/images/products/product-img-1.jpg"
                />
                <div className="ms-3">
                  <a className="text-inherit" href="../pages/shop-single.html">
                    <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                  </a>
                  <span>
                    <small className="text-muted">.98 / lb</small>
                  </span>
                  <div className="mt-2 small lh-1">
                    <a className="text-decoration-none text-inherit" href="#!">
                      <span className="me-1 align-text-bottom">
                        <svg
                          className="feather feather-trash-2 text-success"
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </span>
                      <span className="text-muted">Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3">
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold">$5.00</span>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 ps-0">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-7">
              <div className="d-flex">
                <img
                  alt="Ecommerce"
                  className="icon-shape icon-xxl"
                  src="../assets/images/products/product-img-2.jpg"
                />
                <div className="ms-3">
                  <a className="text-inherit" href="../pages/shop-single.html">
                    <h6 className="mb-0">NutriChoice Digestive</h6>
                  </a>
                  <span>
                    <small className="text-muted">250g</small>
                  </span>
                  <div className="mt-2 small lh-1">
                    <a className="text-decoration-none text-inherit" href="#!">
                      <span className="me-1 align-text-bottom">
                        <svg
                          className="feather feather-trash-2 text-success"
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </span>
                      <span className="text-muted">Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3">
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold text-danger">$20.00</span>
              <div className="text-decoration-line-through text-muted small">
                $26.00
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 ps-0">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-7">
              <div className="d-flex">
                <img
                  alt="Ecommerce"
                  className="icon-shape icon-xxl"
                  src="../assets/images/products/product-img-3.jpg"
                />
                <div className="ms-3">
                  <a className="text-inherit" href="../pages/shop-single.html">
                    <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                  </a>
                  <span>
                    <small className="text-muted">1 kg</small>
                  </span>
                  <div className="mt-2 small lh-1">
                    <a className="text-decoration-none text-inherit" href="#!">
                      <span className="me-1 align-text-bottom">
                        <svg
                          className="feather feather-trash-2 text-success"
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </span>
                      <span className="text-muted">Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3">
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold">$15.00</span>
              <div className="text-decoration-line-through text-muted small">
                $20.00
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 ps-0">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-7">
              <div className="d-flex">
                <img
                  alt="Ecommerce"
                  className="icon-shape icon-xxl"
                  src="../assets/images/products/product-img-4.jpg"
                />
                <div className="ms-3">
                  <a className="text-inherit" href="../pages/shop-single.html">
                    <h6 className="mb-0">Onion Flavour Potato</h6>
                  </a>
                  <span>
                    <small className="text-muted">250g</small>
                  </span>
                  <div className="mt-2 small lh-1">
                    <a className="text-decoration-none text-inherit" href="#!">
                      <span className="me-1 align-text-bottom">
                        <svg
                          className="feather feather-trash-2 text-success"
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </span>
                      <span className="text-muted">Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3">
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold">$15.00</span>
              <div className="text-decoration-line-through text-muted small">
                $20.00
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 ps-0 border-bottom">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-7">
              <div className="d-flex">
                <img
                  alt="Ecommerce"
                  className="icon-shape icon-xxl"
                  src="../assets/images/products/product-img-5.jpg"
                />
                <div className="ms-3">
                  <a className="text-inherit" href="../pages/shop-single.html">
                    <h6 className="mb-0">Salted Instant Popcorn</h6>
                  </a>
                  <span>
                    <small className="text-muted">100g</small>
                  </span>
                  <div className="mt-2 small lh-1">
                    <a className="text-decoration-none text-inherit" href="#!">
                      <span className="me-1 align-text-bottom">
                        <svg
                          className="feather feather-trash-2 text-success"
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </span>
                      <span className="text-muted">Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3">
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold">$15.00</span>
              <div className="text-decoration-line-through text-muted small">
                $25.00
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="d-flex justify-content-between mt-4">
        <a className="btn btn-primary" href="#!">
          Continue Shopping
        </a>
        <a className="btn btn-dark" href="#!">
          Update Cart
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};
