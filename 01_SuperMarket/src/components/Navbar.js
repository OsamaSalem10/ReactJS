import { Link } from "react-router-dom";

export const Navbar = () => {

 
  return (
    <>
      <header className="shadow">
        <div className="container-fluid">
          <div className="row align-items-center pt-6 pb-4 mt-4 mt-lg-0">
            <div className="col-xl-1 col-md-3 mb-4 mb-md-0 col-12 text-center text-md-start">
              <Link to="../index.html">
                <img
                  alt="eCommerce HTML Template"
                  src="../assets/images/logo/freshcart-logo.svg"
                />
              </Link>
            </div>
            <div className="col-xxl-7 col-xl-5 col-lg-6 col-md-9">
              <nav
                aria-label="Offcanvas navbar large"
                className="navbar navbar-expand-lg navbar-light navbar-default p-0 p-sm-0 navbar-offcanvas-color "
              >
                <div className="container-fluid">
                  <div
                    aria-labelledby="navbar-defaultLabel"
                    className="offcanvas offcanvas-start"
                    id="navbar-default"
                    tabIndex="-1"
                  >
                    <div className="offcanvas-header pb-1">
                      <Link to="./index.html">
                        <img
                          alt="eCommerce HTML Template"
                          src="../assets/images/logo/freshcart-logo.svg"
                        />
                      </Link>
                      <button
                        aria-label="Close"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        type="button"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <div>
                        <ul className="navbar-nav align-items-center">
                          <li className="nav-item">
                            <Link className="nav-link " to="/" role="button">
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link " to="/blog" role="button">
                              Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link " to="/contact" role="button">
                              Contact
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              aria-expanded="false"
                              className="nav-link"
                              to="/shop"
                              role="button"
                            >
                              Shop
                            </Link>
                          </li>
                       
                        
                          <li className="nav-item dropdown">
                            <Link
                              aria-expanded="false"
                              className="nav-link dropdown-toggle"
                              data-bs-toggle="dropdown"
                              to="#"
                              role="button"
                            >
                              Account
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to="/login">
                                  Sign in
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/registerl">
                                  Signup
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="../pages/forgot-password.html"
                                >
                                  Forgot Password
                                </Link>
                              </li>
                              <li className="dropdown-submenu dropend">
                                <Link
                                  className="dropdown-item dropdown-list-group-item dropdown-toggle"
                                  to="#"
                                >
                                  My Account
                                </Link>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../pages/account-orders.html"
                                    >
                                      Orders
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../pages/account-settings.html"
                                    >
                                      Settings
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../pages/account-address.html"
                                    >
                                      Address
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../pages/account-payment-method.html"
                                    >
                                      Payment Method
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="../pages/account-notification.html"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="/dashboard"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li className="nav-item dropdown dropdown-flyout">
                            <Link
                              aria-expanded="false"
                              aria-haspopup="true"
                              className="nav-link"
                              data-bs-toggle="dropdown"
                              to="#"
                              id="navbarDropdownDocs"
                              role="button"
                            >
                              Docs
                            </Link>
                            <div
                              aria-labelledby="navbarDropdownDocs"
                              className="dropdown-menu dropdown-menu-lg"
                            >
                              <Link
                                className="dropdown-item align-items-start"
                                to="../docs/index.html"
                              >
                                <div>
                                  <svg
                                    className="bi bi-file-text text-primary"
                                    fill="currentColor"
                                    height="24"
                                    viewBox="0 0 16 16"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                  </svg>
                                </div>
                                <div className="ms-3 lh-1">
                                  <h6 className="mb-1">Documentations</h6>
                                  <p className="mb-0 small">
                                    Browse the all documentation
                                  </p>
                                </div>
                              </Link>
                              <Link
                                className="dropdown-item align-items-start"
                                to="../docs/changelog.html"
                              >
                                <div>
                                  <svg
                                    className="bi bi-layers text-primary"
                                    fill="currentColor"
                                    height="24"
                                    viewBox="0 0 16 16"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                                  </svg>
                                </div>
                                <div className="ms-3 lh-1">
                                  <h6 className="mb-1">
                                    Changelog
                                    <span className="text-primary ms-1">
                                      v1.4.2
                                    </span>
                                  </h6>
                                  <p className="mb-0 small">See what's new</p>
                                </div>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-3 d-none d-lg-block">
              <div className="d-flex align-items-center justify-content-between ms-4">
             
                <div className="ms-5 text-center">
                  <Link
                    className="text-reset"
                    data-bs-target="#userModal"
                    data-bs-toggle="modal"
                    to="#"
                  >
                    <div className="lh-1">
                      <div className="mb-2">
                        <i className="bi bi-person-circle fs-6" />
                      </div>
                      <p className="mb-0 d-none d-xl-block small">Sign up</p>
                    </div>
                  </Link>
                </div>
                <div className="ms-5 text-center">
                  <Link
                    className="text-reset"
                    to="/Wishlist"
                  >
                    <div className="lh-1">
                      <div className="mb-2">
                        <i className="bi bi-heart fs-6" />
                      </div>
                      <p className="mb-0 d-none d-xl-block small">Wishlist</p>
                    </div>
                  </Link>
                </div>
                <div className="ms-5 text-center">
                  <Link
                    className="text-reset"
                    to="/shopcart"
                  >
                    <div className="lh-1">
                      <div className="mb-2">
                        <i className="bi bi-cart4 fs-6" />
                      </div>
                      <p className="mb-0 d-none d-xl-block small">My Orders</p>
                    </div>
                  </Link>
                </div>
                <div className="text-center ms-3">
                  <Link
                    aria-controls="offcanvasRight"
                    className="text-reset"
                    data-bs-target="#offcanvasRight"
                    data-bs-toggle="offcanvas"
                    to="#offcanvasExample"
                    role="button"
                  >
                    <div className="text-center">
                      <div>
                        <i className="bi bi-cart2 fs-6" />
                      </div>
                      <p className="mb-0 d-none d-xl-block small">
                        Shopping Cart
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="text-center ms-5">
                
                   <Link
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                >
                  <img
                    alt=""
                    className="avatar avatar-md rounded-circle"
                    src="../assets/images/avatar/avatar-1.jpg"
                  />
                </Link>
                <div className="dropdown-menu dropdown-menu-end p-0">
                  <div className="lh-1 px-5 py-4 border-bottom">
                    <h5 className="mb-1 h6">FreshCart Admin</h5>
                    <small>admindemo@email.com</small>
                  </div>
                  <ul className="list-unstyled px-2 py-3">
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Settings
                      </Link>
                    </li>
                  </ul>
                  <div className="border-top px-5 py-3">
                    <Link to="#">Log Out</Link>
                  </div>
                </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile */}
      <div className="bg-white position-fixed bottom-0 w-100 z-1 shadow-lg d-block d-lg-none text-center">
        <div className="d-flex align-items-center">
          <div className="w-25 icon-hover py-4">
            <button
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler collapsed d-lg-none"
              data-bs-target="#navbar-default"
              data-bs-toggle="offcanvas"
              type="button"
            >
              <svg
                className="bi bi-text-indent-left text-primary"
                fill="currentColor"
                height="22"
                viewBox="0 0 16 16"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
          <div className="dropdown w-25 ms-2 py-4 icon-hover">
            <Link
              aria-expanded="false"
              className="text-inherit"
              data-bs-toggle="dropdown"
              to="#"
            >
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  <svg
                    className="bi bi-bell"
                    fill="currentColor"
                    height="22"
                    viewBox="0 0 16 16"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1<span className="visually-hidden">unread messages</span>
                  </span>
                </div>
              </div>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg p-0">
              <div>
                <h6 className="px-4 border-bottom py-3 mb-0">Notification</h6>
                <p className="mb-0 px-4 py-3">
                  <Link to="../pages/signin.html">Sign in</Link>
                  or
                  <Link to="../pages/signup.html">Register</Link>
                  in or so you don t have to enter your details every time
                </p>
              </div>
            </div>
          </div>
          <div className="w-25 ms-2 py-4 icon-hover">
            <Link
              className="text-inherit"
              data-bs-target="#userModal"
              data-bs-toggle="modal"
       to={""}    
            >
              <div className="text-center">
                <div>
                  <svg
                    className="bi bi-person-circle"
                    fill="currentColor"
                    height="22"
                    viewBox="0 0 16 16"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-25 ms-2 py-4 icon-hover">
            <Link className="text-inherit" to="../pages/account-orders.html">
              <div className="text-center">
                <div>
                  <svg
                    className="bi bi-archive"
                    fill="currentColor"
                    height="22"
                    viewBox="0 0 16 16"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-25 ms-2 py-4 icon-hover">
            <Link
              aria-controls="offcanvasRight"
              className="text-inherit"
              data-bs-target="#offcanvasRight"
              data-bs-toggle="offcanvas"
              to="#offcanvasExample"
              role="button"
            >
              <div className="text-center">
                <div>
                  <svg
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="22"
                    viewBox="0 0 16 16"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-25 ms-2 py-4 icon-hover">
            <Link
              aria-controls="offcanvasCategory"
              className="text-inherit"
              data-bs-toggle="offcanvas"
              to="#offcanvasCategory"
              role="button"
            >
              <svg
                className="bi bi-funnel"
                fill="currentColor"
                height="24"
                viewBox="0 0 16 16"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
              </svg>
            </Link>
          </div>
           
        </div>
      </div>
    </>
  );
};
