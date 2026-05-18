import {Link} from "react-router-dom"
export const Shop = () => {
  return (
    <main>
      <div className="mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#!">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#!">Shop</Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    Snacks & Munchies
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-8 mb-lg-14 mb-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-lg-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-3 mb-md-0">
                    <span className="text-dark">24</span>
                    Products found
                  </p>
                </div>
                <div className="d-md-flex justify-content-between align-items-center">
                  <div>
                    <Link className="text-muted me-3" to="shop-list.html">
                      <i className="bi bi-list-ul" />
                    </Link>
                    <Link className="me-3 active" to="shop-grid.html">
                      <i className="bi bi-grid" />
                    </Link>
                    <Link
                      className="me-3 text-muted"
                      to="shop-grid-3-column.html"
                    >
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>
                  </div>
                  <div className="d-flex mt-2 mt-lg-0">
                    <div className="me-2 flex-grow-1">
                      <select className="form-select">
                        <option selected>Show: 50</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    <div>
                      <select className="form-select">
                        <option selected>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low">Price: High to Low</option>
                        <option value="Release Date">Release Date</option>
                        <option value="Avg. Rating">Avg. Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mt-2">
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-1.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Snack & Munchies</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Haldiram's Sev Bhujia
                        </Link>
                      </h2>
                      <div>
                        <small className="text-warning">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5(149)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-2.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Bakery & Biscuits</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          NutriChoice Digestive
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (25)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$24</span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-3.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Bakery & Biscuits</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Cadbury 5 Star Chocolate
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </small>
                        <span className="text-muted small">5 (469)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$32</span>
                          <span className="text-decoration-line-through text-muted">
                            $35
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-4.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Snack & Munchies</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Onion Flavour Potato
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <i className="bi bi-star" />
                        </small>
                        <span className="text-muted small">3.5 (456)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$3</span>
                          <span className="text-decoration-line-through text-muted">
                            $5
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-5.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Instant Food</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Salted Instant Popcorn
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (39)</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">
                            $18
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-6.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Blueberry Greek Yogurt
                        </Link>
                      </h2>
                      <div>
                        <small className="text-warning">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (189)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-7.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Britannia Cheese Slices
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </small>
                        <span className="text-muted small">5 (345)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$24</span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-8.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Instant Food</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Kellogg's Original Cereals
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4 (90)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$32</span>
                          <span className="text-decoration-line-through text-muted">
                            $35
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-9.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Snack & Munchies</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Slurrp Millet Chocolate
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (67)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$3</span>
                          <span className="text-decoration-line-through text-muted">
                            $5
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/singleshop">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-10.jpg"
                          />
                        </Link>
                        <div className="card-product-action">
                          <Link
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            to="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </Link>
                          <Link
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            to="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <Link
                          className="text-decoration-none text-muted"
                          to="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link
                          className="text-inherit text-decoration-none"
                          to="/singleshop"
                        >
                          Amul Butter - 500 g
                        </Link>
                      </h2>
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <i className="bi bi-star" />
                        </small>
                        <span className="text-muted small">3.5 (89)</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">
                            $18
                          </span>
                        </div>
                        <div>
                          <Link className="btn btn-primary btn-sm" to="#!">
                            <svg
                              className="feather feather-plus"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="12" x2="12" y1="5" y2="19" />
                              <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-8">
                <div className="col">
                  <nav>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <Link
                          aria-label="Previous"
                          className="page-link mx-1"
                          to="#"
                        >
                          <i className="bi bi-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link mx-1 active" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link mx-1" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link mx-1" to="#">
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link mx-1" to="#">
                          12
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          aria-label="Next"
                          className="page-link mx-1"
                          to="#"
                        >
                          <i className="bi bi-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
