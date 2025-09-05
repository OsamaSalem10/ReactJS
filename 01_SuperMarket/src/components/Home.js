
import { Carousel } from "react-responsive-carousel";
export const Home = () => {
  
  return (
    <main className="container-fluid">
      <section className="mt-8">
        <div className="">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus
            autoPlay
            className="hero-slider"
          >
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-1.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-white display-5 fw-bold mt-4">
                  SuperMarket For Fresh Grocery
                </h1>
                <p className="lead text-white">
                  Introduced a new model for online grocery shopping and
                  convenient home delivery at any time.
                </p>
                <a className="btn btn-dark mt-3" to="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-2.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-dark display-5 fw-bold mt-4">
                  Opening Sale
                  <br />
                  Discount up to
                  <span className="text-primary display-6">50%</span>
                </h1>
                <p className="lead">
                  Snack on late-night munchies of delicious nuts & you’re
                  guaranteed happiness before you doze!
                </p>
                <a className="btn btn-dark mt-3" to="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-3.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
                width: "100%",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-dark display-5 fw-bold mt-4">
                  Midnight Munch Combo
                </h1>
                <p className="lead">
                  Snack on late-night munchies of delicious nuts & you’re
                  guaranteed happiness before you doze!
                </p>
                <a className="btn btn-dark mt-3" to="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="">
          <div className="row">
            <div className="col-12">
              <div className="mb-8">
                <h3 className="mb-0">Shop by Category</h3>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-dairy-bread-eggs.jpg"
                    />
                    <div className="text-truncate">Dairy, Bread & Eggs</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-snack-munchies.jpg"
                    />
                    <div className="text-truncate">Snack & Munchies</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-bakery-biscuits.jpg"
                    />
                    <div className="text-truncate">Bakery & Biscuits</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-instant-food.jpg"
                    />
                    <div className="text-truncate">Instant Food</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-tea-coffee-drinks.jpg"
                    />
                    <div className="text-truncate">Tea, Coffee & Drinks</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-fruits-vegetables.jpg"
                    />
                    <div className="text-truncate">Fruits & Vegetables</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-cold-drinks-juices.jpg"
                    />
                    <div className="text-truncate">Cold Drinks & Juices</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-chicken-meat-fish.jpg"
                    />
                    <div className="text-truncate">Chicken, Meat & Fish</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-baby-care.jpg"
                    />
                    <div className="text-truncate">Baby Care</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-cleaning-essentials.jpg"
                    />
                    <div className="text-truncate">Cleaning Essentials</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-pet-care.jpg"
                    />
                    <div className="text-truncate">Pet Care</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                to="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-atta-rice-dal.jpg"
                    />
                    <div className="text-truncate">Atta, Rice & Dal</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-lg-0">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(./assets/images/banner/grocery-banner.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">30%</span>
                      Off
                    </p>
                    <a className="btn btn-dark" to="#!">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(./assets/images/banner/grocery-banner-2.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">25%</span>
                      Off
                    </p>
                    <a className="btn btn-dark" to="#!">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">Popular Products</h3>
            </div>
          </div>
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <div className="position-absolute top-0 start-0">
                      <span className="badge bg-danger">Sale</span>
                    </div>
                    <a to="#!">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-1.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Snack & Munchies</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <div className="position-absolute top-0 start-0">
                      <span className="badge bg-success">14%</span>
                    </div>
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-2.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Bakery & Biscuits</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-3.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Bakery & Biscuits</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-4.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                    <div className="position-absolute top-0 start-0">
                      <span className="badge bg-danger">Hot</span>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Snack & Munchies</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-5.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Instant Food</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <div className="position-absolute top-0 start-0">
                      <span className="badge bg-danger">Sale</span>
                    </div>
                    <a to="#!">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-6.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Dairy, Bread & Eggs</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-7.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Dairy, Bread & Eggs</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-8.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Instant Food</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-9.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Snack & Munchies</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
            <div className="col-12 col-md-6  mb-8">
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    <a to="./pages/shop-single.html">
                      <img
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        src="assets/images/products/product-img-10.jpg"
                      />
                    </a>
                    <div className="card-product-action">
                      <a
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
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="../pages/shop-wishlist.html"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart" />
                      </a>
                      <a
                        className="btn-action"
                        data-bs-html="true"
                        data-bs-toggle="tooltip"
                        to="#!"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" to="#!">
                      <small>Dairy, Bread & Eggs</small>
                    </a>
                  </div>
                  <h2 className="fs-6">
                    <a
                      className="text-inherit text-decoration-none"
                      to="./pages/shop-single.html"
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
                      <a className="btn btn-primary btn-sm" to="#!">
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
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="">
          <div className="row align-items-center mb-8">
            <div className="col-md-8 col-12">
              <div className="d-flex">
                <div className="mt-1">
                  <svg
                    className="bi bi-journal text-primary"
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 16 16"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>
                </div>
                <div className="ms-3">
                  <h3 className="mb-0">Our most popular recipes</h3>
                  <p className="mb-0">
                    Check out most popular recipes of all time.
                  </p>
                </div>
                <div />
              </div>
            </div>
            <div className="col-md-4 text-end d-none d-md-block">
              <a className="btn btn-primary" href="#">
                View all recipes
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      alt=""
                      className="img-fluid rounded w-100"
                      src="../assets/images/blog/blog-img-1.jpg"
                    />
                  </div>
                </a>
              </div>
              <div>
                <h4 className="h5">
                  <a className="text-inherit" href="#!">
                    Spaghetti with Crispy Zucchini
                  </a>
                </h4>
                <p>
                  Praesent vestibulum magna lacinia augue mollisvel aliquet
                  massa posuere. Duis et mauris tortor.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    className="bi bi-clock text-dark"
                    fill="currentColor"
                    height="12"
                    viewBox="0 0 16 16"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">15</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      alt=""
                      className="img-fluid rounded w-100"
                      src="../assets/images/blog/blog-img-2.jpg"
                    />
                  </div>
                </a>
              </div>
              <div>
                <h4 className="h5">
                  <a className="text-inherit" href="#!">
                    Almond Butter Chocolate Chip Zucchini Bars
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur sit amet tincidunt
                  ellentesque aliquet ligula in ultrices congue.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    className="bi bi-clock text-dark"
                    fill="currentColor"
                    height="12"
                    viewBox="0 0 16 16"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">18</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      alt=""
                      className="img-fluid rounded w-100"
                      src="../assets/images/blog/blog-img-3.jpg"
                    />
                  </div>
                </a>
              </div>
              <div>
                <h4 className="h5">
                  <a className="text-inherit" href="#!">
                    Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                  </a>
                </h4>
                <p>
                  Praesent vestibulum magna lacinia augue mollisvel aliquet
                  massa posuere. Duis et mauris tortor.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    className="bi bi-clock text-dark"
                    fill="currentColor"
                    height="12"
                    viewBox="0 0 16 16"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">20</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      alt=""
                      className="img-fluid rounded w-100"
                      src="../assets/images/blog/blog-img-4.jpg"
                    />
                  </div>
                </a>
              </div>
              <div>
                <h4 className="h5">
                  <a className="text-inherit" href="#!">
                    Simple Homemade Tomato Soup
                  </a>
                </h4>
                <p>
                  Aliquam tempus velit augue, sodales tincidunt augue ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    className="bi bi-clock text-dark"
                    fill="currentColor"
                    height="12"
                    viewBox="0 0 16 16"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">9</span>
                    min
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
};
