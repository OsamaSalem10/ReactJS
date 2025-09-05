export const Footer = () => {
  return (
    <footer className="footer">
      <section
        className="bg-dark"
        style={{
          background:
            "url(../assets/images/svg-graphics/pattern.svg) no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="text-white mt-8 mt-lg-0">
                    <span>$30 discount for your first order</span>
                    <h2 className="h2 text-white my-4">
                      Get top deals, latest trends, and more.
                    </h2>
                    <p className="text-white-50">
                      Join our email subscription now to get updates on
                      promotions and coupons.
                    </p>
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-6">
                        <label
                          className="form-label visually-hidden"
                          htmlFor="emailAddress"
                        >
                          Email Address
                        </label>
                        <input
                          className="form-control"
                          id="emailAddress"
                          placeholder="Enter Email Address"
                          required
                          type="email"
                        />
                        <div className="invalid-feedback">
                          Please enter email.
                        </div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-primary mb-3" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <img
                      alt=""
                      className="img-fluid"
                      src="../assets/images/png/girl-email.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
