import { Link } from "react-router-dom"

export const Products = () => {
    return <main className="content">
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
                Products
            </h1>
            <div className="card">
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-6 col-xl-4 mb-2 mb-md-0">
                            <div className="input-group input-group-search">
                                <input
                                    className="form-control"
                                    id="products-search"
                                    placeholder="Search products…"
                                    type="text"
                                />
                                <button
                                    className="btn"
                                    type="button"
                                >
                                    <i
                                        className="bi-search align-middle"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-8">
                            <div className="text-sm-end">
                                <button
                                    className="btn btn-light btn-lg me-2"
                                    type="button"
                                >
                                    <i className="bi-download me-2" />
                                    Export
                                </button>
                                <button
                                    className="btn btn-primary btn-lg"
                                    type="button"
                                >
                                    <i className="bi-plus me-2" />
                                    New Product
                                </button>
                            </div>
                        </div>
                    </div>
                    <table
                        className="table w-100"
                   
                    >
                        <thead>
                            <tr>
                                <th className="align-middle">
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                           
                                            type="checkbox"
                                        />
                                        <label
                                            className="form-check-label"
                                          
                                        />
                                    </div>
                                </th>
                                <th className="align-middle">
                                    Item Name
                                </th>
                                <th className="align-middle">
                                    Price
                                </th>
                                <th className="align-middle">
                                    Stock
                                </th>
                                <th className="align-middle">
                                    Category
                                </th>
                                <th className="align-middle">
                                    Rating
                                </th>
                                <th className="align-middle text-end">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple iPad Pro"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-9.png"
                                        />
                                    </div>
                                    <p className="mb-0">
                                        <strong>
                                            Apple iPad Pro
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Silver
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 1,399.00
                                </td>
                                <td>
                                    48
                                </td>
                                <td>
                                    Tablets
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2 me-2" />
                                    4.6
                                    <span className="text-muted">
                                        out of 55 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple iPad Pro"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-8.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple iPad Pro
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Space Gray
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 1,399.00
                                </td>
                                <td>
                                    48
                                </td>
                                <td>
                                    Tablets
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.3
                                    <span className="text-muted">
                                        out of 25 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple iPhone 15 Pro Max"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-4.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple iPhone 15 Pro Max
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Blue Titanium
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 1499.00
                                </td>
                                <td>
                                    38
                                </td>
                                <td>
                                    Smartphones
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.6
                                    <span className="text-muted">
                                        out of 40 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple iPhone 15 Pro Max"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-3.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple iPhone 15 Pro Max
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Natural Titanium
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 1499.00
                                </td>
                                <td>
                                    30
                                </td>
                                <td>
                                    Smartphones
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.8
                                    <span className="text-muted">
                                        out of 50 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple iPhone 15 Pro Max"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-5.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple iPhone 15 Pro Max
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            White Titanium
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 1499.00
                                </td>
                                <td>
                                    45
                                </td>
                                <td>
                                    Smartphones
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.9
                                    <span className="text-muted">
                                        out of 60 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt=""
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-7.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0 ">
                                        <strong>
                                            Apple MacBook Pro 16"
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Silver
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 2,399.00
                                </td>
                                <td>
                                    55
                                </td>
                                <td>
                                    Notebooks
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.7
                                    <span className="text-muted">
                                        out of 45 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt=""
                                            className="mw-100 mh-100"
                                            src="assets/assets/img/products/product-6.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0 ">
                                        <strong>
                                            Apple MacBook Pro 16"
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Space Black
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 2,399.00
                                </td>
                                <td>
                                    50
                                </td>
                                <td>
                                    Notebooks
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.4
                                    <span className="text-muted">
                                        out of 30 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple Watch SE"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-11.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple Watch SE
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Midnight
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 299.00
                                </td>
                                <td>
                                    49
                                </td>
                                <td>
                                    Smartwatches
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.7
                                    <span className="text-muted">
                                        out of 40 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple Watch SE"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-12.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple Watch SE
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Silver
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 299.00
                                </td>
                                <td>
                                    30
                                </td>
                                <td>
                                    Smartwatches
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.7
                                    <span className="text-muted">
                                        out of 40 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple Watch SE"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-10.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple Watch SE
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Starlight
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 299.00
                                </td>
                                <td>
                                    54
                                </td>
                                <td>
                                    Smartwatches
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.5
                                    <span className="text-muted">
                                        out of 35 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple Watch Series 9"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-1.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple Watch Series 9
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Midnight
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 349.00
                                </td>
                                <td>
                                    42
                                </td>
                                <td>
                                    Smartwatches
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.2
                                    <span className="text-muted">
                                        out of 20 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check fs-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                </td>
                                <td className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                        <img
                                            alt="Apple Watch Series 9"
                                            className="mw-100 mh-100"
                                            src="assets/img/products/product-2.png"
                                        />
                                    </div>
                                    <p className="d-inline-block mb-0">
                                        <strong>
                                            Apple Watch Series 9
                                        </strong>
                                        <br />
                                        <span className="text-muted">
                                            Starlight
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    $ 349.00
                                </td>
                                <td>
                                    54
                                </td>
                                <td>
                                    Smartwatches
                                </td>
                                <td>
                                    <i className="bi-star text-warning me-2" />
                                    4.5
                                    <span className="text-muted">
                                        out of 35 Reviews
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
}
export const Details  = () =>{
return <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">
      Product Details
    </h1>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-7 col-xxl-6">
            <div>
              <div className="row">
                <div className="col-4 col-md-3 col-xxl-2">
                  <div
                    aria-orientation="vertical"
                    className="nav flex-column nav-outline"
                    role="tablist"
                  >
                    <Link
                      aria-controls="product-1"
                      aria-selected="true"
                      className="nav-link active mb-2"
                      data-bs-toggle="pill"
                      to="#product-1"
                      role="tab"
                    >
                      <img
                        alt=""
                        className="img-fluid mx-auto d-block rounded mh-75px"
                        src="assets/img/products/product-detail-1.png"
                      />
                     </Link>
                    <Link
                      aria-controls="product-2"
                      aria-selected="false"
                      className="nav-link mb-2"
                      data-bs-toggle="pill"
                      to="#product-2"
                      role="tab"
                      tabIndex="-1"
                    >
                      <img
                        alt=""
                        className="img-fluid mx-auto d-block rounded mh-75px"
                        src="assets/img/products/product-detail-2.png"
                      />
                     </Link>
                    <Link
                      aria-controls="product-3"
                      aria-selected="false"
                      className="nav-link mb-2"
                      data-bs-toggle="pill"
                      to="#product-3"
                      role="tab"
                      tabIndex="-1"
                    >
                      <img
                        alt=""
                        className="img-fluid mx-auto d-block rounded mh-75px"
                        src="assets/img/products/product-detail-3.png"
                      />
                     </Link>
                    <Link
                      aria-controls="product-4"
                      aria-selected="false"
                      className="nav-link mb-2"
                      data-bs-toggle="pill"
                      to="#product-4"
                      role="tab"
                      tabIndex="-1"
                    >
                      <img
                        alt=""
                        className="img-fluid mx-auto d-block rounded mh-75px"
                        src="assets/img/products/product-detail-4.png"
                      />
                     </Link>
                  </div>
                </div>
                <div className="col-8 col-md-9 col-xxl-9 offset-xxl-1">
                  <div className="tab-content p-3">
                    <div
                      className="tab-pane fade active show"
                      id="product-1"
                      role="tabpanel"
                    >
                      <div>
                        <img
                          alt=""
                          className="img-fluid mx-auto d-block"
                          src="assets/img/products/product-detail-1.png"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-2"
                      role="tabpanel"
                    >
                      <div>
                        <img
                          alt=""
                          className="img-fluid mx-auto d-block"
                          src="assets/img/products/product-detail-2.png"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-3"
                      role="tabpanel"
                    >
                      <div>
                        <img
                          alt=""
                          className="img-fluid mx-auto d-block"
                          src="assets/img/products/product-detail-3.png"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-4"
                      role="tabpanel"
                    >
                      <div>
                        <img
                          alt=""
                          className="img-fluid mx-auto d-block"
                          src="assets/img/products/product-detail-4.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6">
            <div className="mt-3">
              <Link
                className="text-primary"
                to="#"
              >
                Smartphones
               </Link>
              <h4 className="mt-1 mb-4">
                Apple iPhone 15 Pro Max
              </h4>
              <p className="mb-3">
                <i className="bi-star text-warning text-warning" />
                {' '}4.6{' '}
                <span className="text-muted">
                  out of 40 Reviews
                </span>
              </p>
              <h5 className="mb-3">
                Price: $1499 USD										
              </h5>
              <p className="text-muted mb-4">
                Introducing the Apple iPhone 15 Pro Max 256GB in Blue Titanium. Experience unparalleled performance with the lightning-fast A17 Pro chip, perfect for gaming											and seamless multitasking. Capture stunning photos and videos with the triple-lens camera system, including standard, wide-angle, and telephoto lenses,											complete with Night mode for low-light shots.
              </p>
              <div className="row mb-3">
                <div className="col-md-6">
                  <p className="text-muted">
                    <i
                      className="bi-database align-middle me-2"
                    
                    />
                    <span className="align-middle">
                      Storage: 256 GB
                    </span>
                  </p>
                  <p className="text-muted">
                    <i
                      className="bi bi-battery align-middle me-2"
                    ></i>
                    <span className="align-middle">
                      Battery: 29 hours
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted">
                    <i
                      className="bi-camera align-middle me-2"
            
                    />
                    <span className="align-middle me-2">
                      Megapixels: 48 MP
                    </span>
                  </p>
                  <p className="text-muted">
                    <i
                      className="bi-incognito align-middle me-2"
                      
                    />
                    <span className="align-middle">
                      Warranty: 24 Months
                    </span>
                  </p>
                </div>
              </div>
              <Link
                className="btn btn-primary mb-3 me-3"
                to="#"
              >
                <i
                  className="bi-bag align-middle me-2"
                
                />
                <span className="align-middle">
                  Buy now
                </span>
               </Link>
              <Link
                className="btn btn-light mb-3 me-2"
                to="#"
              >
                <i
                  className="bi-cart align-middle me-1"
               
                />
                <span className="align-middle">
                  Add to cart
                </span>
               </Link>
              <h5>
                Color:
              </h5>
              <div
                aria-orientation="horizontal"
                className="nav nav-outline"
                role="tablist"
              >
                <div className="me-3 text-center">
                  <Link className="nav-link active p-1 mb-1 w-75px h-75px">
                    <img
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                      src="assets/img/products/product-4.png"
                    />
                   </Link>
                  <p className="mb-0">
                    Blue
                  </p>
                </div>
                <div className="me-3 text-center">
                  <Link className="nav-link p-1 mb-1 w-75px h-75px">
                    <img
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                      src="assets/img/products/product-5.png"
                    />
                   </Link>
                  <p className="mb-0">
                    White
                  </p>
                </div>
                <div className="me-3 text-center">
                  <Link className="nav-link p-1 mb-1 w-75px h-75px">
                    <img
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                      src="assets/img/products/product-3.png"
                    />
                   </Link>
                  <p className="mb-0">
                    Natural
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 className="h4 mb-3">
      Specifications
    </h2>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-sm mb-0">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      style={{
                        width: '320px'
                      }}
                    >
                      Category
                    </th>
                    <td>
                      Smartphones
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Brand
                    </th>
                    <td>
                      Apple
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Product number
                    </th>
                    <td>
                      935277
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Warranty
                    </th>
                    <td>
                      24 Months
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Color
                    </th>
                    <td>
                      Blue
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-sm mb-0">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      style={{
                        width: '320px'
                      }}
                    >
                      Year introduced
                    </th>
                    <td>
                      2023
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Operating system
                    </th>
                    <td>
                      iOS
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Operation system when introduced
                    </th>
                    <td>
                      iOS 17
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Update frequency
                    </th>
                    <td>
                      Each quarter
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Date of last security update
                    </th>
                    <td>
                      September 2028
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 className="h4 mb-3">
      Related products
    </h2>
    <div className="row">
      <div className="col-sm-6 col-xl-4">
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img
                  alt="Apple iPad Pro"
                  className="img-fluid mx-auto d-block mw-75px"
                  src="assets/img/products/product-9.png"
                />
              </div>
              <div className="col-md-8">
                <div className="text-center text-md-start pt-3 pt-md-0">
                  <h5 className="text-truncate">
                    <Link
                      className="text-reset"
                      to="#"
                    >
                      Apple iPad Pro
                     </Link>
                  </h5>
                  <p className="text-muted mb-4">
                    <i className="bi-star text-warning text-warning" />
                    {' '}4.6{' '}
                    <span className="text-muted">
                      out of 55 Reviews
                    </span>
                  </p>
                  <p className="my-0">
                    <span className="text-muted me-2">
                      <strong>
                        $1,399.00
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img
                  alt="Apple Watch SE"
                  className="img-fluid mx-auto d-block mw-75px"
                  src="assets/img/products/product-11.png"
                />
              </div>
              <div className="col-md-8">
                <div className="text-center text-md-start pt-3 pt-md-0">
                  <h5 className="text-truncate">
                    <Link
                      className="text-reset"
                      to="#"
                    >
                      Apple Watch SE
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">
                    <i className="bi-star text-warning text-warning" />
                    {' '}4.7{' '}
                    <span className="text-muted">
                      out of 40 Reviews
                    </span>
                  </p>
                  <p className="my-0">
                    <span className="text-muted me-2">
                      <strong>
                        $299.00
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img
               
                  alt="Apple MacBook Pro 16\"
                  className="img-fluid mx-auto d-block mw-75px"
                  src="assets/img/products/product-7.png"
                />
              </div>
              <div className="col-md-8">
                <div className="text-center text-md-start pt-3 pt-md-0">
                  <h5 className="text-truncate">
                    <Link
                      className="text-reset"
                      to="#"
                    >
                      Apple MacBook Pro 16"
                     </Link>
                  </h5>
                  <p className="text-muted mb-4">
                    <i className="bi-star text-warning text-warning" />
                    {' '}4.7{' '}
                    <span className="text-muted">
                      out of 45 Reviews
                    </span>
                  </p>
                  <p className="my-0">
                    <span className="text-muted me-2">
                      <strong>
                        $2,399.00
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
}
export const Orders =()=>{
    return <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Orders</h1>
    <div className="card">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-6 col-xl-4 mb-2 mb-md-0">
            <div className="input-group input-group-search">
              <input
                className="form-control"
                id="datatables-orders-search"
                placeholder="Search orders…"
                type="text"
              />
              <button className="btn" type="button">
                <i className="bi-search align-middle"  />
              </button>
            </div>
          </div>
          <div className="col-md-6 col-xl-8">
            <div className="text-sm-end">
              <button className="btn btn-light btn-lg me-2" type="button">
                <i className="bi-download m-1" /> Export
              </button>
              <button className="btn btn-primary btn-lg" type="button">
                <i className="bi-plus me-1" /> New Order
              </button>
            </div>
          </div>
        </div>
        <table className="table w-100" id="datatables-orders">
          <thead>
            <tr>
              <th className="align-middle">
                <div className="form-check fs-4">
                  <input
                    className="form-check-input"
                    id="datatables-orders-check-all"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="datatables-orders-check-all"
                  />
                </div>
              </th>
              <th className="align-middle">Order ID</th>
              <th className="align-middle">Billing Name</th>
              <th className="align-middle">Date</th>
              <th className="align-middle">Total</th>
              <th className="align-middle">Payment Method</th>
              <th className="align-middle">Payment Status</th>
              <th className="align-middle text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK01</strong>
              </td>
              <td>Tony Sheley</td>
              <td>July 5, 2023</td>
              <td>$350 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK02</strong>
              </td>
              <td>Suzanna Miller</td>
              <td>July 20, 2023</td>
              <td>$450 USD</td>
              <td>
                <i className="bi-brands bi-password" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-danger">Failed</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK03</strong>
              </td>
              <td>John Doe</td>
              <td>August 8, 2023</td>
              <td>$780 USD</td>
              <td>
                <i className="bi-brands bi-paypal" /> PayPal
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK04</strong>
              </td>
              <td>Alice Johnson</td>
              <td>August 15, 2023</td>
              <td>$320 USD</td>
              <td>
                <i className="bi-brands bi-amex" /> American Express
              </td>
              <td>
                <span className="badge badge-subtle-warning">In process</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK05</strong>
              </td>
              <td>Emily White</td>
              <td>August 29, 2023</td>
              <td>$600 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK06</strong>
              </td>
              <td>Michael Brown</td>
              <td>September 10, 2023</td>
              <td>$900 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK07</strong>
              </td>
              <td>David Lee</td>
              <td>September 25, 2023</td>
              <td>$750 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK08</strong>
              </td>
              <td>Emma Davis</td>
              <td>October 4, 2023</td>
              <td>$520 USD</td>
              <td>
                <i className="bi-brands bi-paypal" /> PayPal
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK09</strong>
              </td>
              <td>Lisa Taylor</td>
              <td>October 18, 2023</td>
              <td>$430 USD</td>
              <td>
                <i className="bi-brands bi-amex" /> American Express
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK10</strong>
              </td>
              <td>Matthew Clark</td>
              <td>November 2, 2023</td>
              <td>$370 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-danger">Failed</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK11</strong>
              </td>
              <td>Sarah Martinez</td>
              <td>November 17, 2024</td>
              <td>$680 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK12</strong>
              </td>
              <td>Jason Wilson</td>
              <td>November 19, 2024</td>
              <td>$290 USD</td>
              <td>
                <i className="bi-brands bi-amex" /> American Express
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK13</strong>
              </td>
              <td>Michelle Harris</td>
              <td>November 25, 2024</td>
              <td>$480 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK14</strong>
              </td>
              <td>Ryan Thompson</td>
              <td>December 3, 2024</td>
              <td>$820 USD</td>
              <td>
                <i className="bi-brands bi-paypal" /> PayPal
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK15</strong>
              </td>
              <td>Karen Moore</td>
              <td>December 6, 2024</td>
              <td>$350 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-danger">Failed</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK16</strong>
              </td>
              <td>Daniel Anderson</td>
              <td>December 11, 2024</td>
              <td>$730 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK17</strong>
              </td>
              <td>Christopher Taylor</td>
              <td>December 14, 2024</td>
              <td>$510 USD</td>
              <td>
                <i className="bi-brands bi-amex" /> American Express
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK18</strong>
              </td>
              <td>Amy Garcia</td>
              <td>December 17, 2024</td>
              <td>$920 USD</td>
              <td>
                <i className="bi-brands bi-visa" /> Visa
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK19</strong>
              </td>
              <td>James Rodriguez</td>
              <td>December 22, 2024</td>
              <td>$770 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-success">Paid</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check fs-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" />
                </div>
              </td>
              <td>
                <strong>#SK20</strong>
              </td>
              <td>Emma Rodriguez</td>
              <td>December 23, 2024</td>
              <td>$330 USD</td>
              <td>
                <i className="bi-brands bi-mastercard" /> Mastercard
              </td>
              <td>
                <span className="badge badge-subtle-warning">In process</span>
              </td>
              <td className="text-end">
                <button className="btn btn-light" type="button">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
}
export const Customers = ()=>{
    return <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Customers</h1>
    <div className="row">
      <div className="col-xl-8">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6 mb-2 mb-md-0">
                <div className="input-group input-group-search">
                  <input
                    className="form-control"
                  
                    placeholder="Search customers…"
                    type="text"
                  />
                  <button className="btn" type="button">
                    <i className="bi-search align-middle"  />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-sm-end">
                  <button className="btn btn-light btn-lg me-2" type="button">
                    <i className="bi-download" /> Export
                  </button>
                  <button className="btn btn-primary btn-lg" type="button">
                    <i className="bi-plus" /> Add Customer
                  </button>
                </div>
              </div>
            </div>
            <table className="table w-100" id="datatables-customers">
              <thead>
                <tr>
                  <th className="text-start">#</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </td>
                  <td>Garrett Winters</td>
                  <td>Good Guys</td>
                  <td>garrett@winters.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </td>
                  <td>Ashton Cox</td>
                  <td>Levitz Furniture</td>
                  <td>ashton@cox.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </td>
                  <td>Sonya Frost</td>
                  <td>Child World</td>
                  <td>sonya@frost.com</td>
                  <td>
                    <span className="badge badge-subtle-danger">Deleted</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </td>
                  <td>Jena Gaines</td>
                  <td>Helping Hand</td>
                  <td>jena@gaines.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </td>
                  <td>Quinn Flynn</td>
                  <td>Good Guys</td>
                  <td>quinn@flynn.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </td>
                  <td>Charde Marshall</td>
                  <td>Price Savers</td>
                  <td>charde@marshall.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </td>
                  <td>Haley Kennedy</td>
                  <td>Helping Hand</td>
                  <td>haley@kennedy.com</td>
                  <td>
                    <span className="badge badge-subtle-danger">Deleted</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </td>
                  <td>Tatyana Fitzpatrick</td>
                  <td>Good Guys</td>
                  <td>tatyana@fitzpatrick.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </td>
                  <td>Michael Silva</td>
                  <td>Red Robin Stores</td>
                  <td>michael@silva.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </td>
                  <td>Yuri Berry</td>
                  <td>The Wiz</td>
                  <td>yuri@berry.com</td>
                  <td>
                    <span className="badge badge-subtle-danger">Deleted</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </td>
                  <td>Doris Wilder</td>
                  <td>Red Robin Stores</td>
                  <td>doris@wilder.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </td>
                  <td>Angelica Ramos</td>
                  <td>The Wiz</td>
                  <td>angelica@ramos.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </td>
                  <td>Jennifer Chang</td>
                  <td>Helping Hand</td>
                  <td>jennifer@chang.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </td>
                  <td>Brenden Wagner</td>
                  <td>The Wiz</td>
                  <td>brenden@wagner.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </td>
                  <td>Fiona Green</td>
                  <td>The Sample</td>
                  <td>fiona@green.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </td>
                  <td>Suki Burks</td>
                  <td>The Sample</td>
                  <td>suki@burks.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-5.jpg"
                      width="32"
                    />
                  </td>
                  <td>Prescott Bartlett</td>
                  <td>The Sample</td>
                  <td>prescott@bartlett.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-5.jpg"
                      width="32"
                    />
                  </td>
                  <td>Gavin Cortez</td>
                  <td>Red Robin Stores</td>
                  <td>gavin@cortez.com</td>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-5.jpg"
                      width="32"
                    />
                  </td>
                  <td>Unity Butler</td>
                  <td>Price Savers</td>
                  <td>unity@butler.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="Avatar"
                      className="rounded-circle my-n1"
                      height="32"
                      src="assets/img/avatars/avatar-5.jpg"
                      width="32"
                    />
                  </td>
                  <td>Howard Hatfield</td>
                  <td>Price Savers</td>
                  <td>howard@hatfield.com</td>
                  <td>
                    <span className="badge badge-subtle-warning">Inactive</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-more-horizontal align-middle"  />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Angelica Ramos</h5>
          </div>
          <div className="card-body">
            <div className="row g-0">
              <div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
                <img
                  alt="Angelica Ramos"
                  className="rounded-circle mt-2"
                  height="64"
                  src="assets/img/avatars/avatar-3.jpg"
                  width="64"
                />
              </div>
              <div className="col-sm-9 col-xl-12 col-xxl-9">
                <strong>About me</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <table className="table table-sm my-2">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Angelica Ramos</td>
                </tr>
                <tr>
                  <th>Company</th>
                  <td>The Wiz</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>angelica@ramos.com</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span className="badge badge-subtle-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <strong>Activity</strong>
            <ul className="timeline mt-2 mb-0">
              <li className="timeline-item">
                <strong>Signed out</strong>
                <span className="float-end text-muted text-sm">30m ago</span>
                <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
              </li>
              <li className="timeline-item">
                <strong>Created invoice #1204</strong>
                <span className="float-end text-muted text-sm">2h ago</span>
                <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
              </li>
              <li className="timeline-item">
                <strong>Discarded invoice #1147</strong>
                <span className="float-end text-muted text-sm">3h ago</span>
                <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
              </li>
              <li className="timeline-item">
                <strong>Signed in</strong>
                <span className="float-end text-muted text-sm">3h ago</span>
                <p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
              </li>
              <li className="timeline-item">
                <strong>Signed up</strong>
                <span className="float-end text-muted text-sm">2d ago</span>
                <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
}
export const Invoice =()=>{
    return <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Invoice</h1>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body m-sm-3 m-md-5">
            <div className="mb-4">
              Hello <strong>Chris Wood</strong>
              ,
              <br /> This is the receipt for a payment of{" "}
              <strong>$268.00</strong> (USD) you made to AppStack.
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="text-muted">Payment No.</div>
                <strong>741037024</strong>
              </div>
              <div className="col-md-6 text-md-right">
                <div className="text-muted">Payment Date</div>
                <strong>June 2, 2023 - 03:45 pm</strong>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="text-muted">Client</div>
                <strong>Chris Wood</strong>
                <p>
                  4183 Forest Avenue <br /> New York City <br /> 10011 <br />{" "}
                  USA <br />
                  <Link  to="#">chris.wood@gmail.com</Link>
                </p>
              </div>
              <div className="col-md-6 text-md-right">
                <div className="text-muted">Payment To</div>
                <strong>AppStack LLC</strong>
                <p>
                  354 Roy Alley <br /> Denver <br /> 80202 <br /> USA <br />
                  <Link  to="#">info@appstack.com</Link>
                </p>
              </div>
            </div>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th className="text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AppStack Theme Customization</td>
                  <td>2</td>
                  <td className="text-end">$150.00</td>
                </tr>
                <tr>
                  <td>Monthly Subscription </td>
                  <td>3</td>
                  <td className="text-end">$25.00</td>
                </tr>
                <tr>
                  <td>Additional Service</td>
                  <td>1</td>
                  <td className="text-end">$100.00</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Subtotal </th>
                  <th className="text-end">$275.00</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Shipping </th>
                  <th className="text-end">$8.00</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Discount </th>
                  <th className="text-end">5%</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Total </th>
                  <th className="text-end">$268.85</th>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <p className="text-sm">
                <strong>Extra note:</strong> Please send all items at the same
                time to the shipping address. Thanks in advance.
              </p>
              <Link className="btn btn-primary" to="#">
                Print this receipt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
}

