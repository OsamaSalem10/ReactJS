import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark pb-4" data-bs-theme="dark">
        <div className="border-bottom py-5">
          <div className="container py-sm-1 py-md-2 py-lg-3">
            <div
              className="text-center mx-auto"
              style={{
                maxWidth: "580px",
              }}
            >
              <h3 className="pb-1 mb-2">Stay in touch with us</h3>
              <p className="fs-sm text-body">
                Receive the latest updates about our products & promotions
              </p>
              <form
                className="needs-validation position-relative d-flex flex-column flex-sm-row gap-2 pt-3"
                noValidate
              >
                <input
                  aria-label="Your email address"
                  className="form-control form-control-lg rounded-pill text-start"
                  placeholder="Your email"
                  required
                  type="email"
                />
                <div className="invalid-tooltip bg-transparent p-0">
                  Please enter your email address!
                </div>
                <button
                  className="btn btn-lg btn-primary rounded-pill"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="container fs-6 text-body text-center pt-5 pb-md-3 mb-0">
          © All rights reserved. Made with{" "}
          <i className="bi-heart-filled align-middle" /> by{" "}
          <span className="animate-underline">
            <Link
              className="animate-target text-white text-decoration-none"
              to="https://createx.studio/"
              rel="noreferrer"
              target="_blank"
            >
              Createx Studio
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
};
