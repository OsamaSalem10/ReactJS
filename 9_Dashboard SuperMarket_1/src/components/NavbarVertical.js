import { Link } from "react-router-dom";
export const NavbarVertical = () => {
  return (
    
    <div>
  <nav className="navbar-vertical-nav d-none d-xl-block">
    <div className="navbar-vertical">
      <div className="px-4 py-5">
        <Link className="navbar-brand" to="./index.html">
          <img alt="" src="../assets/images/logo/freshcart-logo.svg" />
       </Link>
      </div>
      <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
        <ul className="navbar-nav flex-column" id="sideNavbar">
          <li className="nav-item">
            <Link className="nav-link  active " to="/">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-house" />
                </span>
                <span className="nav-link-text">Dashboard</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Store Managements</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/products">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-cart" />
                </span>
                <span className="nav-link-text">Products</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/categories">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-list-task" />
                </span>
                <span className="nav-link-text">Categories</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-controls="navCategoriesOrders"
              aria-expanded="false"
              className="nav-link  collapsed "
              data-bs-target="#navCategoriesOrders"
              data-bs-toggle="collapse"
              to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-bag" />
                </span>
                <span className="nav-link-text">Orders</span>
              </div>
           </Link>
            <div
              className="collapse "
              data-bs-parent="#sideNavbar"
              id="navCategoriesOrders">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " to="/orders-list">
                    List
                 </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/order-single">
                    Single
                 </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/vendors-grid">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-shop" />
                </span>
                <span className="nav-link-text">Sellers / Vendors</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-controls="navCustomer"
              aria-expanded="false"
              className="nav-link  collapsed "
              data-bs-target="#navCustomer"
              data-bs-toggle="collapse"
              to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-people" />
                </span>
                <span className="nav-link-text">Customers</span>
                <span className="badge bg-light-success text-dark-success ms-2">
                  New
                </span>
              </div>
           </Link>
            <div
              className="collapse "
              data-bs-parent="#sideNavbar"
              id="navCustomer">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " to="/customers">
                    Customers
                 </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/add-customer">
                    Create Customers
                 </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/edit-customer">
                    Edit Customers
                 </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/reviews">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-star" />
                </span>
                <span className="nav-link-text">Reviews</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-controls="navMenuLevelFirst"
              aria-expanded="false"
              className="nav-link  collapsed "
              data-bs-target="#navMenuLevelFirst"
              data-bs-toggle="collapse"
              to="">
              <span className="nav-link-icon">
                <i className="bi bi-arrow-90deg-down" />
              </span>
              <span className="nav-link-text">Menu Level</span>
           </Link>
            <div
              className="collapse "
              data-bs-parent="#sideNavbar"
              id="navMenuLevelFirst">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    aria-controls="navMenuLevelSecond1"
                    aria-expanded="false"
                    className="nav-link "
                    data-bs-target="#navMenuLevelSecond1"
                    data-bs-toggle="collapse"
                    to="">
                    Two Level
                 </Link>
                  <div
                    className="collapse"
                    data-bs-parent="#navMenuLevel"
                    id="navMenuLevelSecond1">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link " to="">
                          NavItem 1
                       </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="">
                          NavItem 2
                       </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    aria-controls="navMenuLevelThreeOne1"
                    aria-expanded="false"
                    className="nav-link  collapsed "
                    data-bs-target="#navMenuLevelThreeOne1"
                    data-bs-toggle="collapse"
                    to="">
                    Three Level
                 </Link>
                  <div
                    className="collapse "
                    data-bs-parent="#navMenuLevel"
                    id="navMenuLevelThreeOne1">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link
                          aria-controls="navMenuLevelThreeTwo"
                          aria-expanded="false"
                          className="nav-link  collapsed "
                          data-bs-target="#navMenuLevelThreeTwo"
                          data-bs-toggle="collapse"
                          to="">
                          NavItem 1
                       </Link>
                        <div
                          className="collapse collapse "
                          data-bs-parent="#navMenuLevelThree"
                          id="navMenuLevelThreeTwo">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link className="nav-link " to="">
                                NavChild Item 1
                             </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="">
                          Nav Item 2
                       </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Site Settings</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link
              aria-controls="navBlog"
              aria-expanded="false"
              className="nav-link  collapsed "
              data-bs-target="#navBlog"
              data-bs-toggle="collapse"
              to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-newspaper" />
                </span>
                <span className="nav-link-text">Blog</span>
                <span className="badge bg-light-success text-dark-success ms-2">
                  New
                </span>
              </div>
           </Link>
            <div
              className="collapse "
              data-bs-parent="#sideNavbar"
              id="navBlog">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " to="/blog-grid">
                    Grid
                 </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/blog-list">
                    List
                 </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/add-blog">
                    Add Post
                 </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-images" />
                </span>
                <span className="nav-link-text">Media</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-gear" />
                </span>
                <span className="nav-link-text">Store Settings</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Support</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-headphones" />
                </span>
                <span className="nav-link-text">Support Ticket</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-question-circle" />
                </span>
                <span className="nav-link-text">Help Center</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-infinity" />
                </span>
                <span className="nav-link-text">How FreshCart Works</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Our Apps</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-apple" />
                </span>
                <span className="nav-link-text">Apple Store</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-google-play" />
                </span>
                <span className="nav-link-text">Google Play Store</span>
              </div>
           </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav
    className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
    id="offcanvasExample"
    tabIndex="-1">
    <div className="navbar-vertical">
      <div className="px-4 py-5 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="./index.html">
          <img alt="" src="../assets/images/logo/freshcart-logo.svg" />
       </Link>
        <button
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          type="button"
        />
      </div>
      <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <Link className="nav-link  active " to="/">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-house" />
                </span>
                <span>Dashboard</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Store Managements</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/products">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-cart" />
                </span>
                <span className="nav-link-text">Products</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/categories">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-list-task" />
                </span>
                <span className="nav-link-text">Categories</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link
              aria-controls="navOrders"
              aria-expanded="false"
              className="nav-link  collapsed "
              data-bs-target="#navOrders"
              data-bs-toggle="collapse"
              to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-bag" />
                </span>
                <span className="nav-link-text">Orders</span>
              </div>
           </Link>
            <div
              className="collapse "
              data-bs-parent="#sideNavbar"
              id="navOrders">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " to="/orders-list">
                    List
                 </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/order-single.html">
                    Single
                 </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/vendors-grid">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-shop" />
                </span>
                <span className="nav-link-text">Sellers / Vendors</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="./dashboard/customers.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-people" />
                </span>
                <span className="nav-link-text">Customers</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/reviews">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-star" />
                </span>
                <span className="nav-link-text">Reviews</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Site Settings</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-newspaper" />
                </span>
                <span className="nav-link-text">Blog</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-images" />
                </span>
                <span className="nav-link-text">Media</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-gear" />
                </span>
                <span className="nav-link-text">Store Settings</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Support</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-headphones" />
                </span>
                <span className="nav-link-text">Support Ticket</span>
              </div>
            </Link>
             </li>     
          <li className="nav-item">
            <Link className="nav-link disabled" to="">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-question-circle" />
                </span>
                <span className="nav-link-text">Help Center</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-infinity" />
                </span>
                <span className="nav-link-text">How FreshCart Works</span>
              </div>
           </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Our Apps</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-apple" />
                </span>
                <span className="nav-link-text">Apple Store</span>
              </div>
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-google-play" />
                </span>
                <span className="nav-link-text">Google Play Store</span>
              </div>
           </Link>
          </li>
          <li
            className="collapse "
            data-bs-parent="#sideNavbar"
            id="navMenuLevel">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  aria-controls="navMenuLevelSecond2"
                  aria-expanded="false"
                  className="nav-link "
                  data-bs-target="#navMenuLevelSecond2"
                  data-bs-toggle="collapse"
                  to="">
                  Two Level
               </Link>
                <div
                  className="collapse"
                  data-bs-parent="#navMenuLevel"
                  id="navMenuLevelSecond2">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link " to="">
                        NavItem 1
                     </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="">
                        NavItem 2
                     </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  aria-controls="navMenuLevelThree2"
                  aria-expanded="false"
                  className="nav-link  collapsed "
                  data-bs-target="#navMenuLevelThree2"
                  data-bs-toggle="collapse"
                  to="">
                  Three Level
               </Link>
                <div
                  className="collapse "
                  data-bs-parent="#navMenuLevel"
                  id="navMenuLevelThree2">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        aria-controls="navMenuLevelThree3"
                        aria-expanded="false"
                        className="nav-link  collapsed "
                        data-bs-target="#navMenuLevelThree3"
                        data-bs-toggle="collapse"
                        to="">
                        NavItem 1
                     </Link>
                      <div
                        className="collapse collapse "
                        data-bs-parent="#navMenuLevelThree"
                        id="navMenuLevelThree3">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link " to="">
                              NavChild Item 1
                           </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="">
                        Nav Item 2
                     </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
 
  );
};