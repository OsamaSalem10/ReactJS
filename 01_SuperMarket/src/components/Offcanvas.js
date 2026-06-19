import { useState } from "react";
import { Link } from "react-router-dom";

export const Offcanvas = () => {
  const images = [
    "./assets/images/products/product-single-img-1.jpg",
    "./assets/images/products/product-single-img-2.jpg",
    "./assets/images/products/product-single-img-3.jpg",
    "./assets/images/products/product-single-img-4.jpg",
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const zoom = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
  };

  const resetZoom = (e) => {
    e.currentTarget.style.backgroundPosition = "center";
  };

  // ➕➖ Quantity handler
  const increase = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrease = () => setQuantity((q) => Math.max(q - 1, 1));
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
        tabIndex="-1"
      >
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
              <Link className="alert-link" to="#!">
                checkout now!
              </Link>
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
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
              <Link className="btn btn-primary" to="#!">
                Continue Shopping
              </Link>
              <Link className="btn btn-dark" to="#!">
                Update Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop Zoom --> */}
      <div
        aria-hidden="true"
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-8">
              <div className="position-absolute top-0 end-0 me-3 mt-3">
                <button
                  aria-label="Close"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  type="button"
                />
              </div>
              <div className="row">
                {/* LEFT - Product Images */}
                <div className="col-lg-6">
                  <div className="product productModal" id="productModal">
                    <div
                      className="zoom"
                      onMouseMove={zoom}
                      onMouseLeave={resetZoom}
                      style={{
                        backgroundImage: `url(${mainImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <img alt="Product" src={mainImage} />
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="product-tools mt-3">
                    <div
                      className="thumbnails row g-3"
                      id="productModalThumbnails"
                    >
                      {images.map((img, idx) => (
                        <div className="col-3" key={idx}>
                          <div
                            className="thumbnails-img"
                            onClick={() => setMainImage(img)}
                            style={{ cursor: "pointer" }}
                          >
                            <img alt="Thumbnail" src={img} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT - Product Info */}
                <div className="col-lg-6">
                  <div className="ps-lg-8 mt-6 mt-lg-0">
                    <Link className="mb-4 d-block" to="#!">
                      Bakery Biscuits
                    </Link>
                    <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>

                    {/* Rating */}
                    <div className="mb-4">
                      <small className="text-warning">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <Link className="ms-2" to="#">
                        (30 reviews)
                      </Link>
                    </div>

                    {/* Price */}
                    <div className="fs-4">
                      <span className="fw-bold text-dark">$32</span>
                      <span className="text-decoration-line-through text-muted ms-2">
                        $35
                      </span>
                      <span>
                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                      </span>
                    </div>

                    <hr className="my-6" />

                    {/* Size options */}
                    <div className="mb-4">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        250g
                      </button>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        type="button"
                      >
                        500g
                      </button>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        type="button"
                      >
                        1kg
                      </button>
                    </div>

                    {/* Quantity */}
                    <div>
                      <div className="input-group input-spinner">
                        <button
                          className="button-minus btn btn-sm btn-outline-secondary"
                          type="button"
                          onClick={decrease}
                        >
                          -
                        </button>
                        <input
                          className="quantity-field form-control-sm form-input text-center"
                          value={quantity}
                          readOnly
                          type="number"
                        />
                        <button
                          className="button-plus btn btn-sm btn-outline-secondary"
                          type="button"
                          onClick={increase}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Add to cart & Wishlist */}
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                      <div className="col-lg-4 col-md-5 col-6 d-grid">
                        <button className="btn btn-primary" type="button">
                          <i className="bi bi-cart me-2" />
                          Add to cart
                        </button>
                      </div>
                      <div className="col-md-4 col-5">
                        <button className="btn btn-light" type="button">
                          <i className="bi bi-arrow-left-right" />
                        </button>
                        <button className="btn btn-light ms-2" type="button">
                          <i className="bi bi-heart" />
                        </button>
                      </div>
                    </div>

                    <hr className="my-6" />

                    {/* Product Info Table */}
                    <div>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Product Code:</td>
                            <td>FBB00255</td>
                          </tr>
                          <tr>
                            <td>Availability:</td>
                            <td>In Stock</td>
                          </tr>
                          <tr>
                            <td>Type:</td>
                            <td>Fruits</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>
                              <small>
                                01 day shipping.
                                <span className="text-muted">
                                  {" "}
                                  (Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* add address */}
      <div
        aria-hidden="true"
        aria-labelledby="addAddressModalLabel"
        className="modal fade"
        id="addAddressModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between mb-5">
                <div>
                  <h5 className="h6 mb-1" id="addAddressModalLabel">
                    New Shipping Address
                  </h5>
                  <p className="small mb-0">
                    Add new shipping address for your order delivery.
                  </p>
                </div>
                <div>
                  <button
                    aria-label="Close"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    type="button"
                  />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    aria-label="First name"
                    className="form-control"
                    placeholder="First name"
                    required
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <input
                    aria-label="Last name"
                    className="form-control"
                    placeholder="Last name"
                    required
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Address Line 1"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Address Line 2"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="City"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <select className="form-select">
                    <option selected>India</option>
                    <option value="1">UK</option>
                    <option value="2">USA</option>
                    <option value="3">UAE</option>
                  </select>
                </div>
                <div className="col-12">
                  <select className="form-select">
                    <option selected>Gujarat</option>
                    <option value="1">Northern Ireland</option>
                    <option value="2">Alaska</option>
                    <option value="3">Abu Dhabi</option>
                  </select>
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Zip Code"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      defaultValue=""
                      id="flexCheckDefault"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Set as Default
                    </label>
                  </div>
                </div>
                <div className="col-12 text-end">
                  <button
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="button">
                    Save Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Account Navbar --> */}
      <div
        aria-labelledby="offcanvasAccountLabel"
        className="offcanvas offcanvas-start"
        id="offcanvasAccount"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasAccountLabel">
            Offcanvas
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            type="button"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column nav-pills nav-pills-dark">
            <li className="nav-item">
              <Link
                aria-current="page"
                className="nav-link"
                to="/account-orders"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                Your Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account-settings">
                <i className="feather-icon icon-settings me-2" />
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account-address">
                <i className="feather-icon icon-map-pin me-2" />
                Address
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/account-payment-method">
                <i className="feather-icon icon-credit-card me-2" />
                Payment Method
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account-notification">
                <i className="feather-icon icon-bell me-2" />
                Notification
              </Link>
            </li>
          </ul>
          <hr className="my-6" />
          <div>
            <ul className="nav flex-column nav-pills nav-pills-dark">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="feather-icon icon-log-out me-2" />
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Account Payment Method */}
      <div
  aria-hidden="true"
  aria-labelledby="paymentModalLabel"
  className="modal fade"
  id="paymentModal"
  role="dialog"
  tabIndex="-1">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header align-items-center d-flex">
        <h5 className="modal-title" id="paymentModalLabel">
          Add New Payment Method
        </h5>
        <button
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="modal"
          type="button"
        />
      </div>
      <div className="modal-body">
        <div>
          <form className="row mb-4 needs-validation" noValidate>
            <div className="mb-3 col-12 col-md-12 mb-4">
              <h5 className="mb-3">Credit / Debit card</h5>
              <div className="d-inline-flex">
                <div className="form-check me-2">
                  <input
                    className="form-check-input"
                    id="paymentRadioOne"
                    name="paymentRadioOne"
                    required
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor="paymentRadioOne">
                    <img
                      alt=""
                      src="../assets/images/payment/american-express.svg"
                    />
                  </label>
                </div>
                <div className="form-check me-2">
                  <input
                    className="form-check-input"
                    id="paymentRadioTwo"
                    name="paymentRadioOne"
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor="paymentRadioTwo">
                    <img alt="" src="../assets/images/payment/mastercard.svg" />
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="paymentRadioFour"
                    name="paymentRadioOne"
                    type="radio"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="paymentRadioFour">
                    <img alt="" src="../assets/images/payment/visa.svg" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3 col-12 col-md-4">
              <label className="form-label" htmlFor="nameoncard">
                Name on card
              </label>
              <input
                className="form-control"
                id="nameoncard"
                name="nameoncard"
                placeholder="Name"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter name.</div>
            </div>
            <div className="mb-3 col-12 col-md-4">
              <label className="form-label" htmlFor="validationCustomMonth">
                Month
              </label>
              <select
                className="form-select"
                id="validationCustomMonth"
                required>
                <option value="">Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
              <div className="invalid-feedback">Please select month.</div>
            </div>
            <div className="mb-3 col-12 col-md-4">
              <label className="form-label" htmlFor="validationCustomYear">
                Year
              </label>
              <select
                className="form-select"
                id="validationCustomYear"
                required>
                <option value="">Year</option>
                <option value="June">2022</option>
                <option value="July">2023</option>
                <option value="August">2024</option>
                <option value="Sep">2025</option>
                <option value="Oct">2026</option>
              </select>
              <div className="invalid-feedback">Please select year.</div>
            </div>
            <div className="mb-3 col-md-8 col-12">
              <label className="form-label" htmlFor="card-mask">
                Card Number
              </label>
              <input
                className="form-control"
                id="card-mask"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter card number.</div>
            </div>
            <div className="mb-3 col-md-4 col-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="digit-mask">
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
                  maxLength="3"
                  name="cvv"
                  placeholder="xxx"
                  required
                  type="password"
                />
                <div className="invalid-feedback">Please enter cvv.</div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <button className="btn btn-primary" type="submit">
                Add New Card
              </button>
              <button
                className="btn btn-outline-gray-400 text-muted"
                data-bs-dismiss="modal"
                type="submit">
                Close
              </button>
            </div>
          </form>
          <span>
            <strong>Note:</strong>
            that you can later remove your card at the account setting page.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};
