import { Link } from "react-router-dom"
export const ProjectsOverview = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <Link className="btn btn-primary float-end mt-n1" to="#">
                    <i className="fas fa-plus" /> New project
                </Link>
                <h1 className="h3 mb-3">Projects</h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Landing page redesign</h5>
                                <div className="badge bg-success my-2">Finished</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">100%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="100"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "100%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Company posters</h5>
                                <div className="badge bg-warning my-2">In progress</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                    imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">75%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="75"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "75%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Product page design</h5>
                                <div className="badge bg-success my-2">Finished</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">100%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="100"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "100%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Upgrade CRM software</h5>
                                <div className="badge bg-warning my-2">In progress</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                    mauris.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">50%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="50"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "50%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img
                                alt="Unsplash"
                                className="card-img-top"
                                src="assets/img/photos/unsplash-1.jpg"
                            />
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Fix form validation</h5>
                                <div className="badge bg-warning my-2">In progress</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                    mauris.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">65%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="65"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "65%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img
                                alt="Unsplash"
                                className="card-img-top"
                                src="assets/img/photos/unsplash-2.jpg"
                            />
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">New company logo</h5>
                                <div className="badge bg-danger my-2">On hold</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">20%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="20"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "20%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img
                                alt="Unsplash"
                                className="card-img-top"
                                src="assets/img/photos/unsplash-3.jpg"
                            />
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Upgrade to latest Maps API</h5>
                                <div className="badge bg-success my-2">Finished</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                    mauris.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">100%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="100"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "100%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img
                                alt="Unsplash"
                                className="card-img-top"
                                src="assets/img/photos/unsplash-1.jpg"
                            />
                            <div className="card-header px-4 pt-4">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Refactor backend templates</h5>
                                <div className="badge bg-danger my-2">On hold</div>
                            </div>
                            <div className="card-body px-4 pt-2">
                                <p>
                                    Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                    imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
                                </p>
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-3.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar-2.jpg"
                                    width="28"
                                />
                                <img
                                    alt="Avatar"
                                    className="rounded-circle me-1"
                                    height="28"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="28"
                                />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-4 pb-4">
                                    <p className="mb-2 fw-bold">
                                        Progress <span className="float-end">0%</span>
                                    </p>
                                    <div className="progress progress-sm">
                                        <div
                                            aria-valuemax="100"
                                            aria-valuemin="0"
                                            aria-valuenow="0"
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: "0%",
                                            }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export const ProjectsDetails = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Project Details</h1>
                <div className="row">
                    <div className="col-lg-6 col-xl-3 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title mb-0 mt-2">Income</h5>
                            </div>
                            <div className="card-body my-0 pt-0">
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-8">
                                        <h3 className="d-flex align-items-center mb-0 fw-light">
                                            $37.500
                                        </h3>
                                    </div>
                                    <div className="col-4 text-end">
                                        <span className="text-muted">57%</span>
                                    </div>
                                </div>
                                <div className="progress progress-sm shadow-sm mb-1">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{
                                            width: "57%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title mb-0 mt-2">Orders</h5>
                            </div>
                            <div className="card-body my-0 pt-0">
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-8">
                                        <h3 className="d-flex align-items-center mb-0 fw-light">
                                            3.282
                                        </h3>
                                    </div>
                                    <div className="col-4 text-end">
                                        <span className="text-muted">82%</span>
                                    </div>
                                </div>
                                <div className="progress progress-sm shadow-sm mb-1">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{
                                            width: "82%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title mb-0 mt-2">Activity</h5>
                            </div>
                            <div className="card-body my-0 pt-0">
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-8">
                                        <h3 className="d-flex align-items-center mb-0 fw-light">
                                            19.312
                                        </h3>
                                    </div>
                                    <div className="col-4 text-end">
                                        <span className="text-muted">64%</span>
                                    </div>
                                </div>
                                <div className="progress progress-sm shadow-sm mb-1">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                            width: "64%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title mb-0 mt-2">Revenue</h5>
                            </div>
                            <div className="card-body my-0 pt-0">
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-8">
                                        <h3 className="d-flex align-items-center mb-0 fw-light">
                                            $82.400
                                        </h3>
                                    </div>
                                    <div className="col-4 text-end">
                                        <span className="text-muted">32%</span>
                                    </div>
                                </div>
                                <div className="progress progress-sm shadow-sm mb-1">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{
                                            width: "32%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xxl-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Upgrade CRM software</h5>
                                <div className="badge bg-info my-2">In progress</div>
                            </div>
                            <div className="card-body pt-0">
                                <h5>Description</h5>
                                <p className="text-muted">
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                </p>
                                <p className="text-muted">
                                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                    mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere
                                    ut, mauris.
                                </p>
                                <div>
                                    <h5>Assignee</h5>
                                    <img
                                        alt="Avatar"
                                        className="rounded-circle me-1"
                                        height="34"
                                        src="assets/img/avatars/avatar-3.jpg"
                                        width="34"
                                    />
                                    <img
                                        alt="Avatar"
                                        className="rounded-circle me-1"
                                        height="34"
                                        src="assets/img/avatars/avatar-2.jpg"
                                        width="34"
                                    />
                                    <img
                                        alt="Avatar"
                                        className="rounded-circle me-1"
                                        height="34"
                                        src="assets/img/avatars/avatar.jpg"
                                        width="34"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Comments (4)</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Ashley Briggs"
                                        className="rounded-circle me-3"
                                        height="56"
                                        src="assets/img/avatars/avatar-5.jpg"
                                        width="56"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end">5m ago</small>
                                        <p className="mb-2">
                                            <strong>Ashley Briggs</strong>
                                        </p>
                                        <p>
                                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                                            sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                            hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                                            tempus.
                                        </p>
                                        <small className="text-muted">Today 7:51 pm</small>
                                        <br />
                                        <div className="d-flex align-items-start mt-3">
                                            <Link className="pe-2" to="#">
                                                <img
                                                    alt="Stacie Hall"
                                                    className="rounded-circle me-2"
                                                    height="36"
                                                    src="assets/img/avatars/avatar-4.jpg"
                                                    width="36"
                                                />
                                            </Link>
                                            <div className="flex-grow-1">
                                                <p className="text-muted">
                                                    <strong>Stacie Hall</strong>: Nam pretium turpis et arcu.
                                                    Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                                                    iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante
                                                    arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Chris Wood"
                                        className="rounded-circle me-3"
                                        height="56"
                                        src="assets/img/avatars/avatar.jpg"
                                        width="56"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end">30m ago</small>
                                        <p className="mb-2">
                                            <strong>Chris Wood</strong>
                                        </p>
                                        <p>
                                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                                            sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                            hendrerit id, lorem.
                                        </p>
                                        <small className="text-muted">Today 7:26 pm</small>
                                        <br />
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Stacie Hall"
                                        className="rounded-circle me-3"
                                        height="56"
                                        src="assets/img/avatars/avatar-4.jpg"
                                        width="56"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end">45m ago</small>
                                        <p className="mb-2">
                                            <strong>Stacie Hall</strong>
                                        </p>
                                        <p>
                                            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                            imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                            mauris.
                                        </p>
                                        <small className="text-muted">Today 7:11 pm</small>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Information</h5>
                            </div>
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-4 col-xxl-3">Assignee</dt>
                                    <dd className="col-8 col-xxl-9">
                                        <img
                                            alt="Avatar"
                                            className="rounded-circle me-1 mt-n1"
                                            height="28"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="28"
                                        />
                                        <img
                                            alt="Avatar"
                                            className="rounded-circle me-1 mt-n1"
                                            height="28"
                                            src="assets/img/avatars/avatar-2.jpg"
                                            width="28"
                                        />
                                        <img
                                            alt="Avatar"
                                            className="rounded-circle me-1 mt-n1"
                                            height="28"
                                            src="assets/img/avatars/avatar.jpg"
                                            width="28"
                                        />
                                    </dd>
                                    <dt className="col-4 col-xxl-3 mb-0">Reporter</dt>
                                    <dd className="col-8 col-xxl-9 mb-0">
                                        <img
                                            alt="Avatar"
                                            className="rounded-circle me-1 mt-n1"
                                            height="28"
                                            src="assets/img/avatars/avatar-4.jpg"
                                            width="28"
                                        />
                                    </dd>
                                </dl>
                                <hr />
                                <dl className="row">
                                    <dt className="col-4 col-xxl-3">Created</dt>
                                    <dd className="col-8 col-xxl-9">
                                        <p className="mb-1">2 February 2024</p>
                                    </dd>
                                    <dt className="col-4 col-xxl-3">Start</dt>
                                    <dd className="col-8 col-xxl-9">
                                        <p className="mb-1">23 February 2024</p>
                                    </dd>
                                    <dt className="col-4 col-xxl-3 mb-0">End</dt>
                                    <dd className="col-8 col-xxl-9 mb-0">
                                        <p className="mb-0">22 November 2024</p>
                                    </dd>
                                </dl>
                                <hr />
                                <dl className="row">
                                    <dt className="col-4 col-xxl-3 mb-0">Budget</dt>
                                    <dd className="col-8 col-xxl-9 mb-0">
                                        <p className="mb-0">$28,300</p>
                                    </dd>
                                </dl>
                                <hr />
                                <dl className="row mb-1">
                                    <dt className="col-4 col-xxl-3">Status</dt>
                                    <dd className="col-8 col-xxl-9">
                                        <span className="badge bg-info mb-1">In progress</span>
                                    </dd>
                                    <dt className="col-4 col-xxl-3">Logged</dt>
                                    <dd className="col-8 col-xxl-9">
                                        <p className="mb-1">63h</p>
                                    </dd>
                                    <dt className="col-4 col-xxl-3 mb-0">Estimated</dt>
                                    <dd className="col-8 col-xxl-9 mb-0">
                                        <p className="mb-0">120h</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                            <i className="align-middle" data-lucide="more-horizontal" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link className="dropdown-item" to="#">
                                                Action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Another action
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                Something else here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title mb-0">Earnings</h5>
                            </div>
                            <div className="card-body">
                                <div className="chart">
                                    <canvas id="chartjs-projects-bar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}