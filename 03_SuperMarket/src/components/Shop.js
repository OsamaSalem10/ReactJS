import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <main className="content-wrapper">
      <div className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <nav
          aria-label="breadcrumb"
          className="position-relative pt-3 my-3 my-md-4"
          style={{
            zIndex: "1021",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="home-furniture.html">Home</Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              Catalog with filters on top
            </li>
          </ol>
        </nav>
    
        <div
          className="sticky-top bg-body mb-3 mb-sm-4"
          style={{
            marginTop: "-4.5rem",
          }}
        >
          <div className="row align-items-center pt-5">
            <div className="col-md-9 col-sm-9 col-md-9 d-flex gap-2 pb-3 mt-4">
              <div className="container py-lg-1">
                <div className="overflow-auto" data-simplebar="">
                  <div className="nav flex-nowrap justify-content-between gap-4 py-2">
                
                    <Link
                      className="nav-link align-items-center animate-underline gap-2 p-0"
                      to="shop-catalog-grocery.html"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <img
                          alt=""
                          src="assets/img/mega-menu/grocery/th02.png"
                          width="30"
                        />
                      </span>
                      <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                        Easter is coming
                      </span>
                    </Link>
                    <Link
                      className="nav-link align-items-center animate-underline gap-2 m-0"
                      to="shop-catalog-grocery.html"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <img
                          alt=""
                          src="assets/img/mega-menu/grocery/th03.png"
                          width="30"
                        />
                      </span>
                      <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                        Poultry meat
                      </span>
                    </Link>
                    <Link
                      className="nav-link align-items-center animate-underline gap-2 p-0"
                      to="shop-catalog-grocery.html"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <img
                          alt=""
                          src="assets/img/mega-menu/grocery/th04.png"
                          width="30"
                        />
                      </span>
                      <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                        Fresh fruits
                      </span>
                    </Link>
                    <Link
                      className="nav-link align-items-center animate-underline gap-2 p-0"
                      to="shop-catalog-grocery.html"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <img
                          alt=""
                          src="assets/img/mega-menu/grocery/th05.png"
                          width="30"
                        />
                      </span>
                      <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                        St. Patrick's day
                      </span>
                    </Link>
                    <Link
                      className="nav-link align-items-center animate-underline gap-2 p-0"
                      to="shop-catalog-grocery.html"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <img
                          alt=""
                          src="assets/img/mega-menu/grocery/th06.png"
                          width="30"
                        />
                      </span>
                      <span className="d-block animate-target fw-semibold text-nowrap ms-1">
                        Exotic fruits
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <i className="bi-search position-absolute top-50 translate-middle-y d-flex fs-lg ms-3"></i>
             <input
                className="form-icon-start rounded-pill form-control"
                type="text"
                placeholder="Search"
              />
             
             </div>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-5 gy-5"
          id="productGrid"
        >
         
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/01.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/01-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/02.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/02-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/03.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/03-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/01.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/01-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/01.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/01-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/01.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/01-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="animate-underline mb-sm-2">
              <Link
                className="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
                to="shop-product-furniture.html"
              >
                <img
                  alt="Product"
                  className=""
                  src="assets/img/shop/grocery/01.png"
                />
                <img
                  alt="Room"
                  className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                  src="assets/img/shop/furniture/01-hover.jpg"
                />
              </Link>

              <h3 className="mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate"
                  to="shop-product-furniture.html"
                >
                  <span className="animate-target">
                    Soft chair with cushion and wooden legs
                  </span>
                </Link>
              </h3>
              <div className="h6">$245.00</div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100 rounded-pill px-3"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                  type="button"
                >
                  <i className="bi-heart fs-base animate-target" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
