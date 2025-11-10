import { Link } from "react-router-dom";
export const Offcanvas = () => {
  return (
    <div>
      {/*  <!-- Shopping cart offcanvas --> */}

      <div
        aria-labelledby="shoppingCartLabel"
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="shoppingCart"
        style={{
          width: "500px",
        }}
        tabIndex="-1"
      >
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id="shoppingCartLabel">
              Shopping cart
            </h4>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              type="button"
            />
          </div>
          <div
            className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0"
            role="alert"
          >
            Congratulations 🎉 You have added more than{" "}
            <span className="fw-semibold">$50</span> to your cart.{" "}
            <span className="fw-semibold">Delivery is free</span> for you!
          </div>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
          <div className="d-flex align-items-center">
            <Link
              className="position-relative flex-shrink-0"
              to="shop-product-grocery.html"
            >
              <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-0 ms-0">
                -$2.79
              </span>
              <img
                alt="Thumbnail"
                src="assets/img/shop/grocery/thumbs/01.png"
                width="110"
              />
            </Link>
            <div className="w-100 ps-3">
              <h5 className="fs-sm fw-medium lh-base mb-2">
                <Link
                  className="hover-effect-underline"
                  to="shop-product-grocery.html"
                >
                  Fresh orange Klementina, Spain
                </Link>
              </h5>
              <div className="h6 pb-1 mb-2">$3.12</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-pill">
                  <button
                    aria-label="Decrement quantity"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    type="button"
                  >
                    <i className="bi-minus" />
                  </button>
                  <input
                    className="form-control form-control-sm"
                    readOnly
                    type="number"
                  />
                  <button
                    aria-label="Increment quantity"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    type="button"
                  >
                    <i className="bi-plus" />
                  </button>
                </div>
                <button
                  aria-label="Remove from cart"
                  className="btn-close fs-sm"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  data-bs-toggle="tooltip"
                  type="button"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link className="flex-shrink-0" to="shop-product-grocery.html">
              <img
                alt="Thumbnail"
                src="assets/img/shop/grocery/thumbs/02.png"
                width="110"
              />
            </Link>
            <div className="w-100 ps-3">
              <h5 className="fs-sm fw-medium lh-base mb-2">
                <Link
                  className="hover-effect-underline"
                  to="shop-product-grocery.html"
                >
                  Pesto sauce Barilla with basil, Italy
                </Link>
              </h5>
              <div className="h6 pb-1 mb-2">$3.95</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-pill">
                  <button
                    aria-label="Decrement quantity"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    type="button"
                  >
                    <i className="bi-minus" />
                  </button>
                  <input
                    className="form-control form-control-sm"
                    readOnly
                    type="number"
                  />
                  <button
                    aria-label="Increment quantity"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    type="button"
                  >
                    <i className="bi-plus" />
                  </button>
                </div>
                <button
                  aria-label="Remove from cart"
                  className="btn-close fs-sm"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  data-bs-toggle="tooltip"
                  type="button"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link className="flex-shrink-0" to="shop-product-grocery.html">
              <img
                alt="Thumbnail"
                src="assets/img/shop/grocery/thumbs/03.png"
                width="110"
              />
            </Link>
            <div className="w-100 ps-3">
              <h5 className="fs-sm fw-medium lh-base mb-2">
                <Link
                  className="hover-effect-underline"
                  to="shop-product-grocery.html"
                >
                  Steak salmon fillet with rosmary
                </Link>
              </h5>
              <div className="h6 pb-1 mb-2">$27.00</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-pill">
                  <button
                    aria-label="Decrement quantity"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    type="button"
                  >
                    <i className="bi-minus" />
                  </button>
                  <input
                    className="form-control form-control-sm"
                    readOnly
                    type="number"
                  />
                  <button
                    aria-label="Increment quantity"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    type="button"
                  >
                    <i className="bi-plus" />
                  </button>
                </div>
                <button
                  aria-label="Remove from cart"
                  className="btn-close fs-sm"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  data-bs-toggle="tooltip"
                  type="button"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link className="flex-shrink-0" to="shop-product-grocery.html">
              <img
                alt="Thumbnail"
                src="assets/img/shop/grocery/thumbs/04.png"
                width="110"
              />
            </Link>
            <div className="w-100 ps-3">
              <h5 className="fs-sm fw-medium lh-base mb-2">
                <Link
                  className="hover-effect-underline"
                  to="shop-product-grocery.html"
                >
                  Sprite soda lemon lime, can
                </Link>
              </h5>
              <div className="h6 pb-1 mb-2">$0.80</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-pill">
                  <button
                    aria-label="Decrement quantity"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    type="button"
                  >
                    <i className="bi-minus" />
                  </button>
                  <input
                    className="form-control form-control-sm"
                    readOnly
                    type="number"
                  />
                  <button
                    aria-label="Increment quantity"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    type="button"
                  >
                    <i className="bi-plus" />
                  </button>
                </div>
                <button
                  aria-label="Remove from cart"
                  className="btn-close fs-sm"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  data-bs-toggle="tooltip"
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Subtotal:</span>
            <span className="h6 mb-0">$68.91</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <Link
              className="btn btn-lg btn-secondary w-100 rounded-pill"
              to="checkout-v2-cart.html"
            >
              View cart
            </Link>
            <Link
              className="btn btn-lg btn-primary w-100 rounded-pill"
              to="checkout-v2-delivery.html"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Delivey options offcanvas --> */}
      <div
        aria-labelledby="deliveryOptionsLabel"
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="deliveryOptions"
        style={{
          width: "500px",
        }}
        tabIndex="-1"
      >
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
            <h4 className="offcanvas-title" id="deliveryOptionsLabel">
              Delivery options
            </h4>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              type="button"
            />
          </div>
          <ul className="nav nav-pills nav-justified w-100" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                aria-controls="delivery-tab-pane"
                aria-selected="true"
                className="nav-link active"
                data-bs-target="#delivery-tab-pane"
                data-bs-toggle="tab"
                id="delivery-tab"
                role="tab"
                type="button"
              >
                <i className="bi-shopping-bag fs-base ms-n1 me-2" />
                Delivery
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="pickup-tab-pane"
                aria-selected="false"
                className="nav-link"
                data-bs-target="#pickup-tab-pane"
                data-bs-toggle="tab"
                id="pickup-tab"
                role="tab"
                type="button"
              >
                <i className="bi-box fs-base ms-n1 me-2" />
                Pickup
              </button>
            </li>
          </ul>
        </div>
        <div className="offcanvas-body tab-content py-2 py-sm-3">
          <div
            aria-labelledby="delivery-tab"
            className="tab-pane fade show active"
            id="delivery-tab-pane"
            role="tabpanel"
          >
            <div
              className="collapse delivery-address show"
              id="deliveryAddressOptions"
            >
              <div className="mt-n3">
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="address-1"
                    name="delivery-address"
                    type="radio"
                  />
                  <label
                    className="form-check-label text-dark-emphasis fw-semibold"
                    htmlFor="address-1"
                  >
                    567 Cherry Lane Apt B12 Sacramento, 95829
                  </label>
                </div>
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    id="address-2"
                    name="delivery-address"
                    type="radio"
                  />
                  <div className="d-flex w-100">
                    <label
                      className="form-check-label text-dark-emphasis me-3"
                      htmlFor="address-2"
                    >
                      1901 Thornridge Cir. Shiloh, Hawaii, 81063
                    </label>
                    <button
                      aria-label="Remove"
                      className="btn-close fs-sm ms-auto"
                      data-bs-custom-class="tooltip-sm"
                      data-bs-title="Remove"
                      data-bs-toggle="tooltip"
                      type="button"
                    />
                  </div>
                </div>
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    id="address-3"
                    name="delivery-address"
                    type="radio"
                  />
                  <div className="d-flex w-100">
                    <label
                      className="form-check-label text-dark-emphasis me-3"
                      htmlFor="address-3"
                    >
                      3517 W. Gray St. Utica, Pennsylvania, 57867
                    </label>
                    <button
                      aria-label="Remove"
                      className="btn-close fs-sm ms-auto"
                      data-bs-custom-class="tooltip-sm"
                      data-bs-title="Remove"
                      data-bs-toggle="tooltip"
                      type="button"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse delivery-address" id="deliveryAddressAdd">
              <div className="nav mb-4">
                <Link
                  aria-controls="deliveryAddressOptions deliveryAddressAdd"
                  aria-expanded="true"
                  className="nav-link animate-underline p-0"
                  data-bs-toggle="collapse"
                  href=".delivery-address"
                >
                  <i className="bi-chevron-left fs-lg ms-n1 me-1" />
                  <span className="animate-target">Back to my addresses</span>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
                <h5 className="h6 mb-0 me-3">
                  Add an address to start ordering
                </h5>
                <Link
                  className="btn btn-sm btn-outline-primary rounded-pill"
                  href="#!"
                >
                  <i className="bi-map-pin fs-base ms-n1 me-1" />
                  Find on map
                </Link>
              </div>
              <div className="mb-3 mb-lg-4">
                <label className="form-label">State *</label>
                <select
                  aria-label="Large pill select"
                  className="form-select form-select-lg rounded-pill"
                  data-select='{                "classNames": {                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]                }              }'
                >
                  <option value="">Select state</option>
                  <option value="Arizona">Arizona</option>
                  <option value="California">California</option>
                  <option value="Montana">Montana</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="Texas">Texas</option>
                </select>
              </div>
              <div className="mb-3 mb-lg-4">
                <label className="form-label" htmlFor="my-postcode">
                  Postcode *
                </label>
                <input
                  className="form-control form-control-lg rounded-pill"
                  id="my-postcode"
                  type="text"
                />
              </div>
              <div className="mb-3 mb-lg-4">
                <label className="form-label">City *</label>
                <select
                  aria-label="Large pill select"
                  className="form-select form-select-lg rounded-pill"
                  data-select='{                "classNames": {                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]                }              }'
                >
                  <option value="">Select city</option>
                  <option value="Austin">Austin</option>
                  <option value="Helena">Helena</option>
                  <option value="Sacramento">Sacramento</option>
                  <option value="Santa Fe">Santa Fe</option>
                  <option value="Las Vegas">Las Vegas</option>
                  <option value="Phoenix">Phoenix</option>
                </select>
              </div>
              <label className="form-label" htmlFor="my-address">
                Street address *
              </label>
              <input
                className="form-control form-control-lg rounded-pill"
                id="my-address"
                type="text"
              />
            </div>
            <div className="nav">
              <Link
                aria-controls="deliveryAddressOptions deliveryAddressAdd"
                aria-expanded="false"
                className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
                data-bs-toggle="collapse"
                href=".delivery-address"
              >
                <span className="animate-target">Add delivery address</span>
                <i className="bi-plus fs-base ms-1" />
              </Link>
            </div>
          </div>
          <div
            aria-labelledby="pickup-tab"
            className="tab-pane fade"
            id="pickup-tab-pane"
            role="tabpanel"
          >
            <div
              className="collapse pickup-options show"
              id="pickupStoreOptions"
            >
              <div className="mt-n3">
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="store-1"
                    name="pickup-store"
                    type="radio"
                  />
                  <div>
                    <div className="d-flex w-100 pb-2 mb-1">
                      <label
                        className="form-check-label text-dark-emphasis fw-semibold me-3"
                        htmlFor="store-1"
                      >
                        Sacramento Supercenter
                      </label>
                      <button
                        aria-label="Remove"
                        className="btn-close fs-sm ms-auto"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </div>
                    <div className="fs-xs mb-2">
                      8270 Delta Shores Cir S, Sacramento, CA 95832
                    </div>
                    <div className="fs-xs">
                      Open:{" "}
                      <span className="text-dark-emphasis fw-medium">
                        07:00 - 22:00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    id="store-2"
                    name="pickup-store"
                    type="radio"
                  />
                  <div>
                    <div className="d-flex w-100 pb-2 mb-1">
                      <label
                        className="form-check-label text-dark-emphasis fw-semibold me-3"
                        htmlFor="store-2"
                      >
                        West Sacramento Supercenter
                      </label>
                      <button
                        aria-label="Remove"
                        className="btn-close fs-sm ms-auto"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </div>
                    <div className="fs-xs mb-2">
                      755 Riverpoint Ct, West Sacramento, CA 95605
                    </div>
                    <div className="fs-xs">
                      Open:{" "}
                      <span className="text-dark-emphasis fw-medium">
                        07:00 - 21:00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-check border-bottom py-4 m-0">
                  <input
                    className="form-check-input"
                    id="store-3"
                    name="pickup-store"
                    type="radio"
                  />
                  <div>
                    <div className="d-flex w-100 pb-2 mb-1">
                      <label
                        className="form-check-label text-dark-emphasis fw-semibold me-3"
                        htmlFor="store-3"
                      >
                        Rancho Cordova Supercenter
                      </label>
                      <button
                        aria-label="Remove"
                        className="btn-close fs-sm ms-auto"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-title="Remove"
                        data-bs-toggle="tooltip"
                        type="button"
                      />
                    </div>
                    <div className="fs-xs mb-2">
                      10655 Folsom Blvd, Rancho Cordova, CA 95670
                    </div>
                    <div className="fs-xs">
                      Open:{" "}
                      <span className="text-dark-emphasis fw-medium">
                        08:00 - 23:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse pickup-options" id="pickupStoreAdd">
              <div className="nav mb-4">
                <Link
                  aria-controls="pickupStoreOptions pickupStoreAdd"
                  aria-expanded="true"
                  className="nav-link animate-underline p-0"
                  data-bs-toggle="collapse"
                  href=".pickup-options"
                >
                  <i className="bi-chevron-left fs-lg ms-n1 me-1" />
                  <span className="animate-target">Back to my stores</span>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
                <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
                <Link
                  className="btn btn-sm btn-outline-primary rounded-pill"
                  href="#!"
                >
                  <i className="bi-map-pin fs-base ms-n1 me-1" />
                  Find on map
                </Link>
              </div>
              <div className="mb-3 mb-lg-4">
                <label className="form-label">State *</label>
                <select
                  aria-label="Large pill select"
                  className="form-select form-select-lg rounded-pill"
                  data-select='{                "classNames": {                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]                }              }'
                >
                  <option value="">Select state</option>
                  <option value="Arizona">Arizona</option>
                  <option selected value="California">
                    California
                  </option>
                  <option value="Montana">Montana</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="Texas">Texas</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">City *</label>
                <select
                  aria-label="Large pill select"
                  className="form-select form-select-lg rounded-pill"
                  data-select='{                "classNames": {                  "containerInner": ["form-select", "form-select-lg", "rounded-pill"]                }              }'
                >
                  <option value="">Select city</option>
                  <option value="Austin">Austin</option>
                  <option value="Helena">Helena</option>
                  <option selected value="Sacramento">
                    Sacramento
                  </option>
                  <option value="Santa Fe">Santa Fe</option>
                  <option value="Las Vegas">Las Vegas</option>
                  <option value="Phoenix">Phoenix</option>
                </select>
              </div>
              <div className="fs-xs fw-medium text-uppercase text-body-secondary">
                Found stores:
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input
                  className="form-check-input"
                  id="store-4"
                  name="found-store"
                  type="radio"
                />
                <div>
                  <label
                    className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
                    htmlFor="store-4"
                  >
                    Sacramento Supercenter
                  </label>
                  <div className="fs-xs mb-2">
                    8270 Delta Shores Cir S, Sacramento, CA 95832
                  </div>
                  <div className="fs-xs">
                    Open:{" "}
                    <span className="text-dark-emphasis fw-medium">
                      07:00 - 22:00
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input
                  className="form-check-input"
                  id="store-5"
                  name="found-store"
                  type="radio"
                />
                <div>
                  <label
                    className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
                    htmlFor="store-5"
                  >
                    West Sacramento Supercenter
                  </label>
                  <div className="fs-xs mb-2">
                    755 Riverpoint Ct, West Sacramento, CA 95605
                  </div>
                  <div className="fs-xs">
                    Open:{" "}
                    <span className="text-dark-emphasis fw-medium">
                      07:00 - 21:00
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-check border-bottom py-4 m-0">
                <input
                  className="form-check-input"
                  id="store-6"
                  name="found-store"
                  type="radio"
                />
                <div>
                  <label
                    className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
                    htmlFor="store-6"
                  >
                    Rancho Cordova Supercenter
                  </label>
                  <div className="fs-xs mb-2">
                    10655 Folsom Blvd, Rancho Cordova, CA 95670
                  </div>
                  <div className="fs-xs">
                    Open:{" "}
                    <span className="text-dark-emphasis fw-medium">
                      08:00 - 23:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav">
              <Link
                aria-controls="pickupStoreOptions pickupStoreAdd"
                aria-expanded="false"
                className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
                data-bs-toggle="collapse"
                href=".pickup-options"
              >
                <span className="animate-target">Add store address</span>
                <i className="bi-plus fs-base ms-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="offcanvas-header">
          <button
            className="btn btn-lg btn-primary w-100 rounded-pill"
            type="button"
          >
            Confirm address
          </button>
        </div>
      </div>
      {/* <!-- Site menu offcanvas --> */}
      <nav
        aria-labelledby="navbarNavLabel"
        className="offcanvas offcanvas-start"
        id="navbarNav"
        tabIndex="-1"
      >
        <div className="offcanvas-header py-3">
          <h5 className="offcanvas-title" id="navbarNavLabel">
            Browse Cartzilla
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            type="button"
          />
        </div>
        <div className="offcanvas-body pt-0 pb-3">
          <div className="accordion" id="navigation">
            <div className="accordion-item border-0 d-lg-none">
              <div className="accordion-header" id="headingCategories">
                <button
                  aria-controls="categoriesMenu"
                  aria-expanded="false"
                  className="accordion-button animate-underline fw-medium collapsed py-2"
                  data-bs-target="#categoriesMenu"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <i className="bi-grid fs-lg me-2" />
                  <span className="d-block animate-target py-1">
                    Categories
                  </span>
                </button>
              </div>
              <div
                aria-labelledby="headingCategories"
                className="accordion-collapse collapse"
                data-bs-parent="#navigation"
                id="categoriesMenu"
              >
                <div className="accordion-body pb-3">
                  <div className="dropdown-menu show position-static d-flex flex-column gap-4 shadow-none p-4">
                    <div>
                      <div className="h6">Bakery & bread</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Bread
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Pastries
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Bakery cookies
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Cupcakes
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Buns & rolls
                          </a>
                        </li>
                      </ul>
                      <div className="h6 pt-4">Meat products</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Fresh meat
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Processed meat
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Seafood
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Poultry products
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Prepared meat
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="h6">Vegetables</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Leafy greens
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Root vegetables
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Allium vegetables
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Peppers and tomatoes
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Cruciferous
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Seasonal squashes
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Beans, peas & lentils
                          </a>
                        </li>
                      </ul>
                      <div className="h6 pt-4">Sauces and ketchup</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Tomato-based sauces
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Salad dressing
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Hot sauces
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="h6">Fresh fruits</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Citrus fruits
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Berries
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Tropical fruits
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Stone fruits
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Exotic fruits
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Melons
                          </a>
                        </li>
                      </ul>
                      <div className="h6 pt-4">Italian dinner</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Pasta & sauces
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Italian cheese
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Italian meats
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Desserts & beverages
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="h6">Beverages</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Soft drinks
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Juices
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Sports & energy drinks
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Tea and coffee
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Alcoholic beverages
                          </a>
                        </li>
                      </ul>
                      <div className="h6 pt-4">Dairy & eggs</div>
                      <ul className="nav flex-column gap-2 mt-n2">
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Shop all
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Chees
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Milk & yogurt
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Sour cream
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Eggs
                          </a>
                        </li>
                        <li className="d-flex w-100 pt-1">
                          <a
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href="shop-catalog-grocery.html"
                          >
                            Butter & margarine
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingHome">
                <button
                  aria-controls="home"
                  aria-expanded="false"
                  className="accordion-button animate-underline fw-medium collapsed py-2"
                  data-bs-target="#home"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <span className="d-block animate-target py-1">Home</span>
                </button>
              </div>
              <div
                aria-labelledby="headingHome"
                className="accordion-collapse collapse"
                data-bs-parent="#navigation"
                id="home"
              >
                <div className="accordion-body pb-3">
                  <ul className="dropdown-menu show position-static shadow-none">
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-electronics.html"
                      >
                        <span className="fw-medium">Electronics Store</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Megamenu + Hero slider
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-fashion-v1.html"
                      >
                        <span className="fw-medium">Fashion Store v.1</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Hero promo slider
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-fashion-v2.html"
                      >
                        <span className="fw-medium">Fashion Store v.2</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Hero banner with hotspots
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-furniture.html"
                      >
                        <span className="fw-medium">Furniture Store</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Fancy product carousel
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-grocery.html"
                      >
                        <span className="fw-medium">Grocery Store</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Hero slider + Category cards
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-marketplace.html"
                      >
                        <span className="fw-medium">Marketplace</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Multi-vendor, digital goods
                        </span>
                      </a>
                    </li>
                    <li className="hover-effect-opacity px-2 mx-n2">
                      <a
                        className="dropdown-item d-block mb-0"
                        href="home-single-store.html"
                      >
                        <span className="fw-medium">Single Product Store</span>
                        <span className="d-block fs-xs text-body-secondary">
                          Single product / mono brand
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingShop">
                <button
                  aria-controls="shop"
                  aria-expanded="false"
                  className="accordion-button animate-underline fw-medium collapsed py-2"
                  data-bs-target="#shop"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <span className="d-block animate-target py-1">Shop</span>
                </button>
              </div>
              <div
                aria-labelledby="headingShop"
                className="accordion-collapse collapse"
                data-bs-parent="#navigation"
                id="shop"
              >
                <div className="accordion-body pb-3">
                  <div className="dropdown-menu show position-static shadow-none p-4">
                    <div className="d-flex flex-column gap-4">
                      <div
                        style={{
                          minWidth: "190px",
                        }}
                      >
                        <div className="h6 mb-2">Electronics Store</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-categories-electronics.html"
                            >
                              Categories Page
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-catalog-electronics.html"
                            >
                              Catalog with Side Filters
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-general-electronics.html"
                            >
                              Product General Info
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-details-electronics.html"
                            >
                              Product Details
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-reviews-electronics.html"
                            >
                              Product Reviews
                            </a>
                          </li>
                        </ul>
                        <div className="h6 pt-4 mb-2">Fashion Store</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-catalog-fashion.html"
                            >
                              Catalog with Side Filters
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-fashion.html"
                            >
                              Product Page
                            </a>
                          </li>
                        </ul>
                        <div className="h6 pt-4 mb-2">Furniture Store</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-catalog-furniture.html"
                            >
                              Catalog with Top Filters
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-furniture.html"
                            >
                              Product Page
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        style={{
                          minWidth: "190px",
                        }}
                      >
                        <div className="h6 mb-2">Grocery Store</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-catalog-grocery.html"
                            >
                              Catalog with Side Filters
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-grocery.html"
                            >
                              Product Page
                            </a>
                          </li>
                        </ul>
                        <div className="h6 pt-4 mb-2">Marketplace</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-catalog-marketplace.html"
                            >
                              Catalog with Top Filters
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="shop-product-marketplace.html"
                            >
                              Digital Product Page
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-marketplace.html"
                            >
                              Cart / Checkout
                            </a>
                          </li>
                        </ul>
                        <div className="h6 pt-4 mb-2">Checkout v.1</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-cart.html"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-delivery-1.html"
                            >
                              Delivery Info (Step 1)
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-delivery-2.html"
                            >
                              Delivery Info (Step 2)
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-shipping.html"
                            >
                              Shipping Address
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-payment.html"
                            >
                              Payment
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v1-thankyou.html"
                            >
                              Thank You Page
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        style={{
                          minWidth: "190px",
                        }}
                      >
                        <div className="h6 mb-2">Checkout v.2</div>
                        <ul className="nav flex-column gap-2 mt-0">
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v2-cart.html"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v2-delivery.html"
                            >
                              Delivery Info
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v2-pickup.html"
                            >
                              Pickup from Store
                            </a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="checkout-v2-thankyou.html"
                            >
                              Thank You Page
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingAccount">
                <button
                  aria-controls="account"
                  aria-expanded="false"
                  className="accordion-button animate-underline fw-medium collapsed py-2"
                  data-bs-target="#account"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <span className="d-block animate-target py-1">Account</span>
                </button>
              </div>
              <div
                aria-labelledby="headingAccount"
                className="accordion-collapse collapse"
                data-bs-parent="#navigation"
                id="account"
              >
                <div className="accordion-body pb-3">
                  <ul className="dropdown-menu show position-static shadow-none">
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Auth Pages
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-signin.html"
                          >
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-signup.html"
                          >
                            Sign Up
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-password-recovery.html"
                          >
                            Password Recovery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Shop User
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-orders.html"
                          >
                            Orders History
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-wishlist.html"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-payment.html"
                          >
                            Payment Methods
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-reviews.html"
                          >
                            My Reviews
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="account-info.html">
                            Personal Info
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-addresses.html"
                          >
                            Addresses
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-notifications.html"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Marketplace User
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-dashboard.html"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-products.html"
                          >
                            Products
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-sales.html"
                          >
                            Sales
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-payouts.html"
                          >
                            Payouts
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-purchases.html"
                          >
                            Purchases
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-favorites.html"
                          >
                            Favorites
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-marketplace-settings.html"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingPages">
                <button
                  aria-controls="pages"
                  aria-expanded="false"
                  className="accordion-button animate-underline fw-medium collapsed py-2"
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <span className="d-block animate-target py-1">Pages</span>
                </button>
              </div>
              <div
                aria-labelledby="headingPages"
                className="accordion-collapse collapse"
                data-bs-parent="#navigation"
                id="pages"
              >
                <div className="accordion-body pb-3">
                  <ul className="dropdown-menu show position-static shadow-none">
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a className="dropdown-item" href="about-v1.html">
                            About v.1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="about-v2.html">
                            About v.2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a className="dropdown-item" href="blog-grid-v1.html">
                            Grid View v.1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-grid-v2.html">
                            Grid View v.2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-list.html">
                            List View
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-v1.html"
                          >
                            Single Post v.1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-v2.html"
                          >
                            Single Post v.2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Contact
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a className="dropdown-item" href="contact-v1.html">
                            Contact v.1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact-v2.html">
                            Contact v.2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact-v3.html">
                            Contact v.3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        Help Center
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-topics-v1.html"
                          >
                            Help Topics v.1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-topics-v2.html"
                          >
                            Help Topics v.2
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-single-article-v1.html"
                          >
                            Help Single Article v.1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-single-article-v2.html"
                          >
                            Help Single Article v.2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                        role="button"
                      >
                        404 Error
                      </a>
                      <ul className="dropdown-menu position-static transform-none shadow-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="404-electronics.html"
                          >
                            404 Electronics
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404-fashion.html">
                            404 Fashion
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="404-furniture.html"
                          >
                            404 Furniture
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404-grocery.html">
                            404 Grocery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="terms-and-conditions.html"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h6 fw-medium py-1 mb-0">
            <a
              className="d-block animate-underline py-1"
              href="docs/installation.html"
            >
              <span className="d-inline-block animate-target py-1">Docs</span>
            </a>
          </div>
          <div className="h6 fw-medium py-1 mb-0">
            <a
              className="d-block animate-underline py-1"
              href="docs/typography.html"
            >
              <span className="d-inline-block animate-target py-1">
                Components
              </span>
            </a>
          </div>
        </div>
        <div className="offcanvas-header flex-column align-items-start d-md-none">
          <a
            className="btn btn-lg btn-outline-secondary w-100 rounded-pill"
            href="account-signin.html"
          >
            <i className="bi-person-fill fs-lg ms-n1 me-2" />
            Account
          </a>
        </div>
      </nav>
    </div>
  );
};
