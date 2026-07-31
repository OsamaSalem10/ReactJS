import { useState } from "react";
import { Link } from "react-router-dom"
export const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-bs-theme", newTheme);
    };
    return (
        <header
            className="navbar navbar-expand-lg bg-body navbar-sticky sticky-top z-fixed px-0"
            data-sticky-element="">
            <div className="container">
                <button
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    className="navbar-toggler me-3 me-lg-0"
                    data-bs-target="#navbarNav"
                    data-bs-toggle="offcanvas"
                    type="button">
                    <span className="navbar-toggler-icon" />
                </button>
                <Link
                    className="navbar-brand py-1 py-md-2 py-xl-1 me-2 me-sm-n4 me-md-n5 me-lg-0"
                    to="index.html">
                    <span className="d-none d-sm-flex flex-shrink-0 text-primary rtl-flip me-2">
                        <svg height="34" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z"
                                fill="currentColor"
                            />
                            <g fillRule="evenodd">
                                <path
                                    d="M17.5 13.258c-3.101 0-5.655 2.554-5.655 5.655s2.554 5.655 5.655 5.655 5.655-2.554 5.655-5.655-2.554-5.655-5.655-5.655zm-9.433 5.655c0-5.187 4.246-9.433 9.433-9.433s9.433 4.246 9.433 9.433a9.36 9.36 0 0 1-1.569 5.192l2.397 2.397a1.89 1.89 0 0 1 0 2.671 1.89 1.89 0 0 1-2.671 0l-2.397-2.397a9.36 9.36 0 0 1-5.192 1.569c-5.187 0-9.433-4.246-9.433-9.433z"
                                    fill="#000"
                                    fillOpacity=".05"
                                />
                                <g fill="#fff">
                                    <path d="M17.394 10.153c-3.723 0-6.741 3.018-6.741 6.741s3.018 6.741 6.741 6.741 6.741-3.018 6.741-6.741-3.018-6.741-6.741-6.741zM7.347 16.894A10.05 10.05 0 0 1 17.394 6.847 10.05 10.05 0 0 1 27.44 16.894 10.05 10.05 0 0 1 17.394 26.94 10.05 10.05 0 0 1 7.347 16.894z"></path>
                                    <path d="M23.025 22.525c.645-.645 1.692-.645 2.337 0l3.188 3.188c.645.645.645 1.692 0 2.337s-1.692.645-2.337 0l-3.187-3.187c-.645-.646-.645-1.692 0-2.337z"></path>
                                </g>
                            </g>
                            <path
                                d="M23.662 14.663c2.112 0 3.825-1.713 3.825-3.825s-1.713-3.825-3.825-3.825-3.825 1.713-3.825 3.825 1.713 3.825 3.825 3.825z"
                                fill="#fff"
                            />
                            <path
                                d="M23.663 8.429a2.41 2.41 0 0 0-2.408 2.408 2.41 2.41 0 0 0 2.408 2.408 2.41 2.41 0 0 0 2.408-2.408 2.41 2.41 0 0 0-2.408-2.408zm-5.242 2.408c0-2.895 2.347-5.242 5.242-5.242s5.242 2.347 5.242 5.242-2.347 5.242-5.242 5.242-5.242-2.347-5.242-5.242z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </span>
                    Cars
                </Link>
                <nav
                    
                    className="offcanvas offcanvas-start"
                    id="navbarNav"
                    tabIndex="-1">
                    <div className="offcanvas-header py-3">
                        <h5 className="offcanvas-title" id="navbarNavLabel">
                            Browse Finder
                        </h5>
                        <button
                            aria-label="Close"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            type="button"
                        />
                    </div>
                    <div className="offcanvas-body pt-2 pb-4 py-lg-0 mx-lg-auto">
                        <ul className="navbar-nav position-relative">
                            <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                                <Link
                                    className="nav-link active"
                                    to="/"
                                >
                                    Home
                                </Link>
                               
                            </li>
                            <li className="nav-item dropdown position-static py-lg-2 me-lg-n1 me-xl-0">
                                <Link
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-trigger="hover"
                                    to="#"
                                    role="button">
                                    Listings
                                </Link>
                                <div className="dropdown-menu text-center">
                                    <div className="d-flex flex-column ">
                                            <ul className="nav flex-column">
                                                <li className="pt-1">
                                                    <Link
                                                        className="nav-link hover-effect-underline d-inline fw-normal p-0"
                                                        to="/listings-grid-cars">
                                                        Listings Grid View
                                                    </Link>
                                                </li>
                                                <li className="pt-1">
                                                    <Link
                                                        className="nav-link hover-effect-underline d-inline fw-normal p-0"
                                                        to="/listings-list-cars">
                                                        Listings List View
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                 
                                     
                                  
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                                <Link
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                    data-bs-auto-close="outside"
                                    data-bs-toggle="dropdown"
                                    data-bs-trigger="hover"
                                    to="#"
                                    role="button">
                                    Account
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#"
                                            role="button">
                                            Auth Pages
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="account-signin.html">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="account-signup.html">
                                                    Sign Up
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="account-password-recovery.html">
                                                    Password Recovery
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-profile.html">
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-listings.html">
                                            My Listings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-reviews.html">
                                            Reviews
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-favorites.html">
                                            Favorites
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-payment.html">
                                            Payment Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="account-settings.html">
                                            Account Settings
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                                <Link
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                    data-bs-auto-close="outside"
                                    data-bs-toggle="dropdown"
                                    data-bs-trigger="hover"
                                    to="#"
                                    role="button">
                                    Pages
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#!"
                                            role="button">
                                            About
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="about-v1.html">
                                                    About v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="about-v2.html">
                                                    About v.2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#"
                                            role="button">
                                            Blog
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="blog-layout-v1.html">
                                                    Blog Layout v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-layout-v2.html">
                                                    Blog Layout v.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-layout-v3.html">
                                                    Blog Layout v.3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-layout-v4.html">
                                                    Blog Layout v.4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-single-v1.html">
                                                    Single Post v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-single-v2.html">
                                                    Single Post v.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="blog-single-v3.html">
                                                    Single Post v.3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#"
                                            role="button">
                                            Contact
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="contact-v1.html">
                                                    Contact v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="contact-v2.html">
                                                    Contact v.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="contact-v3.html">
                                                    Contact v.3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#"
                                            role="button">
                                            Help Center
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="help-topics-v1.html">
                                                    Help Topics v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="help-topics-v2.html">
                                                    Help Topics v.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="help-topics-v3.html">
                                                    Help Topics v.3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="help-single-article-v1.html">
                                                    Help Single Article v.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="help-single-article-v2.html">
                                                    Help Single Article v.2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="help-single-article-v3.html">
                                                    Help Single Article v.3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <Link
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-trigger="hover"
                                            to="#"
                                            role="button">
                                            404 Error
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="404-bg-image.html">
                                                    Background Image (Real Estate)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="404-icon.html">
                                                    Icon Image (Cars)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="404-split-screen.html">
                                                    Split Screen (Contractors)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="404-illustration.html">
                                                    Illustration (City Guide)
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="terms-and-conditions.html">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item py-lg-2 me-lg-n2 me-xl-0">
                                <Link className="nav-link" to="docs/installation.html">
                                    Docs
                                </Link>
                            </li>
                            <li className="nav-item py-lg-2 me-lg-n2 me-xl-0">
                                <Link className="nav-link" to="docs/typography.html">
                                    Components
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="d-flex gap-sm-1">
                    <div className="dropdown">
                        <button
                            aria-expanded="false"
                            aria-label="Toggle theme (light)"
                            className="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 animate-scale"
                            data-bs-display="dynamic"
                            data-bs-toggle="dropdown"
                            type="button">
                            <span className="theme-icon-active d-flex animate-target">
                                <i className="bi-sun" />
                            </span>
                        </button>
                        <ul
                            className="dropdown-menu start-50 translate-middle-x"
                            style={{
                                "--fn-dropdown-min-width": "9rem",
                                "--fn-dropdown-spacer": ".5rem",
                            }}>
                            <li>
                                <button
                                    aria-pressed="true"
                                    className="dropdown-item active"
                                    data-bs-theme-value="light"
                                    type="button"
                                    onClick={toggleTheme}>
                                    <span className="theme-icon d-flex fs-base me-2">
                                        <i className="bi-sun" />
                                    </span>
                                    <span className="theme-label">Light</span>
                                    <i className="item-active-indicator bi-check ms-auto" />
                                </button>
                            </li>
                            <li>
                                <button
                                    aria-pressed="false"
                                    className="dropdown-item"
                                    data-bs-theme-value="dark"
                                    onClick={toggleTheme}
                                    type="button">
                                    <span className="theme-icon d-flex fs-base me-2">
                                        <i className="bi-moon" />
                                    </span>
                                    <span className="theme-label">Dark</span>
                                    <i className="item-active-indicator bi-check ms-auto" />
                                </button>
                            </li>

                        </ul>
                    </div>
                    <Link
                        aria-label="Sign in to account"
                        className="btn btn-icon btn-outline-secondary fs-lg border-0 animate-shake me-2"
                        to="account-signin.html">
                        <i className="bi-person animate-target" />
                    </Link>
                    <Link className="btn btn-primary animate-scale" to="add-car.html">
                        <i className="bi-plus fs-lg animate-target ms-n2 me-1 me-sm-2" />
                        Sell car
                    </Link>
                </div>
            </div>
        </header>
    )
}