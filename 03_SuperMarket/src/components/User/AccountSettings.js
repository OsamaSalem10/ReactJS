
import { AccountHeader } from "./AccountHeader";

export const AccountSettings = () => {



  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-sm-5 pb-5 mb-xxl-3">
        <div className="row pt-2 pt-sm-0 pt-lg-2 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          <AccountHeader />
          <div className="col-lg-9">
            <h1 className="h2 pb-2 pb-lg-3">Account settings</h1>
            <div className="nav overflow-x-auto mb-3">
              <ul
                className="nav nav-pills flex-nowrap gap-2 pb-2 mb-1"
                role="tablist"
              >
                <li className="nav-item me-1" role="presentation">
                  <button
                    aria-controls="personal-info"
                    aria-selected="true"
                    className="nav-link text-nowrap active"
                    data-bs-target="#personal-info"
                    data-bs-toggle="pill"
                    id="personal-info-tab"
                    role="tab"
                    type="button"
                  >
                    Personal info
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    aria-controls="security"
                    aria-selected="false"
                    className="nav-link text-nowrap"
                    data-bs-target="#security"
                    data-bs-toggle="pill"
                    id="security-tab"
                    role="tab"
                    type="button"
                  >
                    Password and security
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="notifications"
                    aria-selected="false"
                    className="nav-link text-nowrap"
                    data-bs-target="#notifications"
                    data-bs-toggle="pill"
                    id="notifications-tab"
                    role="tab"
                    type="button"
                  >
                    Notification settings
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                aria-labelledby="personal-info-tab"
                className="tab-pane fade show active"
                id="personal-info"
                role="tabpanel"
              >
                <div className="vstack gap-4">
                  <div className="d-flex align-items-start align-items-sm-center mb-2">
                    <div
                      className="ratio ratio-1x1 hover-effect-opacity bg-body-tertiary border rounded-circle overflow-hidden"
                      style={{
                        width: "124px",
                      }}
                    >
                      <img
                        alt="Avatar"
                        src="assets/img/account/avatar-lg.jpg"
                      />
                      <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                        <button
                          aria-label="Remove"
                          className="btn btn-icon btn-sm btn-light position-relative z-2"
                          type="button"
                        >
                          <i className="fi-trash fs-base" />
                        </button>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                      </div>
                    </div>
                    <div className="ps-3 ps-sm-4">
                      <p
                        className="fs-sm"
                        style={{
                          maxWidth: "440px",
                        }}
                      >
                        Your profile photo will appear on your profile and
                        directory listing. PNG or JPG no bigger than 1000px wide
                        and tall.
                      </p>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        type="button"
                      >
                        <i className="fi-refresh-ccw fs-sm ms-n1 me-2" />
                        Update photo
                      </button>
                    </div>
                  </div>
                  <form className="needs-validation" noValidate>
                    <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                      <div className="col position-relative">
                        <label className="form-label fs-base" htmlFor="fn">
                          First name *
                        </label>
                        <input
                          className="form-control form-control-lg"
                          defaultValue="Michael"
                          id="fn"
                          required
                          type="text"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Enter your first name!
                        </div>
                      </div>
                      <div className="col position-relative">
                        <label className="form-label fs-base" htmlFor="ln">
                          Last name *
                        </label>
                        <input
                          className="form-control form-control-lg"
                          defaultValue="Williams"
                          id="ln"
                          required
                          type="text"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Enter your last name!
                        </div>
                      </div>
                      <div className="col position-relative">
                        <label
                          className="form-label d-flex align-items-center fs-base"
                          htmlFor="email"
                        >
                          Email address *{" "}
                          <span className="badge text-danger bg-danger-subtle ms-2">
                            Verify email
                          </span>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          defaultValue="m.williams@example.com"
                          id="email"
                          required
                          type="email"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Enter a valid email address!
                        </div>
                      </div>
                      <div className="col position-relative">
                        <label
                          className="form-label d-flex align-items-center fs-base"
                          htmlFor="phone"
                        >
                          Phone number *{" "}
                          <span className="badge bg-success ms-2">
                            Verified
                          </span>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          data-input-format='{"numericOnly": true, "delimiters": ["(", ")", " ", "-", " "], "blocks": [0, 3, 0, 3, 4]}'
                          defaultValue="(212) 555-7890"
                          id="phone"
                          placeholder="(___) ___-____"
                          required
                          type="tel"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Enter a valid phone number!
                        </div>
                      </div>
          
                      <div className="col">
                    <label className="form-label fs-base">
                      Languages you speak
                    </label>
                    <select
                      aria-label="Languages select"
                      className="form-select form-select-lg"
                      data-select=""
                      >
                      <option value="">Select language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </div> 
                      <div className="col">
                        <label
                          className="form-label fs-base"
                          htmlFor="birth-date"
                        >
                          Date of birth
                        </label>
                        <div className="position-relative">
                          <input
                            className="form-control form-control-lg form-icon-end"
                            data-datepicker='{"dateFormat": "F j, Y"}'
                            id="birth-date"
                            placeholder="Choose date"
                            type="date"
                          />
                          <i className="bi-calendar fs-lg position-absolute top-50 end-0 translate-middle-y me-3" />
                        </div>
                      </div>
                    </div>
                    <div className="position-relative mb-4">
                      <label className="form-label fs-base" htmlFor="address">
                        Address *
                      </label>
                      <input
                        className="form-control form-control-lg"
                        defaultValue="New York, Brooklyn"
                        id="address"
                        required
                        type="text"
                      />
                      <div className="invalid-tooltip bg-transparent p-0">
                        Enter your address!
                      </div>
                    </div>
                    <div className="pb-2 mb-4">
                      <label className="form-label fs-base" htmlFor="user-info">
                        Information about you
                      </label>
                      <textarea
                        className="form-control form-control-lg bg-transparent"
                        defaultValue="Extensive experience in rentals and a vast database means I can quickly find the options that are right for you. Looking for a seamless and exciting rental experience? Contact me today - I promise it won't be boring! Your perfect home is just a call away."
                        id="user-info"
                        rows="6"
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <a
                        className="btn btn-lg btn-secondary"
                        href="account-profile.html"
                      >
                        Cancel
                      </a>
                      <button className="btn btn-lg btn-dark" type="submit">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                aria-labelledby="security-tab"
                className="tab-pane fade"
                id="security"
                role="tabpanel"
              >
                <p className="mb-sm-4">
                  Your current email address is{" "}
                  <span className="fw-medium text-primary">
                    m.williams@example.com
                  </span>
                </p>
                <form className="needs-validation" noValidate>
                  <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="current-password"
                      >
                        Current password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg"
                          id="current-password"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Incorrect password. Please try again.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="new-password"
                      >
                        New password{" "}
                        <span className="fs-sm fw-normal text-body-secondary">
                          (Min 8 chars)
                        </span>
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg"
                          id="new-password"
                          minLength="8"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Please ensure password is at least 8 characters long.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="confirm-new-password"
                      >
                        Confirm new password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg"
                          id="confirm-new-password"
                          minLength="8"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Passwords do not match.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button className="btn btn-lg btn-secondary" type="reset">
                      Cancel
                    </button>
                    <button className="btn btn-lg btn-dark" type="submit">
                      Update password
                    </button>
                  </div>
                </form>
                <h3 className="h4 pt-5 mt-md-3 mb-sm-4">Device history</h3>
                <div className="row g-3 g-xl-4 mb-3 mb-md-4">
                  <div className="col-sm-6 col-md-4">
                    <div className="card h-100">
                      <div className="dropdown position-absolute top-0 end-0 mt-2 me-2">
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
                            <a className="dropdown-item" href="#!">
                              <i className="fi-log-out opacity-75 me-2" />
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body pb-2">
                        <i className="fi-computer fs-3 text-body-tertiary pb-1 mb-2" />
                        <h6 className="mb-0">Mac - New York, USA</h6>
                      </div>
                      <div className="card-footer d-flex align-items-center gap-2 bg-transparent border-0 pt-0 pb-4">
                        <span className="fs-sm text-body-secondary">
                          Chrome
                        </span>
                        <span className="badge text-success bg-success-subtle">
                          Active now
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="card h-100">
                      <div className="dropdown position-absolute top-0 end-0 mt-2 me-2">
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
                            <a className="dropdown-item" href="#!">
                              <i className="fi-log-out opacity-75 me-2" />
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body pb-2">
                        <i className="fi-smartphone fs-3 text-body-tertiary pb-1 mb-2" />
                        <h6 className="mb-0">iPhone 15 - New York, USA</h6>
                      </div>
                      <div className="card-footer d-flex align-items-center gap-1 bg-transparent border-0 pt-0 pb-4">
                        <span className="fs-sm text-body-secondary">
                          Finder App
                        </span>
                        <i className="fi-bullet" />
                        <span className="fs-sm text-body-secondary">
                          20 hours ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav">
                  <a className="nav-link position-relative px-0" href="#!">
                    <i className="fi-log-out fs-base me-2" />
                    <span className="hover-effect-underline stretched-link">
                      Sign out of all sessions
                    </span>
                  </a>
                </div>
                <h3 className="h4 pt-5 mt-n2 mt-md-0 mt-lg-2 mt-xl-3 mb-sm-4">
                  Delete account
                </h3>
                <p className="fs-sm mb-sm-4">
                  When you delete your account, your public profile will be
                  deactivated immediately. If you change your mind before the 14
                  days are up, sign in with your email and password, and we'll
                  send a link to reactivate account.
                </p>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    id="confirm-deletion"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="confirm-deletion"
                  >
                    Yes, I want to delete my account
                  </label>
                </div>
                <button className="btn btn-lg btn-outline-danger" type="button">
                  Delete account
                </button>
              </div>
              <div
                aria-labelledby="notifications-tab"
                className="tab-pane fade"
                id="notifications"
                role="tabpanel"
              >
                <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-4">
                  <div className="me-4 mb-md-2">
                    <h3 className="h6 mb-2">New rental alerts</h3>
                    <p className="fs-sm pb-1 pb-sm-0 mb-sm-0">
                      New rentals that match your{" "}
                      <a className="text-body" href="account-favorites.html">
                        Favorites
                      </a>
                    </p>
                  </div>
                  <div className="d-flex gap-4 gap-xl-5 mb-md-2">
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label className="form-check-label" htmlFor="email-1">
                        Email
                      </label>
                      <input
                        className="form-check-input ms-2"
                        defaultChecked
                        id="email-1"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label
                        className="form-check-label mb-1"
                        htmlFor="phone-1"
                      >
                        Phone
                      </label>
                      <input
                        className="form-check-input ms-2"
                        id="phone-1"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between border-bottom py-4">
                  <div className="me-4 my-md-2">
                    <h3 className="h6 mb-2">Rental status updates</h3>
                    <p className="fs-sm pb-1 pb-sm-0 mb-sm-0">
                      Updates like price changes and off-market status on your{" "}
                      <a className="text-body" href="account-favorites.html">
                        Favorites
                      </a>
                    </p>
                  </div>
                  <div className="d-flex gap-4 gap-xl-5 my-md-2">
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label className="form-check-label" htmlFor="email-2">
                        Email
                      </label>
                      <input
                        className="form-check-input ms-2"
                        defaultChecked
                        id="email-2"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label
                        className="form-check-label mb-1"
                        htmlFor="phone-2"
                      >
                        Phone
                      </label>
                      <input
                        className="form-check-input ms-2"
                        id="phone-2"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between border-bottom py-4">
                  <div className="me-4 my-md-2">
                    <h3 className="h6 mb-2">Finder recommendations</h3>
                    <p className="fs-sm pb-1 pb-sm-0 mb-sm-0">
                      Rentals we think you'll like. These recommendations may be
                      slightly outside your search criteria
                    </p>
                  </div>
                  <div className="d-flex gap-4 gap-xl-5 my-md-2">
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label className="form-check-label" htmlFor="email-3">
                        Email
                      </label>
                      <input
                        className="form-check-input ms-2"
                        id="email-3"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label
                        className="form-check-label mb-1"
                        htmlFor="phone-3"
                      >
                        Phone
                      </label>
                      <input
                        className="form-check-input ms-2"
                        id="phone-3"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between border-bottom py-4">
                  <div className="me-4 my-md-2">
                    <h3 className="h6 mb-2">Featured news</h3>
                    <p className="fs-sm pb-1 pb-sm-0 mb-sm-0">
                      News and tips you may be interested in
                    </p>
                  </div>
                  <div className="d-flex gap-4 gap-xl-5 my-md-2">
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label className="form-check-label" htmlFor="email-4">
                        Email
                      </label>
                      <input
                        className="form-check-input ms-2"
                        id="email-4"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label
                        className="form-check-label mb-1"
                        htmlFor="phone-4"
                      >
                        Phone
                      </label>
                      <input
                        className="form-check-input ms-2"
                        defaultChecked
                        id="phone-4"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between border-bottom py-4">
                  <div className="me-4 my-md-2">
                    <h3 className="h6 mb-2">Finder extras</h3>
                    <p className="fs-sm pb-1 pb-sm-0 mb-sm-0">
                      Occasional notifications about new features to make
                      finding the perfect rental easy
                    </p>
                  </div>
                  <div className="d-flex gap-4 gap-xl-5 my-md-2">
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label className="form-check-label" htmlFor="email-5">
                        Email
                      </label>
                      <input
                        className="form-check-input ms-2"
                        defaultChecked
                        id="email-5"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center ps-0 mb-0">
                      <label
                        className="form-check-label mb-1"
                        htmlFor="phone-5"
                      >
                        Phone
                      </label>
                      <input
                        className="form-check-input ms-2"
                        defaultChecked
                        id="phone-5"
                        role="switch"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
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
