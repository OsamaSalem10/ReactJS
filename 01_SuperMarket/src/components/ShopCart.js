import { Link } from "react-router-dom";
export const ShopCart = () => {
  return (
    <main>
      <div className="mt-4">
        <div className="container-fluid">
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
                    Shop Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="py-3">
              
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
                            <Link
                              className="text-inherit"
                              to="../pages/shop-single.html"
                            >
                              <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                            </Link>
                            <span>
                              <small className="text-muted">.98 / lb</small>
                            </span>
                            <div className="mt-2 small lh-1">
                              <Link
                                className="text-decoration-none text-inherit"
                                to="#!"
                              >
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
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                                <span className="text-muted">Remove</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4 col-lg-3">
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
                            <Link
                              className="text-inherit"
                              to="../pages/shop-single.html"
                            >
                              <h6 className="mb-0">NutriChoice Digestive</h6>
                            </Link>
                            <span>
                              <small className="text-muted">250g</small>
                            </span>
                            <div className="mt-2 small lh-1">
                              <Link
                                className="text-decoration-none text-inherit"
                                to="#!"
                              >
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
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                                <span className="text-muted">Remove</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4 col-lg-3">
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
                            <Link
                              className="text-inherit"
                              to="../pages/shop-single.html"
                            >
                              <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                            </Link>
                            <span>
                              <small className="text-muted">1 kg</small>
                            </span>
                            <div className="mt-2 small lh-1">
                              <Link
                                className="text-decoration-none text-inherit"
                                to="#!"
                              >
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
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                                <span className="text-muted">Remove</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4 col-lg-3">
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
                            <Link
                              className="text-inherit"
                              to="../pages/shop-single.html"
                            >
                              <h6 className="mb-0">Onion Flavour Potato</h6>
                            </Link>
                            <span>
                              <small className="text-muted">250g</small>
                            </span>
                            <div className="mt-2 small lh-1">
                              <Link
                                className="text-decoration-none text-inherit"
                                to="#!"
                              >
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
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                                <span className="text-muted">Remove</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4 col-lg-3">
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
                            <Link
                              className="text-inherit"
                              to="../pages/shop-single.html"
                            >
                              <h6 className="mb-0">Salted Instant Popcorn</h6>
                            </Link>
                            <span>
                              <small className="text-muted">100g</small>
                            </span>
                            <div className="mt-2 small lh-1">
                              <Link
                                className="text-decoration-none text-inherit"
                                to="#!"
                              >
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
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                                <span className="text-muted">Remove</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4 col-lg-3">
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
                  <Link className="btn btn-primary" to="#!">
                    Continue Shopping
                  </Link>
                  <Link className="btn btn-dark" to="#!">
                    Update Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-5">
              <div className="mb-5 card mt-2">
                <div className="card-body p-6">
                  <h2 className="h5 mb-4">Summary</h2>
                  <div className="card mb-2">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div>Item Subtotal</div>
                        </div>
                        <span>$70.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div>Service Fee</div>
                        </div>
                        <span>$3.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div className="fw-bold">Subtotal</div>
                        </div>
                        <span className="fw-bold">$67.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-grid mb-1 mt-4">
                    <Link
                      className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                      to="/shopcheckout"
                    >
                      Go to Checkout
                      <span className="fw-bold">$67.00</span>
                    </Link>
                  </div>
                  <p>
                    <small>
                      By placing your order, you agree to be bound by the
                      Freshcart
                      <Link to="#!">Terms of Service</Link>
                      and
                      <Link to="#!">Privacy Policy.</Link>
                    </small>
                  </p>
                  <div className="mt-8">
                    <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                    <form>
                      <div className="mb-2">
                        <label
                          className="form-label sr-only"
                          htmlFor="giftcard"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control"
                          id="giftcard"
                          placeholder="Promo or Gift Card"
                          type="text"
                        />
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-outline-dark mb-1"
                          type="submit"
                        >
                          Redeem
                        </button>
                      </div>
                      <p className="text-muted mb-0">
                        <small>Terms & Conditions apply</small>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
