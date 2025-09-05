import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="">
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container-fluid justify-content-center justify-content-lg-between">
            <Link className="navbar-brand" to="/">
              <img
                alt=""
                className="d-inline-block align-text-top"
                src="../assets/images/logo/freshcart-logo.svg"
              />
            </Link>
            <span className="navbar-text">
              Already have an account?{" "}
              <Link to="/register">Sign in</Link>
            </span>
          </div>
        </nav>
      </div>
      <main>
  <section className="my-lg-15 my-8">
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img
            alt=""
            className="img-fluid"
            src="../assets/images/svg-graphics/signin-g.svg"
          />
        </div>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
          <div className="mb-lg-9 mb-5">
            <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
            <p>Welcome back to FreshCart! Enter your email to get started.</p>
          </div>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-12">
                <label
                  className="form-label visually-hidden"
                  htmlFor="formSigninEmail">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="formSigninEmail"
                  placeholder="Email"
                  required
                  type="email"
                />
                <div className="invalid-feedback">Please enter name.</div>
              </div>
              <div className="col-12">
                <div className="password-field position-relative">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="formSigninPassword">
                    Password
                  </label>
                  <div className="password-field position-relative">
                    <input
                      className="form-control fakePassword"
                      id="formSigninPassword"
                      placeholder="*****"
                      required
                      type="password"
                    />
                    <span>
                      <i className="bi bi-eye-slash passwordToggler" />
                    </span>
                    <div className="invalid-feedback">
                      Please enter password.
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="flexCheckDefault"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <div>
                  Forgot password?
                  <a href="../pages/forgot-password.html">Reset It</a>
                </div>
              </div>
              <div className="col-12 d-grid">
                <button className="btn btn-primary" type="submit">
                  Sign In
                </button>
              </div>
              <div>
               <span> Don’t have an account ? </span>
                <Link to="/register" className="me-2">Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
    </div>
  );
};
