import { Link } from "react-router-dom";
export const HelpCenter = () => {
  return (
 <main className="content-wrapper">
  <section className="container pb-5 mb-lg-3">
    <div className="bg-info rounded" data-bs-theme="light">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 col-lg-6 offset-lg-1">
          <div className="pt-5 pb-3 pb-md-5 px-4 px-sm-5 ps-lg-0 pe-md-0">
            <h1 className="display-6 text-white text-center text-md-start mb-4">
              How can we help you?
            </h1>
            <div className="bg-body border rounded p-2">
              <form className="d-flex flex-column flex-sm-row gap-2 p-1">
                <div className="position-relative w-100">
                  <i className="fi-search position-absolute top-50 start-0 translate-middle-y fs-xl text-secondary-emphasis ms-2" />
                  <input
                    className="form-control form-control-lg form-icon-start border-0 rounded-0"
                    placeholder="What do you need help with?"
                    type="search"
                  />
                </div>
                <button className="btn btn-lg btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-6 col-md-5 col-xl-4 offset-xl-1 align-self-end">
          <div className="ps-md-5 ms-lg-2 ms-xl-0 ps-xl-0">
            <div
              className="ratio"
              style={{
                "--fn-aspect-ratio": "calc(356 / 416 * 100%)",
              }}>
              <img alt="" src="assets/img/help/v1/hero.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container pb-5 mb-2 mb-sm-3 mb-md-4 mb-xl-5">
    <ul className="nav nav-pills gap-2 pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">
      <li className="nav-item me-1">
        <Link aria-current="page" className="nav-link active" to="#!">
          For tenants
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#!">
          For hosts
        </Link>
      </li>
    </ul>
    <div className="row g-0">
      <div className="col-md-4 col-lg-3 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
        <h2 className="h5 border-bottom pb-3 pb-sm-4 mb-0">Help topics</h2>
        <div
          className="list-group list-group-borderless pt-4 pe-md-4"
          role="tablist">
          <Link
            aria-controls="accommodation"
            aria-selected="true"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base active"
            data-bs-toggle="list"
            to="#accommodation"
            id="accommodation-tab"
            role="tab">
            Accommodation
          </Link>
          <Link
            aria-controls="booking"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#booking"
            id="booking-tab"
            role="tab"
            tabIndex="-1">
            Booking
          </Link>
          <Link
            aria-controls="payment"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#payment"
            id="payment-tab"
            role="tab"
            tabIndex="-1">
            Payment
          </Link>
          <Link
            aria-controls="after-booking"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#after-booking"
            id="after-booking-tab"
            role="tab"
            tabIndex="-1">
            After a booking
          </Link>
          <Link
            aria-controls="cancellation"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#cancellation"
            id="cancellation-tab"
            role="tab"
            tabIndex="-1">
            Cancellation, notice, extension
          </Link>
          <Link
            aria-controls="regulations"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#regulations"
            id="regulations-tab"
            role="tab"
            tabIndex="-1">
            Regulations
          </Link>
          <Link
            aria-controls="insurances"
            aria-selected="false"
            className="list-group-item list-group-item-action d-flex align-items-center fs-base"
            data-bs-toggle="list"
            to="#insurances"
            id="insurances-tab"
            role="tab"
            tabIndex="-1">
            Insurances
          </Link>
        </div>
      </div>
      <div className="col-md-8 col-lg-9">
        <div className="tab-content">
          <div
            aria-labelledby="accommodation-tab"
            className="tab-pane show active"
            id="accommodation"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Accommodation</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is included in my rental accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are utilities like water, electricity, and internet
                      included in the rent?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I view the property before I move in?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What furniture is provided with the accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are pets allowed in the accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is smoking permitted inside the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I report maintenance issues or repairs needed in
                      the accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What should I do if something in the property is damaged
                      when I move in?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any restrictions on guests staying over?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I make modifications or decorate the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How is the security of the property managed?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the procedure for renewing my lease?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="booking-tab"
            className="tab-pane"
            id="booking"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Booking</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I book a property on the website?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What documents do I need to provide to make a booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I book a property for a short-term stay?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I know if my booking is confirmed?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the payment options available for booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I book a property on behalf of someone else?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What happens if the property I booked becomes unavailable?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I change the dates of my booking after it's confirmed?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Do I need to pay a deposit when making a booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How long does it take to process my booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the policy for last-minute bookings?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is there a minimum stay requirement for bookings?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="payment-tab"
            className="tab-pane"
            id="payment"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Payment</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What payment methods are accepted?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      When is my rent due?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I set up automatic payments for my rent?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any fees associated with late payments?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I pay my rent online?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What should I do if I'm unable to make a payment on time?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is there a grace period for rent payments?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I receive a receipt for my payment?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I split my payment into multiple transactions?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What happens if my payment fails or is declined?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I pay my rent in advance?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any discounts for early or lump-sum payments?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="after-booking-tab"
            className="tab-pane"
            id="after-booking"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">After a booking</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I collect the keys for my accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What should I do upon arrival at the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Who do I contact if I have any issues after moving in?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I set up utilities like electricity and internet?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the process for checking in to the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I request additional services or amenities after
                      moving in?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I update my contact information or other details
                      after booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the procedure if I need repairs or maintenance?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I report issues with my neighbors?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Who is responsible for property maintenance during my
                      stay?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I upgrade or change my accommodation after booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I renew my lease if I want to stay longer?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="cancellation-tab"
            className="tab-pane"
            id="cancellation"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Cancellation, notice, extension</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the process for canceling my booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is there a penalty for canceling my booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How much notice do I need to give before moving out?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I extend my stay after the initial booking period?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What happens if I need to leave before my lease ends?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I request a lease extension?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Will I get a refund if I cancel my booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the policy on early termination of the lease?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I provide notice if I plan to vacate the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Can I transfer my lease to someone else if I need to move?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What happens if the property owner cancels my booking?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is there a fee for extending my stay?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="regulations-tab"
            className="tab-pane"
            id="regulations"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Regulations</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the local laws regarding renting accommodation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any noise regulations I need to follow?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the rules regarding waste disposal and recycling?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any specific regulations for pet owners?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Do I need to register with local authorities after moving
                      in?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the parking regulations for tenants?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there restrictions on the type of activities I can
                      conduct in the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What should I do if I receive a notice of violation?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Are there any occupancy limits for the property?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the fire safety regulations I need to follow?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How are disputes with landlords or neighbors handled
                      legally?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What are the rules for subletting the property?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            aria-labelledby="insurances-tab"
            className="tab-pane"
            id="insurances"
            role="tabpanel">
            <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 className="h5 mb-0">Insurances</h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <ul className="nav flex-column gap-3 pt-4 ps-md-4">
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Do I need renter's insurance?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What does renter's insurance cover?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is renter's insurance included in my rent?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I choose the right insurance policy for my needs?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What happens if my belongings are damaged or stolen?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Does the property owner's insurance cover tenant
                      belongings?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How do I file a claim with my renter's insurance?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the cost of renter's insurance?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Do I need additional insurance for valuable items?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      What is the process for transferring my insurance if I
                      move?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Is insurance required by law for tenants?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link position-relative fs-base fw-normal py-1 px-0"
                    to="help-single-article-v1.html">
                    <i className="fi-chevron-right fs-lg ms-n1 me-2" />
                    <span className="hover-effect-underline stretched-link">
                      How does renter's insurance differ from homeowner's
                      insurance?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-4 mt-2 mt-sm-3">
      <h3 className="fs-base pb-sm-1">
        Can't find an answer to your question?
      </h3>
      <Link className="btn btn-lg btn-primary" to="/contact">
        Contact us
      </Link>
    </div>
  </section>

</main>
  );
}