import { Link } from "react-router-dom";
export const Products = () => {
  return (
 <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2>Products</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Dashboard
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Products
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-primary" to="/add-product">
              Add Product
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
              <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                <form className="d-flex" role="search">
                  <input
                    aria-label="Search"
                    className="form-control"
                    placeholder="Search Products"
                    type="search"
                  />
                </form>
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <select className="form-select">
                  <option selected>Status</option>
                  <option value="1">Active</option>
                  <option value="2">Deactive</option>
                  <option value="3">Draft</option>
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
                    <th>Proudct Name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Create at</th>
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
                          id="productOne"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productOne"
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
                        Haldiram's Sev Bhujia
                      </Link>
                    </td>
                    <td>Snack & Munchies</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Active
                      </span>
                    </td>
                    <td>$18.00</td>
                    <td>24 Nov 2022</td>
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
                          id="productTwo"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productTwo"
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
                        NutriChoice Digestive
                      </Link>
                    </td>
                    <td>Bakery & Biscuits</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Active
                      </span>
                    </td>
                    <td>$24.00</td>
                    <td>20 Nov 2022</td>
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
                          id="productThree"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productThree"
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
                        Cadbury 5 Star Chocolate
                      </Link>
                    </td>
                    <td>Snack & Munchies</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Active
                      </span>
                    </td>
                    <td>$3.00</td>
                    <td>14 Nov 2022</td>
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
                          id="productFour"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productFour"
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
                        Onion Flavour Potato
                      </Link>
                    </td>
                    <td>Snack & Munchies</td>
                    <td>
                      <span className="badge bg-light-warning text-dark-warning">
                        Draft
                      </span>
                    </td>
                    <td>$13.00</td>
                    <td>08 Nov 2022</td>
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
                          id="productFive"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productFive"
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
                        Salted Instant Popcorn
                      </Link>
                    </td>
                    <td>Instant Food</td>
                    <td>
                      <span className="badge bg-light-warning text-dark-warning">
                        Draft
                      </span>
                    </td>
                    <td>$9.00</td>
                    <td>09 Nov 2022</td>
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
                          id="productSix"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productSix"
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
                        Blueberry Greek Yogurt
                      </Link>
                    </td>
                    <td>Dairy, Bread & Eggs</td>
                    <td>
                      <span className="badge bg-light-danger text-dark-danger">
                        Deactive
                      </span>
                    </td>
                    <td>$11.00</td>
                    <td>02 Nov 2022</td>
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
                          id="productSeven"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productSeven"
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
                        Britannia Cheese Slices
                      </Link>
                    </td>
                    <td>Dairy, Bread & Eggs</td>
                    <td>
                      <span className="badge bg-light-success text-dark-success">
                        Active
                      </span>
                    </td>
                    <td>$24.00</td>
                    <td>15 Oct 2022</td>
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
                          id="productEight"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productEight"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-8.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Blueberry Greek Yogurt
                      </Link>
                    </td>
                    <td>Instant Food</td>
                    <td>
                      <span className="badge bg-light-danger text-dark-danger">
                        Deactive
                      </span>
                    </td>
                    <td>$12.00</td>
                    <td>24 Oct 2022</td>
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
                          id="productNine"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productNine"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-9.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Slurrp Millet Chocolate
                      </Link>
                    </td>
                    <td>Instant Food</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Active
                      </span>
                    </td>
                    <td>$8.00</td>
                    <td>08 Oct 2022</td>
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
                          id="productTen"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productTen"
                        />
                      </div>
                    </td>
                    <td>
                      <Link to="#!">
                        <img
                          alt=""
                          className="icon-shape icon-md"
                          src="../assets/images/products/product-img-10.jpg"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="text-reset" to="#">
                        Amul Butter - 500 g
                      </Link>
                    </td>
                    <td>Instant Food</td>
                    <td>
                      <span className="badge bg-light-primary text-dark-primary">
                        Active
                      </span>
                    </td>
                    <td>$8.00</td>
                    <td>09 Oct 2022</td>
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
          <div className="border-top d-md-flex justify-content-between align-items-center px-6 py-6">
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