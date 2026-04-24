export const Offcanvas = () => {
  return (
    <section>
      {/*  <!-- Add payment method modal --> */}
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

      {/* <!-- Search offcanvas --> */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-backdrop="static"
        id="searchBox"
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom p-0 py-lg-1">
          <form className="container d-flex align-items-center">
            <input
              className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
              data-autofocus="offcanvas"
              placeholder="Search the products"
              type="search"
            />
            <button
              aria-label="Close"
              className="btn-close fs-lg"
              data-bs-dismiss="offcanvas"
              type="reset"
            />
          </form>
        </div>
        <div className="offcanvas-body px-0">
          <div className="container text-center">
            <svg
              className="text-body-tertiary opacity-60 mb-4"
              fill="currentColor"
              viewBox="0 0 512 512"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M340.115,361.412l-16.98-16.98c-34.237,29.36-78.733,47.098-127.371,47.098C87.647,391.529,0,303.883,0,195.765S87.647,0,195.765,0s195.765,87.647,195.765,195.765c0,48.638-17.738,93.134-47.097,127.371l16.98,16.98l11.94-11.94c5.881-5.881,15.415-5.881,21.296,0l112.941,112.941c5.881,5.881,5.881,15.416,0,21.296l-45.176,45.176c-5.881,5.881-15.415,5.881-21.296,0L328.176,394.648c-5.881-5.881-5.881-15.416,0-21.296L340.115,361.412z M195.765,361.412c91.484,0,165.647-74.163,165.647-165.647S287.249,30.118,195.765,30.118S30.118,104.28,30.118,195.765S104.28,361.412,195.765,361.412z M360.12,384l91.645,91.645l23.88-23.88L384,360.12L360.12,384z M233.034,233.033c5.881-5.881,15.415-5.881,21.296,0c5.881,5.881,5.881,15.416,0,21.296c-32.345,32.345-84.786,32.345-117.131,0c-5.881-5.881-5.881-15.415,0-21.296c5.881-5.881,15.416-5.881,21.296,0C179.079,253.616,212.45,253.616,233.034,233.033zM135.529,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588c12.475,0,22.588,10.113,22.588,22.588C158.118,170.593,148.005,180.706,135.529,180.706z M256,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588s22.588,10.113,22.588,22.588C278.588,170.593,268.475,180.706,256,180.706z" />
            </svg>
            <h6 className="mb-2">Your search results will appear here</h6>
            <p className="fs-sm mb-0">
              Start typing in the search field above to see instant search
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
