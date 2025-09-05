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
                    <a href="#!">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#!">Shop</a>
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
                    <a className="text-muted me-3" href="shop-list.html">
                      <i className="bi bi-list-ul" />
                    </a>
                    <a className="me-3 active" href="shop-grid.html">
                      <i className="bi bi-grid" />
                    </a>
                    <a
                      className="me-3 text-muted"
                      href="shop-grid-3-column.html"
                    >
                      <i className="bi bi-grid-3x3-gap" />
                    </a>
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
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-1.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Snack & Munchies</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Haldiram's Sev Bhujia
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-2.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Bakery & Biscuits</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          NutriChoice Digestive
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-3.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Bakery & Biscuits</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Cadbury 5 Star Chocolate
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-4.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Snack & Munchies</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Onion Flavour Potato
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-5.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Instant Food</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Salted Instant Popcorn
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
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
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-6.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Blueberry Greek Yogurt
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-7.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Britannia Cheese Slices
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-8.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Instant Food</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Kellogg's Original Cereals
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-9.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Snack & Munchies</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Slurrp Millet Chocolate
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="shop-single.html">
                          <img
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                            src="../assets/images/products/product-img-10.jpg"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            className="btn-action"
                            data-bs-target="#quickViewModal"
                            data-bs-toggle="modal"
                            href="#!"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-html="true"
                              data-bs-toggle="tooltip"
                              title="Quick View"
                            />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="shop-wishlist.html"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            className="btn-action"
                            data-bs-html="true"
                            data-bs-toggle="tooltip"
                            href="#!"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          className="text-decoration-none text-muted"
                          href="#!"
                        >
                          <small>Dairy, Bread & Eggs</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          className="text-inherit text-decoration-none"
                          href="shop-single.html"
                        >
                          Amul Butter - 500 g
                        </a>
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
                          <a className="btn btn-primary btn-sm" href="#!">
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
                          </a>
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
                        <a
                          aria-label="Previous"
                          className="page-link mx-1"
                          href="#"
                        >
                          <i className="bi bi-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link mx-1 active" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link mx-1" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link mx-1" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link mx-1" href="#">
                          12
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          aria-label="Next"
                          className="page-link mx-1"
                          href="#"
                        >
                          <i className="bi bi-chevron-right" />
                        </a>
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
