import { Link } from "react-router-dom"

export const NavbarVertical = () =>{
    return <>
    <aside aria-label="Main navigation" className="admin-sidebar" id="adminSidebar">
  <div className="sidebar-header">
    <Link aria-label="adminHMD dashboard" className="brand-mark" to="/">
      <span className="brand-icon">
        <i aria-hidden="true" className="bi bi-grid-1x2-fill" />
      </span>
      <span className="brand-copy">
        <span className="brand-title">adminHMD</span>
        <span className="brand-subtitle">Admin Template</span>
      </span>
    </Link>
  </div>
  <nav className="sidebar-nav">
    <Link aria-current="page" className="nav-link active" to="/">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-speedometer2" />
      </span>
      <span className="nav-text">Dashboard</span>
    </Link>
    <Link className="nav-link" to="/users">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-people" />
      </span>
      <span className="nav-text">Users</span>
    </Link>
    <Link className="nav-link" to="/add-user">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-person-plus" />
      </span>
      <span className="nav-text">Add User</span>
    </Link>
    <Link className="nav-link" to="/profile">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-person-badge" />
      </span>
      <span className="nav-text">Profile</span>
    </Link>
    <Link className="nav-link" to="charts">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-bar-chart-line" />
      </span>
      <span className="nav-text">Charts</span>
    </Link>
    <Link className="nav-link" to="tables">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-table" />
      </span>
      <span className="nav-text">Tables</span>
    </Link>
    <Link className="nav-link" to="forms">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-ui-checks-grid" />
      </span>
      <span className="nav-text">Forms</span>
    </Link>
    <Link className="nav-link" to="components">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-grid-3x3-gap" />
      </span>
      <span className="nav-text">Components</span>
    </Link>
    <Link className="nav-link" to="alerts">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-exclamation-triangle" />
      </span>
      <span className="nav-text">Alerts</span>
    </Link>
    <Link className="nav-link" to="modals">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-window-stack" />
      </span>
      <span className="nav-text">Modals</span>
    </Link>
    <Link className="nav-link" to="settings">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-gear" />
      </span>
      <span className="nav-text">Settings</span>
    </Link>
    <Link className="nav-link" to="blank">
      <span className="nav-icon">
        <i aria-hidden="true" className="bi bi-file-earmark" />
      </span>
      <span className="nav-text">Blank Page</span>
    </Link>
  </nav>
  <div className="sidebar-user">
        <img className="avatar-img avatar-md sidebar-user-avatar" src="../assets/images/avatar/avatar.jpg" alt="Admin Hasan" />
        <strong>Admin Hasan</strong>
        <small>Active Workspace</small>
      </div>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        <span className="sidebar-footer-text">System running smoothly</span>
      </div>
</aside>
    </>
}