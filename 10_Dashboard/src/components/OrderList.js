import { Link } from "react-router-dom"

export const OrderList = () => {
    return (
       <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div>
          <h2>Order List</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Order List
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <div className="p-6">
            <div className="row justify-content-between">
              <div className="col-md-4 col-12 mb-2 mb-md-0">
                <form className="d-flex" role="search">
                  <input
                    aria-label="Search"
                    className="form-control"
                    placeholder="Search"
                    type="search"
                  />
                </form>
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <select className="form-select">
                  <option selected>Status</option>
                  <option value="Success">Success</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                <thead className="bg-light">
                  <tr>
                    <th>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="checkAll"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkAll"
                        />
                      </div>
                    </th>
                    <th>Image</th>
                    <th>Order Name</th>
                    <th>Customer</th>
                    <th>Date & TIme</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderOne"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderOne"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-1.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1007
                      </Link>
                    </td>
                    <td>Jennifer Sullivan</td>
                    <td>01 May 2023 (10:12 am)</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Success
                      </span>
                    </td>
                    <td>$12.99</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderTwo"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderTwo"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-2.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1006
                      </Link>
                    </td>
                    <td>Willie Hanson</td>
                    <td>20 April 2023 (9:20 am)</td>
                    <td>COD</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Success
                      </span>
                    </td>
                    <td>$8.19</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderThree"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderThree"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-3.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1005
                      </Link>
                    </td>
                    <td>Dori Stewart</td>
                    <td>11 March 2023 (7:12 pm)</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge bg-light-warning text-dark-warning">
                        Pending
                      </span>
                    </td>
                    <td>$8.19</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderFour"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderFour"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-4.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1004
                      </Link>
                    </td>
                    <td>Ezekiel Rogerson</td>
                    <td>09 March 2023 (6:23 pm)</td>
                    <td>Stripe</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Success
                      </span>
                    </td>
                    <td>$23.11</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderFive"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderFive"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-5.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1003
                      </Link>
                    </td>
                    <td>Maria Roux</td>
                    <td>18 Feb 2022 (12:20 pm)</td>
                    <td>COD</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Success
                      </span>
                    </td>
                    <td>$2.00</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderSix"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderSix"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-6.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1002
                      </Link>
                    </td>
                    <td>Robert Donald</td>
                    <td>12 Feb 2022 (4:56 pm)</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge bg-light-danger text-dark-danger">
                        Cancel
                      </span>
                    </td>
                    <td>$56.00</td>
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
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          defaultValue=""
                          id="orderSeven"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="orderSeven"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-7.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        FC#1001
                      </Link>
                    </td>
                    <td>Diann Watson</td>
                    <td>22 Jan 2023 (1:20 pm)</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Success
                      </span>
                    </td>
                    <td>$23.00</td>
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