import { Link } from "react-router-dom"

export const VendorGrid = () => {
    return (
     <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Vendors</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Dashboard
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Vendors
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-primary btn-icon" to="/vendors-grid">
              <svg
                className="bi bi-grid"
                fill="currentColor"
                height="18"
                viewBox="0 0 16 16"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </Link>
            <Link className="btn btn-light btn-icon" to="/vendors-list">
              <svg
                className="bi bi-list-task"
                fill="currentColor"
                height="18"
                viewBox="0 0 16 16"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                  fillRule="evenodd"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-6">
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-1.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  E-Grocery Super Market
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #009</div>
              <div>heathercarpenter@dayrep.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$200.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$200.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-2.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  DealShare Mart
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #008</div>
              <div>werve1962@superrito.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$350.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$150.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-3.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  DMart
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #007</div>
              <div>trablinever@armyspy.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$120.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$45.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-4.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  Blinkit Store
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #006</div>
              <div>steened@rhyta.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$1200.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$400.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-5.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  StoreFront Super Market
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #005</div>
              <div>mansper@einrot.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$230.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$50.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-6.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  BigBasket
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #004</div>
              <div>lizin@armyspy.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$560.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$120.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-7.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  Swiggy Instamart
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #003</div>
              <div>tured@jourrapide.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$780.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$360.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-8.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  Online Grocery Mart
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #002</div>
              <div>liturname@einrot.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$460.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$175.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 text-center card-lg">
          <div className="card-body p-6">
            <div>
              <img
                alt=""
                className="rounded-circle icon-shape icon-xxl mb-6"
                src="../assets/images/stores-logo/stores-logo-9.svg"
              />
              <h2 className="mb-2 h5">
                <Link className="text-inherit" to="#!">
                  Spencers
                </Link>
              </h2>
              <div className="mb-2">Seller ID: #001</div>
              <div>fark1952@rhyta.com</div>
            </div>
            <div className="row justify-content-center mt-8">
              <div className="col">
                <div>Gross Sale</div>
                <h5 className="mb-0 mt-1">$630.00</h5>
              </div>
              <div className="col">
                <div>Earning</div>
                <h5 className="mb-0 mt-1">$190.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}    