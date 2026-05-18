import { Link } from "react-router-dom";

export const Wishlist = () => {
  return (
    <main>
      <div className="mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#!">Home </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#!">Shop </Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    My Wishlist
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-8 mb-14">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table text-nowrap table-with-checkbox">
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
                            htmlFor="checkAll"
                          />
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
                            htmlFor="chechboxTwo"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link to="#">
                          <img
                            alt=""
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-18.jpg"
                          />
                         </Link>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <Link className="text-inherit" to="#">
                              Organic Banana
                             </Link>
                          </h5>
                          <small>$.98 / lb</small>
                        </div>
                      </td>
                      <td className="align-middle">$35.00</td>
                      <td className="align-middle">
                        <span className="badge bg-success">In Stock</span>
                      </td>
                      <td className="align-middle">
                        <div className="btn btn-primary btn-sm">
                          Add to Cart
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link
                          className="text-muted"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          to="#"
                          title="Delete"
                        >
                          <i className="bi bi-trash fs-6" />
                         </Link>
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
                            htmlFor="chechboxThree"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link to="#">
                          <img
                            alt=""
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-17.jpg"
                          />
                         </Link>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <Link className="text-inherit" to="#">
                              Fresh Kiwi
                             </Link>
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
                      <td className="align-middle">
                        <Link
                          className="text-muted"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          to="#"
                          title="Delete"
                        >
                          <i className="bi bi-trash" />
                         </Link>
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
                            htmlFor="chechboxFour"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link to="#">
                          <img
                            alt=""
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-16.jpg"
                          />
                         </Link>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <Link className="text-inherit" to="#">
                              Golden Pineapple
                             </Link>
                          </h5>
                          <small>2 no</small>
                        </div>
                      </td>
                      <td className="align-middle">$35.00</td>
                      <td className="align-middle">
                        <span className="badge bg-success">In Stock</span>
                      </td>
                      <td className="align-middle">
                        <div className="btn btn-primary btn-sm">
                          Add to Cart
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link
                          className="text-muted"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          to="#"
                          title="Delete"
                        >
                          <i className="bi bi-trash" />
                         </Link>
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
                            htmlFor="chechboxFive"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link to="#">
                          <img
                            alt=""
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-19.jpg"
                          />
                         </Link>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <Link className="text-inherit" to="#">
                              BeatRoot
                             </Link>
                          </h5>
                          <small>1 kg</small>
                        </div>
                      </td>
                      <td className="align-middle">$29.00</td>
                      <td className="align-middle">
                        <span className="badge bg-success">In Stock</span>
                      </td>
                      <td className="align-middle">
                        <div className="btn btn-primary btn-sm">
                          Add to Cart
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link
                          className="text-muted"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          to="#"
                          title="Delete"
                        >
                          <i className="bi bi-trash" />
                         </Link>
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
                            htmlFor="chechboxSix"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link to="#">
                          <img
                            alt=""
                            className="icon-shape icon-xxl"
                            src="../assets/images/products/product-img-15.jpg"
                          />
                         </Link>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <Link className="text-inherit" to="#">
                              Fresh Apple
                             </Link>
                          </h5>
                          <small>2 kg</small>
                        </div>
                      </td>
                      <td className="align-middle">$70.00</td>
                      <td className="align-middle">
                        <span className="badge bg-success">In Stock</span>
                      </td>
                      <td className="align-middle">
                        <div className="btn btn-primary btn-sm">
                          Add to Cart
                        </div>
                      </td>
                      <td className="align-middle">
                        <Link
                          className="text-muted"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          to="#"
                          title="Delete"
                        >
                          <i className="bi bi-trash" />
                         </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
