import { Link } from "react-router-dom";

export const Reviews = () => {
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div>
              <h2>Reviews</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-inherit" to="/">
                      Dashboard
                    </Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    Reviews
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
                        placeholder="Search Reviews"
                        type="search"
                      />
                    </form>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <select className="form-select">
                      <option selected>Select Rating</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
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
                        <th>Product</th>
                        <th>Name</th>
                        <th>Reviews</th>
                        <th>Rating</th>
                        <th>Date</th>
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
                              id="reviewOne"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewOne"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Haldiram's Sev Bhujia
                          </Link>
                        </td>
                        <td>Barry McKenzie</td>
                        <td>
                          <span className="text-truncate">
                            Nice & fresh oranges with value for money..
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewTwo"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewTwo"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            NutriChoice Digestive
                          </Link>
                        </td>
                        <td>Dale Jenkins</td>
                        <td>
                          <span className="text-truncate">
                            Nice product 👌 quality 👌...
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="checkAllThree"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkAllThree"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Cadbury 5 Star Chocolate
                          </Link>
                        </td>
                        <td>Michael Phillips</td>
                        <td>
                          <span className="text-truncate">
                            Good quality product delivered...
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewFour"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewFour"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Onion Flavour Potato
                          </Link>
                        </td>
                        <td>James Parker</td>
                        <td>
                          <span className="text-truncate">
                            Excellent Quality by an Indian company..
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewFive"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewFive"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Salted Instant Popcorn
                          </Link>
                        </td>
                        <td>William Hansen</td>
                        <td>
                          <span className="text-truncate">
                            Very expensive. Cheaper at local stores...
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewSix"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewSix"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Blueberry Greek Yogurt
                          </Link>
                        </td>
                        <td>Helen Speller</td>
                        <td>
                          <span className="text-truncate">
                            Etiam in felis eget eros dictum
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewSeven"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewSeven"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Britannia Cheese Slices
                          </Link>
                        </td>
                        <td>Larry Anderson</td>
                        <td>
                          <span className="text-truncate">
                            is good but had to wait for a late delivery.
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewEight"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewEight"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Kellogg's Original Cereals
                          </Link>
                        </td>
                        <td>William McCulloch</td>
                        <td>
                          <span className="text-truncate">
                            Very expensive. Cheaper at local stores
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewNine"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewNine"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Slurrp Millet Chocolate
                          </Link>
                        </td>
                        <td>Louise Brown</td>
                        <td>
                          <span className="text-truncate">
                            My toddler loved the flavor and enjoys...
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              defaultValue=""
                              id="reviewTen"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reviewTen"
                            />
                          </div>
                        </td>
                        <td>
                          <Link className="text-reset" to="#">
                            Amul Butter - 500 g
                          </Link>
                        </td>
                        <td>John Meyer</td>
                        <td>
                          <span className="text-truncate">
                            Good Product but packaging needs...
                          </span>
                        </td>
                        <td>
                          <div>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-warning" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                            <span>
                              <i className="bi bi-star-fill text-light" />
                            </span>
                          </div>
                        </td>
                        <td>23 Nov,2022</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              aria-expanded="false"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
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
      </div>
    </main>
  );
};
