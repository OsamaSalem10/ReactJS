import { Link, useLocation } from "react-router-dom";
export const AccountNavbar = () => {
  const location = useLocation();
  return (
    <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
      <div className="pt-10 pe-lg-10">
        <img
          alt=""
          className="img-fluid rounded-circle w-25 mb-4"
          src="../assets/images/avatar/avatar-1.jpg"
        />
        <h4 className="mb-1">John Doe</h4>
        <div className="small text-muted">
          Manage your account settings and set e-mail preferences.
        </div>
      </div>
      <div className="pt-4 pe-lg-10">
        <ul className="nav flex-column nav-pills nav-pills-dark">
          <li className="nav-item">
            <Link
              aria-current="page"
              className={`nav-link ${location.pathname === "/account-orders" ? "active" : ""}`}
              to="/account-orders"
            >
              <i className="bi bi-cart me-2" />
              Your Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/account-settings" ? "active" : ""}`}
              to="/account-settings"
            >
              <i className="bi bi-gear me-2" />
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/account-address" ? "active" : ""}`}
              to="/account-address"
            >
              <i className="bi bi-geo-alt me-2" />
              Address
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/account-payment-method" ? "active" : ""}`}
              to="/account-payment-method"
            >
              <i className="bi bi-credit-card me-2" />
              Payment Method
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/account-notification" ? "active" : ""}`}
              to="/account-notification"
            >
              <i className="bi bi-bell me-2" />
              Notification
            </Link>
          </li>
          <li className="nav-item">
            <hr />
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/account-logout" ? "active" : ""}`}
              to="/account-logout"
            >
              <i className="bi bi-box-arrow-in-right me-2" />
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
