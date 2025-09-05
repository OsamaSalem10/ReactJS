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
              <a className="alert-link" to="#!">
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
                        <a
                          className="text-inherit"
                          to="../pages/shop-single.html"
                        >
                          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                        </a>
                        <span>
                          <small className="text-muted">.98 / lb</small>
                        </span>
                        <div className="mt-2 small lh-1">
                          <a
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
                        <a
                          className="text-inherit"
                          to="../pages/shop-single.html"
                        >
                          <h6 className="mb-0">NutriChoice Digestive</h6>
                        </a>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                        <div className="mt-2 small lh-1">
                          <a
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
                        <a
                          className="text-inherit"
                          to="../pages/shop-single.html"
                        >
                          <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                        </a>
                        <span>
                          <small className="text-muted">1 kg</small>
                        </span>
                        <div className="mt-2 small lh-1">
                          <a
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
                        <a
                          className="text-inherit"
                          to="../pages/shop-single.html"
                        >
                          <h6 className="mb-0">Onion Flavour Potato</h6>
                        </a>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                        <div className="mt-2 small lh-1">
                          <a
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
                        <a
                          className="text-inherit"
                          to="../pages/shop-single.html"
                        >
                          <h6 className="mb-0">Salted Instant Popcorn</h6>
                        </a>
                        <span>
                          <small className="text-muted">100g</small>
                        </span>
                        <div className="mt-2 small lh-1">
                          <a
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
              <a className="btn btn-primary" to="#!">
                Continue Shopping
              </a>
              <a className="btn btn-dark" to="#!">
                Update Cart
              </a>
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
                    <a className="mb-4 d-block" href="#!">
                      Bakery Biscuits
                    </a>
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
                      <a className="ms-2" href="#">
                        (30 reviews)
                      </a>
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
              {/*    <div className="row">
                <div className="col-lg-6">
                  <div className="product productModal" id="productModal">
                    <div
                      className="zoom"
                      onmousemove="zoom(event)"
                      style={{
                        backgroundImage:
                          "url(./assets/images/products/product-single-img-1.jpg)",
                      }}
                    >
                      <img
                        alt=""
                        src="./assets/images/products/product-single-img-1.jpg"
                      />
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(./assets/images/products/product-single-img-2.jpg)",
                        }}
                      >
                        <img
                          alt=""
                          src="./assets/images/products/product-single-img-2.jpg"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(./assets/images/products/product-single-img-3.jpg)",
                        }}
                      >
                        <img
                          alt=""
                          src="./assets/images/products/product-single-img-3.jpg"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(./assets/images/products/product-single-img-4.jpg)",
                        }}
                      >
                        <img
                          alt=""
                          src="./assets/images/products/product-single-img-4.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-tools">
                    <div
                      className="thumbnails row g-3"
                      id="productModalThumbnails"
                    >
                      <div className="col-3">
                        <div className="thumbnails-img">
                          <img
                            alt=""
                            src="./assets/images/products/product-single-img-1.jpg"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          <img
                            alt=""
                            src="./assets/images/products/product-single-img-2.jpg"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          <img
                            alt=""
                            src="./assets/images/products/product-single-img-3.jpg"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          <img
                            alt=""
                            src="./assets/images/products/product-single-img-4.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ps-lg-8 mt-6 mt-lg-0">
                    <a className="mb-4 d-block" to="#!">
                      Bakery Biscuits
                    </a>
                    <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                    <div className="mb-4">
                      <small className="text-warning">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <a className="ms-2" to="#">
                        (30 reviews)
                      </a>
                    </div>
                    <div className="fs-4">
                      <span className="fw-bold text-dark">$32</span>
                      <span className="text-decoration-line-through text-muted">
                        $35
                      </span>
                      <span>
                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                      </span>
                    </div>
                    <hr className="my-6" />
                    <div className="mb-4">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        250g
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        500g
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        1kg
                      </button>
                    </div>
                    <div>
                      <div className="input-group input-spinner  ">
                        <input
                          className="button-minus  btn  btn-sm "
                          data-field="quantity"
                          defaultValue="-"
                          type="button"
                        />
                        <input
                          className="quantity-field form-control-sm form-input   "
                          defaultValue="1"
                          max="10"
                          name="quantity"
                          step="1"
                          type="number"
                        />
                        <input
                          className="button-plus btn btn-sm "
                          data-field="quantity"
                          defaultValue="+"
                          type="button"
                        />
                      </div>
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                      <div className="col-lg-4 col-md-5 col-6 d-grid">
                        <button className="btn btn-primary" type="button">
                          <i className="bi bi-cart me-2" />
                          Add to cart
                        </button>
                      </div>
                      <div className="col-md-4 col-5">
                        <a
                          aria-label="Compare"
                          className="btn btn-light"
                          data-bs-html="true"
                          data-bs-toggle="tooltip"
                          to="#"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                        <a
                          aria-label="Wishlist"
                          className="btn btn-light ms-2"
                          data-bs-html="true"
                          data-bs-toggle="tooltip"
                          to="#!"
                        >
                          <i className="bi bi-heart" />
                        </a>
                      </div>
                    </div>
                    <hr className="my-6" />
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
                                  ( Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
