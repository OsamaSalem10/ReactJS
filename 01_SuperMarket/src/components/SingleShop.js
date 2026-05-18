import { useState } from "react";
import {Link} from "react-router-dom"
export const SingleShop = () => {
     
    const images = [
  "../assets/images/products/product-single-img-1.jpg",
  "../assets/images/products/product-single-img-2.jpg",
  "../assets/images/products/product-single-img-3.jpg",
  "../assets/images/products/product-single-img-4.jpg",
];
const [selectedImage, setSelectedImage] = useState(images[0]);
    const zoom = (e) => {
  const zoomer = e.currentTarget;
  const offsetX = e.nativeEvent.offsetX;
  const offsetY = e.nativeEvent.offsetY;

  const x = (offsetX / zoomer.offsetWidth) * 100;
  const y = (offsetY / zoomer.offsetHeight) * 100;

  zoomer.style.backgroundPosition = `${x}% ${y}%`;
};
  return <main>
  <div className="mt-4">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Bakery Biscuits</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Napolitanke Ljesnjak
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <section className="mt-8">
    <div className="container">
      <div className="row">
       <div className="col-md-5 col-xl-6">
      {/* Main Image */}
      <div className="product">
        <div
          className="zoom"
          onMouseMove={zoom}
          style={{
            backgroundImage: `url(${selectedImage})`,
          }}
        >
          <img src={selectedImage} alt="product" />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="product-tools mt-3">
        <div className="thumbnails row g-3">
          {images && images.map((img, index) => (
            <div className="col-3" key={index}>
              <div
                className={`thumbnails-img ${
                  selectedImage === img ? "active" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`thumb-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <div className="col-md-7 col-xl-6">
          <div className="ps-lg-10 mt-6 mt-md-0">
            <Link className="mb-4 d-block" to="#!">
              Bakery Biscuits
            </Link>
            <h1 className="mb-1">Napolitanke Ljesnjak</h1>
            <div className="mb-4">
              <small className="text-warning">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </small>
              <Link className="ms-2" to="#">
                (30 reviews)
              </Link>
            </div>
            <div className="fs-4">
              <span className="fw-bold text-dark">$32</span>
              <span className="text-decoration-line-through text-muted">
                $35
              </span>
              <span>
                <small className="fs-6 ms-2 text-danger">26% Off</small>
              </span>
            </div>
            <hr className="my-6" />
            <div className="mb-5">
              <button className="btn btn-outline-secondary" type="button">
                250g
              </button>
              <button className="btn btn-outline-secondary" type="button">
                500g
              </button>
              <button className="btn btn-outline-secondary" type="button">
                1kg
              </button>
            </div>
            <div>
              <div className="input-group input-spinner">
                <input
                  className="button-minus btn btn-sm"
                  data-field="quantity"
                  defaultValue="-"
                  type="button"
                />
                <input
                  className="quantity-field form-control-sm form-input"
                  defaultValue="1"
                  max="10"
                  name="quantity"
                  step="1"
                  type="number"
                />
                <input
                  className="button-plus btn btn-sm"
                  data-field="quantity"
                  defaultValue="+"
                  type="button"
                />
              </div>
            </div>
            <div className="mt-3 row justify-content-start g-2 align-items-center">
              <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                <button className="btn btn-primary" type="button">
                  <i className="feather-icon icon-shopping-bag me-2" />
                  Add to cart
                </button>
              </div>
              <div className="col-md-4 col-4">
                <Link
                  aria-label="Compare"
                  className="btn btn-light"
                  data-bs-html="true"
                  data-bs-toggle="tooltip"
                  to="#">
                  <i className="bi bi-arrow-left-right" />
                </Link>
                <Link
                  aria-label="Wishlist"
                  className="btn btn-light"
                  data-bs-html="true"
                  data-bs-toggle="tooltip"
                  to="shop-wishlist.html">
                  <i className="feather-icon icon-heart" />
                </Link>
              </div>
            </div>
            <hr className="my-6" />
            <div>
              <table className="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>FBB00255</td>
                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>In Stock</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Fruits</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td>
                      <small>
                        01 day shipping.
                        <span className="text-muted">( Free pickup today)</span>
                      </small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <div className="dropdown">
                <Link
                  aria-expanded="false"
                  className="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button">
                  Share
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-facebook me-2" />
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-twitter me-2" />
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-instagram me-2" />
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mt-lg-14 mt-8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                aria-controls="product-tab-pane"
                aria-selected="true"
                className="nav-link active"
                data-bs-target="#product-tab-pane"
                data-bs-toggle="tab"
                id="product-tab"
                role="tab"
                type="button">
                Product Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="details-tab-pane"
                aria-selected="false"
                className="nav-link"
                data-bs-target="#details-tab-pane"
                data-bs-toggle="tab"
                id="details-tab"
                role="tab"
                type="button">
                Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="reviews-tab-pane"
                aria-selected="false"
                className="nav-link"
                data-bs-target="#reviews-tab-pane"
                data-bs-toggle="tab"
                id="reviews-tab"
                role="tab"
                type="button">
                Reviews
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="sellerInfo-tab-pane"
                aria-selected="false"
                className="nav-link"
                data-bs-target="#sellerInfo-tab-pane"
                data-bs-toggle="tab"
                disabled
                id="sellerInfo-tab"
                role="tab"
                type="button">
                Seller Info
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              aria-labelledby="product-tab"
              className="tab-pane fade show active"
              id="product-tab-pane"
              role="tabpanel"
              tabIndex="0">
              <div className="my-8">
                <div className="mb-5">
                  <h4 className="mb-1">Nutrient Value & Benefits</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                    imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                    varius habitant ornare ac rhoncus. Consequat risus facilisis
                    ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1">Storage Tips</h5>
                  <p className="mb-0">
                    Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                    imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                    varius habitant ornare ac rhoncus. Consequat risus facilisis
                    ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1">Unit</h5>
                  <p className="mb-0">3 units</p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1">Seller</h5>
                  <p className="mb-0">DMart Pvt. LTD</p>
                </div>
                <div>
                  <h5 className="mb-1">Disclaimer</h5>
                  <p className="mb-0">
                    Image shown is a representation and may slightly vary from
                    the actual product. Every effort is made to maintain
                    accuracy of all information displayed.
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-labelledby="details-tab"
              className="tab-pane fade"
              id="details-tab-pane"
              role="tabpanel"
              tabIndex="0">
              <div className="my-8">
                <div className="row">
                  <div className="col-12">
                    <h4 className="mb-4">Details</h4>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Weight</th>
                          <td>1000 Grams</td>
                        </tr>
                        <tr>
                          <th>Ingredient Type</th>
                          <td>Vegetarian</td>
                        </tr>
                        <tr>
                          <th>Brand</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Item Package Quantity</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th>Form</th>
                          <td>Larry the Bird</td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Net Quantity</th>
                          <td>340.0 Gram</td>
                        </tr>
                        <tr>
                          <th>Product Dimensions</th>
                          <td>9.6 x 7.49 x 18.49 cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>ASIN</th>
                          <td>SB0025UJ75W</td>
                        </tr>
                        <tr>
                          <th>Best Sellers Rank</th>
                          <td>#2 in Fruits</td>
                        </tr>
                        <tr>
                          <th>Date First Available</th>
                          <td>30 April 2022</td>
                        </tr>
                        <tr>
                          <th>Item Weight</th>
                          <td>500g</td>
                        </tr>
                        <tr>
                          <th>Generic Name</th>
                          <td>Banana Robusta</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-labelledby="reviews-tab"
              className="tab-pane fade"
              id="reviews-tab-pane"
              role="tabpanel"
              tabIndex="0">
              <div className="my-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="me-lg-12 mb-6 mb-md-0">
                      <div className="mb-5">
                        <h4 className="mb-3">Customer reviews</h4>
                        <span>
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="ms-3">4.1 out of 5</span>
                          <small className="ms-3">11,130 global ratings</small>
                        </span>
                      </div>
                      <div className="mb-8">
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-nowrap me-3 text-muted">
                            <span className="d-inline-block align-middle text-muted">
                              5
                            </span>
                            <i className="bi bi-star-fill ms-1 small text-warning" />
                          </div>
                          <div className="w-100">
                            <div
                              className="progress"
                              style={{
                                height: "6px",
                              }}>
                              <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="60"
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                  width: "60%",
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-muted ms-3">53%</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-nowrap me-3 text-muted">
                            <span className="d-inline-block align-middle text-muted">
                              4
                            </span>
                            <i className="bi bi-star-fill ms-1 small text-warning" />
                          </div>
                          <div className="w-100">
                            <div
                              className="progress"
                              style={{
                                height: "6px",
                              }}>
                              <div
                                aria-valuemax="50"
                                aria-valuemin="0"
                                aria-valuenow="50"
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                  width: "50%",
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-muted ms-3">22%</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-nowrap me-3 text-muted">
                            <span className="d-inline-block align-middle text-muted">
                              3
                            </span>
                            <i className="bi bi-star-fill ms-1 small text-warning" />
                          </div>
                          <div className="w-100">
                            <div
                              className="progress"
                              style={{
                                height: "6px",
                              }}>
                              <div
                                aria-valuemax="35"
                                aria-valuemin="0"
                                aria-valuenow="35"
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                  width: "35%",
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-muted ms-3">14%</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-nowrap me-3 text-muted">
                            <span className="d-inline-block align-middle text-muted">
                              2
                            </span>
                            <i className="bi bi-star-fill ms-1 small text-warning" />
                          </div>
                          <div className="w-100">
                            <div
                              className="progress"
                              style={{
                                height: "6px",
                              }}>
                              <div
                                aria-valuemax="22"
                                aria-valuemin="0"
                                aria-valuenow="22"
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                  width: "22%",
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-muted ms-3">5%</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="text-nowrap me-3 text-muted">
                            <span className="d-inline-block align-middle text-muted">
                              1
                            </span>
                            <i className="bi bi-star-fill ms-1 small text-warning" />
                          </div>
                          <div className="w-100">
                            <div
                              className="progress"
                              style={{
                                height: "6px",
                              }}>
                              <div
                                aria-valuemax="14"
                                aria-valuemin="0"
                                aria-valuenow="14"
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                  width: "14%",
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-muted ms-3">7%</span>
                        </div>
                      </div>
                      <div className="d-grid">
                        <h4>Review this product</h4>
                        <p className="mb-0">
                          Share your thoughts with other customers.
                        </p>
                        <Link
                          className="btn btn-outline-gray-400 mt-4 text-muted"
                          to="#">
                          Write the Review
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="mb-10">
                      <div className="d-flex justify-content-between align-items-center mb-8">
                        <div>
                          <h4>Reviews</h4>
                        </div>
                        <div>
                          <select className="form-select">
                            <option selected>Top Reviews</option>
                            <option value="Most Recent">Most Recent</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex border-bottom pb-6 mb-6">
                        <img
                          alt=""
                          className="rounded-circle avatar-lg"
                          src="../assets/images/avatar/avatar-10.jpg"
                        />
                        <div className="ms-5">
                          <h6 className="mb-1">Shankar Subbaraman</h6>
                          <p className="small">
                            <span className="text-muted">30 December 2022</span>
                            <span className="text-primary ms-3 fw-bold">
                              Verified Purchase
                            </span>
                          </p>
                          <div className="mb-2">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <span className="ms-3 text-dark fw-bold">
                              Need to recheck the weight at delivery point
                            </span>
                          </div>
                          <p>
                            Product quality is good. But, weight seemed less
                            than 1kg. Since it is being sent in open package,
                            there is a possibility of pilferage in between.
                            FreshCart sends the veggies and fruits through
                            sealed plastic covers and Barcode on the weight etc.
                            .
                          </p>
                          <div>
                            <div className="border icon-shape icon-lg border-2">
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/products/product-img-1.jpg"
                              />
                            </div>
                            <div className="border icon-shape icon-lg border-2 ms-1">
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/products/product-img-2.jpg"
                              />
                            </div>
                            <div className="border icon-shape icon-lg border-2 ms-1">
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/products/product-img-3.jpg"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mt-4">
                            <Link className="text-muted" to="#">
                              <i className="feather-icon icon-thumbs-up me-1" />
                              Helpful
                            </Link>
                            <Link className="text-muted ms-4" to="#">
                              <i className="feather-icon icon-flag me-2" />
                              Report abuse
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                        <img
                          alt=""
                          className="rounded-circle avatar-lg"
                          src="../assets/images/avatar/avatar-12.jpg"
                        />
                        <div className="ms-5">
                          <h6 className="mb-1">Robert Thomas</h6>
                          <p className="small">
                            <span className="text-muted">29 December 2022</span>
                            <span className="text-primary ms-3 fw-bold">
                              Verified Purchase
                            </span>
                          </p>
                          <div className="mb-2">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <span className="ms-3 text-dark fw-bold">
                              Need to recheck the weight at delivery point
                            </span>
                          </div>
                          <p>
                            Product quality is good. But, weight seemed less
                            than 1kg. Since it is being sent in open package,
                            there is a possibility of pilferage in between.
                            FreshCart sends the veggies and fruits through
                            sealed plastic covers and Barcode on the weight etc.
                            .
                          </p>
                          <div className="d-flex justify-content-end mt-4">
                            <Link className="text-muted" to="#">
                              <i className="feather-icon icon-thumbs-up me-1" />
                              Helpful
                            </Link>
                            <Link className="text-muted ms-4" to="#">
                              <i className="feather-icon icon-flag me-2" />
                              Report abuse
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                        <img
                          alt=""
                          className="rounded-circle avatar-lg"
                          src="../assets/images/avatar/avatar-9.jpg"
                        />
                        <div className="ms-5">
                          <h6 className="mb-1">Barbara Tay</h6>
                          <p className="small">
                            <span className="text-muted">28 December 2022</span>
                            <span className="text-danger ms-3 fw-bold">
                              Unverified Purchase
                            </span>
                          </p>
                          <div className="mb-2">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <span className="ms-3 text-dark fw-bold">
                              Need to recheck the weight at delivery point
                            </span>
                          </div>
                          <p>
                            Everytime i ordered from fresh i got greenish yellow
                            bananas just like i wanted so go for it , its
                            happens very rare that u get over riped ones.
                          </p>
                          <div className="d-flex justify-content-end mt-4">
                            <Link className="text-muted" to="#">
                              <i className="feather-icon icon-thumbs-up me-1" />
                              Helpful
                            </Link>
                            <Link className="text-muted ms-4" to="#">
                              <i className="feather-icon icon-flag me-2" />
                              Report abuse
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                        <img
                          alt=""
                          className="rounded-circle avatar-lg"
                          src="../assets/images/avatar/avatar-8.jpg"
                        />
                        <div className="ms-5 flex-grow-1">
                          <h6 className="mb-1">Sandra Langevin</h6>
                          <p className="small">
                            <span className="text-muted">8 December 2022</span>
                            <span className="text-danger ms-3 fw-bold">
                              Unverified Purchase
                            </span>
                          </p>
                          <div className="mb-2">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <span className="ms-3 text-dark fw-bold">
                              Great product
                            </span>
                          </div>
                          <p>
                            Great product & package. Delivery can be expedited.
                          </p>
                          <div className="d-flex justify-content-end mt-4">
                            <Link className="text-muted" to="#">
                              <i className="feather-icon icon-thumbs-up me-1" />
                              Helpful
                            </Link>
                            <Link className="text-muted ms-4" to="#">
                              <i className="feather-icon icon-flag me-2" />
                              Report abuse
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          className="btn btn-outline-gray-400 text-muted"
                          to="#">
                          Read More Reviews
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-5">Create Review</h3>
                      <div className="border-bottom py-4 mb-4">
                        <h4 className="mb-3">Overall rating</h4>
                        <div className="rater" />
                      </div>
                      <div className="border-bottom py-4 mb-4">
                        <h4 className="mb-0">Rate Features</h4>
                        <div className="my-5">
                          <h5>Flavor</h5>
                          <div className="rater" />
                        </div>
                        <div className="my-5">
                          <h5>Value for money</h5>
                          <div className="rater" />
                        </div>
                        <div className="my-5">
                          <h5>Scent</h5>
                          <div className="rater" />
                        </div>
                      </div>
                      <div className="border-bottom py-4 mb-4">
                        <h5>Add a headline</h5>
                        <input
                          className="form-control"
                          placeholder="What’s most important to know"
                          type="text"
                        />
                      </div>
                      <div className="border-bottom py-4 mb-4">
                        <h5>Add a photo or video</h5>
                        <p>
                          Shoppers find images and videos more helpful than text
                          alone.
                        </p>
                        <div
                          className="dropzone mt-4 border-dashed rounded-2 min-h-0"
                          id="my-dropzone"
                        />
                      </div>
                      <div className="py-4 mb-4">
                        <h5>Add a written review</h5>
                        <textarea
                          className="form-control"
                          placeholder="What did you like or dislike? What did you use this product for?"
                          rows="3"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <Link className="btn btn-primary" to="#">
                          Submit Review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-labelledby="sellerInfo-tab"
              className="tab-pane fade"
              id="sellerInfo-tab-pane"
              role="tabpanel"
              tabIndex="0">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="my-lg-14 my-14">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Related Items</h3>
        </div>
      </div>
      <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <div className="position-absolute top-0 start-0">
                  <span className="badge bg-danger">Sale</span>
                </div>
                <Link to="#!">
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
                    to="#!">
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
                    title="Wishlist">
                    <i className="bi bi-heart" />
                  </Link>
                  <Link
                    className="btn-action"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    to="#!"
                    title="Compare">
                    <i className="bi bi-arrow-left-right" />
                  </Link>
                </div>
              </div>
              <div className="text-small mb-1">
                <Link className="text-decoration-none text-muted" to="#!">
                  <small>Snack & Munchies</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link className="text-inherit text-decoration-none" to="#!">
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
                      xmlns="http://www.w3.org/2000/svg">
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
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <Link to="#!">
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
                    to="#!">
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
                    title="Wishlist">
                    <i className="bi bi-heart" />
                  </Link>
                  <Link
                    className="btn-action"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    to="#!"
                    title="Compare">
                    <i className="bi bi-arrow-left-right" />
                  </Link>
                </div>
              </div>
              <div className="text-small mb-1">
                <Link className="text-decoration-none text-muted" to="#!">
                  <small>Bakery & Biscuits</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link className="text-inherit text-decoration-none" to="#!">
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
                      xmlns="http://www.w3.org/2000/svg">
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
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <Link to="#!">
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
                    to="#!">
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
                    title="Wishlist">
                    <i className="bi bi-heart" />
                  </Link>
                  <Link
                    className="btn-action"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    to="#!"
                    title="Compare">
                    <i className="bi bi-arrow-left-right" />
                  </Link>
                </div>
              </div>
              <div className="text-small mb-1">
                <Link className="text-decoration-none text-muted" to="#!">
                  <small>Bakery & Biscuits</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link className="text-inherit text-decoration-none" to="#!">
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
                      xmlns="http://www.w3.org/2000/svg">
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
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <Link to="#!">
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
                    to="#!">
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
                    title="Wishlist">
                    <i className="bi bi-heart" />
                  </Link>
                  <Link
                    className="btn-action"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    to="#!"
                    title="Compare">
                    <i className="bi bi-arrow-left-right" />
                  </Link>
                </div>
              </div>
              <div className="text-small mb-1">
                <Link className="text-decoration-none text-muted" to="#!">
                  <small>Snack & Munchies</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link className="text-inherit text-decoration-none" to="#!">
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
                      xmlns="http://www.w3.org/2000/svg">
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
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <Link to="#!">
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
                    to="#!">
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
                    title="Wishlist">
                    <i className="bi bi-heart" />
                  </Link>
                  <Link
                    className="btn-action"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    to="#!"
                    title="Compare">
                    <i className="bi bi-arrow-left-right" />
                  </Link>
                </div>
              </div>
              <div className="text-small mb-1">
                <Link className="text-decoration-none text-muted" to="#!">
                  <small>Snack & Munchies</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link className="text-inherit text-decoration-none" to="#!">
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
                  <span className="text-dark">$6</span>
                  <span className="text-decoration-line-through text-muted">
                    $10
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
                      xmlns="http://www.w3.org/2000/svg">
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
    </div>
  </section>
</main>
};
