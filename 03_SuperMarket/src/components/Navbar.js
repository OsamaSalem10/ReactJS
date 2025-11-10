import { Link } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";
export const Navbar = () => {
   const [theme, toggleTheme] = useDarkMode();
  return (
    <>
    <header
      className="navbar navbar-expand navbar-sticky sticky-top d-block bg-body z-fixed py-1 py-lg-0 py-xl-1 px-0"
      data-sticky-element=""
    >
      <div className="container justify-content-start py-2 py-lg-3">
        <button
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          className="navbar-toggler d-block flex-shrink-0 me-3 me-sm-4"
          data-bs-target="#navbarNav"
          data-bs-toggle="offcanvas"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link
          className="navbar-brand fs-2 p-0 pe-lg-2 pe-xxl-0 me-0 me-sm-3 me-md-4 me-xxl-5"
          to="index.html"
        >
          Cartzilla
        </Link>
        <div
          className="dropdown d-none d-lg-block w-100 me-4"
          style={{
            maxWidth: "200px",
          }}
        >
          <button
            aria-expanded="false"
            aria-haspopup="true"
            className="btn btn-lg btn-secondary w-100 border-0 rounded-pill"
            data-bs-toggle="dropdown"
            type="button"
          >
            <i className="bi-grid fs-lg me-2 ms-n1" />
            Categories
            <i className="bi-chevron-down fs-lg me-2 ms-auto me-n1" />
          </button>
          <div
            className="dropdown-menu rounded-4 p-4"
            style={{
              "--cz-dropdown-spacer": ".75rem",
              marginLeft: "-75px",
            }}
          >
            <div className="d-flex gap-4">
              <div
                style={{
                  minWidth: "170px",
                }}
              >
                <div className="h6">Bakery & bread</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Bread
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Pastries
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Bakery cookies
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Cupcakes
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Buns & rolls
                    </Link>
                  </li>
                </ul>
                <div className="h6 pt-4">Meat products</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Fresh meat
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Processed meat
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Seafood
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Poultry products
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Prepared meat
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  minWidth: "170px",
                }}
              >
                <div className="h6">Vegetables</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Leafy greens
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Root vegetables
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Allium vegetables
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Peppers and tomatoes
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Cruciferous
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Seasonal squashes
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Beans, peas & lentils
                    </Link>
                  </li>
                </ul>
                <div className="h6 pt-4">Sauces and ketchup</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Tomato-based sauces
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Salad dressing
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Hot sauces
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  minWidth: "170px",
                }}
              >
                <div className="h6">Fresh fruits</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Citrus fruits
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Berries
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Tropical fruits
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Stone fruits
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Exotic fruits
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Melons
                    </Link>
                  </li>
                </ul>
                <div className="h6 pt-4">Italian dinner</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Pasta & sauces
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Italian cheese
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Italian meats
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Desserts & beverages
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  minWidth: "170px",
                }}
              >
                <div className="h6">Beverages</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Soft drinks
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Juices
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Sports & energy drinks
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Tea and coffee
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Alcoholic beverages
                    </Link>
                  </li>
                </ul>
                <div className="h6 pt-4">Dairy & eggs</div>
                <ul className="nav flex-column gap-2 mt-n2">
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Shop all
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Chees
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Milk & yogurt
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Sour cream
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Eggs
                    </Link>
                  </li>
                  <li className="d-flex w-100 pt-1">
                    <Link
                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                      to="shop-catalog-grocery.html"
                    >
                      Butter & margarine
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative w-100 d-none d-md-block me-3 me-xl-4">
          <input
            aria-label="Search"
            className="form-control form-control-lg rounded-pill"
            placeholder="Search for products"
            type="search"
          />
          <button
            aria-label="Search button"
            className="btn btn-icon btn-ghost fs-lg btn-secondary text-bo border-0 position-absolute top-0 end-0 rounded-circle mt-1 me-1"
            type="button"
          >
            <i className="bi-search" />
          </button>
        </div>
        <div className="nav me-4 me-xxl-5 d-none d-xl-block">
          <Link
            aria-controls="deliveryOptions"
            className="nav-link flex-column align-items-start animate-underline p-0"
            data-bs-toggle="offcanvas"
            to="#deliveryOptions"
          >
            <div className="h6 fs-sm mb-0">Delivery</div>
            <div className="d-flex align-items-center fs-sm fw-normal text-body">
              <span className="animate-target text-nowrap">
                Set your address
              </span>
              <i className="bi-chevron-down fs-base ms-1" />
            </div>
          </Link>
        </div>
        <div className="d-flex align-items-center gap-md-1 gap-lg-2 ms-auto">
          <div className="dropdown">
            <button
              aria-expanded="false"
              aria-label="Toggle theme (light)"
              className="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
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
                    <i className="bi bi-cloud-moon" />
                  </span>
                  <span className="theme-label">Auto</span>
                  <i className="item-active-indicator bi bi-cloud-moon ms-auto" />
                </button>
              </li>
            </ul>
          </div>
          <button
            aria-controls="searchBar"
            aria-label="Toggle search bar"
            className="btn btn-icon fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-md-none"
            data-bs-target="#searchBar"
            data-bs-toggle="collapse"
            type="button"
          >
            <i className="bi-search animate-target" />
          </button>
          <button
            aria-controls="deliveryOptions"
            aria-label="Toggle delivery options offcanvas"
            className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-scale d-xl-none"
            data-bs-target="#deliveryOptions"
            data-bs-toggle="offcanvas"
            type="button"
          >
            <i className="bi bi-geo-alt-fill" />
          </button>
          <Link
            className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
            to="account-signin.html"
          >
            <i className="bi-person-fill animate-target" />
            <span className="visually-hidden">Account</span>
          </Link>
          <button
            aria-controls="shoppingCart"
            aria-label="Shopping cart"
            className="btn btn-icon fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
            data-bs-target="#shoppingCart"
            data-bs-toggle="offcanvas"
            type="button"
          >
            <span
              className="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill ms-n3 z-2"
              style={{
                "--cz-badge-padding-x": ".42em",
                "--cz-badge-padding-y": ".25em",
              }}
            >
              8
            </span>
            <i className="bi-cart animate-target" />
          </button>
        </div>
      </div>
      <div className="collapse d-md-none" id="searchBar">
        <div className="container pt-2 pb-3">
          <div className="position-relative">
            <i className="bi-search position-absolute top-50 translate-middle-y d-flex fs-lg ms-3" />
            <input
              className="form-control form-icon-start rounded-pill"
              data-autofocus="collapse"
              placeholder="Search for products"
              type="search"
            />
          </div>
        </div>
      </div>
    </header>

    <section className="border-top">
  <div className="container py-lg-1">
    <div className="overflow-auto" data-simplebar="">
      <div className="nav flex-nowrap justify-content-between gap-4 py-2">
        <Link
          className="nav-link align-items-center animate-underline gap-2 p-0"
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
            <i className="bi-percent text-primary fs-xl" />
          </span>
          <span className="d-block animate-target fw-semibold text-nowrap ms-1">
            Weekly sale
          </span>
        </Link>
        <Link
          className="nav-link align-items-center animate-underline gap-2 p-0"
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
          to="shop-catalog-grocery.html">
          <span
            className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
            style={{
              height: "40px",
              width: "40px",
            }}>
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
