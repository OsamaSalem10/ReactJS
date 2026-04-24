import { Link } from "react-router-dom"

export const VendorList = () => {
    return (
     <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Vendors</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="/">
                    Dashboard
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Vendors
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-light btn-icon" to="/vendors-grid">
              <svg
                className="bi bi-grid"
                fill="currentColor"
                height="18"
                viewBox="0 0 16 16"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </Link>
            <Link className="btn btn-primary btn-icon" to="/vendors-list">
              <svg
                className="bi bi-list-task"
                fill="currentColor"
                height="18"
                viewBox="0 0 16 16"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                  fillRule="evenodd"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <div className="p-6">
            <div className="row">
              <div className="col-md-4 col-12">
                <form className="d-flex" role="search">
                  <input
                    aria-label="Search"
                    className="form-control me-2"
                    placeholder="Search Seller"
                    type="search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Seller Id</th>
                    <th>Store Name</th>
                    <th>Email</th>
                    <th>Gross Sale</th>
                    <th>Earning</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#010</td>
                    <td>
                      <Link className="text-reset" to="#">
                        E-Grocery Super Market
                      </Link>
                    </td>
                    <td>egrocery@dayrep.com</td>
                    <td>$200.00</td>
                    <td>$60.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#009</td>
                    <td>
                      <Link className="text-reset" to="#">
                        DealShare Mart
                      </Link>
                    </td>
                    <td>werve1962@superrito.com</td>
                    <td>$350.00</td>
                    <td>$150.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#008</td>
                    <td>
                      <Link className="text-reset" to="#">
                        DMart
                      </Link>
                    </td>
                    <td>trablinever@armyspy.com</td>
                    <td>$120.00</td>
                    <td>$45.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#007</td>
                    <td>
                      <Link className="text-reset" to="#">
                        Blinkit Store
                      </Link>
                    </td>
                    <td>steened@rhyta.com</td>
                    <td>$1200.00</td>
                    <td>$400.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#006</td>
                    <td>
                      <Link className="text-reset" to="#">
                        StoreFront Super Market
                      </Link>
                    </td>
                    <td>mansper@einrot.com</td>
                    <td>$230.00</td>
                    <td>$50.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#005</td>
                    <td>
                      <Link className="text-reset" to="#">
                        BigBasket
                      </Link>
                    </td>
                    <td>lizin@armyspy.com</td>
                    <td>$560.00</td>
                    <td>$120.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#004</td>
                    <td>
                      <Link className="text-reset" to="#">
                        Swiggy Instamart
                      </Link>
                    </td>
                    <td>tured@jourrapide.com</td>
                    <td>$780.00</td>
                    <td>$360.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#003</td>
                    <td>
                      <Link className="text-reset" to="#">
                        Online Grocery Mart
                      </Link>
                    </td>
                    <td>liturname@einrot.com</td>
                    <td>$460.00</td>
                    <td>$175.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#002</td>
                    <td>
                      <Link className="text-reset" to="#">
                        Spencer
                      </Link>
                    </td>
                    <td>fark1952@rhyta.com</td>
                    <td>$630.00</td>
                    <td>$190.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#001</td>
                    <td>
                      <Link className="text-reset" to="#">
                        E-Grocery Super Market
                      </Link>
                    </td>
                    <td>heathercarpenter@dayrep.com</td>
                    <td>$200.00</td>
                    <td>$80.00</td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="feather-icon icon-more-vertical fs-5" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-trash me-3" />
                              Delete
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square me-3" />
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-top d-md-flex justify-content-between align-items-center p-6">
            <span>Showing 1 to 8 of 12 entries</span>
            <nav className="mt-2 mt-md-0">
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <Link className="page-link" to="#!">
                    Previous
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link active" to="#!">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#!">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#!">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#!">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}   