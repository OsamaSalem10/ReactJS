import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-lg-5 pb-5">
        <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
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
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill pe-none active"
                    to="account-marketplace-dashboard.html"
                  >
                    <i className="bi-grid fs-base opacity-75 me-2" />
                    Dashboard
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-products.html"
                  >
                    <i className="bi-layers fs-base opacity-75 me-2" />
                    Products (4)
                  </Link>
                  <Link     
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-sales.html"
                  >
                    <i className="bi-pie-chart fs-base opacity-75 me-2" />
                    Sales
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-payouts.html"
                  >
                    <i className="bi-currency-dollar fs-base opacity-75 me-2" />
                    Payouts
                  </Link>
                </nav>
                <h6 className="pt-4 ps-2 ms-1">User account</h6>
                <nav className="list-group list-group-borderless">
                  <Link 
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-purchases.html"
                  >
                    <i className="bi-bag fs-base opacity-75 me-2" />
                    Purchases (6)
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-favorites.html"
                  >
                    <i className="bi-heart fs-base opacity-75 me-2" />
                    Favorites
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-marketplace-settings.html"
                  >
                    <i className="bi bi-gear fs-base opacity-75 me-2" />
                    Settings
                  </Link>  
                  <Link 
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                    to="account-signin.html"
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
          <div className="col-lg-9 pt-2 pt-xl-3">
            <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-2 mb-md-3">
              <h1 className="h2 mb-0">Dashboard</h1>
              <div
                className="position-relative"
                style={{
                  width: "190px",
                }}
              >
                <i className="bi-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
                <select
                  aria-label="Period select"
                  className="form-select form-icon-start rounded-pill"
                  data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-icon-start", "rounded-pill"]                  },                  "removeItemButton": false                }'
                >
                  <option value="Current">Current month</option>
                  <option value="Last month">Last month</option>
                  <option value="Last 3 months">Last 3 months</option>
                  <option value="Last 6 months">Last 6 months</option>
                  <option value="Last year">Last year</option>
                </select>
              </div>
            </div>
            <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
              <div className="col-md-4 col-sm-6">
                <div className="h-100 bg-success-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Earnings (before taxes)</h2>
                  <div className="h2 pb-1 mb-2">$842.00</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    Sales 01/09/2024 - 13/09/2024
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="h-100 bg-info-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Your balance</h2>
                  <div className="h2 pb-1 mb-2">$735.00</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    To be paid on 15/09/2024
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="h-100 bg-warning-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Lifetime earnings</h2>
                  <div className="h2 pb-1 mb-2">$9,156.74</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    Based on list price
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-3 mb-2 mb-sm-3">
              <div className="border rounded-4 py-4 px-3 px-sm-4">
                <h2 className="h5 text-center text-sm-start mb-sm-4">
                  Earnings history
                </h2>
                <canvas data-chart='{                  "type": "line",                  "data": {                    "labels": ["22 Aug", "", "24 Aug", "", "26 Aug", "", "28 Aug", "", "30 Aug", "", "01 Sep", "", "03 Sep", "", "05 Sep"],                    "datasets": [                      {                        "label": "Sales, USD",                        "fill": true,                        "data": [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0, 100, 0],                        "backgroundColor": "rgba(51,179,107,.1)",                        "borderWidth": 2,                        "borderColor": "rgba(51,179,107,.6)",                        "pointBackgroundColor": "#33b36b",                        "pointBorderWidth": 3,                        "pointBorderColor": "#33b36b",                        "pointHoverBorderColor": "#33b36b",                        "pointHoverBorderWidth": 6                      }                    ]                  },                  "options": {                    "responsive": true,                    "scales": {                      "y": {                        "beginAtZero": true,                        "border": {                          "color": "rgba(133,140,151,.18)"                        },                        "grid": {                          "color": "rgba(133,140,151,.18)"                        }                      },                      "x": {                        "border": {                          "color": "rgba(133,140,151,.18)"                        },                        "grid": {                          "color": "rgba(133,140,151,.18)"                        }                      }                    }                  }                }' />
              </div>
            </div>
            <div className="border rounded-4 py-4 px-3 px-sm-4">
              <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "date", "tendered", "earning"]}'>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mb-2 mb-sm-3 mb-md-4">
                  <h2 className="h5 text-center text-sm-start mb-0">
                    Most recent sales
                  </h2>
                  <div
                    className="position-relative w-100"
                    style={{
                      maxWidth: "250px",
                    }}
                  >
                    <i className="bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <input
                      className="product-search form-control form-icon-start rounded-pill"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
                <table className="table align-middle fs-sm mb-0">
                  <thead>
                    <tr>
                      <th className="ps-0" scope="col">
                        <span className="fw-normal text-body">Product</span>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <button
                          className="btn fw-normal text-body product-sort p-0"
                          data-sort="date"
                          type="button"
                        >
                          Date
                        </button>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <span className="fw-normal text-body">Status</span>
                      </th>
                      <th
                        className="text-end d-none d-sm-table-cell"
                        scope="col"
                      >
                        <button
                          className="btn fw-normal text-body product-sort p-0 me-n2"
                          data-sort="tendered"
                          type="button"
                        >
                          Tendered
                        </button>
                      </th>
                      <th className="text-end pe-0" scope="col">
                        <button
                          className="btn fw-normal text-body product-sort p-0 me-n2"
                          data-sort="earning"
                          type="button"
                        >
                          Earning
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="product-list">
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{
                              "--cz-aspect-ratio": "calc(52 / 66 * 100%)",
                              width: "66px",
                            }}
                          >
                            <img
                              alt=""
                              className="hover-effect-target"
                              src="assets/img/account/products/03.jpg"
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-info bg-info-subtle rounded-pill d-md-none mb-1">
                              Pending
                            </span>
                            <h6 className="product mb-1 mb-md-0">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="shop-product-marketplace.html"
                              >
                                iPhone 15 pro mockups
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              $19.00
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              June 30, 2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        June 30, 2024
                        <span className="date visually-hidden">1719745200</span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-info bg-info-subtle rounded-pill">
                          Pending
                        </span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">
                        $19.00
                      </td>
                      <td className="earning text-end py-3 pe-0">$14.25</td>
                    </tr>
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{
                              "--cz-aspect-ratio": "calc(52 / 66 * 100%)",
                              width: "66px",
                            }}
                          >
                            <img
                             alt=""
                              className="hover-effect-target"
                              src="assets/img/account/products/04.jpg"
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                              Completed
                            </span>
                            <h6 className="product mb-1 mb-md-0">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="shop-product-marketplace.html"
                              >
                                A collection of colorful items
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              $21.00
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              June 29, 2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        June 29, 2024
                        <span className="date visually-hidden">1719658800</span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">
                          Completed
                        </span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">
                        $21.00
                      </td>
                      <td className="earning text-end py-3 pe-0">$15.75</td>
                    </tr>
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{
                              "--cz-aspect-ratio": "calc(52 / 66 * 100%)",
                              width: "66px",
                            }}
                          >
                            <img
                             alt=""
                              className="hover-effect-target"
                              src="assets/img/account/products/05.jpg"
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                              Completed
                            </span>
                            <h6 className="product mb-1 mb-md-0">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="shop-product-marketplace.html"
                              >
                                House plants website template
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              $35.00
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              June 28, 2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        June 28, 2024
                        <span className="date visually-hidden">1719572400</span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">
                          Completed
                        </span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">
                        $35.00
                      </td>
                      <td className="earning text-end py-3 pe-0">$26.25</td>
                    </tr>
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{
                              "--cz-aspect-ratio": "calc(52 / 66 * 100%)",
                              width: "66px",
                            }}
                          >
                            <img
                             alt=""
                              className="hover-effect-target"
                              src="assets/img/account/products/07.jpg"
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                              Completed
                            </span>
                            <h6 className="product mb-1 mb-md-0">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="shop-product-marketplace.html"
                              >
                                A stunning set of tablet pro mockups
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              $18.00
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              June 27, 2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        June 27, 2024
                        <span className="date visually-hidden">1719486000</span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">
                          Completed
                        </span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">
                        $18.00
                      </td>
                      <td className="earning text-end py-3 pe-0">$13.50</td>
                    </tr>
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{
                              "--cz-aspect-ratio": "calc(52 / 66 * 100%)",
                              width: "66px",
                            }}
                          >
                            <img
                             alt=""
                              className="hover-effect-target"
                              src="assets/img/account/products/08.jpg"
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-danger bg-danger-subtle rounded-pill d-md-none mb-1">
                              Canceled
                            </span>
                            <h6 className="product mb-1 mb-md-0">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="shop-product-marketplace.html"
                              >
                                Multi device mockup PSD
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              $27.00
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              June 26, 2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        June 26, 2024
                        <span className="date visually-hidden">1719399600</span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-danger bg-danger-subtle rounded-pill">
                          Canceled
                        </span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">
                        $27.00
                      </td>
                      <td className="earning text-end py-3 pe-0">$0.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex align-items-center justify-content-between pt-4 gap-3">
                  <div className="fs-sm">
                    Showing <span className="fw-semibold">5</span> of{" "}
                    <span className="fw-semibold">20</span>
                    <span className="d-none d-sm-inline"> results</span>
                  </div>
                  <nav aria-label="Pagination">
                    <ul className="pagination">
                      <li aria-current="page" className="page-item active">
                        <span className="page-link">
                          1<span className="visually-hidden">(current)</span>
                        </span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
