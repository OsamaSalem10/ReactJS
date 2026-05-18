import { Link } from "react-router-dom";
import { AccountHeader } from "./AccountHeader";

export const AccountProfile = () => {
  return (
  <main className="content-wrapper">
  <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
    <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
     <AccountHeader/>
      <div className="col-lg-9">
        <h1 className="h2 pb-2 pb-lg-3">My profile</h1>
        <section className="pb-5 mb-md-3">
          <div
            className="ratio ratio-1x1 bg-body-tertiary border rounded-circle overflow-hidden mb-3 mb-md-4"
            style={{
              width: "124px",
            }}>
            <img alt="Avatar" src="assets/img/account/avatar-lg.jpg" />
          </div>
          <h2 className="h5 pb-1 pb-sm-0 mb-2 mb-sm-3">Michael Williams</h2>
          <ul className="list-unstyled flex-row flex-wrap gap-sm-3 fs-sm mb-3">
            <li className="d-flex align-items-center me-2">
              <i className="bi-envelope fs-base me-2" />
              m.williams@example.com
            </li>
            <li className="d-flex align-items-center me-2">
              <i className="bi-phone fs-base me-2" />
              (212) 555-7890
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-geo-alt fs-base me-2" />
              New York, Brooklyn
            </li>
          </ul>
          <p className="fs-sm pb-sm-1 pb-md-0 mb-md-4">
            Extensive experience in rentals and a vast database means I can
            quickly find the options that are right for you. Looking for a
            seamless and exciting rental experience? Contact me today - I
            promise it won't be boring! Your perfect home is just a call away.
          </p>
          <Link className="btn btn-outline-secondary" to="account-gear.html">
           <i className="bi bi-pencil-square fs-base me-2" />  Edit profile
          </Link>
        </section>
        <section className="pb-5 mb-md-3">
          <div className="d-flex align-items-center justify-content-between pb-1 pb-sm-0 mb-3 mb-sm-4">
            <h2 className="h4 mb-0 me-3">My listings</h2>
            <div className="nav">
              <Link
                className="nav-link position-relative px-0"
                to="account-listings.html">
                <span className="hover-effect-underline stretched-link me-1">
                  View all
                </span>
                <i className="bi-chevron-right fs-base" />
              </Link>
            </div>
          </div>
          <div className="vstack gap-3">
            <article className="card">
              <div className="row g-0">
                <div className="col-sm-4 col-md-3 rounded overflow-hidden pb-2 pb-sm-0 pe-sm-2">
                  <Link
                    className="position-relative d-flex h-100 bg-body-tertiary"
                    to="#!"
                    style={{
                      minHeight: "174px",
                    }}>
                    <img
                      alt=""
                      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                      src="assets/img/listings/real-estate/01.jpg"
                    />
                    <div
                      className="ratio d-none d-sm-block"
                      style={{
                        "--fn-aspect-ratio": "calc(180 / 240 * 100%)",
                      }}
                    />
                    <div className="ratio ratio-16x9 d-sm-none" />
                  </Link>
                </div>
                <div className="col-sm-8 col-md-9 align-self-center">
                  <div className="card-body d-flex justify-content-between p-3 py-sm-4 ps-sm-2 ps-md-3 pe-md-4 mt-n1 mt-sm-0">
                    <div className="position-relative pe-3">
                      <span className="badge text-body-emphasis bg-body-secondary mb-2">
                        For rent
                      </span>
                      <div className="h5 mb-2">$2,500</div>
                      <Link
                        className="stretched-link d-block fs-sm text-body text-decoration-none mb-2"
                        to="#!">
                        40 S 9th St, Brooklyn, NY 11249
                      </Link>
                      <div className="h6 fs-sm mb-0">97 sq.m</div>
                    </div>
                    <div className="text-end">
                      <div className="fs-xs text-body-secondary mb-3">
                        Created: 05/10/2024
                      </div>
                      <div className="d-flex justify-content-end gap-2 mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          type="button">
                          Statistics
                        </button>
                        <div className="dropdown">
                          <button
                            aria-expanded="false"
                            aria-label="Settings"
                            className="btn btn-icon btn-outline-secondary"
                            data-bs-toggle="dropdown"
                            type="button">
                            <i className="bi-gear fs-base" />
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
                                <i className="bi-lightning fs-base opacity-75 me-2" />
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
                              <Link
                                className="dropdown-item text-danger"
                                to="#!">
                                <i className="bi-trash opacity-75 me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="list-unstyled flex-row flex-wrap fs-sm mb-0">
                        <li className="d-flex align-items-center me-2 me-md-3">
                          <i className="bi-eye fs-base me-1" />
                          1246
                        </li>
                        <li className="d-flex align-items-center me-2 me-md-3">
                          <i className="bi-heart fs-base me-1" />
                          23
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi-phone-incoming fs-base me-1" />8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card">
              <div className="row g-0">
                <div className="col-sm-4 col-md-3 rounded overflow-hidden pb-2 pb-sm-0 pe-sm-2">
                  <Link
                    className="position-relative d-flex h-100 bg-body-tertiary"
                    to="#!"
                    style={{
                      minHeight: "174px",
                    }}>
                    <img
                      alt=""
                      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                      src="assets/img/listings/real-estate/02.jpg"
                    />
                    <div
                      className="ratio d-none d-sm-block"
                      style={{
                        "--fn-aspect-ratio": "calc(180 / 240 * 100%)",
                      }}
                    />
                    <div className="ratio ratio-16x9 d-sm-none" />
                  </Link>
                </div>
                <div className="col-sm-8 col-md-9 align-self-center">
                  <div className="card-body d-flex justify-content-between p-3 py-sm-4 ps-sm-2 ps-md-3 pe-md-4 mt-n1 mt-sm-0">
                    <div className="position-relative pe-3">
                      <span className="badge text-body-emphasis bg-body-secondary mb-2">
                        For rent
                      </span>
                      <div className="h5 mb-2">$1,350</div>
                      <Link
                        className="stretched-link d-block fs-sm text-body text-decoration-none mb-2"
                        to="#!">
                        444 Park Ave, Brooklyn, NY 11205
                      </Link>
                      <div className="h6 fs-sm mb-0">45 sq.m</div>
                    </div>
                    <div className="text-end">
                      <div className="fs-xs text-body-secondary mb-3">
                        Created: 12/06/2024
                      </div>
                      <div className="d-flex justify-content-end gap-2 mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          type="button">
                          Statistics
                        </button>
                        <div className="dropdown">
                          <button
                            aria-expanded="false"
                            aria-label="Settings"
                            className="btn btn-icon btn-outline-secondary"
                            data-bs-toggle="dropdown"
                            type="button">
                            <i className="bi-gear fs-base" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" to="#!">
                                <i className="bi bi-pencil-square-edit opacity-75 me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#!">
                                <i className="bi-lightning fs-base opacity-75 me-2" />
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
                              <Link
                                className="dropdown-item text-danger"
                                to="#!">
                                <i className="bi-trash opacity-75 me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="list-unstyled flex-row flex-wrap fs-sm mb-0">
                        <li className="d-flex align-items-center me-2 me-md-3">
                          <i className="bi-eye fs-base me-1" />
                          678
                        </li>
                        <li className="d-flex align-items-center me-2 me-md-3">
                          <i className="bi-heart fs-base me-1" />5
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi-phone-incoming fs-base me-1" />1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="pb-5 mb-md-3">
          <div className="d-flex align-items-center justify-content-between pb-1 pb-sm-0 mb-3 mb-sm-4">
            <h2 className="h4 mb-0 me-3">Reviews</h2>
            <div className="nav">
              <Link
                className="nav-link position-relative px-0"
                to="account-reviews.html">
                <span className="hover-effect-underline stretched-link me-1">
                  View all
                </span>
                <i className="bi-chevron-right fs-base" />
              </Link>
            </div>
          </div>
          <div className="bg-body-tertiary rounded p-4">
            <div className="p-sm-3">
              <div className="row row-cols-2 row-cols-sm-4 g-3 gx-md-4">
                <div className="col">
                  <h3 className="fs-sm fw-normal text-body mb-2">
                    Reviews about you
                  </h3>
                  <div className="h5 mb-0">8</div>
                </div>
                <div className="col">
                  <h3 className="fs-sm fw-normal text-body mb-2">
                    Reviews by you
                  </h3>
                  <div className="h5 mb-0">12</div>
                </div>
                <div className="col">
                  <h3 className="fs-sm fw-normal text-body mb-2">
                    Marked as "Useful"
                  </h3>
                  <div className="h5 mb-0">3</div>
                </div>
                <div className="col">
                  <h3 className="fs-sm fw-normal text-body mb-2">
                    Your overall rating
                  </h3>
                  <div className="h5 d-flex align-items-center lh-base mb-0">
                    <i className="bi-star-fill text-warning me-2" />
                    4.9
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-sm-flex align-items-center pt-1 pt-md-2 mb-3">
                <div className="d-flex align-items-center pe-3">
                  <div
                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                    style={{
                      width: "48px",
                    }}>
                    <img
                      alt="Avatar"
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
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
                  <i className="bi-star-fill text-warning" />
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
            </div>
          </div>
        </section>
       
        <section>
          <h2 className="h4 mb-4">Need help?</h2>
          <div className="row row-cols-1 row-cols-sm-2 g-4 g-md-5">
            <div className="col">
              <div className="position-relative">
                <i className="bi-globe fs-4 text-dark-emphasis pb-1 pb-md-0 mb-2 mb-md-3" />
                <h3 className="h6 pb-md-1 mb-2">
                  <Link
                    className="hover-effect-underline stretched-link"
                    to="#!">
                    Join a Finder property club
                  </Link>
                </h3>
                <p className="fs-sm mb-0">
                  Join your local Host Club to connect with your hosting
                  community both online and through in-person or virtual
                  meetups.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <i className="bi-headphones fs-4 text-dark-emphasis pb-1 pb-md-0 mb-2 mb-md-3" />
                <h3 className="h6 pb-md-1 mb-2">
                  <Link
                    className="hover-effect-underline stretched-link"
                    to="#!">
                    Get professional support
                  </Link>
                </h3>
                <p className="fs-sm mb-0">
                  I'm your virtual assistant from the Help Center, ready to
                  assist you in finding the information and resources you're
                  looking for.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
     <button type="button" className="fixed-bottom z-sticky w-100 btn btn-lg btn-dark border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light">
      <i className="bi bi-layout-sidebar fs-base me-2"></i>
      Account menu
    </button>
</main>
  );
};