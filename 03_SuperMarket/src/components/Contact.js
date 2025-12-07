import { Link } from "react-router-dom";

export const Contact = () => {
  return (
   <main className="content-wrapper">
  <div className="container py-5 mb-2 mb-sm-3 mb-md-4 mb-lg-5 mt-lg-3 mt-xl-4">
    <h1 className="text-center">Contact us</h1>
    <p className="text-center pb-2 pb-sm-3">
      Fill out the form below and we will reply within 24 hours
    </p>
    <section className="row row-cols-1 row-cols-md-2 g-0 overflow-hidden rounded-5">
      <div className="col bg-body-tertiary py-5 px-4 px-xl-5">
        <form
          className="needs-validation py-md-2 px-md-1 px-lg-3 mx-lg-3"
          noValidate>
          <div className="position-relative mb-4">
            <label className="form-label" htmlFor="name">
              Name *
            </label>
            <input
              className="form-control form-control-lg rounded-pill"
              id="name"
              required
              type="text"
            />
            <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
              Enter your name!
            </div>
          </div>
          <div className="position-relative mb-4">
            <label className="form-label" htmlFor="email">
              Email *
            </label>
            <input
              className="form-control form-control-lg rounded-pill"
              id="email"
              required
              type="email"
            />
            <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
              Enter your email address!
            </div>
          </div>
          <div className="position-relative mb-4">
            <label className="form-label">Subject *</label>
            <select
              className="form-select form-select-lg rounded-pill"
              data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-lg", "rounded-pill"]                  }                }'
              required>
              <option value="">Select subject</option>
              <option value="General inquiry">General inquiry</option>
              <option value="Order status">Order status</option>
              <option value="Product information">Product information</option>
              <option value="Technical support">Technical support</option>
              <option value="Website feedback">Website feedback</option>
              <option value="Account assistance">Account assistance</option>
              <option value="Security concerns">Security concerns</option>
            </select>
            <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
              Select the subject of your message!
            </div>
          </div>
          <div className="position-relative mb-4">
            <label className="form-label" htmlFor="message">
              Message *
            </label>
            <textarea
              className="form-control form-control-lg rounded-6"
              id="message"
              required
              rows="5"
            />
            <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
              Write your message!
            </div>
          </div>
          <div className="pt-2">
            <button className="btn btn-lg btn-dark rounded-pill" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="col position-relative">
        <img
          alt=""
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          src="assets/img/contact/form-image.jpg"
        />
      </div>
    </section>
    <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pt-5 pb-3 pb-md-4 pb-lg-3 mt-lg-0 mt-xxl-4">
      <div className="col text-center pt-1 pt-sm-2 pt-md-3">
        <div className="position-relative d-inline-block bg-body-tertiary text-dark-emphasis fs-xl rounded-circle p-4 mb-3">
          <i className="bi-telephone position-absolute top-50 start-50 translate-middle" />
        </div>
        <h3 className="h6">Call us directly</h3>
        <ul className="list-unstyled m-0">
          <li className="nav animate-underline justify-content-center">
            Customers:
            <Link
              className="nav-link animate-target fs-base ms-1 p-0"
              to="tel:+15053753082">
              +1 50 537 53 082
            </Link>
          </li>
          <li className="nav animate-underline justify-content-center">
            Franchise:
            <Link
              className="nav-link animate-target fs-base ms-1 p-0"
              to="tel:+15053753000">
              +1 50 537 53 000
            </Link>
          </li>
        </ul>
      </div>
      <div className="col text-center pt-1 pt-sm-2 pt-md-3">
        <div className="position-relative d-inline-block bg-body-tertiary text-dark-emphasis fs-xl rounded-circle p-4 mb-3">
          <i className="bi-envelope position-absolute top-50 start-50 translate-middle" />
        </div>
        <h3 className="h6">Send a message</h3>
        <ul className="list-unstyled m-0">
          <li className="nav animate-underline justify-content-center">
            Customers:
            <Link
              className="nav-link animate-target fs-base ms-1 p-0"
              to="mailto:info@cartzilla.com">
              info@cartzilla.com
            </Link>
          </li>
          <li className="nav animate-underline justify-content-center">
            Franchise:
            <Link
              className="nav-link animate-target fs-base ms-1 p-0"
              to="mailto:franchise@cartzilla.com">
              franchise@cartzilla.com
            </Link>
          </li>
        </ul>
      </div>
      <div className="col text-center pt-1 pt-sm-2 pt-md-3">
        <div className="position-relative d-inline-block bg-body-tertiary text-dark-emphasis fs-xl rounded-circle p-4 mb-3">
          <i className="bi-geo-alt position-absolute top-50 start-50 translate-middle" />
        </div>
        <h3 className="h6">Store location</h3>
        <ul className="list-unstyled m-0">
          <li>New York 11741, USA</li>
          <li>396 Lillian Bolavandy, Holbrook</li>
        </ul>
      </div>
      <div className="col text-center pt-1 pt-sm-2 pt-md-3">
        <div className="position-relative d-inline-block bg-body-tertiary text-dark-emphasis fs-xl rounded-circle p-4 mb-3">
          <i className="bi-clock position-absolute top-50 start-50 translate-middle" />
        </div>
        <h3 className="h6">Working hours</h3>
        <ul className="list-unstyled m-0">
          <li>Mon - Fri 8:00 - 18:00</li>
          <li>Sut - Sun 10:00 - 16:00</li>
        </ul>
      </div>
    </section>
    <hr className="my-lg-5" />
    <section className="text-center pb-xxl-3 pt-4 pt-lg-3">
      <h2 className="pt-md-2 pt-lg-0">Looking for support?</h2>
      <p className="pb-2 pb-sm-3">
        We might already have what you're looking for. See our FAQs or head to
        our dedicated Help Center.
      </p>
      <Link className="btn btn-lg btn-outline-dark rounded-pill" to="#!">
        Help Center
      </Link>
    </section>
  </div>
</main>
  );
};
