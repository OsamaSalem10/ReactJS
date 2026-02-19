import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <main className="container py-5 my-4" style={{ maxWidth: "683px" }}>
      <div className="row card shadow-lg p-4" style={{ maxWidth: "920px" }}>
        {/* Login form + Footer */}
        <div>
          <h1 className="h5 mt-auto">Create Account</h1>
          <div className="nav fs-sm mb-4">
            I already have an account
            <Link
              className="nav-link text-decoration-underline p-0 ms-2"
              to="/Signin"
            >
              Sign in
            </Link>
          </div>
          {/* Form */}
          <form className="needs-validation" noValidate>
            <div className="row mb-3">
              <div className="col-md mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md">
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md mb-3">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Gender</option>
                  <option defaultValue="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md">
                <input type="file" className="form-control" required />
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
  );
};
