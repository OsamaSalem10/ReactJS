import { Link } from "react-router-dom";
import { AccountHeader } from "./AccountHeader";
export const AccountFavorites = () => {
 
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
        <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          <AccountHeader />
          <div className="col-lg-9">
            <div className="d-flex align-items-center justify-content-between pb-2 pb-lg-3 mb-3">
              <h1 className="h2 mb-0 me-3">Favorites</h1>
              <div className="nav flex-row flex-nowrap gap-4">
                <Link
                  className="nav-link position-relative px-0 me-sm-2"
                  to="#!"
                >
                  <i className="bi-share-2 fs-base me-2" />
                  <span className="hover-effect-underline stretched-link">
                    Share <span className="d-none d-sm-inline">favorites</span>
                  </span>
                </Link>
                <Link
                  className="nav-link position-relative text-danger px-0"
                  to="#!"
                >
                  <i className="bi-trash fs-base me-2" />
                  <span className="hover-effect-underline stretched-link">
                    Remove all
                  </span>
                </Link>
                
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 g-md-3 g-lg-4">
              <div className="col">
                <article className="card  h-100">
                  <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                    <div className="">
                      <Link to="#!">
                        <div className="">
                          <div >
                            <img
                              alt=""
                              src="./assets/img/listings/real-estate/06.jpg"
                            />
                           
                          </div>
                        </div>
                      </Link>
                      <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                        <span className="badge text-bg-primary">New</span>
                      </div>
                      <div className="position-absolute top-0 end-0 z-1 pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button
                          aria-label="Remove from wishlist"
                          className="btn btn-sm btn-icon btn-light bg-light border-0 rounded-circle animate-pulse"
                          type="button"
                        >
                          <i className="bi-heart-fill text-danger animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="pb-1 mb-2">
                      <span className="badge text-body-emphasis bg-body-secondary">
                        For sale
                      </span>
                    </div>
                    <div className="h5 mb-2">$375,000</div>
                    <h3 className="fs-sm fw-normal text-body mb-2">
                      <Link className="stretched-link text-body" to="#!">
                        929 Hart St, Brooklyn, NY 11237
                      </Link>
                    </h3>
                    <div className="h6 fs-sm mb-0">108 sq.m</div>
                  </div>
                  <div className="card-footer d-flex gap-2 border-0  pt-0 pb-3 px-3 mt-n1">
                    <button type="button" className="btn btn-outline-danger w-100">Add to Cart</button>
                   </div>
                </article>
              </div>
              <div className="col">
                <article className="card  h-100">
                  <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                    <div className="">
                      <Link to="#!">
                        <div className="">
                          <div >
                            <img
                              alt=""
                              src="./assets/img/listings/real-estate/06.jpg"
                            />
                           
                          </div>
                        </div>
                      </Link>
                      <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                        <span className="badge text-bg-primary">New</span>
                      </div>
                      <div className="position-absolute top-0 end-0 z-1 pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button
                          aria-label="Remove from wishlist"
                          className="btn btn-sm btn-icon btn-light bg-light border-0 rounded-circle animate-pulse"
                          type="button"
                        >
                          <i className="bi-heart-fill text-danger animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="pb-1 mb-2">
                      <span className="badge text-body-emphasis bg-body-secondary">
                        For sale
                      </span>
                    </div>
                    <div className="h5 mb-2">$375,000</div>
                    <h3 className="fs-sm fw-normal text-body mb-2">
                      <Link className="stretched-link text-body" to="#!">
                        929 Hart St, Brooklyn, NY 11237
                      </Link>
                    </h3>
                    <div className="h6 fs-sm mb-0">108 sq.m</div>
                  </div>
                  <div className="card-footer d-flex gap-2 border-0  pt-0 pb-3 px-3 mt-n1">
                    <button type="button" className="btn btn-outline-danger w-100">Add to Cart</button>
                   </div>
                </article>
              </div>
              <div className="col">
                <article className="card  h-100">
                  <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                    <div className="">
                      <Link to="#!">
                        <div className="">
                          <div >
                            <img
                              alt=""
                              src="./assets/img/listings/real-estate/06.jpg"
                            />
                           
                          </div>
                        </div>
                      </Link>
                      <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                        <span className="badge text-bg-primary">New</span>
                      </div>
                      <div className="position-absolute top-0 end-0 z-1 pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button
                          aria-label="Remove from wishlist"
                          className="btn btn-sm btn-icon btn-light bg-light border-0 rounded-circle animate-pulse"
                          type="button"
                        >
                          <i className="bi-heart-fill text-danger animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="pb-1 mb-2">
                      <span className="badge text-body-emphasis bg-body-secondary">
                        For sale
                      </span>
                    </div>
                    <div className="h5 mb-2">$375,000</div>
                    <h3 className="fs-sm fw-normal text-body mb-2">
                      <Link className="stretched-link text-body" to="#!">
                        929 Hart St, Brooklyn, NY 11237
                      </Link>
                    </h3>
                    <div className="h6 fs-sm mb-0">108 sq.m</div>
                  </div>
                  <div className="card-footer d-flex gap-2 border-0  pt-0 pb-3 px-3 mt-n1">
                    <button type="button" className="btn btn-outline-danger w-100">Add to Cart</button>
                   </div>
                </article>
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
};
