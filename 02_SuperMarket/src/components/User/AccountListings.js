import { Link } from "react-router-dom";
import { AccountHeader } from "./AccountHeader";

export const AccountListings = () => {
  return (
  <main className="content-wrapper">
  <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
    <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
      <AccountHeader />
      <div className="col-lg-9">
        <h1 className="h2 pb-2 pb-lg-3">My listings</h1>
        <div className="nav overflow-x-auto mb-2">
          <ul
            className="nav nav-pills flex-nowrap gap-2 pb-2 mb-1"
            role="tablist">
            <li className="nav-item me-1" role="presentation">
              <button
                aria-controls="published"
                aria-selected="true"
                className="nav-link text-nowrap active"
                data-bs-target="#published"
                data-bs-toggle="pill"
                id="published-tab"
                role="tab"
                type="button">
                Published (3)
              </button>
            </li>
            <li className="nav-item me-1" role="presentation">
              <button
                aria-controls="drafts"
                aria-selected="false"
                className="nav-link text-nowrap"
                data-bs-target="#drafts"
                data-bs-toggle="pill"
                id="drafts-tab"
                role="tab"
                type="button">
                Drafts (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-controls="archived"
                aria-selected="false"
                className="nav-link text-nowrap"
                data-bs-target="#archived"
                data-bs-toggle="pill"
                id="archived-tab"
                role="tab"
                type="button">
                Archived (0)
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            aria-labelledby="published-tab"
            className="tab-pane fade show active"
            id="published"
            role="tabpanel">
            <div className="nav align-items-center mb-4">
              <div
                className="nav-link fs-lg ps-0 pe-2 py-2 mt-n1 me-4"
                data-master-checkbox='{"container": "#publishedSelection", "label": "Select all the ads to apply the same action to them", "labelChecked": "Unselect all", "showOnCheck": "#published-action-buttons"}'>
                <input
                  className="form-check-input"
                  defaultChecked
                  id="published-master"
                  type="checkbox"
                />
                <label
                  className="form-check-label fw-normal mt-1 ms-2"
                  htmlFor="published-master">
                  Unselect all
                </label>
              </div>
              <div className="d-flex flex-wrap" id="published-action-buttons">
                <Link
                  className="nav-link position-relative px-0 pe-sm-2 py-2 me-4"
                  to="#!">
                  <i className="bi-lightning fs-base me-2" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Promote
                  </span>
                </Link>
                <Link
                  className="nav-link position-relative px-0 pe-sm-2 py-2 me-4"
                  to="#!">
                  <i className="bi-archive fs-base me-2" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Move to archive
                  </span>
                </Link>
                <Link
                  className="nav-link position-relative text-danger px-0 py-2"
                  to="#!">
                  <i className="bi-trash fs-base me-1" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Delete
                  </span>
                </Link>
              </div>
            </div>
            <div className="vstack gap-4" id="publishedSelection">
              <div className="d-sm-flex align-items-center">
                <div className="d-inline-flex position-relative z-2 pt-1 pb-2 ps-2 p-sm-0 ms-2 ms-sm-0 me-sm-2">
                  <div className="form-check position-relative z-1 fs-lg m-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      type="checkbox"
                    />
                  </div>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-body border rounded d-sm-none" />
                </div>
                <article className="card w-100">
                  <div
                    className="d-sm-none"
                    style={{
                      marginTop: "-44px",
                    }}
                  />
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
                                <i className="bi bi-gear fs-base" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <Link className="dropdown-item" to="#!">
                                    <i className="bi-edit opacity-75 me-2" />
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
                          <ul className="list-unstyled flex-row flex-wrap justify-content-end fs-sm mb-0">
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-eye fs-base me-1" />
                              1246
                            </li>
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-heart fs-base me-1" />
                              23
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bi bi-telephone-forward fs-base me-1" />8
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="d-sm-flex align-items-center">
                <div className="d-inline-flex position-relative z-2 pt-1 pb-2 ps-2 p-sm-0 ms-2 ms-sm-0 me-sm-2">
                  <div className="form-check position-relative z-1 fs-lg m-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      type="checkbox"
                    />
                  </div>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-body border rounded d-sm-none" />
                </div>
                <article className="card w-100">
                  <div
                    className="d-sm-none"
                    style={{
                      marginTop: "-44px",
                    }}
                  />
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
                                <i className="bi bi-gear fs-base" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <Link className="dropdown-item" to="#!">
                                    <i className="bi-edit opacity-75 me-2" />
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
                          <ul className="list-unstyled flex-row flex-wrap justify-content-end fs-sm mb-0">
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-eye fs-base me-1" />
                              678
                            </li>
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-heart fs-base me-1" />5
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bi bi-telephone-forward fs-base me-1" />1
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="d-sm-flex align-items-center">
                <div className="d-inline-flex position-relative z-2 pt-1 pb-2 ps-2 p-sm-0 ms-2 ms-sm-0 me-sm-2">
                  <div className="form-check position-relative z-1 fs-lg m-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-body border rounded d-sm-none" />
                </div>
                <article className="card w-100">
                  <div
                    className="d-sm-none"
                    style={{
                      marginTop: "-44px",
                    }}
                  />
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
                          src="assets/img/listings/real-estate/06.jpg"
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
                            For sale
                          </span>
                          <div className="h5 mb-2">$375,000</div>
                          <Link
                            className="stretched-link d-block fs-sm text-body text-decoration-none mb-2"
                            to="#!">
                            929 Hart St,Brooklyn, NY 11237
                          </Link>
                          <div className="h6 fs-sm mb-0">108 sq.m</div>
                        </div>
                        <div className="text-end">
                          <div className="fs-xs text-body-secondary mb-3">
                            Created: 19/05/2024
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
                                <i className="bi bi-gear fs-base" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <Link className="dropdown-item" to="#!">
                                    <i className="bi-edit opacity-75 me-2" />
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
                          <ul className="list-unstyled flex-row flex-wrap justify-content-end fs-sm mb-0">
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-eye fs-base me-1" />
                              392
                            </li>
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-heart fs-base me-1" />7
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bi bi-telephone-forward fs-base me-1" />4
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div
            aria-labelledby="drafts-tab"
            className="tab-pane fade"
            id="drafts"
            role="tabpanel">
            <div className="nav align-items-center mb-4">
              <div
                className="nav-link fs-lg ps-0 pe-2 py-2 mt-n1 me-4"
                data-master-checkbox='{"container": "#draftsSelection", "label": "Select all the ads to apply the same action to them", "labelChecked": "Unselect all", "showOnCheck": "#drafts-action-buttons"}'>
                <input
                  className="form-check-input"
                  id="drafts-master"
                  type="checkbox"
                />
                <label
                  className="form-check-label fw-normal mt-1 ms-2"
                  htmlFor="drafts-master">
                  Select all the ads to apply the same action to them
                </label>
              </div>
              <div
                className="d-flex flex-wrap d-none"
                id="drafts-action-buttons">
                <Link
                  className="nav-link position-relative px-0 pe-sm-2 py-2 me-4"
                  to="#!">
                  <i className="bi-lightning fs-base me-2" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Promote
                  </span>
                </Link>
                <Link
                  className="nav-link position-relative px-0 pe-sm-2 py-2 me-4"
                  to="#!">
                  <i className="bi-archive fs-base me-2" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Move to archive
                  </span>
                </Link>
                <Link
                  className="nav-link position-relative text-danger px-0 py-2"
                  to="#!">
                  <i className="bi-trash fs-base me-1" />
                  <span className="hover-effect-underline stretched-link d-none d-md-inline">
                    Delete
                  </span>
                </Link>
              </div>
            </div>
            <div className="vstack gap-4" id="draftsSelection">
              <div className="d-sm-flex align-items-center">
                <div className="d-inline-flex position-relative z-2 pt-1 pb-2 ps-2 p-sm-0 ms-2 ms-sm-0 me-sm-2">
                  <div className="form-check position-relative z-1 fs-lg m-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-body border rounded d-sm-none" />
                </div>
                <article className="card w-100">
                  <div
                    className="d-sm-none"
                    style={{
                      marginTop: "-44px",
                    }}
                  />
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
                          src="assets/img/listings/real-estate/05.jpg"
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
                          <div className="h5 mb-2">$-.---</div>
                          <Link
                            className="stretched-link d-block fs-sm text-body text-decoration-none mb-2"
                            to="#!">
                            517 82nd St, Brooklyn, NY 11209
                          </Link>
                          <div className="h6 fs-sm mb-0">00 sq.m</div>
                        </div>
                        <div className="text-end">
                          <div className="fs-xs text-body-secondary mb-3">
                            Created: 13/12/2024
                          </div>
                          <div className="d-flex justify-content-end gap-2 mb-3">
                            <button
                              className="btn btn-outline-dark"
                              type="button">
                              Finish and publish
                            </button>
                            <div className="dropdown">
                              <button
                                aria-expanded="false"
                                aria-label="Settings"
                                className="btn btn-icon btn-outline-secondary"
                                data-bs-toggle="dropdown"
                                type="button">
                                <i className="bi bi-gear fs-base" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <Link className="dropdown-item" to="#!">
                                    <i className="bi-edit opacity-75 me-2" />
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
                          <ul className="list-unstyled flex-row flex-wrap justify-content-end fs-sm mb-0">
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-eye fs-base me-1" />0
                            </li>
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-heart fs-base me-1" />0
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bi bi-telephone-forward fs-base me-1" />0
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="d-sm-flex align-items-center">
                <div className="d-inline-flex position-relative z-2 pt-1 pb-2 ps-2 p-sm-0 ms-2 ms-sm-0 me-sm-2">
                  <div className="form-check position-relative z-1 fs-lg m-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-body border rounded d-sm-none" />
                </div>
                <article className="card w-100">
                  <div
                    className="d-sm-none"
                    style={{
                      marginTop: "-44px",
                    }}
                  />
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
                          src="assets/img/listings/real-estate/04.jpg"
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
                          <div className="h5 mb-2">$1,430</div>
                          <Link
                            className="stretched-link d-block fs-sm text-body text-decoration-none mb-2"
                            to="#!">
                            67-04 Myrtle Ave Glendale, NY 11385
                          </Link>
                          <div className="h6 fs-sm mb-0">62 sq.m</div>
                        </div>
                        <div className="text-end">
                          <div className="fs-xs text-body-secondary mb-3">
                            Created: 09/11/2024
                          </div>
                          <div className="d-flex justify-content-end gap-2 mb-3">
                            <button
                              className="btn btn-outline-dark"
                              type="button">
                              Publish
                            </button>
                            <div className="dropdown">
                              <button
                                aria-expanded="false"
                                aria-label="Settings"
                                className="btn btn-icon btn-outline-secondary"
                                data-bs-toggle="dropdown"
                                type="button">
                                <i className="bi bi-gear fs-base" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <Link className="dropdown-item" to="#!">
                                    <i className="bi-edit opacity-75 me-2" />
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
                          <ul className="list-unstyled flex-row flex-wrap justify-content-end fs-sm mb-0">
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-eye fs-base me-1" />0
                            </li>
                            <li className="d-flex align-items-center me-2 me-md-3">
                              <i className="bi-heart fs-base me-1" />0
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bi bi-telephone-forward fs-base me-1" />0
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div
            aria-labelledby="archived-tab"
            className="tab-pane fade"
            id="archived"
            role="tabpanel">
            <h2 className="h6 pt-2 mb-2">You have no archived ads</h2>
            <p
              className="fs-sm mb-4"
              style={{
                maxWidth: "640px",
              }}>
              This means all your active ads are still visible to users.
              Archiving ads helps you retain your information even when it's
              temporarily inactive.
            </p>
            <button className="btn btn-dark" type="button">
              <i className="bi-archive fs-base ms-n1 me-2" />
              Archive ad
            </button>
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
  );
}