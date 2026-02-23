import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <main className="content-wrapper">
      <nav aria-label="breadcrumb" className="container pt-lg-2 my-3 my-lg-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            Catalog with sidebar filters
          </li>
        </ol>
      </nav>
      <h1 className="h3 container pb-2 pb-md-3 pb-lg-4">Shop catalog</h1>
      <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="row">
          <aside className="col-lg-3">
            <div
              className="offcanvas-lg offcanvas-start pe-lg-4"
              id="filterSidebar"
            >
              <div className="offcanvas-header py-3">
                <h5 className="offcanvas-title">Filter products</h5>
                <button
                  aria-label="Close"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#filterSidebar"
                  type="button"
                />
              </div>
              <div className="offcanvas-body flex-column pt-2 py-lg-0">
                <div className="accordion pb-2" id="categories">
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingBakery">
                      <button
                        aria-controls="bakery"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#bakery"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-secondary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/01.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Bakery & bread</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingBakery"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="bakery"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Bread
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Pastries
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Bakery cookies
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Cupcakes
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Buns
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Rolls
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingVegetables">
                      <button
                        aria-controls="vegetables"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#vegetables"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/02.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Vegetables</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingVegetables"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="vegetables"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Leafy greens
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Root vegetables
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Allium vegetables
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Peppers and tomatoes
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Cruciferous
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Seasonal squashes
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingFruits">
                      <button
                        aria-controls="fruits"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#fruits"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/03.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Fresh fruits</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingFruits"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="fruits"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Citrus fruits
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Berries
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Tropical fruits
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Stone fruits
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Exotic fruits
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Melons
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingItalian">
                      <button
                        aria-controls="italian"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#italian"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/04.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Meet Italian dinner</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingItalian"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="italian"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Pasta & sauces
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Italian cheeses
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Italian meats
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Antipasti & appetizers
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Fresh produce
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Desserts & beverages
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingBeverages">
                      <button
                        aria-controls="beverages"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#beverages"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/05.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Beverages</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingBeverages"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="beverages"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Soft drinks
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Juices
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Sports & energy drinks
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Tea and coffee
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Water
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Alcoholic beverages
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingMeat">
                      <button
                        aria-controls="meat"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#meat"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/06.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Meat products</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingMeat"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="meat"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Fresh meat
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Processed meat
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Seafood
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Poultry products
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Exotic meats
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Prepared meat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3">
                    <h4 className="accordion-header" id="headingSauces">
                      <button
                        aria-controls="sauces"
                        aria-expanded="false"
                        className="accordion-button collapsed p-0"
                        data-bs-target="#sauces"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle me-3"
                          style={{
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            alt=""
                            src="assets/img/shop/grocery/categories/07.png"
                            width="40"
                          />
                        </span>
                        <span className="fs-sm">Sauces and ketchup</span>
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingSauces"
                      className="accordion-collapse collapse"
                      data-bs-parent="#categories"
                      id="sauces"
                    >
                      <div className="accordion-body ps-4 pb-0">
                        <ul className="nav flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Shop all
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Tomato-based sauces
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              International sauces
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Condiments
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Salad dressings
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Hot sauces
                            </Link>
                          </li>
                          <li className="nav-item pb-1 ps-3 ms-1">
                            <Link
                              className="nav-link hover-effect-underline fw-normal p-0"
                              to="#!"
                            >
                              Specialty sauces
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion border-top mb-4">
                  <div className="accordion-item">
                    <h4 className="accordion-header" id="headingPrice">
                      <button
                        aria-controls="price"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#price"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        Price
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingPrice"
                      className="accordion-collapse collapse"
                      id="price"
                    >
                      <div className="accordion-body">
                        <div
                          aria-labelledby="headingPrice"
                          className="range-slider ps-1"
                          data-range-slider='{"startMin": 1, "startMax": 30, "min": 0, "max": 100, "step": 1, "tooltipPrefix": "$"}'
                        >
                          <div className="range-slider-ui" />
                          <div className="d-flex align-items-center">
                            <div className="position-relative w-50">
                              <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                              <input
                                className="form-control form-icon-start"
                                data-range-slider-min=""
                                min="0"
                                type="number"
                              />
                            </div>
                            <i className="bi bi-dash text-body-emphasis mx-2" />
                            <div className="position-relative w-50">
                              <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                              <input
                                className="form-control form-icon-start"
                                data-range-slider-max=""
                                min="0"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header" id="headingBrand">
                      <button
                        aria-controls="brand"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#brand"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        Brand
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingBrand"
                      className="accordion-collapse collapse"
                      id="brand"
                    >
                      <div
                        className="accordion-body"
                        data-filter-list='{"searchClass": "brands-search", "listClass": "brands-list", "valueNames": ["form-check-label"]}'
                      >
                        <div className="position-relative mb-3">
                          <i className="bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                          <input
                            className="brands-search form-control form-icon-start"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                        <div
                          data-simplebar=""
                          data-simplebar-auto-hide="false"
                          style={{
                            height: "210px",
                          }}
                        >
                          <div className="brands-list d-flex flex-column gap-2">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="coca-cola"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="coca-cola"
                              >
                                Coca-Cola
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="pepsi"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="pepsi"
                              >
                                Pepsi
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                defaultChecked
                                id="nestle"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="nestle"
                              >
                                Nestlé
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="hersheys"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="hersheys"
                              >
                                Hershey's
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="bilabong"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="bilabong"
                              >
                                General Mills
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="barilla"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="barilla"
                              >
                                Barilla
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="kraft"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="kraft"
                              >
                                Kraft Heinz
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="unilever"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="unilever"
                              >
                                Unilever
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="danone"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="danone"
                              >
                                Danone
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="Campbell"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="Campbell"
                              >
                                Campbell
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="basso"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="basso"
                              >
                                Basso
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="kelloggs"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="kelloggs"
                              >
                                Kellogg's
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="mondelez"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="mondelez"
                              >
                                Mondelez
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="pepper"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="pepper"
                              >
                                Dr Pepper Snapple
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="heineken"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="heineken"
                              >
                                Heineken
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="mars"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="mars"
                              >
                                Mars
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="pernod"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="pernod"
                              >
                                Pernod Ricard
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="ferrero"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="ferrero"
                              >
                                Ferrero
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="red-bull"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="red-bull"
                              >
                                Red Bull
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="suntory"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="suntory"
                              >
                                Suntory
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="diageo"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label text-body-emphasis"
                                htmlFor="diageo"
                              >
                                Diageo
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header" id="headingDiet">
                      <button
                        aria-controls="diet"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#diet"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        Special diet needs
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingDiet"
                      className="accordion-collapse collapse"
                      id="diet"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              defaultChecked
                              id="gluten-free"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="gluten-free"
                            >
                              Gluten-free
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="plant-based"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="plant-based"
                            >
                              Plant based
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="vegan"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="vegan"
                            >
                              Vegan
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="keto"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="keto"
                            >
                              Keto diet
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header" id="headingStatus">
                      <button
                        aria-controls="status"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#status"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        Status
                      </button>
                    </h4>
                    <div
                      aria-labelledby="headingStatus"
                      className="accordion-collapse collapse"
                      id="status"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="instock"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="instock"
                            >
                              In stock
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              defaultChecked
                              id="sale"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="sale"
                            >
                              % Sale
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="delivery"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label text-body-emphasis"
                              htmlFor="delivery"
                            >
                              Free delivery
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-4 overflow-hidden"
                  data-bs-theme="light"
                  style={{
                    backgroundColor: "#a6cddc",
                  }}
                >
                  <div className="pt-3 px-3 mt-3 mx-3">
                    <h4 className="mb-2 mb-xl-3">
                      Make breakfast healthy and easy
                    </h4>
                    <div className="nav">
                      <Link
                        className="nav-link animate-underline stretched-link px-0"
                        to="#!"
                      >
                        <span className="animate-target">Shop now</span>
                        <i className="bi-chevron-right fs-base mt-1 ms-1" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="ratio mt-n2"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 282 * 100%)",
                    }}
                  >
                    <img
                      alt="Banner"
                      src="assets/img/shop/grocery/banner.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-lg-9">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="fs-sm text-body-emphasis text-nowrap mb-2 mb-sm-0">
                Found <span className="fw-semibold">256</span> items
              </div>
              <div className="d-flex align-items-center text-nowrap">
                <label className="form-label fw-semibold mb-0 me-2">
                  Sort by:
                </label>
                <div
                  style={{
                    width: "200px",
                  }}
                >
                  <select
                    className="form-select rounded-pill"
                    data-select='{                    "removeItemButton": false,                    "classNames": {                      "containerInner": ["form-select", "rounded-pill"]                    }                  }'
                  >
                    <option value="Relevance">Relevance</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Price: Low to High">
                      Price: Low to High
                    </option>
                    <option value="Price: High to Low">
                      Price: High to Low
                    </option>
                    <option value="Newest Arrivals">Newest Arrivals</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <button className="btn btn-sm btn-secondary" type="button">
                <i className="bi-close fs-sm ms-n1 me-1" />
                Sale
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <i className="bi-close fs-sm ms-n1 me-1" />
                Gluten-free
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <i className="bi-close fs-sm ms-n1 me-1" />
                Nestlé
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <i className="bi-close fs-sm ms-n1 me-1" />
                $1 - $30
              </button>
              <button
                className="btn btn-sm btn-secondary bg-transparent border-0 text-decoration-underline px-0 ms-2"
                type="button"
              >
                Clear all
              </button>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4">
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/01.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.15</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Muesli Fitness Energy, gluten free
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    500g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-1 mt-sm-2 ms-1 ms-sm-2">
                      -30%
                    </span>
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/02.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">
                      $3.12{" "}
                      <del className="fs-sm fw-normal text-body-tertiary ms-1">
                        $4.05
                      </del>
                    </div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh orange Klementina, Spain
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1kg
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/03.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$0.80</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Pepsi soda classic, can
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    330ml
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/04.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.99</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Mozzarella mini cheese Granaloro
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    250g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/05.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$1.24</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Coconut, Indonesia
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1 coconut
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/06.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$3.95</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Pesto sauce Barilla with parmesan and basil
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    200g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/07.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$1.99</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh mango, Spain
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1 mango
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/08.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.40</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh green asparagus, bunch
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    300g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/09.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$18.60</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Pure virgin olive oil Basso
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1000ml
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/10.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$9.15</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh pork butt steaks with rosemary
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    500g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/11.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$3.40</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh red grapefruit
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1kg
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/12.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.59</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Soft creme cheese with greens Exquisa
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    150g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/13.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$27.00</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Steak salmon fillet with rosmary
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1kg
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/14.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$1.75</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh red seedless grapes
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    1kg
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/15.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$3.10</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Fresh lemons, pack
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    500g
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card product-card h-100 bg-transparent border-0 shadow-none">
                  <div className="position-relative z-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                      type="button"
                    >
                      <i className="bi-heart animate-target" />
                    </button>
                    <Link
                      className="d-block p-2 p-lg-3"
                      to="/DetailsProdect"
                    >
                      <div
                        className="ratio"
                        style={{
                          "--cz-aspect-ratio": "calc(160 / 191 * 100%)",
                        }}
                      >
                        <img alt="" src="assets/img/shop/grocery/16.png" />
                      </div>
                    </Link>
                    <div className="position-absolute w-100 start-0 bottom-0">
                      <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                        <div className="count-input count-input-collapsible collapsed justify-content-between w-100 bg-transparent border-0 rounded-2">
                          <button
                            aria-label="Decrement quantity"
                            className="btn btn-icon btn-sm btn-primary"
                            data-decrement=""
                            type="button"
                          >
                            <i className="bi bi-dash fs-sm" />
                          </button>
                          <input
                            className="form-control form-control-sm bg-primary text-white w-100"
                            defaultValue="0"
                            min="0"
                            readOnly
                            type="number"
                          />
                          <button
                            aria-label="Increment quantity"
                            className="product-card-button btn btn-icon btn-sm btn-secondary ms-auto"
                            data-increment=""
                            type="button"
                          >
                            <span data-count-input-value="" />
                            <i className="bi-plus fs-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
                    <div className="h6 mb-2">$2.65</div>
                    <h3 className="fs-sm lh-base mb-0">
                      <Link
                        className="hover-effect-underline fw-normal"
                        to="/DetailsProdect"
                      >
                        Reggia penne rigate No.34 pasta, pack
                      </Link>
                    </h3>
                  </div>
                  <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">
                    500g
                  </div>
                </div>
              </div>
            </div>
            <nav
              aria-label="Catalog pagination"
              className="border-top mt-4 pt-3"
            >
              <ul className="pagination pagination-lg pt-2 pt-md-3">
                <li className="page-item disabled me-auto">
                  <Link
                    aria-label="Previous page"
                    className="page-link d-flex align-items-center h-100 fs-lg px-2"
                    to="#!"
                  >
                    <i className="bi-chevron-left mx-1" />
                  </Link>
                </li>
                <li aria-current="page" className="page-item active">
                  <span className="page-link">
                    1<span className="visually-hidden">(current)</span>
                  </span>
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
                  <span className="page-link pe-none">...</span>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#!">
                    16
                  </Link>
                </li>
                <li className="page-item ms-auto">
                  <Link
                    aria-label="Next page"
                    className="page-link d-flex align-items-center h-100 fs-lg px-2"
                    to="#!"
                  >
                    <i className="bi-chevron-right mx-1" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};
