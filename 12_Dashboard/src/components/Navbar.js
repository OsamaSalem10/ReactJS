import { useState } from "react";
import { Link } from "react-router-dom"
export const Navbar = ({ collapsed, setCollapsed }) => {
  const [dark, setDark] = useState(false);

  return (
    <nav className="navbar navbar-expand navbar-bg">
      <Link className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className="hamburger align-self-center" />
      </Link>
      <form className="d-none d-sm-inline-block">
        <div className="input-group input-group-navbar">
          <input
            aria-label="Search"
            className="form-control"
            placeholder="Search projects…"
            type="text"
          />
          <button className="btn" type="button">
            <i className="align-middle" data-lucide="search" />
          </button>
        </div>
      </form>
      <ul className="navbar-nav">
        <li className="nav-item px-2 dropdown d-none d-sm-inline-block">
          <Link
            aria-expanded="false"
            aria-haspopup="true"
            className="nav-link dropdown-toggle"
            data-bstoggle="dropdown"
            to="#"
            id="servicesDropdown"
            role="button">
            Mega menu
          </Link>
          <div
            aria-labelledby="servicesDropdown"
            className="dropdown-menu dropdown-menu-start dropdown-mega">
            <div className="d-md-flex align-items-start justify-content-start">
              <div className="dropdown-mega-list">
                <div className="dropdown-header">UI Elements</div>
                <Link className="dropdown-item" to="#">
                  Alerts
                </Link>
                <Link className="dropdown-item" to="#">
                  Buttons
                </Link>
                <Link className="dropdown-item" to="#">
                  Cards
                </Link>
                <Link className="dropdown-item" to="#">
                  Carousel
                </Link>
                <Link className="dropdown-item" to="#">
                  General
                </Link>
                <Link className="dropdown-item" to="#">
                  Grid
                </Link>
                <Link className="dropdown-item" to="#">
                  Modals
                </Link>
                <Link className="{\`dropdown-item\`}" to="#">
                  Tabs
                </Link>
              </div>
            </div>

          </div>
        </li>
      </ul>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <Link
              className="nav-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              id="messagesDropdown">
              <div className="position-relative">
                <i className="bi bi-chat-dots align-middle text-body"></i>
                <span className="indicator">4</span>
              </div>
            </Link>
            <div
              aria-labelledby="messagesDropdown"
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0">
              <div className="dropdown-menu-header">
                <div className="position-relative">4 New Messages</div>
              </div>
              <div className="list-group">
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        alt="Ashley Briggs"
                        className="img-fluid rounded-circle"
                        height="40"
                        src="assets/img/avatars/avatar-5.jpg"
                        width="40"
                      />
                    </div>
                    <div className="col-10 ps-2">
                      <div>Ashley Briggs</div>
                      <div className="text-muted small mt-1">
                        Nam pretium turpis et arcu. Duis arcu tortor.
                      </div>
                      <div className="text-muted small mt-1">15m ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        alt="Carl Jenkins"
                        className="img-fluid rounded-circle"
                        height="40"
                        src="assets/img/avatars/avatar-2.jpg"
                        width="40"
                      />
                    </div>
                    <div className="col-10 ps-2">
                      <div>Carl Jenkins</div>
                      <div className="text-muted small mt-1">
                        Curabitur ligula sapien euismod vitae.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        alt="Stacie Hall"
                        className="img-fluid rounded-circle"
                        height="40"
                        src="assets/img/avatars/avatar-4.jpg"
                        width="40"
                      />
                    </div>
                    <div className="col-10 ps-2">
                      <div>Stacie Hall</div>
                      <div className="text-muted small mt-1">
                        Pellentesque auctor neque nec urna.
                      </div>
                      <div className="text-muted small mt-1">4h ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        alt="Bertha Martin"
                        className="img-fluid rounded-circle"
                        height="40"
                        src="assets/img/avatars/avatar-3.jpg"
                        width="40"
                      />
                    </div>
                    <div className="col-10 ps-2">
                      <div>Bertha Martin</div>
                      <div className="text-muted small mt-1">
                        Aenean tellus metus, bibendum sed, posuere ac, mattis non.
                      </div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="dropdown-menu-footer">
                <Link className="text-muted" to="#">
                  Show all messages
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              id="alertsDropdown">
              <div className="position-relative">
                <i className="bi bi-bell-slash align-middle text-body"></i>
              </div>
            </Link>
            <div
              aria-labelledby="alertsDropdown"
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0">
              <div className="dropdown-menu-header">4 New Notifications</div>
              <div className="list-group">
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-danger" data-lucide="alert-circle" />
                    </div>
                    <div className="col-10">
                      <div>Update completed</div>
                      <div className="text-muted small mt-1">
                        Restart server 12 to complete the update.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-warning" data-lucide="bell" />
                    </div>
                    <div className="col-10">
                      <div>Lorem ipsum</div>
                      <div className="text-muted small mt-1">
                        Aliquam ex eros, imperdiet vulputate hendrerit et.
                      </div>
                      <div className="text-muted small mt-1">6h ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-primary" data-lucide="home" />
                    </div>
                    <div className="col-10">
                      <div>Login from 192.186.1.1</div>
                      <div className="text-muted small mt-1">8h ago</div>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item" to="#">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-success" data-lucide="user-plus" />
                    </div>
                    <div className="col-10">
                      <div>New connection</div>
                      <div className="text-muted small mt-1">
                        Anna accepted your request.
                      </div>
                      <div className="text-muted small mt-1">12h ago</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="dropdown-menu-footer">
                <Link className="text-muted" to="#">
                  Show all notifications
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item nav-theme-toggle dropdown">
            <Link className="nav-icon js-theme-toggle"
              onClick={() => setDark(!dark)}>

              <div className="position-relative">

                {dark ? (
                  <i className="bi bi-sun align-middle text-body nav-theme-toggle-light"></i>
                ) : (
                  <i className="bi bi-moon align-middle text-body nav-theme-toggle-light" ></i>
                )}
              </div>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-flag dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              id="languageDropdown">
              <img alt="English" src="assets/img/flags/us.png" />
            </Link>
            <div
              aria-labelledby="languageDropdown"
              className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="#">
                <img
                  alt="English"
                  className="align-middle me-1"
                  src="assets/img/flags/us.png"
                  width="20"
                />
                <span className="align-middle">English</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <img
                  alt="Spanish"
                  className="align-middle me-1"
                  src="assets/img/flags/es.png"
                  width="20"
                />
                <span className="align-middle">Spanish</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <img
                  alt="German"
                  className="align-middle me-1"
                  src="assets/img/flags/de.png"
                  width="20"
                />
                <span className="align-middle">German</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <img
                  alt="Dutch"
                  className="align-middle me-1"
                  src="assets/img/flags/nl.png"
                  width="20"
                />
                <span className="align-middle">Dutch</span>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              data-bs-toggle="dropdown"
              to="#">
              <i className="align-middle" data-lucide="settings" />
            </Link>
            <Link
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              data-bs-toggle="dropdown"
              to="#">
              <img
                alt="Chris Wood"
                className="img-fluid rounded-circle me-1 mt-n2 mb-n2"
                height="40"
                src="assets/img/avatars/avatar.jpg"
                width="40"
              />{" "}
              <span>Chris Wood</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/pages-profile">
                <i className="align-middle me-1" data-lucide="user" /> Profile
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="align-middle me-1" data-lucide="pie-chart" /> Analytics
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/pages-settings">
                Settings & Privacy
              </Link>
              <Link className="dropdown-item" to="#">
                Help
              </Link>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}