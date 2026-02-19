import { Link } from "react-router-dom"

export const Signin = () => {       
    return  <main className="container py-5 my-4" style={{ maxWidth: "683px" }}>
      <div className="row card shadow-lg p-4" style={{ maxWidth: "920px" }}>
        {/* Login form + Footer */}
        <div>
          <h1 className="h2 mt-auto">Welcome back</h1>

          <div className="nav fs-sm mb-4">
            Don't have an account?
            <Link
              className="nav-link text-decoration-underline p-0 ms-2"
              to="/signup"
            >
              Create an account
            </Link>
          </div>

          {/* Form */}
          <form className="needs-validation" noValidate>
            <div className="position-relative mb-4">
              <input
                type="email"
                className="form-control "
                placeholder="Email"
                required
              />
              <div className="invalid-tooltip bg-transparent py-0">
                Enter a valid email address!
              </div>
            </div>

            <div className="mb-4">
              <div className="password-toggle">
                <input
                  type="password"
                  className="form-control "
                  placeholder="Password"
                  required
                />
                <div className="invalid-tooltip bg-transparent py-0">
                  Password is incorrect!
                </div>
                <label
                  className="password-toggle-button fs-lg"
                  aria-label="Show/hide password"
                >
                  <input type="checkbox" className="btn-check" />
                </label>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-30"
                />
                <label
                  htmlFor="remember-30"
                  className="form-check-label"
                >
                  Remember for 30 days
                </label>
              </div>

              <div className="nav">
                <Link
                  className="nav-link animate-underline p-0"
                  to="/account-password-recovery"
                >
                  <span className="animate-target">Forgot password?</span>
                </Link>
              </div>
            </div>

            <button type="submit" className="btn btn-lg btn-primary w-100">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="d-flex align-items-center my-4">
            <hr className="w-100 m-0" />
            <span className="text-body-emphasis fw-medium text-nowrap mx-4">
              or continue with
            </span>
            <hr className="w-100 m-0" />
          </div>

          {/* Social login */}
          <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
            <button
              type="button"
              className="btn btn-lg btn-outline-secondary w-100 px-2"
            >
              <i className="bi bi-google ms-1 me-1"></i>
              Google
            </button>

            <button
              type="button"
              className="btn btn-lg btn-outline-secondary w-100 px-2"
            >
              <i className="bi bi-facebook ms-1 me-1"></i>
              Facebook
            </button>

            <button
              type="button"
              className="btn btn-lg btn-outline-secondary w-100 px-2"
            >
              <i className="bi bi-apple ms-1 me-1"></i>
              Apple
            </button>
          </div>
        </div>
      </div>
    </main> 
}   