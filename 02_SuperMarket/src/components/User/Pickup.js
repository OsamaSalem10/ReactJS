import { Link } from "react-router-dom";
export const Pickup = () => {
  return <main className="content-wrapper">
  <nav aria-label="breadcrumb" className="container pt-1 pt-md-0 my-3 my-md-4">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/cart">Cart</Link>
      </li>
      <li aria-current="page" className="breadcrumb-item active">
        Checkout
      </li>
    </ol>
  </nav>
  <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
    <h1 className="h3 mb-4">Checkout</h1>
    <div className="row">
      <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
        <h2 className="h5 mb-4">Pickup from the store</h2>
        <div className="d-flex align-items-start justify-content-between">
          <div className="d-flex align-items-start fs-sm me-3">
            <i className="ci-map-pin fs-base text-primary me-2" />
            <div>
              <div className="h6 fs-sm mb-2">Sacramento Supercenter</div>
              8270 Delta Shores Cir S, Sacramento, CA 95832
            </div>
          </div>
          <div className="nav">
            <Link
              aria-controls="deliveryOptions"
              className="nav-link text-decoration-underline text-nowrap p-0"
              data-bs-toggle="offcanvas"
              to="#deliveryOptions">
              Change store
            </Link>
          </div>
        </div>
        <h2 className="h5 mt-5 mb-4">Pickup date and time</h2>
        <div className="d-flex flex-wrap gap-3">
          <div>
            <input
              className="btn-check"
              defaultChecked
              id="today"
              name="date"
              type="radio"
            />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="today">
              Today
            </label>
          </div>
          <div>
            <input
              className="btn-check"
              id="tomorrow"
              name="date"
              type="radio"
            />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="tomorrow">
              Tomorrow
            </label>
          </div>
          <div>
            <input
              className="btn-check"
              id="other-date"
              name="date"
              type="radio"
            />
            <label
              aria-controls="deliveryDateTime"
              className="btn btn-outline-secondary rounded-pill"
              data-bs-target="#deliveryDateTime"
              data-bs-toggle="offcanvas"
              htmlFor="other-date">
              Other date
            </label>
          </div>
        </div>
        <div className="fs-sm mt-4">Closest time of receipt</div>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <div>
            <input
              className="btn-check"
              defaultChecked
              id="time-1"
              name="time"
              type="radio"
            />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="time-1">
              10:00 - 12:00
            </label>
          </div>
          <div>
            <input className="btn-check" id="time-2" name="time" type="radio" />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="time-2">
              12:00 - 14:00
            </label>
          </div>
          <div>
            <input className="btn-check" id="time-3" name="time" type="radio" />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="time-3">
              14:00 - 16:00
            </label>
          </div>
          <div>
            <input className="btn-check" id="time-4" name="time" type="radio" />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="time-4">
              16:00 - 18:00
            </label>
          </div>
          <div>
            <input className="btn-check" id="time-5" name="time" type="radio" />
            <label
              className="btn btn-outline-secondary rounded-pill"
              htmlFor="time-5">
              18:00 - 20:00
            </label>
          </div>
        </div>
        <h2 className="h5 mt-5 mb-0">Payment method</h2>
        <div id="paymentMethod" role="list">
          <div className="mt-4">
            <div
              aria-controls="upon-receipt"
              aria-expanded="true"
              className="form-check mb-0"
              data-bs-target="#upon-receipt"
              data-bs-toggle="collapse"
              >
              <label className="form-check-label text-dark-emphasis fw-semibold">
                <input
                  className="form-check-input fs-base me-2 me-sm-3"
                  defaultChecked
                  name="payment-method"
                  type="radio"
                />
                Upon receipt
              </label>
            </div>
            <div
              className="collapse show"
              data-bs-parent="#paymentMethod"
              id="upon-receipt"
            />
          </div>
          <div className="mt-4">
            <div
              aria-controls="card"
              aria-expanded="false"
              className="form-check mb-0"
              data-bs-target="#card"
              data-bs-toggle="collapse"
              >
              <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                <input
                  className="form-check-input fs-base me-2 me-sm-3"
                  name="payment-method"
                  type="radio"
                />
                Credit or debit card
                <span className="d-none d-sm-flex gap-2 ms-3">
                  <img
                    alt="Amex"
                    className="d-block bg-info rounded-1"
                    src="assets/img/payment-methods/amex.svg"
                    width="36"
                  />
                  <img
                    alt="Visa"
                    className="d-none-dark"
                    src="assets/img/payment-methods/visa-light-mode.svg"
                    width="36"
                  />
                  <img
                    alt="Visa"
                    className="d-none d-block-dark"
                    src="assets/img/payment-methods/visa-dark-mode.svg"
                    width="36"
                  />
                  <img
                    alt="Mastercard"
                    src="assets/img/payment-methods/mastercard.svg"
                    width="36"
                  />
                  <img
                    alt="Maestro"
                    src="assets/img/payment-methods/maestro.svg"
                    width="36"
                  />
                </span>
              </label>
            </div>
            <div className="collapse" data-bs-parent="#paymentMethod" id="card">
              <form
                className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3"
                noValidate>
                <div
                  className="position-relative mb-3 mb-sm-4"
                  data-input-format='{"creditCard": true}'>
                  <input
                    className="form-control form-control-lg form-icon-end rounded-pill"
                    placeholder="Card number"
                    required
                    type="text"
                  />
                  <span
                    className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                    data-card-icon=""
                  />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                  <div className="col">
                    <input
                      className="form-control form-control-lg rounded-pill"
                      data-input-format='{"date": true, "datePattern": ["m", "y"]}'
                      placeholder="MM/YY"
                      type="text"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control form-control-lg rounded-pill"
                      data-input-format='{"numeral": true, "numeralPositiveOnly": true, "numeralThousandsGroupStyle": "none"}'
                      maxLength="4"
                      placeholder="CVC"
                      type="text"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <div
              aria-controls="paypal"
              aria-expanded="false"
              className="form-check mb-0"
              data-bs-target="#paypal"
              data-bs-toggle="collapse"
              >
              <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                <input
                  className="form-check-input fs-base me-2 me-sm-3"
                  name="payment-method"
                  type="radio"
                />
                PayPal
                <img
                  alt="PayPal"
                  className="ms-3"
                  src="assets/img/payment-methods/paypal-icon.svg"
                  width="16"
                />
              </label>
            </div>
            <div
              className="collapse"
              data-bs-parent="#paymentMethod"
              id="paypal"
            />
          </div>
          <div className="mt-4">
            <div
              aria-controls="googlepay"
              aria-expanded="false"
              className="form-check mb-0"
              data-bs-target="#googlepay"
              data-bs-toggle="collapse"
              >
              <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                <input
                  className="form-check-input fs-base me-2 me-sm-3"
                  name="payment-method"
                  type="radio"
                />
                Google Pay
                <img
                  alt="Google Pay"
                  className="ms-3"
                  src="assets/img/payment-methods/google-icon.svg"
                  width="20"
                />
              </label>
            </div>
            <div
              className="collapse"
              data-bs-parent="#paymentMethod"
              id="googlepay"
            />
          </div>
        </div>
        <h2 className="h5 mt-5 mb-4">Packaging</h2>
        <div
          className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-4"
          role="alert">
          We are eco-friendly company 🍏, so we use as little plastic as
          possible.
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="form-check m-0">
            <input
              className="form-check-input"
              id="bags"
              name="packaging"
              type="radio"
            />
            <label
              className="form-check-label text-dark-emphasis fw-medium"
              htmlFor="bags">
              Branded bags{" "}
              <span className="text-body-secondary">(absorbent polyester)</span>
            </label>
          </div>
          <div className="form-check m-0">
            <input
              className="form-check-input"
              id="eco"
              name="packaging"
              type="radio"
            />
            <label
              className="form-check-label text-dark-emphasis fw-medium"
              htmlFor="eco">
              Eco-friendly packaging{" "}
              <span className="text-body-secondary">(cardboard packaging)</span>
            </label>
          </div>
        </div>
      </div>
      <aside
        className="col-lg-4 offset-xl-1"
        style={{
          marginTop: "-115px",
        }}>
        <div
          className="position-sticky top-0"
          style={{
            paddingTop: "115px",
          }}>
          <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
            <h2 className="h5 mb-0 me-3">Order summary</h2>
            <div className="nav">
              <Link
                className="nav-link text-decoration-underline p-0"
                to="/cart">
                Edit
              </Link>
            </div>
          </div>
          <ul className="list-unstyled fs-sm gap-3 mb-0">
            <li className="d-flex justify-content-between">
              Subtotal (8 items):
              <span className="text-dark-emphasis fw-medium">$71.70</span>
            </li>
            <li className="d-flex justify-content-between">
              Saving:
              <span className="text-danger fw-medium">-$2.79</span>
            </li>
          </ul>
          <div className="border-top pt-4 mt-4">
            <div className="d-flex justify-content-between mb-4">
              <span className="fs-sm">Estimated total:</span>
              <span className="h5 mb-0">$68.91</span>
            </div>
            <div
              className="alert d-flex alert-warning fs-sm rounded-4 mb-4"
              role="alert">
              <i className="ci-info fs-lg pe-1 mt-1 me-2" />
              <div>
                There is a weighted product in the cart. The actual amount may
                differ from the indicated amount.
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="order-note">
                Order note
              </label>
              <textarea
                className="form-control rounded-5"
                id="order-note"
                rows="3"
              />
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" id="age" type="checkbox" />
              <label className="form-check-label" htmlFor="age">
                The order has products with age restrictions. I confirm that{" "}
                <span className="fw-semibold">I am at least 18 years old.</span>
              </label>
            </div>
            <Link
              className="btn btn-lg btn-primary w-100 rounded-pill"
              to="/ThankYou">
              Confirm the order
              <i className="ci-chevron-right fs-lg ms-1 me-n1" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  </section>
</main>
};
