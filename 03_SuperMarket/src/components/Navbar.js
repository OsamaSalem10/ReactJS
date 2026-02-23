import { Link } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";
export const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <>
   

      <header
        className="navbar navbar-expand-lg bg-body navbar-sticky sticky-top z-fixed px-0"
        data-sticky-element=""
      >
        <div className="container flex-nowrap">
          <button
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            className="navbar-toggler me-4 me-lg-0"
            data-bs-target="#navbarNav"
            data-bs-toggle="offcanvas"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand py-1 py-md-2 py-xl-1" to="./">
            <span className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
              <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z"
                  fill="currentColor"
                />
                <g fill="#fff">
                  <path d="M17.466 21.624c-.514 0-.988-.316-1.146-.829-.198-.632.138-1.303.771-1.501l7.666-2.469-1.205-8.254-13.317 4.621a1.19 1.19 0 0 1-1.521-.75 1.19 1.19 0 0 1 .751-1.521l13.89-4.818c.553-.197 1.166-.138 1.64.158a1.82 1.82 0 0 1 .85 1.284l1.344 9.183c.138.987-.494 1.994-1.482 2.33l-7.864 2.528-.375.04zm7.31.138c-.178-.632-.85-1.007-1.482-.81l-5.177 1.58c-2.331.79-3.28.02-3.418-.099l-6.56-8.412a4.25 4.25 0 0 0-4.406-1.758l-3.122.987c-.237.889-.415 1.777-.514 2.686l4.228-1.363a1.84 1.84 0 0 1 1.857.81l6.659 8.551c.751.948 2.015 1.323 3.359 1.323.909 0 1.857-.178 2.687-.474l5.078-1.54c.632-.178 1.008-.829.81-1.481z" />
                  <use to="#czlogo" />
                  <use to="#czlogo" x="8.516" y="-2.172" />
                </g>
                <defs>
                  <path
                    d="M18.689 28.654a1.94 1.94 0 0 1-1.936 1.935 1.94 1.94 0 0 1-1.936-1.935 1.94 1.94 0 0 1 1.936-1.935 1.94 1.94 0 0 1 1.936 1.935z"
                    id="czlogo"
                  />
                </defs>
              </svg>
            </span>
            Cartzilla
          </Link>
          <nav
            aria-labelledby="navbarNavLabel"
            className="offcanvas offcanvas-start"
            id="navbarNav"
            tabIndex="-1"
          >
            <div className="offcanvas-header py-3">
              <h5 className="offcanvas-title" id="navbarNavLabel">
                Browse Cartzilla
              </h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                type="button"
              />
            </div>
            <div className="offcanvas-body pt-3 pb-4 py-lg-0 mx-lg-auto">
              <ul className="navbar-nav position-relative">
                <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                  <Link
                    className="nav-link active"
                    data-bs-trigger="hover"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                  <Link
                    className="nav-link"
                    data-bs-trigger="hover"
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                  <Link
                    className="nav-link"
                    data-bs-trigger="hover"
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                  <Link
                    className="nav-link"
                    data-bs-trigger="hover"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                  <Link
                    className="nav-link"
                    data-bs-trigger="hover"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className="offcanvas-header nav border-top px-0 py-3 mt-3 d-md-none">
              <Link
                className="nav-link hover-effect-scale justify-content-center w-100 gap-2 py-0"
                to="account-marketplace-dashboard.html"
              >
                <div className="btn btn-icon position-relative border rounded-circle overflow-hidden">
                  <img
                    alt="Avatar"
                    className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="assets/img/account/avatar-sm.png"
                  />
                </div>
                Createx Studio
              </Link>
            </div>
          </nav>
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
                    className="dropdown-item active"
                    type="button"
                    onChange={theme === "light" ? "dark" : "light"}
                    onClick={toggleTheme}
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
                    className="dropdown-item"
                    onChange={theme === "dark" ? "light" : "dark"}
                    onClick={toggleTheme}
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
            <div className="dropdown d-none d-md-block mx-1">
              <Link
                aria-expanded="false"
                aria-label="My account"
                className="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden"
                data-bs-toggle="dropdown"
                to="#"
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
                    to="account-marketplace-dashboard.html"
                  >
                    <i className="bi-grid fs-base opacity-75 me-2" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-products.html"
                  >
                    <i className="bi-layers fs-base opacity-75 me-2" />
                    Products (4)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-sales.html"
                  >
                    <i className="bi-pie-chart fs-base opacity-75 me-2" />
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-payouts.html"
                  >
                    <i className="bi-currency-dollar fs-base opacity-75 me-2" />
                    Payouts
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-purchases.html"
                  >
                    <i className="bi-bag fs-base opacity-75 me-2" />
                    Purchases (6)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-favorites.html"
                  >
                    <i className="bi-heart fs-base opacity-75 me-2" />
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="account-marketplace-settings.html"
                  >
                    <i className="bi bi-gear fs-base opacity-75 me-2" />
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="account-signin.html">
                    <i className="bi bi-box-arrow-right fs-base opacity-75 me-2" />
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              aria-controls="shoppingCart"
              aria-label="Shopping cart"
              className="btn btn-icon btn-lg fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
              data-bs-target="#shoppingCart"
              data-bs-toggle="offcanvas"
              type="button"
            >
              <span
                className="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill mt-1 ms-n4 z-2"
                style={{
                  "--cz-badge-padding-x": ".42em",
                  "--cz-badge-padding-y": ".25em",
                }}
              >
                3
              </span>
              <i className="bi-bag animate-target me-1" />
            </button>
          </div>
        </div>
      </header>
      <section className="border-top">
        <div className="container py-lg-1">
          <div className="overflow-auto" data-simplebar="">
            <div className="nav flex-nowrap justify-content-between gap-4 py-2">
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <i className="bi-percent text-primary fs-xl" />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Weekly sale
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th01.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Vegetables
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th02.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Easter is coming
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 m-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th03.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Poultry meat
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th04.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Fresh fruits
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th05.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  St. Patrick's day
                </span>
              </Link>
              <Link
                className="nav-link align-items-center animate-underline gap-2 p-0"
                to="shop-catalog-grocery.html"
              >
                <span
                  className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    alt=""
                    src="assets/img/mega-menu/grocery/th06.png"
                    width="30"
                  />
                </span>
                <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                  Exotic fruits
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
