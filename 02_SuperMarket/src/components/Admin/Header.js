import { Link, useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") {
    return;
  }
  return (
    <aside className="col-lg-3">
      <div
        className="d-none d-lg-block"
        style={{
          marginTop: "-105px",
        }}
      />
      <div
        className="offcanvas-lg offcanvas-start sticky-lg-top pe-lg-0 pe-xl-4"
        id="accountSidebar"
      >
        <div
          className="d-none d-lg-block"
          style={{
            paddingTop: "105px",
          }}
        />
        <div className="offcanvas-header align-items-start d-lg-block py-3 p-lg-0">
          <div className="d-flex align-items-start flex-lg-column gap-lg-3">
            <div
              className="ratio ratio-1x1 border rounded-circle overflow-hidden d-none d-lg-block"
              style={{
                width: "86px",
              }}
            >
              <img alt="" src="assets/img/account/avatar.png" />
            </div>
            <div
              className="ratio ratio-1x1 border rounded-circle overflow-hidden flex-shrink-0 d-lg-none"
              style={{
                width: "48px",
              }}
            >
              <img alt="" src="assets/img/account/avatar.png" />
            </div>
            <div className="w-100 ps-2 ms-1 ms-lg-0 ps-lg-0">
              <h4 className="h6 mb-1 mb-lg-2">Createx Studio</h4>
              <p className="fs-sm mb-0">
                Digital products & bespoke development
              </p>
            </div>
          </div>
          <button
            aria-label="Close"
            className="btn-close d-lg-none mt-n2"
            data-bs-dismiss="offcanvas"
            data-bs-target="#accountSidebar"
            type="button"
          />
        </div>
        <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
          <nav className="list-group list-group-borderless">
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill  ${location.pathname === "/dashboard" ? "active" : ""}`}
              to="/dashboard"
            >
              <i className="bi-grid fs-base opacity-75 me-2" />
              Dashboard
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardProducts" ? "active" : ""}`}
              to="/dashboardProducts"
            >
              <i className="bi-layers fs-base opacity-75 me-2" />
              Products (4)
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardSales" ? "active" : ""}`}
              to="/dashboardSales"
            >
              <i className="bi-pie-chart fs-base opacity-75 me-2" />
              Sales
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardPayouts" ? "active" : ""}`}
              to="/dashboardPayouts"
            >
              <i className="bi-currency-dollar fs-base opacity-75 me-2" />
              Payouts
            </Link>
          </nav>
          <h6 className="pt-4 ps-2 ms-1">User account</h6>
          <nav className="list-group list-group-borderless">
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardPurchases" ? "active" : ""}`}
              to="/dashboardPurchases"
            >
              <i className="bi-bag fs-base opacity-75 me-2" />
              Purchases (6)
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardFavorites" ? "active" : ""}`}
              to="/dashboardFavorites"
            >
              <i className="bi-heart fs-base opacity-75 me-2" />
              Favorites
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/dashboardSettings" ? "active" : ""}`}
              to="/dashboardSettings"
            >
              <i className="bi bi-gear fs-base opacity-75 me-2" />
              Settings
            </Link>
            <Link
              className={`list-group-item list-group-item-action d-flex align-items-center rounded-pill ${location.pathname === "/Signin" ? "active" : ""}`}
              to="/Signin"
            >
              <i className="bi bi-box-arrow-right fs-base opacity-75 me-2" />
              Log out
            </Link>
          </nav>
        </div>
        <div className="offcanvas-header d-lg-block p-lg-0">
          <button
            className="btn btn-dark rounded-pill w-100 animate-scale mt-lg-4"
            type="button"
          >
            <i className="bi-plus-circle fs-base animate-target me-2 ms-n1" />
            Add product
          </button>
        </div>
      </div>
    </aside>
  );
};
