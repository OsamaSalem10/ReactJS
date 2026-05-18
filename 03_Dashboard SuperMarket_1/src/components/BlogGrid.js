import { Link } from "react-router-dom";

export const BlogGrid = () => {
    return (
        <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-9">
      <div className="col-md-12">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            <h2>Blog Grid</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Dashboard
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Blog
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-primary" to="/add-blog">
              New Post
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-12 mb-9">
        <div className="row justify-content-between d-flex flex-md-row flex-column gap-2">
          <div className="col-lg-4 col-md-4 col-12">
            <form className="d-flex" role="search">
              <label
                className="form-label visually-hidden"
                htmlFor="postSearch">
                Search Post
              </label>
              <input
                aria-label="Search"
                className="form-control"
                id="postSearch"
                placeholder="Search Post"
                type="search"
              />
            </form>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <label className="form-label visually-hidden" htmlFor="postbyDate">
              Post by Date
            </label>
            <select className="form-select" id="postbyDate">
              <option selected>Latest</option>
              <option value="Popular">Popular</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-6">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-1.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-danger text-dark-danger">
                Draft
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Garlic Cream Bucatini with Peas and Asparagus
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">05 June, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-2.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Harissa Chickpeas with Whipped Feta
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">02 June, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-3.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Almond Butter Chocolate Chip Zucchini Bars
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">1 June, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-4.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">26 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-5.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Red Chile Chicken Tacos with Creamy Corn
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">24 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-8.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Basic + Awesome Broccoli Cheese Soup
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">20 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-6.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-danger text-dark-danger">
                Draft
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                No-Boil Baked Penne with Meatballs
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">20 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-7.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Red Chile Chicken Tacos with Creamy Corn
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">10 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card card-lg rounded-4 border-0 card-lift h-100">
          <Link
            className="img-zoom rounded-bottom-0"
            to="../pages/blog-single.html">
            <img
              alt="blog img"
              className="img-fluid rounded-top-4"
              src="../assets/images/blog/blog-img-9.jpg"
            />
          </Link>
          <div className="card-body d-flex flex-column gap-4 p-6">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span className="badge bg-light-success text-dark-success">
                Published
              </span>
              <div>
                <div className="dropdown">
                  <Link
                    aria-expanded="false"
                    className="text-reset"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="feather-icon icon-more-vertical fs-5" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-eye-fill me-3" />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-pencil-square me-3" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="#">
                        <i className="bi bi-trash me-3" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="mb-0 h5">
              <Link className="text-reset" to="../pages/blog-single.html">
                Basic + Awesome Broccoli Cheese Soup
              </Link>
            </h3>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <small className="text-black-50">08 May, 2024</small>
              <small className="text-black-50">
                Read time:
                <small className="text-dark">12min</small>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div>
          <nav className="mt-7 mt-lg-10">
            <ul className="pagination mb-0">
              <li className="page-item disabled">
                <Link className="page-link" to="#!">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active" to="#!">
                  1
                </Link>
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
                <Link className="page-link" to="#!">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</main>
    );
}