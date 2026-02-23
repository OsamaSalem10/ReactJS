import { Link } from "react-router-dom";
export const DetailsProdect = () => {
  return (
    <main className="content-wrapper">
      <nav
        aria-label="breadcrumb"
        className="container pt-2 pt-xxl-3 my-3 my-md-4"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="home-fashion-v1.html">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="shop-catalog-fashion.html">Shop</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            Product page
          </li>
        </ol>
      </nav>
      <section className="container">
        <div className="row">
          <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <div className="position-relative">
              <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-3 mt-sm-4 ms-3 ms-sm-4">
                Sale
              </span>
              <button
                aria-label="Add to Wishlist"
                className="btn btn-icon btn-secondary animate-pulse fs-lg bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-2 mt-sm-3 me-2 me-sm-3"
                data-bs-custom-class="tooltip-sm"
                data-bs-placement="top"
                data-bs-title="Add to Wishlist"
                data-bs-toggle="tooltip"
                type="button"
              >
                <i className="bi-heart animate-target" />
              </button>
              <Link
                className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden mb-3 mb-sm-4 mb-md-3 mb-lg-4"
                data-gallery="product-gallery"
                data-glightbox=""
                to="assets/img/shop/fashion/product/01.png"
              >
                <i className="bi-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                <div
                  className="ratio hover-effect-target bg-body-tertiary rounded"
                  style={{
                    "--cz-aspect-ratio": "calc(706 / 636 * 100%)",
                  }}
                >
                  <img alt="" src="/assets/img/shop/grocery/product/01.png" />
                </div>
              </Link>
            </div>

            <button
              aria-controls="morePictures"
              aria-expanded="false"
              aria-label="Show / hide pictures"
              className="btn btn-lg btn-outline-secondary w-100 collapsed d-md-none"
              data-bs-target="#morePictures"
              data-bs-toggle="collapse"
              data-label-collapsed="Show more pictures"
              data-label-expanded="Show less pictures"
              type="button"
            >
              <i className="collapse-toggle-icon bi-chevron-down fs-lg ms-2 me-n2" />
            </button>
          </div>
          <div className="col-md-6">
            <div className="ps-md-4 ps-xl-5">
              <Link
                className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3"
                to="#reviews"
              >
                <div className="d-flex gap-1 fs-sm">
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star text-body-tertiary opacity-75" />
                </div>
                <span className="text-body-tertiary fs-sm">23 reviews</span>
              </Link>
              <h1 className="h3">Denim midi skirt with pockets</h1>
              <p className="fs-sm mb-0">
                Made from high-quality denim fabric, this midi skirt offers
                durability and comfort for all-day wear. The mid-length design
                strikes the perfect balance between casual and chic, making it
                suitable for various occasions, from casual outings to
                semi-formal events.
              </p>
              <div className="collapse" id="moreDescription">
                <div className="fs-sm pt-3">
                  <p>
                    One of the standout features of this skirt is its functional
                    pockets. With two spacious pockets at the front, you can
                    conveniently carry your essentials such as keys, phone, or
                    wallet without the need for a bulky bag. The pockets also
                    add a touch of utility and flair to the overall look.
                  </p>
                  <p className="mb-0">
                    The skirt's classic denim color and timeless design make it
                    easy to pair with a variety of tops, blouses, and footwear,
                    allowing you to create endless stylish ensembles. Whether
                    you prefer a laid-back look with a graphic tee and sneakers
                    or a more polished ensemble with a blouse and heels, this
                    skirt effortlessly adapts to your style.
                  </p>
                </div>
              </div>
              <Link
                aria-controls="moreDescription"
                aria-expanded="false"
                aria-label="Show / hide description"
                className="d-inline-block fs-sm fw-medium text-dark-emphasis collapsed mt-1"
                data-bs-toggle="collapse"
                data-label-collapsed="Read more"
                data-label-expanded="Show less"
                to="#moreDescription"
              />
              <div className="h4 d-flex align-items-center my-4">
                $126.50
                <del className="fs-sm fw-normal text-body-tertiary ms-2">
                  $156.00
                </del>
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold pb-1 mb-2">
                  Color:{" "}
                  <span className="text-body fw-normal" id="colorOption">
                    Dark blue
                  </span>
                </label>
                <div
                  className="d-flex flex-wrap gap-2"
                  data-binded-label="#colorOption"
                >
                  <input
                    className="btn-check"
                    defaultChecked
                    id="dark-blue"
                    name="colors"
                    type="radio"
                  />
                  <label
                    className="btn btn-image p-0"
                    data-label="Dark blue"
                    htmlFor="dark-blue"
                  >
                    <img
                      alt="Dark blue"
                      src="/assets/img/shop/grocery/product/01.png"
                      width="56"
                    />
                    <span className="visually-hidden">Dark blue</span>
                  </label>
                  <input
                    className="btn-check"
                    id="pink"
                    name="colors"
                    type="radio"
                  />
                  <label
                    className="btn btn-image p-0"
                    data-label="Pink"
                    htmlFor="pink"
                  >
                    <img
                      alt="Pink"
                      src="/assets/img/shop/grocery/product/02.png"
                      width="56"
                    />
                    <span className="visually-hidden">Pink</span>
                  </label>
                  <input
                    className="btn-check"
                    id="light-blue"
                    name="colors"
                    type="radio"
                  />
                  <label
                    className="btn btn-image p-0"
                    data-label="Light blue"
                    htmlFor="light-blue"
                  >
                    <img
                      alt="Light blue"
                      src="/assets/img/shop/grocery/product/03.png"
                      width="56"
                    />
                    <span className="visually-hidden">Light blue</span>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <label className="form-label fw-semibold mb-0">Size</label>
                  <div className="nav">
                    <Link
                      className="nav-link animate-underline fw-normal px-0"
                      data-bs-toggle="modal"
                      to="#sizeGuide"
                    >
                      <i className="bi-ruler fs-lg me-2" />
                      <span className="animate-target">Size guide</span>
                    </Link>
                  </div>
                </div>
                <select
                  aria-label="Material select"
                  className="form-select form-select-lg"
                  data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-lg"]                  }                }'
                >
                  <option value="">Choose a size</option>
                  <option value="xs">6-8 (XS)</option>
                  <option value="s">8-10 (S)</option>
                  <option value="m">10-12 (M)</option>
                  <option value="l">12-14 (L)</option>
                  <option value="xl">14-16 (XL)</option>
                </select>
              </div>
              <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
                <div className="count-input flex-shrink-0">
                  <button
                    aria-label="Decrement quantity"
                    className="btn btn-icon btn-lg"
                    data-decrement=""
                    type="button"
                  >
                    <i className="bi-dash" />
                  </button>
                  <input
                    className="form-control form-control-lg"
                    defaultValue="1"
                    min="1"
                    readOnly
                    type="number"
                  />
                  <button
                    aria-label="Increment quantity"
                    className="btn btn-icon btn-lg"
                    data-increment=""
                    type="button"
                  >
                    <i className="bi-plus" />
                  </button>
                </div>
                <button className="btn btn-lg btn-dark w-100" type="button">
                  Add to cart
                </button>
              </div>
              <ul className="list-unstyled gap-3 pb-3 pb-lg-4 mb-3">
                <li className="d-flex flex-wrap fs-sm">
                  <span className="d-flex align-items-center fw-medium text-dark-emphasis me-2">
                    <i className="bi-clock fs-base me-2" />
                    Estimated delivery:
                  </span>
                  15 - 27 Mar, 2024
                </li>
                <li className="d-flex flex-wrap fs-sm">
                  <span className="d-flex align-items-center fw-medium text-dark-emphasis me-2">
                    <i className="bi-delivery fs-base me-2" />
                    Free shipping & returns:
                  </span>
                  On all orders over $100.00
                </li>
              </ul>
              <div className="d-flex flex-wrap justify-content-between fs-sm mb-3">
                <span className="fw-medium text-dark-emphasis me-2">
                  🔥 Hurry up! The sale is coming to an end
                </span>
                <span>
                  <span className="fw-medium text-dark-emphasis">6</span> items
                  in stock!
                </span>
              </div>
              <div
                aria-label="Left in stock"
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress"
                role="progressbar"
                style={{
                  height: "4px",
                }}
              >
                <div
                  className="progress-bar rounded-pill"
                  style={{
                    width: "25%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky-product-banner sticky-top" >
        <div className="sticky-product-banner-inner pt-5">
          <div className="navbar container flex-nowrap align-items-center bg-body pt-4 pt-lg-5 mt-lg-n2">
            <div className="d-flex align-items-center min-w-0 ms-lg-2 me-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "50px",
                }}
              >
                <img alt="" src="assets/img/shop/fashion/product/thumb.png" />
              </div>
              <h4 className="h6 fw-medium d-none d-lg-block ps-3 mb-0">
                Denim midi skirt with pockets
              </h4>
              <div className="w-100 min-w-0 d-lg-none ps-2">
                <h4 className="fs-sm fw-medium text-truncate mb-1">
                  Denim midi skirt with pockets
                </h4>
                <div className="h6 mb-0">
                  $126.50{" "}
                  <del className="fs-xs fw-normal text-body-tertiary">
                    $156.00
                  </del>
                </div>
              </div>
            </div>
            <div className="h4 d-none d-lg-block mb-0 ms-auto me-4">
              $126.50{" "}
              <del className="fs-sm fw-normal text-body-tertiary">$156.00</del>
            </div>
            <div className="d-flex gap-2">
              <button
                aria-label="Add to Wishlist"
                className="btn btn-icon btn-secondary animate-pulse"
                type="button"
              >
                <i className="bi-heart fs-base animate-target" />
              </button>
              <button
                className="btn btn-dark ms-auto d-none d-md-inline-flex px-4"
                type="button"
              >
                Add to cart
              </button>
              <button
                aria-label="Add to Cart"
                className="btn btn-icon btn-dark animate-slide-end ms-auto d-md-none"
                type="button"
              >
                <i className="bi-cart fs-base animate-target" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-4">
        <div
          className="d-flex align-items-center gap-3 pt-5 mt-md-2 mb-3"
          id="comments"
          style={{
            scrollMarginTop: "60px",
          }}
        >
          <h2 className="h4 mb-0">Comments (3)</h2>
          <button
            className="btn btn-outline-secondary rounded-pill ms-auto"
            data-bs-target="#commentForm"
            data-bs-toggle="modal"
            type="button"
          >
            <i className="bi-edit-3 fs-base ms-n1 me-2" />
            Leave a comment
          </button>
        </div>
        <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
          <div className="vstack gap-3 gap-md-4 mt-n3">
            <div className="mt-3">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "40px",
                    }}
                  >
                    <img
                      alt="Avatar"
                      src="assets/img/shop/marketplace/single/comments/01.jpg"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                      Randy Walker
                    </div>
                    <div className="fs-xs text-body-secondary">
                      October 28, 2024
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                    type="button"
                  >
                    <i className="bi-heart animate-target fs-sm ms-n1 me-1" />
                    12
                  </button>
                  <button
                    aria-label="Reply"
                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                    type="button"
                  >
                    <i className="bi-arrow-up-right animate-target fs-sm" />
                  </button>
                </div>
              </div>
              <p className="fs-sm mb-0">
                This set of Tablet Pro mockups exceeded my expectations! The
                high resolution and attention to detail make my designs look
                incredibly polished. The smart objects make editing a breeze,
                and the realistic lighting adds a professional touch to all my
                presentations. Highly recommend it for anyone serious about
                their design work.
              </p>
            </div>
            <div className="mt-3">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "40px",
                    }}
                  >
                    <img
                      alt="Avatar"
                      src="assets/img/shop/marketplace/single/comments/02.jpg"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                      Daniel Adams
                    </div>
                    <div className="fs-xs text-body-secondary">
                      August 15, 2024
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                    type="button"
                  >
                    <i className="bi-heart animate-target fs-sm ms-n1 me-1" />6
                  </button>
                  <button
                    aria-label="Reply"
                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                    type="button"
                  >
                    <i className="bi-arrow-up-right animate-target fs-sm" />
                  </button>
                </div>
              </div>
              <p className="fs-sm mb-0">
                I've used a lot of mockups, but these are some of the best. The
                variety of angles and perspectives really helped me showcase my
                app from different viewpoints. Plus, the customizable
                backgrounds are a fantastic feature—I could easily match the
                mockups to my brand colors. A must-have for designers!
              </p>
            </div>
            <div className="mt-3">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "40px",
                    }}
                  >
                    <img
                      alt="Avatar"
                      src="assets/img/shop/marketplace/single/comments/03.jpg"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                      Darrell Steward
                    </div>
                    <div className="fs-xs text-body-secondary">
                      June 2, 2024
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                    type="button"
                  >
                    <i className="bi-heart animate-target fs-sm ms-n1 me-1" />
                    19
                  </button>
                  <button
                    aria-label="Reply"
                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                    type="button"
                  >
                    <i className="bi-arrow-up-right animate-target fs-sm" />
                  </button>
                </div>
              </div>
              <p className="fs-sm mb-0">
                The quality of these mockups is superb, and they're incredibly
                easy to use. The only thing I'd love to see is a few more device
                color options to match different product lines. Other than that,
                it's a fantastic set that's well worth the investment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
