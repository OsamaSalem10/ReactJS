import { Link } from "react-router-dom";

export const AccountHeader = () => {
  return (
     <aside
        className="col-lg-3"
        style={{
          marginTop: "-105px",
        }}>
        <div
          className="offcanvas-lg offcanvas-start sticky-lg-top pe-lg-3 pe-xl-4"
          id="accountSidebar">
          <div
            className="d-none d-lg-block"
            style={{
              height: "105px",
            }}
          />
          <div className="offcanvas-header d-lg-block py-3 p-lg-0">
            <div className="d-flex flex-row flex-lg-column align-items-center align-items-lg-start">
              <div
                className="flex-shrink-0 bg-body-secondary border rounded-circle overflow-hidden"
                style={{
                  height: "64px",
                  width: "64px",
                }}>
                <img alt="Avatar" src="assets/img/account/avatar.jpg" />
              </div>
              <div className="pt-lg-3 ps-3 ps-lg-0">
                <h6 className="mb-1">Michael Williams</h6>
                <p className="fs-sm mb-0">m.williams@example.com</p>
              </div>
            </div>
            <button
              aria-label="Close"
              className="btn-close d-lg-none"
              data-bs-dismiss="offcanvas"
              data-bs-target="#accountSidebar"
              type="button"
            />
          </div>
          <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
            <nav className="list-group list-group-borderless">
              <Link
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/accountProfile">
                <i className="bi-person fs-base opacity-75 me-2" />
                My profile
              </Link>
              <Link
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/accountListings">
                <i className="bi-layers fs-base opacity-75 me-2" />
                My listings
              </Link>
              <Link 
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/accountReviews">
                <i className="bi-star fs-base opacity-75 me-2" />
                Reviews
              </Link>  
              <Link 
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/accountFavorites">
                <i className="bi-heart fs-base opacity-75 me-2" />
                Favorites
              </Link>
              <Link
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/accountPayment">
                <i className="bi-credit-card fs-base opacity-75 me-2" />
                Payment details
              </Link>
              <Link
                aria-current="page"
                className="list-group-item list-group-item-action d-flex align-items-center active"
                to="/accountSettings">
                <i className="bi-gear fs-base opacity-75 me-2" />
                Account settings
              </Link>
              <Link
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/helpCenter">
                <i className="bi-question-circle fs-base opacity-75 me-2" />
                Help center
              </Link>
            </nav>
            <nav className="list-group list-group-borderless pt-3">
              <Link
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="account-signin.html">
                <i className="bi-box-arrow-right fs-base opacity-75 me-2" />
                Sign out
              </Link>
            </nav>
          </div>
        </div>
      </aside>
  );
}