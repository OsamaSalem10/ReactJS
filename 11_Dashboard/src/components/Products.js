import { Link } from "react-router-dom";

export const Products = () => {
  return (
   <section className="py-5">
  <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
    <h1 className="h6 text-nowrap mb-sm-0">Products (4)</h1>
    <div
      className="position-relative w-100"
      style={{
        maxWidth: "300px",
      }}>
      <i className="bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
      <input
        className="product-search form-control form-icon-start rounded-pill"
        placeholder="Search"
        type="search"
      />
      <button className="btn btn-primary rounded-pill px-4" type="button">
        <i className="bi-plus-lg fs-sm me-1" />
        Add product
      </button>
    </div>
  </div>
  <div className="row">
  <div className="col-lg-12">
    <div className="mb-8">
      <h1 className="mb-1">My Wishlist</h1>
      <p>There are 5 products in this wishlist.</p>
    </div>
    <div>
      <div className="table-responsive">
        <table className="table text-nowrap">
          <thead className="table-light">
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
                    htmlFor="checkAll"></label>
                </div>
              </th>
              <th />
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="chechboxTwo"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chechboxTwo"></label>
                </div>
              </td>
              <td className="align-middle">
                <a href="#">
                  <img
                    alt=""
                    className="icon-shape icon-xxl"
                    src="../../assets/images/products/product-img-18.jpg"
                  />
                </a>
              </td>
              <td className="align-middle">
                <div>
                  <h5 className="fs-6 mb-0">
                    <a className="text-inherit" href="#">
                      Organic Banana
                    </a>
                  </h5>
                  <small>$.98 / lb</small>
                </div>
              </td>
              <td className="align-middle">$35.00</td>
              <td className="align-middle">
                <span className="badge bg-success">In Stock</span>
              </td>
              <td className="align-middle">
                <div className="btn btn-primary btn-sm">Add to Cart</div>
              </td>
              <td className="align-middle ">
                <a
                  aria-label="Delete"
                  className="text-muted"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  href="#">
                  <i className="feather-icon icon-trash-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="chechboxThree"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chechboxThree"></label>
                </div>
              </td>
              <td className="align-middle">
                <a href="#">
                  <img
                    alt=""
                    className="icon-shape icon-xxl"
                    src="../../assets/images/products/product-img-17.jpg"
                  />
                </a>
              </td>
              <td className="align-middle">
                <div>
                  <h5 className="fs-6 mb-0">
                    <a className="text-inherit" href="#">
                      Fresh Kiwi
                    </a>
                  </h5>
                  <small>4 no</small>
                </div>
              </td>
              <td className="align-middle">$20.97</td>
              <td className="align-middle">
                <span className="badge bg-danger">Out of Stock</span>
              </td>
              <td className="align-middle">
                <div className="btn btn-dark btn-sm">Contact us</div>
              </td>
              <td className="align-middle ">
                <a
                  aria-label="Delete"
                  className="text-muted"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  href="#">
                  <i className="feather-icon icon-trash-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="chechboxFour"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chechboxFour"></label>
                </div>
              </td>
              <td className="align-middle">
                <a href="#">
                  <img
                    alt=""
                    className="icon-shape icon-xxl"
                    src="../../assets/images/products/product-img-16.jpg"
                  />
                </a>
              </td>
              <td className="align-middle">
                <div>
                  <h5 className="fs-6 mb-0">
                    <a className="text-inherit" href="#">
                      Golden Pineapple
                    </a>
                  </h5>
                  <small>2 no</small>
                </div>
              </td>
              <td className="align-middle">$35.00</td>
              <td className="align-middle">
                <span className="badge bg-success">In Stock</span>
              </td>
              <td className="align-middle">
                <div className="btn btn-primary btn-sm">Add to Cart</div>
              </td>
              <td className="align-middle ">
                <a
                  aria-label="Delete"
                  className="text-muted"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  href="#">
                  <i className="feather-icon icon-trash-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="chechboxFive"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chechboxFive"></label>
                </div>
              </td>
              <td className="align-middle">
                <a href="#">
                  <img
                    alt=""
                    className="icon-shape icon-xxl"
                    src="../../assets/images/products/product-img-19.jpg"
                  />
                </a>
              </td>
              <td className="align-middle">
                <div>
                  <h5 className="fs-6 mb-0">
                    <a className="text-inherit" href="#">
                      BeatRoot
                    </a>
                  </h5>
                  <small>1 kg</small>
                </div>
              </td>
              <td className="align-middle">$29.00</td>
              <td className="align-middle">
                <span className="badge bg-success">In Stock</span>
              </td>
              <td className="align-middle">
                <div className="btn btn-primary btn-sm">Add to Cart</div>
              </td>
              <td className="align-middle ">
                <a
                  aria-label="Delete"
                  className="text-muted"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  href="#">
                  <i className="feather-icon icon-trash-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    defaultValue=""
                    id="chechboxSix"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chechboxSix"></label>
                </div>
              </td>
              <td className="align-middle">
                <a href="#">
                  <img
                    alt=""
                    className="icon-shape icon-xxl"
                    src="../../assets/images/products/product-img-15.jpg"
                  />
                </a>
              </td>
              <td className="align-middle">
                <div>
                  <h5 className="fs-6 mb-0">
                    <a className="text-inherit" href="#">
                      Fresh Apple
                    </a>
                  </h5>
                  <small>2 kg</small>
                </div>
              </td>
              <td className="align-middle">$70.00</td>
              <td className="align-middle">
                <span className="badge bg-success">In Stock</span>
              </td>
              <td className="align-middle">
                <div className="btn btn-primary btn-sm">Add to Cart</div>
              </td>
              <td className="align-middle ">
                <a
                  aria-label="Delete"
                  className="text-muted"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  href="#">
                  <i className="feather-icon icon-trash-2" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>
 {/*  <table className="table align-middle fs-sm mb-0">
    <thead>
      <tr>
        <th className="ps-0" scope="col">
          <span className="fw-normal text-body">Product</span>
        </th>
        <th className="d-none d-md-table-cell" scope="col">
          <span className="fw-normal text-body">Status</span>
        </th>
        <th className="text-end d-none d-md-table-cell" scope="col">
          <button
            className="btn fw-normal text-body product-sort p-0 me-n2"
            data-sort="sales"
            type="button">
            Sales
          </button>
        </th>
        <th className="text-end d-none d-sm-table-cell" scope="col">
          <button
            className="btn fw-normal text-body product-sort p-0 me-n2"
            data-sort="earnings"
            type="button">
            Earnings
          </button>
        </th>
        <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
          <span className="fw-normal text-body">Action</span>
        </th>
      </tr>
    </thead>
    <tbody className="product-list">
      <tr>
        <td className="py-3 ps-0">
          <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
            <div
              className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
              style={{
                "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                maxWidth: "142px",
              }}>
              <img
                alt=""
                className="hover-effect-target"
                src="assets/img/account/products/09.jpg"
              />
            </div>
            <div className="ps-2 ps-sm-3 ms-1">
              <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                Active
              </span>
              <h6 className="product mb-2">
                <Link
                  className="fs-sm fw-medium hover-effect-underline stretched-link"
                  to="shop-product-marketplace.html">
                  iPhone 15 pro mockups
                </Link>
              </h6>
              <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                <div className="h6 mb-0 me-1 me-md-0">$19</div>
                <div className="d-flex gap-2">
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-heart text-body-secondary me-1" />
                    13
                  </div>
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-chat text-body-secondary me-1" />4
                  </div>
                </div>
              </div>
              <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                <span className="text-body-secondary">Sales:</span> 47
              </div>
              <div className="fs-xs text-nowrap d-sm-none">
                <span className="text-body-secondary">Earnings:</span> $669.75
              </div>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell py-3">
          <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
            Active
          </span>
        </td>
        <td className="sales d-none d-md-table-cell text-end py-3">47</td>
        <td className="text-end d-none d-sm-table-cell py-3">
          $669.75
          <span className="earnings visually-hidden">66975</span>
        </td>
        <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
          <div className="dropdown">
            <button
              aria-expanded="false"
              aria-label="Settings"
              className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
              data-bs-toggle="dropdown"
              type="button">
              <i className="bi bi-three-dots-vertical fs-base" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi bi-pencil-square opacity-75 me-2" />
                  Edit
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-check2 fs-base opacity-75 me-2" />
                  Promote
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-archive opacity-75 me-2" />
                  Move to archive
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="#!">
                  <i className="bi-trash opacity-75 me-2" />
                  Delete
                 </Link>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td className="py-3 ps-0">
          <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
            <div
              className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
              style={{
                "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                maxWidth: "142px",
              }}>
              <img
                alt=""
                className="hover-effect-target"
                src="assets/img/account/products/10.jpg"
              />
            </div>
            <div className="ps-2 ps-sm-3 ms-1">
              <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                Active
              </span>
              <h6 className="product mb-2">
                <Link
                  className="fs-sm fw-medium hover-effect-underline stretched-link"
                  to="shop-product-marketplace.html">
                  3D box mockup bold rebrand
                 </Link>
              </h6>
              <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                <div className="h6 mb-0 me-1 me-md-0">$16</div>
                <div className="d-flex gap-2">
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-heart text-body-secondary me-1" />
                    25
                  </div>
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-chat text-body-secondary me-1" />2
                  </div>
                </div>
              </div>
              <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                <span className="text-body-secondary">Sales:</span> 56
              </div>
              <div className="fs-xs text-nowrap d-sm-none">
                <span className="text-body-secondary">Earnings:</span> $672.00
              </div>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell py-3">
          <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
            Active
          </span>
        </td>
        <td className="sales d-none d-md-table-cell text-end py-3">56</td>
        <td className="text-end d-none d-sm-table-cell py-3">
          $672.00
          <span className="earnings visually-hidden">67200</span>
        </td>
        <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
          <div className="dropdown">
            <button
              aria-expanded="false"
              aria-label="Settings"
              className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
              data-bs-toggle="dropdown"
              type="button">
              <i className="bi bi-three-dots-vertical fs-base" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi bi-pencil-square opacity-75 me-2" />
                  Edit
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-zap fs-base opacity-75 me-2" />
                  Promote
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-archive opacity-75 me-2" />
                  Move to archive
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="#!">
                  <i className="bi-trash opacity-75 me-2" />
                  Delete
                 </Link>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td className="py-3 ps-0">
          <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
            <div
              className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
              style={{
                "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                maxWidth: "142px",
              }}>
              <img
                alt=""
                className="hover-effect-target"
                src="assets/img/account/products/11.jpg"
              />
            </div>
            <div className="ps-2 ps-sm-3 ms-1">
              <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                Active
              </span>
              <h6 className="product mb-2">
                <Link
                  className="fs-sm fw-medium hover-effect-underline stretched-link"
                  to="shop-product-marketplace.html">
                  Smartphone mockups for UI designs
                 </Link>
              </h6>
              <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                <div className="h6 mb-0 me-1 me-md-0">$18</div>
                <div className="d-flex gap-2">
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-heart text-body-secondary me-1" />
                    36
                  </div>
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-chat text-body-secondary me-1" />8
                  </div>
                </div>
              </div>
              <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                <span className="text-body-secondary">Sales:</span> 152
              </div>
              <div className="fs-xs text-nowrap d-sm-none">
                <span className="text-body-secondary">Earnings:</span> $2,052.00
              </div>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell py-3">
          <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
            Active
          </span>
        </td>
        <td className="sales d-none d-md-table-cell text-end py-3">152</td>
        <td className="text-end d-none d-sm-table-cell py-3">
          $2,052.00
          <span className="earnings visually-hidden">205200</span>
        </td>
        <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
          <div className="dropdown">
            <button
              aria-expanded="false"
              aria-label="Settings"
              className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
              data-bs-toggle="dropdown"
              type="button">
              <i className="bi bi-three-dots-vertical fs-base" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi bi-pencil-square opacity-75 me-2" />
                  Edit
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-zap fs-base opacity-75 me-2" />
                  Promote
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-archive opacity-75 me-2" />
                  Move to archive
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="#!">
                  <i className="bi-trash opacity-75 me-2" />
                  Delete
                 </Link>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td className="py-3 ps-0">
          <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
            <div
              className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
              style={{
                "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                maxWidth: "142px",
              }}>
              <img
                alt=""
                className="hover-effect-target"
                src="assets/img/account/products/12.jpg"
              />
            </div>
            <div className="ps-2 ps-sm-3 ms-1">
              <span className="badge fs-xs text-warning bg-warning-subtle rounded-pill d-md-none mb-1">
                Archived
              </span>
              <h6 className="product mb-2">
                <Link
                  className="fs-sm fw-medium hover-effect-underline stretched-link"
                  to="shop-product-marketplace.html">
                  Multi device mockup PSD
                 </Link>
              </h6>
              <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                <div className="h6 mb-0 me-1 me-md-0">$27</div>
                <div className="d-flex gap-2">
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-heart text-body-secondary me-1" />9
                  </div>
                  <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                    <i className="bi-chat text-body-secondary me-1" />
                    12
                  </div>
                </div>
              </div>
              <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                <span className="text-body-secondary">Sales:</span> 43
              </div>
              <div className="fs-xs text-nowrap d-sm-none">
                <span className="text-body-secondary">Earnings:</span> $870.75
              </div>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell py-3">
          <span className="status badge fs-xs text-warning bg-warning-subtle rounded-pill">
            Archived
          </span>
        </td>
        <td className="sales d-none d-md-table-cell text-end py-3">43</td>
        <td className="text-end d-none d-sm-table-cell py-3">
          $870.75
          <span className="earnings visually-hidden">87075</span>
        </td>
        <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
          <div className="dropdown">
            <button
              aria-expanded="false"
              aria-label="Settings"
              className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
              data-bs-toggle="dropdown"
              type="button">
              <i className="bi bi-three-dots-vertical fs-base" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi bi-pencil-square opacity-75 me-2" />
                  Edit
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-zap fs-base opacity-75 me-2" />
                  Promote
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  <i className="bi-archive opacity-75 me-2" />
                  Move to archive
                 </Link>
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="#!">
                  <i className="bi-trash opacity-75 me-2" />
                  Delete
                 </Link>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table> */}
</section>
  );
}