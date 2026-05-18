import { Link } from "react-router-dom";
import { AccountHeader } from "./AccountHeader";

export const AccountPayment = () => {
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
        <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          <AccountHeader />
          <div className="col-lg-9">
            <h1 className="h2">Payment details</h1>
            <p className="pb-2 pb-lg-3">
              Add and manage payment methods with our secure payment system.
            </p>
            <div
              className="d-flex flex-column flex-sm-row gap-3 gap-md-4 pb-2 pb-lg-3 mb-3"
              style={{
                maxWidth: "810px",
              }}
            >
              <div className="card w-100 border-0">
                <div className="card-body position-relative z-2">
                  <div className="d-flex align-items-center pb-4 mb-2 mb-md-3">
                    <svg
                      className="flex-shrink-0 text-dark-emphasis"
                      fill="currentColor"
                      height="32"
                      width="52"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.224 8.524L13.94 23.516h-4.1L6.748 11.55c-.188-.736-.35-1.006-.922-1.316-.932-.506-2.472-.98-3.826-1.276l.092-.434h6.6a1.81 1.81 0 0 1 1.788 1.528l1.634 8.676L16.15 8.524h4.074zM36.29 18.622c.016-3.958-5.472-4.176-5.434-5.944.012-.538.524-1.11 1.644-1.256a7.32 7.32 0 0 1 3.826.672l.68-3.18c-1.16-.436-2.389-.662-3.628-.666-3.834 0-6.532 2.04-6.556 4.958-.024 2.158 1.926 3.36 3.396 4.08 1.512.734 2.02 1.206 2.012 1.862-.01 1.008-1.204 1.45-2.32 1.468-1.95.03-3.08-.526-3.984-.946l-.702 3.284c.906.416 2.578.78 4.312.796 4.074 0 6.74-2.012 6.754-5.128zm10.122 4.894H50L46.87 8.524h-3.312c-.354-.003-.701.1-.995.296s-.523.476-.657.804l-5.818 13.892h4.072l.81-2.24h4.976l.466 2.24zm-4.326-5.312l2.04-5.63 1.176 5.63h-3.216zm-16.32-9.68L22.56 23.516h-3.88l3.21-14.992h3.876z" />
                    </svg>
                    <span className="badge text-bg-light ms-3">Primary</span>
                    <div className="dropdown ms-auto">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-sm fs-xl text-dark-emphasis border-0"
                        data-bs-toggle="dropdown"
                        type="button"
                      >
                        <i className="fi-more-vertical" />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        style={{
                          "--fn-dropdown-min-width": "8rem",
                        }}
                      >
                        <li>
                          <Link className="dropdown-item" to="#!">
                            <i className="fi-edit opacity-75 me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-danger" to="#!">
                            <i className="fi-trash opacity-75 me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="h5 pt-md-1 pb-2 pb-md-3"
                    style={{
                      letterSpacing: "1.25px"
                    }}
                  >
                    1245 **** **** 0730
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="me-3">
                      <div className="fs-xs text-body mb-1">Name</div>
                      <div className="h6 fs-sm mb-0">Michael Williams</div>
                    </div>
                    <div>
                      <div className="fs-xs text-body mb-1">Expiry date</div>
                      <div className="h6 fs-sm mb-0">12/26</div>
                    </div>
                  </div>
                </div>
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4 d-none-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, #accbee 0%, #dbeafe 100%)",
                  }}
                />
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4 d-none d-block-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)",
                  }}
                />
              </div>
              <div className="card w-100 border-0">
                <div className="card-body position-relative z-2">
                  <div className="d-flex align-items-center pb-4 mb-2 mb-md-3">
                    <svg
                      className="flex-shrink-0"
                      fill="none"
                      height="32"
                      width="52"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.411 25.616H20.594V5.707h10.817v19.909z"
                        fill="#ff5f00"
                      />
                      <path
                        d="M21.28 15.662c0-4.038 1.846-7.636 4.722-9.954C23.825 3.95 21.133 2.996 18.362 3 11.534 3 6 8.669 6 15.662s5.534 12.662 12.362 12.662c2.772.004 5.464-.95 7.64-2.707-2.875-2.318-4.722-5.916-4.722-9.955z"
                        fill="#eb001b"
                      />
                      <path
                        d="M46.003 15.662c0 6.993-5.534 12.662-12.362 12.662A12.13 12.13 0 0 1 26 25.616c2.876-2.318 4.722-5.916 4.722-9.955S28.876 8.026 26 5.707A12.13 12.13 0 0 1 33.641 3c6.827 0 12.362 5.669 12.362 12.662"
                        fill="#f79e1b"
                      />
                    </svg>
                    <div className="dropdown ms-auto">
                      <button
                        aria-expanded="false"
                        aria-label="Actions"
                        className="btn btn-icon btn-sm fs-xl text-dark-emphasis border-0"
                        data-bs-toggle="dropdown"
                        type="button"
                      >
                        <i className="fi-more-vertical" />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        style={{
                          "--fn-dropdown-min-width": "8rem",
                        }}
                      >
                        <li>
                          <Link className="dropdown-item" to="#!">
                            <i className="fi-edit opacity-75 me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-danger" to="#!">
                            <i className="fi-trash opacity-75 me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="h5 pt-md-1 pb-2 pb-md-3"
                    style={{
                      letterSpacing: "1.25px",
                    }}
                  >
                    4460 **** **** 7821
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="me-3">
                      <div className="fs-xs text-body mb-1">Name</div>
                      <div className="h6 fs-sm mb-0">Michael Williams</div>
                    </div>
                    <div>
                      <span className="badge text-bg-danger mt-n1 mb-1">
                        Expired
                      </span>
                      <div className="h6 fs-sm mb-0">10/23</div>
                    </div>
                  </div>
                </div>
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4 d-none-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, #fcb69f 0%, #ffe8c9 100%)",
                  }}
                />
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4 d-none d-block-dark"
                  style={{
                    background:
                      "linear-gradient(-90deg, #2f2c3a 0%, #372e2f 52.24%)",
                  }}
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-sm-start">
              <button
                className="btn btn-lg btn-outline-dark"
                data-bs-target="#addPayment"
                data-bs-toggle="modal"
                type="button"
              >
                <i className="fi-plus fs-lg ms-n2 me-2" />
                Add payment method
              </button>
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
};
