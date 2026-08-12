export const Navbar = () =>{
    return <nav className="navbar admin-navbar navbar-expand bg-white">
  <div className="container-fluid px-3 px-lg-4">
    <button
      aria-controls="adminSidebar"
      aria-expanded="true"
      aria-label="Toggle sidebar"
      className="sidebar-toggle"
      data-sidebar-toggle=""
      type="button">
      <span />
      <span />
      <span />
    </button>
    <form className="d-none d-md-flex ms-3 flex-grow-1" role="search">
      <input
        aria-label="Search"
        className="form-control search-input"
        placeholder="Search users, orders, reports"
        type="search"
      />
    </form>
    <div className="navbar-actions ms-auto">
      <button
        aria-label="Switch color theme"
        className="icon-button theme-toggle"
        data-theme-toggle=""
        title="Switch color theme"
        type="button">
        <i aria-hidden="true" className="bi bi-moon-stars" data-theme-icon="" />
      </button>
      <div className="dropdown">
        <button
          aria-expanded="false"
          aria-label="Notifications"
          className="icon-button"
          data-bs-toggle="dropdown"
          type="button">
          <span className="notification-dot" />
          <i aria-hidden="true" className="bi bi-bell" />
        </button>
        <div className="dropdown-menu dropdown-menu-end notification-menu">
          <div className="dropdown-header fw-bold text-body">Notifications</div>
          <a className="dropdown-item" href="users.html">
            <span className="notification-title">New user registered</span>
            <span className="notification-time">4 minutes ago</span>
          </a>
          <a className="dropdown-item" href="charts.html">
            <span className="notification-title">Revenue target reached</span>
            <span className="notification-time">32 minutes ago</span>
          </a>
          <a className="dropdown-item" href="settings.html">
            <span className="notification-title">
              Security review completed
            </span>
            <span className="notification-time">1 hour ago</span>
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button
          aria-expanded="false"
          className="profile-button dropdown-toggle"
          data-bs-toggle="dropdown"
          type="button">
          <img
            alt="Admin Hasan"
            className="avatar-img avatar-sm"
            src="../assets/images/avatar/avatar.jpg"
          />
          <span className="profile-name d-none d-sm-inline">Admin Hasan</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="profile.html">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="settings.html">
              Account settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="login.html">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
}