import { Link } from "react-router-dom";

export const Categories = () => {
  return (
  <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
          <div>
            <h2>Categories</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Dashboard
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Categories
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-primary" to="/add-category">
              Add New Category
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <div className="px-6 py-6">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                <form className="d-flex" role="search">
                  <input
                    aria-label="Search"
                    className="form-control"
                    placeholder="Search Category"
                    type="search"
                  />
                </form>
              </div>
              <div className="col-xl-2 col-md-4 col-12">
                <select className="form-select">
                  <option selected>Status</option>
                  <option value="Published">Published</option>
                  <option value="Unpublished">Unpublished</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
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
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Proudct</th>
                    <th>Status</th>
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
                          id="categoryOne"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryOne"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/snacks.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Snack & Munchies
                      </Link>
                    </td>
                    <td>12</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryTwo"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryTwo"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/bakery.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Bakery & Biscuits
                      </Link>
                    </td>
                    <td>8</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryThree"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryThree"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/baby-food.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Baby Care
                      </Link>
                    </td>
                    <td>32</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryFour"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryFour"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/wine.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Cold Drinks & Juices
                      </Link>
                    </td>
                    <td>34</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryFive"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryFive"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/toiletries.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Toiletries
                      </Link>
                    </td>
                    <td>23</td>
                    <td>
                      <span className="badge bg-light-danger text-dark-danger">
                        Unpublished
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categorySeven"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categorySeven"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/dairy.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Dairy, Bread & Eggs
                      </Link>
                    </td>
                    <td>16</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryEight"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryEight"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/fish.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Chicken, Meat & Fish
                      </Link>
                    </td>
                    <td>14</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryNine"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryNine"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/fruit.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Fruits & Vegetables
                      </Link>
                    </td>
                    <td>32</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Published
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
                          id="categoryTen"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="categoryTen"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-sm"
                          src="../assets/images/icons/petfoods.svg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Pet Food
                      </Link>
                    </td>
                    <td>25</td>
                    <td>
                      <span className="badge bg-light-danger text-dark-danger">
                        Unpublished
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <Link
                          aria-expanded="false"
                          className="text-reset"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i className="bi bi-three-dots-vertical fs-5" />
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
          <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
            <span>Showing 1 to 8 of 12 entries</span>
            <nav>
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
    );
};