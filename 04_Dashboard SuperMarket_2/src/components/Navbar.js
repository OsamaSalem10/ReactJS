import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
        </li>
        </ul>
      </div>
  
          <div className="d-flex" role="search">
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button
                  aria-expanded="false"
                  aria-label="Toggle theme (light)"
                  className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  <span className="theme-icon-active d-flex animate-target">
                    <i className="bi-sun" />
                  </span>
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    "--cz-dropdown-min-width": "9rem",
                  }}
                >
                  <li>
                    <button
                      aria-pressed="true"
                      className="dropdown-item active"
                      data-bs-theme-value="light"
                      type="button"
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi-sun" />
                      </span>
                      <span className="theme-label">Light</span>
                      <i className="item-active-indicator bi-check ms-auto" />
                    </button>
                  </li>
                  <li>
                    <button
                      aria-pressed="false"
                      className="dropdown-item"
                      data-bs-theme-value="dark"
                      type="button"
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi-moon" />
                      </span>
                      <span className="theme-label">Dark</span>
                      <i className="item-active-indicator bi-check ms-auto" />
                    </button>
                  </li>
                  <li>
                    <button
                      aria-pressed="false"
                      className="dropdown-item"
                      data-bs-theme-value="auto"
                      type="button"
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi-auto" />
                      </span>
                      <span className="theme-label">Auto</span>
                      <i className="item-active-indicator bi-check ms-auto" />
                    </button>
                  </li>
                </ul>
              </div>
              <button
                aria-controls="searchBox"
                aria-label="Toggle search bar"
                className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake"
                data-bs-target="#searchBox"
                data-bs-toggle="offcanvas"
                type="button"
              >
                <i className="bi-search animate-target" />
              </button>
              <div className="dropdown  d-md-block mx-1">
                <Link
                  aria-expanded="false"
                  aria-label="My account"
                  className="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                >
                  <img
                    alt="Avatar"
                    className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="assets/img/account/avatar-sm.png"
                  />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  style={{
                    "--cz-dropdown-spacer": ".625rem",
                  }}
                >
                  <li>
                    <span className="h6 dropdown-header">Createx Studio</span>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                    >
                      <i className="bi-grid fs-base opacity-75 me-2" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/products"
                    >
                      <i className="bi-layers fs-base opacity-75 me-2" />
                      Products (4)
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item"
                      to="/sales"
                    >
                      <i className="bi-pie-chart fs-base opacity-75 me-2" />
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/payouts"
                    >
                      <i className="bi-currency-dollar fs-base opacity-75 me-2" />
                      Payouts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/purchases"
                    >
                      <i className="bi-bag fs-base opacity-75 me-2" />
                      Purchases (6)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/favorites"
                    >
                      <i className="bi-heart fs-base opacity-75 me-2" />
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/settings"
                    >
                      <i className="bi bi-gear fs-base opacity-75 me-2" />
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      <i className="bi bi-box-arrow-right fs-base opacity-75 me-2" />
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
   <button type="button" className="fixed-bottom z-sticky w-100 btn btn-lg btn-dark border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light">
      <i className="bi-sidebar fs-base me-2"></i>
      Account menu
    </button>
    </nav>
  );
};
