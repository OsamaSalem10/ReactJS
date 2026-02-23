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
     
      {/* <!-- Add payment method modal --> */}
      <div
        aria-hidden="true"
        aria-labelledby="addPaymentModalLabel"
        className="modal fade"
        data-bs-backdrop="static"
        id="addPaymentModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addPaymentModalLabel">
                Add new payment method
              </h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              />
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs rounded-pill mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="card-tab-pane"
                    aria-selected="true"
                    className="nav-link rounded-pill active"
                    data-bs-target="#card-tab-pane"
                    data-bs-toggle="tab"
                    id="card-tab"
                    role="tab"
                    type="button"
                  >
                    <i className="bi-credit-card fs-base opacity-75 ms-n2 me-2" />
                    Card
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="paypal-tab-pane"
                    aria-selected="false"
                    className="nav-link rounded-pill"
                    data-bs-target="#paypal-tab-pane"
                    data-bs-toggle="tab"
                    id="paypal-tab"
                    role="tab"
                    type="button"
                  >
                    <img
                      alt="PayPal"
                      className="me-2"
                      src="assets/img/payment-methods/paypal-icon.svg"
                      width="14"
                    />
                    PayPal
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  aria-labelledby="card-tab"
                  className="tab-pane fade show active"
                  id="card-tab-pane"
                  role="tabpanel"
                >
                  <form className="needs-validation" noValidate>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="card-number">
                        Card number
                      </label>
                      <div
                        className="position-relative"
                        data-input-format='{"creditCard": true}'
                      >
                        <input
                          className="form-control form-icon-end rounded-pill"
                          id="card-number"
                          placeholder="XXXX XXXX XXXX XXXX"
                          required
                          style={{
                            backgroundImage: "none",
                          }}
                          type="text"
                        />
                        <span
                          className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                          data-card-icon=""
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="card-name">
                        Name on card
                      </label>
                      <input
                        className="form-control rounded-pill"
                        id="card-name"
                        placeholder="Full name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="row mb-4">
                      <div className="col-7">
                        <label className="form-label" htmlFor="card-expiration">
                          Expiration date
                        </label>
                        <input
                          className="form-control rounded-pill"
                          data-input-format='{"date": true, "datePattern": ["m", "y"]}'
                          id="card-expiration"
                          placeholder="MM/YY"
                          required
                          type="text"
                        />
                      </div>
                      <div className="col-5">
                        <label className="form-label" htmlFor="card-cvc">
                          CVC
                        </label>
                        <input
                          className="form-control rounded-pill"
                          data-input-format='{"numericOnly": true, "blocks": [3]}'
                          id="card-cvc"
                          placeholder="XXX"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <button
                        className="btn btn-secondary w-100 rounded-pill"
                        data-bs-dismiss="modal"
                        data-bs-target="#addPaymentModal"
                        type="reset"
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary w-100 rounded-pill"
                        type="submit"
                      >
                        Add card
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  aria-labelledby="paypal-tab"
                  className="tab-pane fade"
                  id="paypal-tab-pane"
                  role="tabpanel"
                >
                  <form className="needs-validation" noValidate>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="paypal-email">
                        Email associated with PayPal
                      </label>
                      <input
                        className="form-control rounded-pill"
                        id="paypal-email"
                        placeholder="Email address"
                        required
                        type="email"
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email address!
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <button
                        className="btn btn-secondary w-100 rounded-pill"
                        data-bs-dismiss="modal"
                        data-bs-target="#addPaymentModal"
                        type="reset"
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary w-100 rounded-pill"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <!-- Comments  --> */}
        <div
  aria-hidden="true"
  aria-labelledby="commentFormLabel"
  className="modal fade"
  data-bs-backdrop="static"
  id="commentForm"
  tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <form className="modal-content needs-validation" noValidate>
      <div className="modal-header border-0">
        <h5 className="modal-title" id="commentFormLabel">
          Leave a comment
        </h5>
        <button
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="modal"
          type="button"
        />
      </div>
      <div className="modal-body pb-3 pt-0">
        <div className="mb-3">
          <label className="form-label" htmlFor="review-name">
            Your name <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill"
            id="review-name"
            required
            type="text"
          />
          <div className="invalid-feedback">Please enter your name!</div>
          <small className="form-text">Will be displayed on the comment.</small>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="review-email">
            Your email <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill"
            id="review-email"
            required
            type="email"
          />
          <div className="invalid-feedback">
            Please provide a valid email address!
          </div>
          <small className="form-text">
            Authentication only - we won't spam you.
          </small>
        </div>
        <div>
          <label className="form-label" htmlFor="review-text">
            Comment <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control rounded-6"
            id="review-text"
            required
            rows="5"
          />
          <div className="invalid-feedback">Please write your comment!</div>
          <small className="form-text">
            Your comment must be at least 50 characters.
          </small>
        </div>
      </div>
      <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
        <button
          className="btn btn-secondary w-100 rounded-pill m-0"
          data-bs-dismiss="modal"
          type="reset">
          Cancel
        </button>
        <button className="btn btn-dark w-100 rounded-pill m-0" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
</div>
    </div>
  );
};
