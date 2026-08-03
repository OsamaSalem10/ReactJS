import { Link } from "react-router-dom"
export const EmailInbox = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Inbox</h1>
                <div className="row">
                    <div className="col-12 col-lg-4 col-xxl-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-grid mb-4">
                                    <button
                                        className="btn btn-lg btn-primary"
                                        data-bs-target="#composeModal"
                                        data-bs-toggle="modal"
                                        type="button">
                                        Compose
                                    </button>
                                </div>
                                <ul className="nav flex-column mb-4" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-inbox me-2" />
                                            <strong>Inbox</strong>
                                            <span className="badge badge-subtle-primary ms-auto rounded-pill">
                                                14
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-file-earmark me-2" />
                                            Drafts
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-bell me-2" />
                                            Scheduled
                                            <span className="badge badge-subtle-primary ms-auto rounded-pill">
                                                3
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-send me-2" />
                                            Sent
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-exclamation-lg me-2" />
                                            Spam
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-trash me-2" />
                                            Trash
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-envelope me-2" />
                                            All mail
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className="text-uppercase mt-3">Labels</h6>
                                <ul className="nav flex-column mb-4" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            <span className="align-middle">Support</span>
                                            <i className="text-danger fa-solid bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Freelance
                                            <i className="text-info fa-solid bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Social
                                            <i className="text-warning fa-solid bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Friends
                                            <i className="text-primary fa-solid bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Family
                                            <i className="text-success fa-solid bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <h6 className="text-uppercase mt-3 mb-3">Chat</h6>
                                    <div className="d-flex">
                                        <img
                                            alt="Stacie Hall"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-4.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Stacie Hall</h6>
                                            <p className="text-muted text-sm">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            alt="Carl Jenkins"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-2.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Carl Jenkins</h6>
                                            <p className="text-muted text-sm">Can we reschedule?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            alt="Bertha Martin"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Bertha Martin</h6>
                                            <p className="text-muted text-sm">Great job!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xxl-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-12 col-xxl-8">
                                        <div className="btn-toolbar">
                                            <div className="btn-group btn-group-lg me-2">
                                                <button className="btn btn-light">
                                                    <i className="bi-inbox" />
                                                </button>
                                                <button className="btn btn-light">
                                                    <i className="bi-exclamation-triangle" />
                                                </button>
                                                <button className="btn btn-light">
                                                    <i className="bi-trash" />
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg me-2">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="bi-folder" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#" value="0">
                                                        Inbox
                                                    </button>
                                                    <button className="dropdown-item" to="#" value="2">
                                                        Drafts
                                                    </button>
                                                    <button className="dropdown-item" to="#" value="4">
                                                        Trash
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="btn-group btn-group-lg me-2">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="bi-tag" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#">
                                                        Support
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Freelance
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Social
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Friends
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Family
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="bi-three-dots" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#">
                                                        Mark as Unread
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Mark as Important
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Add Star
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Move to Spam
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Move to Trash
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xxl-4 d-none d-xxl-block">
                                        <div className="input-group input-group-search">
                                            <input
                                                aria-label="Search"
                                                className="form-control"
                                                placeholder="Search emails…"
                                                type="text"
                                            />
                                            <button className="btn" type="button">
                                                <i className="bi-search align-middle" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <table
                                    className="table table-email my-0 w-100"
                                    id="datatables-email-inbox">
                                    <thead className="d-none">
                                        <tr>
                                            <th />
                                            <th />
                                            <th />
                                            <th />
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star text-warning" />
                                            </td>
                                            <td className="text-truncate col-name">John Doe</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-info me-2">Freelance</span>{" "}
                                                Invitation: Join us for the annual company picnic at Central
                                                Park this Saturday. We'll have games, food, and fun for
                                                everyone!
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Jane Smith, me (2)</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Regarding your inquiry about the upcoming project deadline –
                                                We're working diligently to meet the timeline. I'll provide
                                                you with a progress update by tomorrow.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 9
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Michael Rodriguez</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-primary me-2">Friends</span>{" "}
                                                Weekend getaway plans – Hey, I've booked a cabin in the
                                                mountains for next weekend. Are you in?
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 8
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star text-warning" />
                                            </td>
                                            <td className="text-truncate col-name">Sophia Williams</td>
                                            <td className="text-truncate w-75 col-subject">
                                                New job offer – Congratulations! You've been selected for
                                                the position at our company. Please confirm your acceptance
                                                by the end of the week.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 7
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">
                                                William Martinez, me (3)
                                            </td>
                                            <td className="text-truncate w-75 col-subject">
                                                Reminder: Team meeting tomorrow at 10:00 AM sharp. Don't
                                                forget to bring your progress reports.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 6
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Stacie Hall</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Exciting news! Our company's quarterly earnings have
                                                exceeded expectations. Celebratory dinner tonight at 7:00
                                                PM.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">James Brown</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-danger me-2">Support</span>{" "}
                                                Need your input – Could you review the latest draft of the
                                                marketing campaign and provide feedback by EOD?
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 4
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Ava Jones</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-success me-2">Family</span>{" "}
                                                Travel update – Flight to Paris confirmed for next Monday.
                                                Can't wait to explore the city of lights!
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 3
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Benjamin Taylor</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Important: Don't forget to submit your timesheets for the
                                                current pay period by Friday.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 2
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Emma Garcia</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-warning me-2">Social</span>{" "}
                                                Congratulations on your promotion! Your hard work and
                                                dedication have paid off. Let's celebrate this milestone
                                                over lunch tomorrow.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Apr 1
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Alex Johnson</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Emergency meeting called – Please join the Zoom call ASAP to
                                                address the unexpected issue with the server.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 31
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Sarah Lee</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Family reunion this weekend – Looking forward to seeing
                                                everyone at Grandma's house on Sunday.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 30
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">
                                                Marketing Team, me (3)
                                            </td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-info me-2">Freelance</span>{" "}
                                                Reminder: Annual performance reviews scheduled for next
                                                week. Prepare your self-assessment and goals beforehand.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 29
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="text-warning bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Jane Smith</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Regarding the budget proposal – I've reviewed your
                                                suggestions and have some ideas to discuss. Let's meet
                                                tomorrow to brainstorm.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 28
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">John Doe, me (5)</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-danger me-2">Support</span>{" "}
                                                Good news – The client loved our presentation! Let's keep up
                                                the great work.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 27
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Alex Johnson</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Apologies for the confusion earlier – I've sorted out the
                                                scheduling conflict, and our meeting is now confirmed for
                                                Thursday at 2:00 PM.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 26
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="text-warning bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Sarah Lee</td>
                                            <td className="text-truncate w-75 col-subject">
                                                Update on project timeline – We're slightly behind schedule
                                                but working to catch up. Will keep you posted on our
                                                progress.
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 25
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-truncate col-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    defaultValue=""
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td className="text-truncate col-favorite">
                                                <i className="bi-star" />
                                            </td>
                                            <td className="text-truncate col-name">Marketing Team</td>
                                            <td className="text-truncate w-75 col-subject">
                                                <span className="badge text-bg-info me-2">Freelance</span>{" "}
                                                Birthday celebration – Join us for cake and drinks tonight
                                                at the office to celebrate Sarah's birthday!
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end text-truncate col-date">
                                                Mar 24
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="modal fade"
                    id="composeModal"
                    role="dialog"
                    tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Compose message</h5>
                                <button
                                    aria-label="Close"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>
                            <div className="modal-body mx-3">
                                <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <input
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Cc</label>
                                    <input
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject</label>
                                    <input
                                        className="form-control"
                                        placeholder="Subject"
                                        type="text"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <div id="quill-editor" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-light" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button className="btn btn-light" data-bs-dismiss="modal">
                                    <i className="bi-pencil" /> Save draft
                                </button>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="bi-send" /> Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export const EmailDetails = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Email Details</h1>
                <div className="row">
                    <div className="col-12 col-lg-4 col-xxl-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-grid mb-4">
                                    <button
                                        className="btn btn-lg btn-primary"
                                        data-bs-target="#composeModal"
                                        data-bs-toggle="modal"
                                        type="button">
                                        Compose
                                    </button>
                                </div>
                                <ul className="nav flex-column mb-4" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-inbox me-2" />
                                            <strong>Inbox</strong>
                                            <span className="badge badge-subtle-primary ms-auto rounded-pill">
                                                14
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-pencil me-2" />
                                            Drafts
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-bell me-2" />
                                            Scheduled
                                            <span className="badge badge-subtle-primary ms-auto rounded-pill">
                                                3
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-send me-2" />
                                            Sent
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-exclamation-triangle-fill me-2" />
                                            Spam
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-trash me-2" />
                                            Trash
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center text-reset"
                                            to="#">
                                            <i className="bi-envelope me-2" />
                                            All mail
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className="text-uppercase mt-3">Labels</h6>
                                <ul className="nav flex-column mb-4" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            <span className="align-middle">Support</span>
                                            <i className="text-danger bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Freelance
                                            <i className="text-info bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Social
                                            <i className="text-warning bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Friends
                                            <i className="text-primary bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
                                            to="#">
                                            Family
                                            <i className="text-success bi-circle-fill fa-sm" />
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <h6 className="text-uppercase mt-3 mb-3">Chat</h6>
                                    <div className="d-flex">
                                        <img
                                            alt="Stacie Hall"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-4.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Stacie Hall</h6>
                                            <p className="text-muted text-sm">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            alt="Carl Jenkins"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-2.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Carl Jenkins</h6>
                                            <p className="text-muted text-sm">Can we reschedule?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            alt="Bertha Martin"
                                            className="d-flex me-2 rounded-circle"
                                            height="36"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="36"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Bertha Martin</h6>
                                            <p className="text-muted text-sm">Great job!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xxl-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-12 col-xxl-8">
                                        <div className="btn-toolbar">
                                            <div className="btn-group btn-group-lg me-2">
                                                <button className="btn btn-light">
                                                    <i className="bi-inbox" />
                                                </button>
                                                <button className="btn btn-light">
                                                    <i className="bi-exclamation-triangle" />
                                                </button>
                                                <button className="btn btn-light">
                                                    <i className="bi-trash" />
                                                </button>
                                            </div>
                                            <div className="btn-group btn-group-lg me-2">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="bi-folder" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#" value="0">
                                                        Inbox
                                                    </button>
                                                    <button className="dropdown-item" to="#" value="2">
                                                        Drafts
                                                    </button>
                                                    <button className="dropdown-item" to="#" value="4">
                                                        Trash
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="btn-group btn-group-lg me-2">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="bi-tag" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#">
                                                        Support
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Freelance
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Social
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Friends
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Family
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="btn-group btn-group-lg">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    More
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <button className="dropdown-item" to="#">
                                                        Mark as Unread
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Mark as Important
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Add Star
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Move to Spam
                                                    </button>
                                                    <button className="dropdown-item" to="#">
                                                        Move to Trash
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xxl-4 d-none d-xxl-block">
                                        <div className="input-group input-group-search">
                                            <input
                                                aria-label="Search"
                                                className="form-control"
                                                placeholder="Search emails…"
                                                type="text"
                                            />
                                            <button className="btn" type="button">
                                                <i className="bi-search align-middle" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5>
                                        Exciting news! Our company's quarterly earnings have exceeded
                                        expectations. Celebratory dinner tonight at 7:00 PM.
                                    </h5>
                                    <hr />
                                    <div className="d-flex">
                                        <img
                                            alt="Stacie Hall"
                                            className="rounded-circle d-flex me-2"
                                            height="40"
                                            src="assets/img/avatars/avatar-4.jpg"
                                            width="40"
                                        />
                                        <div className="w-100 mt-1">
                                            <small className="float-end">April 5, 2024, 9:12 AM</small>
                                            <h6 className="mb-0">Stacie Hall</h6>
                                            <small className="text-muted">
                                                from: stacie@staciehall.co
                                            </small>
                                        </div>
                                    </div>
                                    <div className="mx-5 my-3">
                                        <p>Dear Team,</p>
                                        <p>I hope this email finds you well.</p>
                                        <p>
                                            I'm thrilled to share some fantastic news with all of you –
                                            our company's quarterly earnings have surpassed expectations!
                                            This is a significant achievement that wouldn't have been
                                            possible without each and every one of your hard work,
                                            dedication, and commitment to excellence.
                                        </p>
                                        <p>
                                            To celebrate this incredible milestone, we're hosting a
                                            special celebratory dinner tonight at 7:00 PM. It will be an
                                            opportunity for us to come together, unwind, and toast to our
                                            success as a team.
                                        </p>
                                        <p>
                                            Please RSVP by replying to this email at your earliest
                                            convenience so we can finalize arrangements. If you have any
                                            dietary restrictions or preferences, please let us know so we
                                            can accommodate them.
                                        </p>
                                        <p>
                                            Let's make tonight a memorable and enjoyable evening as we
                                            celebrate our achievements together. Looking forward to seeing
                                            you all there!
                                        </p>
                                        <p>
                                            Best regards,
                                            <br />
                                            Stacie Hall
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="btn-toolbar">
                                        <button className="btn btn-light me-2">
                                            <i className="bi-reply-all" /> Reply to all
                                        </button>
                                        <button className="btn btn-light me-2">
                                            <i className="bi-reply" /> Reply
                                        </button>
                                        <button className="btn btn-light">
                                            <i className="bi-forward" /> Forward
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="modal fade"
                    id="composeModal"
                    role="dialog"
                    tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Compose message</h5>
                                <button
                                    aria-label="Close"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>
                            <div className="modal-body mx-3">
                                <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <input
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Cc</label>
                                    <input
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject</label>
                                    <input
                                        className="form-control"
                                        placeholder="Subject"
                                        type="text"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <div id="quill-editor" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-light" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button className="btn btn-light" data-bs-dismiss="modal">
                                    <i className="bi-square-pen" /> Save draft
                                </button>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="bi-send" /> Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}