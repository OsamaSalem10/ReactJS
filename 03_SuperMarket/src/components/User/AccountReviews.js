import { Link } from "react-router-dom"
import {AccountHeader} from "./AccountHeader"
export const AccountReviews = () => {
    return (
        <main className="content-wrapper">
  <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
    <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
      <AccountHeader />
      <div className="col-lg-9">
        <h1 className="h2 pb-2 pb-lg-3">Reviews</h1>
        <div className="nav overflow-x-auto mb-3 mb-md-4">
          <ul
            className="nav nav-pills flex-nowrap gap-2 pb-2 mb-1"
            role="tablist">
            <li className="nav-item me-1" role="presentation">
              <button
                aria-controls="reviews-about-you"
                aria-selected="true"
                className="nav-link text-nowrap active"
                data-bs-target="#reviews-about-you"
                data-bs-toggle="pill"
                id="reviews-about-you-tab"
                role="tab"
                type="button">
                Reviews about you (8)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="reviews-by-you"
                aria-selected="false"
                className="nav-link text-nowrap"
                data-bs-target="#reviews-by-you"
                data-bs-toggle="pill"
                id="reviews-by-you-tab"
                role="tab"
                type="button">
                Reviews by you (12)
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            aria-labelledby="reviews-about-you-tab"
            className="tab-pane fade show active"
            id="reviews-about-you"
            role="tabpanel">
            <div className="border-bottom pb-4">
              <div className="d-sm-flex align-items-center mb-3">
                <div className="d-flex align-items-center pe-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "48px",
                    }}>
                    <img
                      alt=""
                      src="assets/img/account/reviews/ava01.jpg"
                    />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-1">Randy Walker</h6>
                    <div className="fs-xs text-body-secondary">
                      Nov 12, 2024
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-1 fs-sm pt-2 pt-sm-0 ps-5 ps-sm-0 ms-3 ms-sm-auto">
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                </div>
              </div>
              <p className="fs-sm mb-2">
                Review on:
                <Link
                  className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                  to="#!">
                  67-04 Myrtle Ave Glendale, NY 11385
                </Link>
              </p>
              <p className="fs-sm mb-0">
                Excellent apartment in the very center of the city, attractions
                and entertainment venues are located 50m from the flat. The flat
                was perfectly clean and had basic slippers, gel-shampoo, clean
                towels.
              </p>
              <div className="bg-body-tertiary rounded p-4 mt-4 mb-2">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "38px",
                    }}>
                    <img alt="" src="assets/img/account/avatar-sm.jpg" />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-1">Michael Williams</h6>
                    <div className="fs-xs text-body-secondary">
                      Nov 13, 2024
                    </div>
                  </div>
                </div>
                <p className="fs-sm mb-0">
                  Thank you for your feedback. I'm glad you were satisfied :)
                </p>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-sm-flex align-items-center mt-2 mb-3">
                <div className="d-flex align-items-center pe-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "48px",
                    }}>
                    <img
                      alt=""
                      src="assets/img/account/reviews/ava02.jpg"
                    />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-1">Kathryn Murphy</h6>
                    <div className="fs-xs text-body-secondary">
                      Sep 17, 2024
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-1 fs-sm pt-2 pt-sm-0 ps-5 ps-sm-0 ms-3 ms-sm-auto">
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                </div>
              </div>
              <p className="fs-sm mb-2">
                Review on:
                <Link
                  className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                  to="#!">
                  517 82nd St, Brooklyn, NY 11209
                </Link>
              </p>
              <p className="fs-sm">
                I recently rented an apartment, and it has been a fantastic
                experience. The apartment itself is beautiful, with modern
                finishes and plenty of natural light. The property management
                team is very attentive and responds quickly to any maintenance
                requests. The common areas, including the pool and gym, are
                always clean and well-maintained.
              </p>
              <div className="d-flex gap-2 mb-3">
                <Link
                  className="hover-effect-scale hover-effect-opacity position-relative d-block w-100 rounded overflow-hidden"
                  data-gallery="review-images"
                  data-glightbox=""
                  to="assets/img/listings/real-estate/single/01.jpg"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <i className="bi-zoom-in hover-effect-target fs-4 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
                  <div className="ratio ratio-1x1 hover-effect-target bg-body-tertiary">
                    <img alt="" src="assets/img/account/reviews/01.jpg" />
                  </div>
                </Link>
                <Link
                  className="hover-effect-scale hover-effect-opacity position-relative d-block w-100 rounded overflow-hidden"
                  data-gallery="review-images"
                  data-glightbox=""
                  to="assets/img/listings/real-estate/single/03.jpg"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <i className="bi-zoom-in hover-effect-target fs-4 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
                  <div className="ratio ratio-1x1 hover-effect-target bg-body-tertiary">
                    <img alt="" src="assets/img/account/reviews/02.jpg" />
                  </div>
                </Link>
                <Link
                  className="hover-effect-scale hover-effect-opacity position-relative d-block w-100 rounded overflow-hidden"
                  data-gallery="review-images"
                  data-glightbox=""
                  to="assets/img/listings/real-estate/single/02.jpg"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <i className="bi-zoom-in hover-effect-target fs-4 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
                  <div className="ratio ratio-1x1 hover-effect-target bg-body-tertiary">
                    <img alt="" src="assets/img/account/reviews/03.jpg" />
                  </div>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button">
                  <i className="bi bi-reply fs-sm ms-n1 me-2" />
                  Reply
                </button>
                <div className="nav">
                  <Link
                    className="nav-link position-relative fs-xs py-1 px-0"
                    to="#!">
                    <i className="bi-info fs-sm me-1" />
                    <span className="hover-effect-underline stretched-link">
                      Report
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-sm-flex align-items-center mt-2 mb-3">
                <div className="d-flex align-items-center pe-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "48px",
                    }}>
                    <img
                      alt=""
                      src="assets/img/account/reviews/ava03.jpg"
                    />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-1">Darrell Steward</h6>
                    <div className="fs-xs text-body-secondary">Aug 9, 2024</div>
                  </div>
                </div>
                <div className="d-flex gap-1 fs-sm pt-2 pt-sm-0 ps-5 ps-sm-0 ms-3 ms-sm-auto">
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                  <i className="bi-star-filltext-warning" />
                </div>
              </div>
              <p className="fs-sm mb-2">
                Review on:
                <Link
                  className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                  to="#!">
                  929 Hart St, Brooklyn, NY 11237
                </Link>
              </p>
              <p className="fs-sm">
                I had a great experience with Michael Williams when selling my
                home. The team was professional, reliable, and extremely
                knowledgeable about the market. They provided excellent
                marketing for my property, which attracted a lot of interest and
                ultimately led to a quick sale above the asking price. I highly
                recommend their services to anyone looking to sell their home.
              </p>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button">
                  <i className="bi bi-reply fs-sm ms-n1 me-2" />
                  Reply
                </button>
                <div className="nav">
                  <Link
                    className="nav-link position-relative fs-xs py-1 px-0"
                    to="#!">
                    <i className="bi-info fs-sm me-1" />
                    <span className="hover-effect-underline stretched-link">
                      Report
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-sm-flex align-items-center mt-2 mb-3">
                <div className="d-flex align-items-center pe-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "48px",
                    }}>
                    <img
                      alt=""
                      src="assets/img/account/reviews/ava04.jpg"
                    />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-1">Ralph Edwards</h6>
                    <div className="fs-xs text-body-secondary">Jul 4, 2024</div>
                  </div>
                </div>
                <div className="d-flex gap-1 fs-sm pt-2 pt-sm-0 ps-5 ps-sm-0 ms-3 ms-sm-auto">
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star text-warning" />
                </div>
              </div>
              <p className="fs-sm mb-2">
                Review on:
                <Link
                  className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                  to="#!">
                  1234 Maple Street, Brooklyn, NY 11201
                </Link>
              </p>
              <p className="fs-sm">
                I recently rented an apartment and had a positive experience
                overall. The location is convenient, and the building amenities
                are great. The apartment itself is spacious and well-maintained.
                However, there were a few minor issues with the plumbing that
                took a little longer to fix than expected. Despite that, I'm
                happy with my decision and would recommend it to others.
              </p>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button">
                  <i className="bi bi-reply fs-sm ms-n1 me-2" />
                  Reply
                </button>
                <div className="nav">
                  <Link
                    className="nav-link position-relative fs-xs py-1 px-0"
                    to="#!">
                    <i className="bi-info fs-sm me-1" />
                    <span className="hover-effect-underline stretched-link">
                      Report
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <nav aria-label="Reviews pagination" className="pt-4 mt-md-2">
              <ul className="pagination pagination-lg">
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
              </ul>
            </nav>
          </div>
          <div
            aria-labelledby="reviews-by-you-tab"
            className="tab-pane fade"
            id="reviews-by-you"
            role="tabpanel">
            <div className="border-bottom pb-4">
              <div className="d-flex align-items-start align-items-sm-center mb-3">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <img
                    alt=""
                    className="bg-body-tertiary rounded"
                    src="assets/img/account/reviews/01.jpg"
                  />
                </div>
                <div className="d-flex align-items-start justify-content-between w-100">
                  <div className="ps-3 pe-2 pe-sm-3">
                    <span className="badge text-info bg-info-subtle mb-2">
                      Published
                    </span>
                    <div className="d-flex gap-1 fs-sm py-sm-1 mb-2">
                      <i className="bi-star-fill text-warning" />
                      <i className="bi-star-fill text-warning" />
                      <i className="bi-star-fill text-warning" />
                      <i className="bi-star-fill text-warning" />
                      <i className="bi-star-fill text-warning" />
                    </div>
                    <p className="fs-sm mb-2 mb-sm-0">
                      Review on:
                      <Link
                        className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                        to="#!">
                        67-04 Myrtle Ave Glendale, NY 11385
                      </Link>
                    </p>
                    <div className="fs-xs text-body-secondary d-sm-none">
                      Jan 17, 2024
                    </div>
                  </div>
                  <div className="text-end ms-n5 ms-sm-0">
                    <div className="dropdown mb-sm-4">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-outline-secondary"
                        data-bs-toggle="dropdown"
                        type="button">
                        <i className="bi bi-three-dots-vertical fs-lg" />
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
                    <div className="fs-xs text-body-secondary d-none d-sm-block">
                      Jan 17, 2024
                    </div>
                  </div>
                </div>
              </div>
              <p className="fs-sm">
                Excellent apartment in the very center of the city, attractions
                and entertainment venues are located 50m from the flat. The flat
                was perfectly clean and had basic slippers, gel-shampoo, clean
                towels.
              </p>
              <div className="d-flex align-items-center fs-sm fw-medium text-body-secondary">
                <div className="d-flex align-items-center me-n1">
                  <i className="bi bi-hand-thumbs-up fs-base me-1" />6
                </div>
                <hr className="vr my-2 mx-3" />
                <div className="d-flex align-items-center ms-n1">
                  <i className="bi bi-hand-thumbs-down fs-base animate-target me-1" />0
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-start align-items-sm-center mt-2 mb-3">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <img
                    alt=""
                    className="bg-body-tertiary rounded"
                    src="assets/img/account/reviews/02.jpg"
                  />
                </div>
                <div className="d-flex align-items-start justify-content-between w-100">
                  <div className="ps-3 pe-2 pe-sm-3">
                    <span className="badge text-info bg-info-subtle mb-2">
                      Published
                    </span>
                    <div className="d-flex gap-1 fs-sm py-sm-1 mb-2">
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                    </div>
                    <p className="fs-sm mb-2 mb-sm-0">
                      Review on:
                      <Link
                        className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                        to="#!">
                        517 82nd St, Brooklyn, NY 11209
                      </Link>
                    </p>
                    <div className="fs-xs text-body-secondary d-sm-none">
                      Dec 5, 2024
                    </div>
                  </div>
                  <div className="text-end ms-n5 ms-sm-0">
                    <div className="dropdown mb-sm-4">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-outline-secondary"
                        data-bs-toggle="dropdown"
                        type="button">
                        <i className="bi bi-three-dots-vertical fs-lg" />
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
                    <div className="fs-xs text-body-secondary d-none d-sm-block">
                      Dec 5, 2024
                    </div>
                  </div>
                </div>
              </div>
              <p className="fs-sm">
                I recently rented an apartment, and it has been a fantastic
                experience. The apartment itself is beautiful, with modern
                finishes and plenty of natural light. The property management
                team is very attentive and responds quickly to any maintenance
                requests. The common areas, including the pool and gym, are
                always clean and well-maintained.
              </p>
              <div className="d-flex align-items-center fs-sm fw-medium text-body-secondary">
                <div className="d-flex align-items-center me-n1">
                  <i className="bi bi-hand-thumbs-up fs-base me-1" />
                  13
                </div>
                <hr className="vr my-2 mx-3" />
                <div className="d-flex align-items-center ms-n1">
                  <i className="bi bi-hand-thumbs-down fs-base animate-target me-1" />2
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-start align-items-sm-center mt-2 mb-3">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <img
                    alt=""
                    className="bg-body-tertiary rounded"
                    src="assets/img/account/reviews/04.jpg"
                  />
                </div>
                <div className="d-flex align-items-start justify-content-between w-100">
                  <div className="ps-3 pe-2 pe-sm-3">
                    <span className="badge text-body bg-body-secondary mb-2">
                      Archived
                    </span>
                    <div className="d-flex gap-1 fs-sm py-sm-1 mb-2">
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star text-warning" />
                      <i className="bi-star text-warning" />
                      <i className="bi-star text-warning" />
                    </div>
                    <p className="fs-sm mb-2 mb-sm-0">
                      Review on:
                      <Link
                        className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                        to="#!">
                        929 Hart St, Brooklyn, NY 11237
                      </Link>
                    </p>
                    <div className="fs-xs text-body-secondary d-sm-none">
                      May 8, 2023
                    </div>
                  </div>
                  <div className="text-end ms-n5 ms-sm-0">
                    <div className="dropdown mb-sm-4">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-outline-secondary"
                        data-bs-toggle="dropdown"
                        type="button">
                        <i className="bi bi-three-dots-vertical fs-lg" />
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
                            <i className="bi-upload opacity-75 me-2" />
                            Publish
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
                    <div className="fs-xs text-body-secondary d-none d-sm-block">
                      May 8, 2023
                    </div>
                  </div>
                </div>
              </div>
              <p className="fs-sm">
                The property was not as advertised; several features that were
                supposed to be included, such as a fitness center and updated
                appliances, were either non-existent or in poor condition.
                Maintenance requests are rarely addressed in a timely manner,
                with some issues lingering for months without resolution. The
                overall upkeep of the building is lacking, with common areas
                often dirty and neglected.
              </p>
              <div className="d-flex align-items-center fs-sm fw-medium text-body-secondary">
                <div className="d-flex align-items-center me-n1">
                  <i className="bi bi-hand-thumbs-up fs-base me-1" />4
                </div>
                <hr className="vr my-2 mx-3" />
                <div className="d-flex align-items-center ms-n1">
                  <i className="bi bi-hand-thumbs-down fs-base animate-target me-1" />1
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-start align-items-sm-center mt-2 mb-3">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    maxWidth: "112px",
                  }}>
                  <img
                    alt=""
                    className="bg-body-tertiary rounded"
                    src="assets/img/account/reviews/05.jpg"
                  />
                </div>
                <div className="d-flex align-items-start justify-content-between w-100">
                  <div className="ps-3 pe-2 pe-sm-3">
                    <span className="badge text-info bg-info-subtle mb-2">
                      Published
                    </span>
                    <div className="d-flex gap-1 fs-sm py-sm-1 mb-2">
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star-filltext-warning" />
                      <i className="bi-star text-warning" />
                    </div>
                    <p className="fs-sm mb-2 mb-sm-0">
                      Review on:
                      <Link
                        className="hover-effect-underline fw-medium text-dark-emphasis text-decoration-none ms-2"
                        to="#!">
                        1234 Maple Street, Brooklyn, NY 11201
                      </Link>
                    </p>
                    <div className="fs-xs text-body-secondary d-sm-none">
                      Oct 3, 2022
                    </div>
                  </div>
                  <div className="text-end ms-n5 ms-sm-0">
                    <div className="dropdown mb-sm-4">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-outline-secondary"
                        data-bs-toggle="dropdown"
                        type="button">
                        <i className="bi bi-three-dots-vertical fs-lg" />
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
                    <div className="fs-xs text-body-secondary d-none d-sm-block">
                      Oct 3, 2022
                    </div>
                  </div>
                </div>
              </div>
              <p className="fs-sm">
                I recently rented an apartment and had a positive experience
                overall. The location is convenient, and the building amenities
                are great. The apartment itself is spacious and well-maintained.
                However, there were a few minor issues with the plumbing that
                took a little longer to fix than expected. Despite that, I'm
                happy with my decision and would recommend it to others.
              </p>
              <div className="d-flex align-items-center fs-sm fw-medium text-body-secondary">
                <div className="d-flex align-items-center me-n1">
                  <i className="bi bi-hand-thumbs-up fs-base me-1" />
                  19
                </div>
                <hr className="vr my-2 mx-3" />
                <div className="d-flex align-items-center ms-n1">
                  <i className="bi bi-hand-thumbs-down fs-base animate-target me-1" />5
                </div>
              </div>
            </div>
            <nav aria-label="Reviews pagination" className="pt-4 mt-md-2">
              <ul className="pagination pagination-lg">
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
     <button type="button" className="fixed-bottom z-sticky w-100 btn btn-lg btn-dark border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light">
      <i className="bi bi-layout-sidebar fs-base me-2"></i>
      Account menu
    </button>
</main>
    )
}