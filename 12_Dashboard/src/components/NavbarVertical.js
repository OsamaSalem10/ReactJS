import { Link } from "react-router-dom"
export const NavbarVertical = ({ collapsed }) => {
    return (
        <nav className={collapsed ? "sidebar collapsed" : "sidebar"}>
            <div className="sidebar-content ">
                <Link className="sidebar-brand" to="/">
                    <svg
                        enableBackground="new 0 0 20 20"
                        height="20px"
                        version="1.1"
                        viewBox="0 0 20 20"
                        width="20px"
                        x="0px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        y="0px">
                        <path d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z" />
                        <path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z" />
                        <path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z" />
                    </svg>
                    <span className="align-middle me-3">AppStack</span>
                </Link>
                <ul className="sidebar-nav">
                    <li className="sidebar-header">Navigation</li>
                    <li className="sidebar-item active">
                        <Link
                            className="sidebar-link"
                            data-bs-target="#dashboards"
                            data-bs-toggle="collapse">
                            <i className="bi bi-sliders align-middle" />
                            <span className="align-middle">Dashboards</span>
                            <span className="badge badge-sidebar-primary">5</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse show"
                            data-bs-parent="#sidebar"
                            id="dashboards">
                            <li className="sidebar-item active">
                                <Link className="sidebar-link" to="/">
                                    Default
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/dashboard-analytics">
                                    Analytics
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/dashboard-saas">
                                    SaaS
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/dashboard-social">
                                    Social
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/dashboard-crypto">
                                    Crypto
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#ecommerce"
                            data-bs-toggle="collapse">
                            <i className="bi bi-bag align-middle"  />
                            <span className="align-middle">E-Commerce</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="ecommerce">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/products">
                                    Products <span className="badge badge-sidebar-primary">New</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/products-details">
                                    Product Details{" "}
                                    <span className="badge badge-sidebar-primary">New</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/orders">
                                    Orders <span className="badge badge-sidebar-primary">New</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/customers">
                                    Customers
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/invoice">
                                    Invoice
                                </Link>
                            </li>
                           
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#projects"
                            data-bs-toggle="collapse">
                            <i className="bi bi-grid-1x2 align-middle" />
                            <span className="align-middle">Projects</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="projects">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/projects-overview">
                                    Overview
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/projects-details">
                                    Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/chat">
                            <i className="bi-chat align-middle"/>
                            <span className="align-middle">Chat</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/file-manager">
                            <i className="bi-files align-middle" />{" "}
                            <span className="align-middle">File Manager</span>
                            <span className="badge badge-sidebar-primary">New</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/calendar">
                            <i className="bi-calendar align-middle"  />
                            <span className="align-middle">Calendar</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#email"
                            data-bs-toggle="collapse">
                            <i className="bi-envelope align-middle"  />{" "}
                            <span className="align-middle">Email</span>
                            <span className="badge badge-sidebar-primary">New</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="email">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/email-inbox">
                                    Inbox
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/email-details">
                                    Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#tasks"
                            data-bs-toggle="collapse">
                            <i className="bi-trello align-middle"  />{" "}
                            <span className="align-middle">Tasks</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="tasks">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/tasks-list">
                                    List
                                    <span className="badge badge-sidebar-primary">New</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/tasks-kanban">
                                    Kanban
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-header">Pages</li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#pages"
                            data-bs-toggle="collapse">
                            <i className="bi-grid-1x2 align-middle"  />{" "}
                            <span className="align-middle">Pages</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="pages">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/pages-profile">
                                    Profile
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/pages-settings">
                                    Settings
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/pages-blank">
                                    Blank Page
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#auth"
                            data-bs-toggle="collapse">
                            <i className="bi-person align-middle"  />{" "}
                            <span className="align-middle">Auth</span>
                            <span className="badge badge-sidebar-secondary">Special</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="auth">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-sign-in">
                                    Sign In
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-sign-in-cover">
                                    Sign In Cover
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-sign-up">
                                    Sign Up
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-sign-up-cover">
                                    Sign Up Cover
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-reset-password">
                                    Reset Password
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-reset-password-cover">
                                    Reset Password Cover
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-lock-screen">
                                    Lock Screen
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-lock-screen-cover">
                                    Lock Screen Cover
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-2fa">
                                    2FA
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-2fa-cover">
                                    2FA Cover
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-404">
                                    404 Page
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/auth-500">
                                    500 Page
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/landing" target="_blank">
                            <i className="bi-tablet-landscape align-middle"  />{" "}
                            <span className=" align-middle">Landing</span>
                            <span className="badge badge-sidebar-primary">New</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#docs"
                            data-bs-toggle="collapse">
                            <i className="bi-book align-middle"  />{" "}
                            <span className="align-middle">Documentation</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="docs">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/docs-introduction">
                                    Introduction
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/docs-installation">
                                    Getting Started
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/docs-customization">
                                    Customization
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/docs-plugins">
                                    Plugins
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/docs-changelog">
                                    Changelog
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-header">Plugins & Addons</li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#forms-plugins"
                            data-bs-toggle="collapse">
                            <i className="bi-check-square align-middle"/>
                            <span className="align-middle">Form Plugins</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="forms-plugins">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-advanced-inputs">
                                    Advanced Inputs
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-editors">
                                    Editors
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-validation">
                                    Validation
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-wizard">
                                    Wizard
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#datatables"
                            data-bs-toggle="collapse">
                            <i className="bi-list align-middle"  />{" "}
                            <span className="align-middle">DataTables</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="datatables">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-responsive">
                                    Responsive Table
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-buttons">
                                    Table with Buttons
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-column-search">
                                    Column Search
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-fixed-header">
                                    Fixed Header
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-multi">
                                    Multi Selection
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/datatables-ajax">
                                    Ajax Sourced Data
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#charts"
                            data-bs-toggle="collapse">
                            <i className="bi-pie-chart align-middle"  />{" "}
                            <span className="align-middle">Charts</span>
                            <span className="badge badge-sidebar-primary">New</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="charts">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/charts-chartjs">
                                    Chart.js
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/charts-apexcharts">
                                    ApexCharts{" "}
                                    <span className="badge badge-sidebar-primary">New</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/notifications">
                            <i className="bi-bell align-middle " />{" "}
                            <span className="align-middle">Notifications</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#maps"
                            data-bs-toggle="collapse">
                            <i className="bi-map align-middle" />{" "}
                            <span className="align-middle">Maps</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="maps">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/maps-google">
                                    Google Maps
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/maps-vector">
                                    Vector Maps
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-header">Tools & Components</li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#ui"
                            data-bs-toggle="collapse">
                            <i className="bi-grid align-middle" />{" "}
                            <span className="align-middle">UI Elements</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="ui">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-alerts">
                                    Alerts
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-buttons">
                                    Buttons
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-cards">
                                    Cards
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-carousel">
                                    Carousel
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-embed-video">
                                    Embed Video
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-general">
                                    General <span className="badge badge-sidebar-primary">10+</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-grid">
                                    Grid
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-modals">
                                    Modals
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-offcanvas">
                                    Offcanvas
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-placeholders">
                                    Placeholders
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-tabs">
                                    Tabs
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/ui-typography">
                                    Typography
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#icons"
                            data-bs-toggle="collapse">
                            <i className="bi-heart align-middle" />{" "}
                            <span className="align-middle">Icons</span>
                            <span className="badge badge-sidebar-primary">1500+</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="icons">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/icons-lucide">
                                    Lucide
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/icons-font-awesome">
                                    Font Awesome
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#forms"
                            data-bs-toggle="collapse">
                            <i className="bi-check-square align-middle" />{" "}
                            <span className="align-middle">Forms</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                            id="forms">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-layouts">
                                    Layouts
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-basic-inputs">
                                    Basic Inputs
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-input-groups">
                                    Input Groups
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/forms-floating-labels">
                                    Floating Labels
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/tables">
                            <i className="bi-list align-middle"  />{" "}
                            <span className="align-middle">Tables</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link
                            className="sidebar-link collapsed"
                            data-bs-target="#multi"
                            data-bs-toggle="collapse">
                            <i className="bi-share align-middle" />{" "}
                            <span className="align-middle">Multi Level</span>
                        </Link>
                        <ul
                            className="sidebar-dropdown list-unstyled collapse"
                            data-bs-parent="#sidebar"
                            id="multi">
                            <li className="sidebar-item">
                                <Link
                                    className="sidebar-link collapsed"
                                    data-bs-target="#multi-2"
                                    data-bs-toggle="collapse">
                                    Two Levels
                                </Link>
                                <ul
                                    className="sidebar-dropdown list-unstyled collapse"
                                    id="multi-2">
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link" data-bs-target="#">
                                            Item 1
                                        </Link>
                                        <Link className="sidebar-link" data-bs-target="#">
                                            Item 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <Link
                                    className="sidebar-link collapsed"
                                    data-bs-target="#multi-3"
                                    data-bs-toggle="collapse">
                                    Three Levels
                                </Link>
                                <ul
                                    className="sidebar-dropdown list-unstyled collapse"
                                    id="multi-3">
                                    <li className="sidebar-item">
                                        <Link
                                            className="sidebar-link collapsed"
                                            data-bs-target="#multi-3-1"
                                            data-bs-toggle="collapse">
                                            Item 1
                                        </Link>
                                        <ul
                                            className="sidebar-dropdown list-unstyled collapse"
                                            id="multi-3-1">
                                            <li className="sidebar-item">
                                                <Link className="sidebar-link" data-bs-target="#">
                                                    Item 1
                                                </Link>
                                                <Link className="sidebar-link" data-bs-target="#">
                                                    Item 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link" data-bs-target="#">
                                            Item 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Monthly Sales Report</strong>
                        <div className="mb-3 text-sm">
                            Your monthly sales report is ready for download!
                        </div>
                        <div className="d-grid">
                            <Link
                                className="btn btn-primary"
                                to="https://bootlab.io/product/appstack-admin-template"
                                target="_blank">
                                Download
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}