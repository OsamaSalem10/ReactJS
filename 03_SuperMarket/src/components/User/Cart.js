import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <main className="content-wrapper">
      <nav
        aria-label="breadcrumb"
        className="container pt-1 pt-md-0 my-3 my-md-4"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="home-grocery.html">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="shop-catalog-grocery.html">Shop</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            Cart
          </li>
        </ol>
      </nav>
      <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <h1 className="h3 mb-4">Shopping cart</h1>
        <div className="row">
          <div className="col-lg-8">
            <div className="pe-lg-2 pe-xl-3 me-xl-3">
              <ul
                className="nav nav-pills nav-justified flex-nowrap flex-column flex-sm-row pb-md-2 mb-4"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="delivery"
                    aria-selected="true"
                    className="nav-link justify-content-start text-start p-3 px-md-4 px-lg-3 px-xl-4 rounded-4 active"
                    data-bs-target="#delivery"
                    data-bs-toggle="pill"
                    id="cart-delivery-tab"
                    role="tab"
                    type="button"
                  >
                    <span
                      className="d-flex align-items-center justify-content-center flex-shrink-0 bg-success-subtle text-dark-emphasis rounded-circle"
                      style={{
                        height: "3rem",
                        width: "3rem",
                      }}
                    >
                      <i className="bi-bag fs-xl" />
                    </span>
                    <span className="ps-3">
                      <span className="h6 d-block mb-1">Delivery</span>
                      <span className="fs-xs fw-normal text-body lh-base">
                        All products are available
                      </span>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="pickup"
                    aria-selected="false"
                    className="nav-link justify-content-start text-start p-3 px-md-4 px-lg-3 px-xl-4 rounded-4"
                    data-bs-target="#pickup"
                    data-bs-toggle="pill"
                    id="cart-pickup-tab"
                    role="tab"
                    type="button"
                  >
                    <span
                      className="d-flex align-items-center justify-content-center flex-shrink-0 bg-info-subtle text-dark-emphasis rounded-circle"
                      style={{
                        height: "3rem",
                        width: "3rem",
                      }}
                    >
                      <i className="bi-box2 fs-xl" />
                    </span>
                    <span className="ps-3">
                      <span className="h6 d-block mb-1">Pickup</span>
                      <span className="fs-xs fw-normal text-body lh-base">
                        All products are available
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
              <table className="table position-relative z-2 mb-4">
                <thead>
                  <tr>
                    <th className="fs-sm fw-normal py-3 ps-0" scope="col">
                      <span className="text-body">Product</span>
                    </th>
                    <th
                      className="text-body fs-sm fw-normal py-3 d-none d-xl-table-cell"
                      scope="col"
                    >
                      <span className="text-body">Price</span>
                    </th>
                    <th
                      className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell"
                      scope="col"
                    >
                      <span className="text-body">Quantity</span>
                    </th>
                    <th
                      className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell"
                      scope="col"
                    >
                      <span className="text-body">Total</span>
                    </th>
                    <th className="py-0 px-0" scope="col">
                      <div className="nav justify-content-end">
                        <button
                          className="nav-link d-inline-block text-decoration-underline text-nowrap py-3 px-0"
                          type="button"
                        >
                          Clear cart
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-center">
                        <Link
                          className="position-relative flex-shrink-0"
                          href="shop-product-grocery.html"
                        >
                          <span className="badge text-bg-danger position-absolute top-0 start-0">
                            -$2.79
                          </span>
                          <img
                            alt="Thumbnail"
                            src="assets/img/shop/grocery/thumbs/01.png"
                            width="110"
                          />
                        </Link>
                        <div className="ps-2 ps-xl-3">
                          <h5 className="lh-sm mb-2">
                            <Link
                              className="hover-effect-underline fs-sm fw-medium"
                              href="shop-product-grocery.html"
                            >
                              Fresh orange Klementina, Spain
                            </Link>
                          </h5>
                          <ul className="list-unstyled gap-1 fs-xs mb-0">
                            <li>
                              <span className="text-body-secondary">
                                Portion:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                1kg
                              </span>
                            </li>
                            <li className="d-xl-none">
                              <span className="text-body-secondary">
                                Price:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                $3.12{" "}
                                <del className="text-body-tertiary fw-normal">
                                  $4.05
                                </del>
                              </span>
                            </li>
                          </ul>
                          <div className="count-input rounded-pill d-md-none mt-3">
                            <button
                              aria-label="Decrement quantity"
                              className="btn btn-sm btn-icon"
                              data-decrement=""
                              type="button"
                            >
                              <i className="bi-minus" />
                            </button>
                            <input
                              className="form-control form-control-sm"
                              defaultValue="3"
                              readOnly
                              type="number"
                            />
                            <button
                              aria-label="Increment quantity"
                              className="btn btn-sm btn-icon"
                              data-increment=""
                              type="button"
                            >
                              <i className="bi-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-xl-table-cell">
                      $3.12{" "}
                      <del className="text-body-tertiary fs-sm fw-normal">
                        $4.05
                      </del>
                    </td>
                    <td className="py-3 d-none d-md-table-cell">
                      <div className="count-input rounded-pill">
                        <button
                          aria-label="Decrement quantity"
                          className="btn btn-icon"
                          data-decrement=""
                          type="button"
                        >
                          <i className="bi-minus" />
                        </button>
                        <input
                          className="form-control"
                          defaultValue="3"
                          readOnly
                          type="number"
                        />
                        <button
                          aria-label="Increment quantity"
                          className="btn btn-icon"
                          data-increment=""
                          type="button"
                        >
                          <i className="bi-plus" />
                        </button>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-md-table-cell">$9.36</td>
                    <td className="text-end py-3 px-0">
                      <button
                        aria-label="Remove from cart"
                        className="btn-close fs-sm"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-center">
                        <Link
                          className="flex-shrink-0"
                          href="shop-product-grocery.html"
                        >
                          <img
                            alt="Thumbnail"
                            src="assets/img/shop/grocery/thumbs/02.png"
                            width="110"
                          />
                        </Link>
                        <div className="ps-2 ps-xl-3">
                          <h5 className="lh-sm mb-2">
                            <Link
                              className="hover-effect-underline fs-sm fw-medium"
                              href="shop-product-grocery.html"
                            >
                              Pesto sauce Barilla with basil, Italy
                            </Link>
                          </h5>
                          <ul className="list-unstyled gap-1 fs-xs mb-0">
                            <li>
                              <span className="text-body-secondary">
                                Portion:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                200g
                              </span>
                            </li>
                            <li className="d-xl-none">
                              <span className="text-body-secondary">
                                Price:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                $3.95
                              </span>
                            </li>
                          </ul>
                          <div className="count-input rounded-pill d-md-none mt-3">
                            <button
                              aria-label="Decrement quantity"
                              className="btn btn-sm btn-icon"
                              data-decrement=""
                              type="button"
                            >
                              <i className="bi-minus" />
                            </button>
                            <input
                              className="form-control form-control-sm"
                              defaultValue="1"
                              readOnly
                              type="number"
                            />
                            <button
                              aria-label="Increment quantity"
                              className="btn btn-sm btn-icon"
                              data-increment=""
                              type="button"
                            >
                              <i className="bi-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-xl-table-cell">$3.95</td>
                    <td className="py-3 d-none d-md-table-cell">
                      <div className="count-input rounded-pill">
                        <button
                          aria-label="Decrement quantity"
                          className="btn btn-icon"
                          data-decrement=""
                          type="button"
                        >
                          <i className="bi-minus" />
                        </button>
                        <input
                          className="form-control"
                          defaultValue="1"
                          readOnly
                          type="number"
                        />
                        <button
                          aria-label="Increment quantity"
                          className="btn btn-icon"
                          data-increment=""
                          type="button"
                        >
                          <i className="bi-plus" />
                        </button>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-md-table-cell">$3.95</td>
                    <td className="text-end py-3 px-0">
                      <button
                        aria-label="Remove from cart"
                        className="btn-close fs-sm"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-center">
                        <Link
                          className="flex-shrink-0"
                          href="shop-product-grocery.html"
                        >
                          <img
                            alt="Thumbnail"
                            src="assets/img/shop/grocery/thumbs/03.png"
                            width="110"
                          />
                        </Link>
                        <div className="ps-2 ps-xl-3">
                          <h5 className="lh-sm mb-2">
                            <Link
                              className="hover-effect-underline fs-sm fw-medium"
                              href="shop-product-grocery.html"
                            >
                              Steak salmon fillet with rosmary
                            </Link>
                          </h5>
                          <ul className="list-unstyled gap-1 fs-xs mb-0">
                            <li>
                              <span className="text-body-secondary">
                                Portion:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                1kg
                              </span>
                            </li>
                            <li className="d-xl-none">
                              <span className="text-body-secondary">
                                Price:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                $27.00
                              </span>
                            </li>
                          </ul>
                          <div className="count-input rounded-pill d-md-none mt-3">
                            <button
                              aria-label="Decrement quantity"
                              className="btn btn-sm btn-icon"
                              data-decrement=""
                              type="button"
                            >
                              <i className="bi-minus" />
                            </button>
                            <input
                              className="form-control form-control-sm"
                              defaultValue="2"
                              readOnly
                              type="number"
                            />
                            <button
                              aria-label="Increment quantity"
                              className="btn btn-sm btn-icon"
                              data-increment=""
                              type="button"
                            >
                              <i className="bi-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-xl-table-cell">$27.00</td>
                    <td className="py-3 d-none d-md-table-cell">
                      <div className="count-input rounded-pill">
                        <button
                          aria-label="Decrement quantity"
                          className="btn btn-icon"
                          data-decrement=""
                          type="button"
                        >
                          <i className="bi-minus" />
                        </button>
                        <input
                          className="form-control"
                          defaultValue="2"
                          readOnly
                          type="number"
                        />
                        <button
                          aria-label="Increment quantity"
                          className="btn btn-icon"
                          data-increment=""
                          type="button"
                        >
                          <i className="bi-plus" />
                        </button>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-md-table-cell">$54.00</td>
                    <td className="text-end py-3 px-0">
                      <button
                        aria-label="Remove from cart"
                        className="btn-close fs-sm"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-center">
                        <Link
                          className="flex-shrink-0"
                          href="shop-product-grocery.html"
                        >
                          <img
                            alt="Thumbnail"
                            src="assets/img/shop/grocery/thumbs/04.png"
                            width="110"
                          />
                        </Link>
                        <div className="ps-2 ps-xl-3">
                          <h5 className="lh-sm mb-2">
                            <Link
                              className="hover-effect-underline fs-sm fw-medium"
                              href="shop-product-grocery.html"
                            >
                              Sprite soda lemon lime, can
                            </Link>
                          </h5>
                          <ul className="list-unstyled gap-1 fs-xs mb-0">
                            <li>
                              <span className="text-body-secondary">
                                Portion:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                330ml
                              </span>
                            </li>
                            <li className="d-xl-none">
                              <span className="text-body-secondary">
                                Price:
                              </span>{" "}
                              <span className="text-dark-emphasis fw-medium">
                                $0.80
                              </span>
                            </li>
                          </ul>
                          <div className="count-input rounded-pill d-md-none mt-3">
                            <button
                              aria-label="Decrement quantity"
                              className="btn btn-sm btn-icon"
                              data-decrement=""
                              type="button"
                            >
                              <i className="bi-minus" />
                            </button>
                            <input
                              className="form-control form-control-sm"
                              defaultValue="2"
                              readOnly
                              type="number"
                            />
                            <button
                              aria-label="Increment quantity"
                              className="btn btn-sm btn-icon"
                              data-increment=""
                              type="button"
                            >
                              <i className="bi-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-xl-table-cell">$0.80</td>
                    <td className="py-3 d-none d-md-table-cell">
                      <div className="count-input rounded-pill">
                        <button
                          aria-label="Decrement quantity"
                          className="btn btn-icon"
                          data-decrement=""
                          type="button"
                        >
                          <i className="bi-minus" />
                        </button>
                        <input
                          className="form-control"
                          defaultValue="2"
                          readOnly
                          type="number"
                        />
                        <button
                          aria-label="Increment quantity"
                          className="btn btn-icon"
                          data-increment=""
                          type="button"
                        >
                          <i className="bi-plus" />
                        </button>
                      </div>
                    </td>
                    <td className="h6 py-3 d-none d-md-table-cell">$1.60</td>
                    <td className="text-end py-3 px-0">
                      <button
                        aria-label="Remove from cart"
                        className="btn-close fs-sm"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="nav position-relative z-2 mb-4 mb-lg-0">
                <Link
                  className="nav-link animate-underline px-0"
                  href="shop-catalog-grocery.html"
                >
                  <i className="bi-chevron-left fs-lg me-1" />
                  <span className="animate-target">Continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
          <aside
            className="col-lg-4"
            style={{
              marginTop: "-115px",
            }}
          >
            <div
              className="position-sticky top-0"
              style={{
                paddingTop: "115px",
              }}
            >
              <div
                className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-4"
                role="alert"
              >
                Congratulations 🎉 You have added more than{" "}
                <span className="fw-semibold">$50</span> to your cart.{" "}
                <span className="fw-semibold">Delivery is free</span> for you!
              </div>
              <h2 className="h5 border-bottom pb-4 mb-4 me-3">Order summary</h2>
              <div className="tab-content">
                <div
                  aria-labelledby="cart-delivery-tab"
                  className="tab-pane show active"
                  id="delivery"
                  role="tabpanel"
                >
                  <ul className="list-unstyled fs-sm gap-3 mb-0">
                    <li className="d-flex justify-content-between">
                      Subtotal (8 items):
                      <span className="text-dark-emphasis fw-medium">
                        $71.70
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      Saving:
                      <span className="text-danger fw-medium">-$2.79</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      Delivery:
                      <span className="text-dark-emphasis fw-medium">Free</span>
                    </li>
                  </ul>
                  <div className="border-top pt-4 mt-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span className="fs-sm">Estimated total:</span>
                      <span className="h5 mb-0">$68.91</span>
                    </div>
                    <Link
                      className="btn btn-lg btn-primary w-100 rounded-pill"
                      to="/delivery"
                    >
                      Proceed to checkout
                      <i className="bi-chevron-right fs-lg ms-1 me-n1" />
                    </Link>
                  </div>
                </div>
                <div
                  aria-labelledby="cart-pickup-tab"
                  className="tab-pane"
                  id="pickup"
                  role="tabpanel"
                >
                  <ul className="list-unstyled fs-sm gap-3 mb-0">
                    <li className="d-flex justify-content-between">
                      Subtotal (8 items):
                      <span className="text-dark-emphasis fw-medium">
                        $71.70
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      Saving:
                      <span className="text-danger fw-medium">-$2.79</span>
                    </li>
                  </ul>
                  <div className="border-top pt-4 mt-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span className="fs-sm">Estimated total:</span>
                      <span className="h5 mb-0">$68.91</span>
                    </div>
                    <Link
                      className="btn btn-lg btn-primary w-100 rounded-pill"
                      to="/Pickup"
                    >
                      Proceed to checkout
                      <i className="bi-chevron-right fs-lg ms-1 me-n1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
