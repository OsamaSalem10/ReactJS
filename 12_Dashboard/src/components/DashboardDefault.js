import { Link } from "react-router-dom"
export const DashboardDefault = () => {
    return <main className="content">
        <div className="container-fluid p-0">
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3>Dashboard</h3>
                </div>
                <div className="col-auto ms-auto text-end mt-n1">
                    <div className="dropdown me-2 d-inline-block position-relative">
                        <Link
                            className="btn btn-light bg-white shadow-sm dropdown-toggle"
                            data-bs-display="static"
                            data-bs-toggle="dropdown"
                            to="#">
                            <i className="bi-calendar align-middle mt-n1"  /> Today
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            <h6 className="dropdown-header">Settings</h6>
                            <Link className="dropdown-item" to="#">
                                Action
                            </Link>
                            <Link className="dropdown-item" to="#">
                                Another action
                            </Link>
                            <Link className="dropdown-item" to="#">
                                Something else here
                            </Link>
                            <div className="dropdown-divider" />
                            <Link className="dropdown-item" to="#">
                                Separated link
                            </Link>
                        </div>
                    </div>
                    <button className="btn btn-primary shadow-sm me-2">
                        <i className="bi bi-funnel align-middle " ></i>
                    </button>
                    <button className="btn btn-primary shadow-sm">
                        <i className="bi-arrow-clockwise align-middle" ></i>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                    <div className="card illustration flex-fill">
                        <div className="card-body p-0 d-flex flex-fill">
                            <div className="row g-0 w-100">
                                <div className="col-6">
                                    <div className="illustration-text p-3 m-1">
                                        <h4 className="illustration-text">Welcome Back, Chris!</h4>
                                        <p className="mb-0">AppStack Dashboard</p>
                                    </div>
                                </div>
                                <div className="col-6 align-self-end text-end">
                                    <img
                                        alt=""
                                        className="img-fluid illustration-img"
                                        src="assets/img/illustrations/customer-support.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-grow-1">
                                    <h3 className="mb-2">$ 24.300</h3>
                                    <p className="mb-2">Total Earnings</p>
                                    <div className="mb-0">
                                        <span className="badge badge-subtle-success me-2">
                                            {" "}
                                            +5.35%{" "}
                                        </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                                <div className="d-inline-block ms-3">
                                    <div className="stat">
                                        <i
                                            className="bi-currency-dollar align-middle text-success"
                                          
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-grow-1">
                                    <h3 className="mb-2">43</h3>
                                    <p className="mb-2">Pending Orders</p>
                                    <div className="mb-0">
                                        <span className="badge badge-subtle-danger me-2">
                                            {" "}
                                            -4.25%{" "}
                                        </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                                <div className="d-inline-block ms-3">
                                    <div className="stat">
                                        <i
                                            className="bi-bag align-middle text-danger"
                                           
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-grow-1">
                                    <h3 className="mb-2">$ 18.700</h3>
                                    <p className="mb-2">Total Revenue</p>
                                    <div className="mb-0">
                                        <span className="badge badge-subtle-success me-2">
                                            {" "}
                                            +8.65%{" "}
                                        </span>
                                        <span className="text-muted">Since last week</span>
                                    </div>
                                </div>
                                <div className="d-inline-block ms-3">
                                    <div className="stat">
                                        <i
                                            className="bi-dollar-sign align-middle text-info"
                                  
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 d-flex">
                    <div className="card flex-fill w-100">
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown position-relative">
                                    <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                        <i className="bi-more-horizontal align-middle"  />
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
                            <h5 className="card-title mb-0">Sales / Revenue</h5>
                        </div>
                        <div className="card-body d-flex w-100">
                            <div className="align-self-center chart chart-lg">
                                <canvas id="chartjs-dashboard-bar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex">
                    <div className="card flex-fill w-100">
                        <div className="card-header">
                            <span className="badge bg-info float-end">Today</span>
                            <h5 className="card-title mb-0">Daily feed</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <img
                                    alt=""
                                    className="rounded-circle me-2"
                                    height="36"
                                    src="assets/img/avatars/avatar-5.jpg"
                                    width="36"
                                />
                                <div className="flex-grow-1">
                                    <small className="float-end">5m ago</small>
                                    <strong>Ashley Briggs</strong> started following{" "}
                                    <strong>Stacie Hall</strong>
                                    <br />
                                    <small className="text-muted">Today 7:51 pm</small>
                                    <br />
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-start">
                                <img
                                    alt=""
                                    className="rounded-circle me-2"
                                    height="36"
                                    src="assets/img/avatars/avatar.jpg"
                                    width="36"
                                />
                                <div className="flex-grow-1">
                                    <small className="float-end">30m ago</small>
                                    <strong>Chris Wood</strong> posted something on{" "}
                                    <strong>Stacie Hall</strong>
                                    's timeline
                                    <br />
                                    <small className="text-muted">Today 7:21 pm</small>
                                    <div className="border text-sm text-muted p-2 mt-1">
                                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                        rhoncus, sem quam semper libero, sit amet adipiscing...
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-start">
                                <img
                                    alt=""
                                    className="rounded-circle me-2"
                                    height="36"
                                    src="assets/img/avatars/avatar-4.jpg"
                                    width="36"
                                />
                                <div className="flex-grow-1">
                                    <small className="float-end">1h ago</small>
                                    <strong>Stacie Hall</strong> posted a new blog
                                    <br />
                                    <small className="text-muted">Today 6:35 pm</small>
                                </div>
                            </div>
                            <hr />
                            <div className="d-grid">
                                <Link className="btn btn-primary" to="#">
                                    Load more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card flex-fill">
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown position-relative">
                                    <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                        <i className="bi-more-horizontal align-middle"  />
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
                            <h5 className="card-title mb-0">Calendar</h5>
                        </div>
                        <div className="card-body d-flex">
                            <div className="align-self-center w-100">
                                <div className="chart">
                                    <div id="calendar-dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4 d-none d-xl-flex">
                    <div className="card flex-fill w-100">
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown position-relative">
                                    <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                        <i className="bi-more-horizontal align-middle" />
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
                            <h5 className="card-title mb-0">Weekly sales</h5>
                        </div>
                        <div className="card-body d-flex">
                            <div className="align-self-center w-100">
                                <div className="py-3">
                                    <div className="chart chart-xs">
                                        <canvas id="chartjs-dashboard-pie" />
                                    </div>
                                </div>
                                <table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Source</th>
                                            <th className="text-end">Revenue</th>
                                            <th className="text-end">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <i className="fas fa-square-full text-primary" /> Direct
                                            </td>
                                            <td className="text-end">$ 2602</td>
                                            <td className="text-end text-success">+43%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fas fa-square-full text-warning" />{" "}
                                                Affiliate
                                            </td>
                                            <td className="text-end">$ 1253</td>
                                            <td className="text-end text-success">+13%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fas fa-square-full text-danger" /> E-mail
                                            </td>
                                            <td className="text-end">$ 541</td>
                                            <td className="text-end text-success">+24%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fas fa-square-full text-dark" /> Other
                                            </td>
                                            <td className="text-end">$ 1465</td>
                                            <td className="text-end text-success">+11%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card flex-fill w-100">
                        <div className="card-header">
                            <div className="card-actions float-end">
                                <div className="dropdown position-relative">
                                    <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                        <i className="bi-more-horizontal align-middle"  />
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
                            <h5 className="card-title mb-0">Appointments</h5>
                        </div>
                        <div className="card-body">
                            <ul className="timeline">
                                <li className="timeline-item">
                                    <strong>Chat with Carl and Ashley</strong>
                                    <span className="float-end text-muted text-sm">30m ago</span>
                                    <p>
                                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                        imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                                        mauris...
                                    </p>
                                </li>
                                <li className="timeline-item">
                                    <strong>The big launch</strong>
                                    <span className="float-end text-muted text-sm">2h ago</span>
                                    <p>
                                        Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
                                        consectetuer eget, posuere ut, mauris. Praesent adipiscing.
                                        Phasellus ullamcorper ipsum rutrum nunc...
                                    </p>
                                </li>
                                <li className="timeline-item">
                                    <strong>Coffee break</strong>
                                    <span className="float-end text-muted text-sm">3h ago</span>
                                    <p>
                                        Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                        imperdiet, leo. Maecenas malesuada...
                                    </p>
                                </li>
                                <li className="timeline-item">
                                    <strong>Chat with team</strong>
                                    <span className="float-end text-muted text-sm">30m ago</span>
                                    <p>
                                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                                        imperdiet nec, imperdiet iaculis, ipsum...
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card flex-fill">
                <div className="card-header">
                    <div className="card-actions float-end">
                        <div className="dropdown position-relative">
                            <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                                <i className="bi-more-horizontal align-middle "  />
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
                    <h5 className="card-title mb-0">Latest Projects</h5>
                </div>
                <table className="table table-borderless my-0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="d-none d-xxl-table-cell">Company</th>
                            <th className="d-none d-xl-table-cell">Author</th>
                            <th>Status</th>
                            <th className="d-none d-xl-table-cell text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="bg-body-tertiary rounded-2">
                                            <img alt="" className="p-2" src="assets/img/brands/brand-1.svg" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <strong>Project Apollo</strong>
                                        <div className="text-muted">Web, UI/UX Design</div>
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xxl-table-cell">
                                <strong>Gantos</strong>
                                <div className="text-muted">Real Estate</div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                                <strong>Carl Jenkins</strong>
                                <div className="text-muted">HTML, JS, React</div>
                            </td>
                            <td>
                                <div className="d-flex flex-column w-100">
                                    <span className="me-2 mb-1 text-muted">65%</span>
                                    <div className="progress progress-sm w-100">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{
                                                width: "65%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xl-table-cell text-end">
                                <Link className="btn btn-light" to="#">
                                    View
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="bg-body-tertiary rounded-2">
                                            <img alt="" className="p-2" src="assets/img/brands/brand-2.svg" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <strong>Project Bongo</strong>
                                        <div className="text-muted">Web</div>
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xxl-table-cell">
                                <strong>Adray Transportation</strong>
                                <div className="text-muted">Transportation</div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                                <strong>Bertha Martin</strong>
                                <div className="text-muted">HTML, JS, Vue</div>
                            </td>
                            <td>
                                <div className="d-flex flex-column w-100">
                                    <span className="me-2 mb-1 text-muted">33%</span>
                                    <div className="progress progress-sm w-100">
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{
                                                width: "33%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xl-table-cell text-end">
                                <Link className="btn btn-light" to="#">
                                    View
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="bg-body-tertiary rounded-2">
                                            <img alt="" className="p-2" src="assets/img/brands/brand-3.svg" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <strong>Project Canary</strong>
                                        <div className="text-muted">Web, UI/UX Design</div>
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xxl-table-cell">
                                <strong>Evans</strong>
                                <div className="text-muted">Insurance</div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                                <strong>Stacie Hall</strong>
                                <div className="text-muted">HTML, JS, Laravel</div>
                            </td>
                            <td>
                                <div className="d-flex flex-column w-100">
                                    <span className="me-2 mb-1 text-muted">50%</span>
                                    <div className="progress progress-sm w-100">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{
                                                width: "50%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xl-table-cell text-end">
                                <Link className="btn btn-light" to="#">
                                    View
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="bg-body-tertiary rounded-2">
                                            <img alt="" className="p-2" src="assets/img/brands/brand-4.svg" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <strong>Project Edison</strong>
                                        <div className="text-muted">UI/UX Design</div>
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xxl-table-cell">
                                <strong>Monsource Investment Group</strong>
                                <div className="text-muted">Finance</div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                                <strong>Carl Jenkins</strong>
                                <div className="text-muted">HTML, JS, React</div>
                            </td>
                            <td>
                                <div className="d-flex flex-column w-100">
                                    <span className="me-2 mb-1 text-muted">80%</span>
                                    <div className="progress progress-sm w-100">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{
                                                width: "80%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xl-table-cell text-end">
                                <Link className="btn btn-light" to="#">
                                    View
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="bg-body-tertiary rounded-2">
                                            <img alt="" className="p-2" src="assets/img/brands/brand-5.svg" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <strong>Project Indigo</strong>
                                        <div className="text-muted">Web, UI/UX Design</div>
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xxl-table-cell">
                                <strong>Edwards</strong>
                                <div className="text-muted">Retail</div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                                <strong>Ashley Briggs</strong>
                                <div className="text-muted">HTML, JS, Vue</div>
                            </td>
                            <td>
                                <div className="d-flex flex-column w-100">
                                    <span className="me-2 mb-1 text-muted">78%</span>
                                    <div className="progress progress-sm w-100">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{
                                                width: "78%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="d-none d-xl-table-cell text-end">
                                <Link className="btn btn-light" to="#">
                                    View
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
}

export const DashboardAnalytics = () => {
 return <main className="content">
  <div className="container-fluid p-0">
    <div className="row mb-2 mb-xl-3">
      <div className="col-auto d-none d-sm-block">
        <h3>Analytics</h3>
      </div>
      <div className="col-auto ms-auto text-end mt-n1">
        <div className="dropdown me-2 d-inline-block position-relative">
          <Link
            className="btn btn-light bg-white shadow-sm dropdown-toggle"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            to="#">
            <i className="bi-calendar align-middle mt-n1"  /> Today
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <h6 className="dropdown-header">Settings</h6>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <button className="btn btn-primary shadow-sm me-2">
          <i className="bi-filter align-middle" ></i>
        </button>
        <button className="btn btn-primary shadow-sm">
          <i className="bi-arrow-clockwise align-middle" ></i>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-xl-5 d-flex">
        <div className="w-100">
          <div className="row">
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card illustration flex-fill">
                <div className="card-body p-0 d-flex flex-fill">
                  <div className="row g-0 w-100">
                    <div className="col-6">
                      <div className="illustration-text p-3 m-1">
                        <h4 className="illustration-text">
                          Welcome Back, Chris!
                        </h4>
                        <p className="mb-0">AppStack Dashboard</p>
                      </div>
                    </div>
                    <div className="col-6 align-self-end text-end">
                      <img
                        alt=""
                        className="img-fluid illustration-img"
                        src="assets/img/illustrations/searching.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Bounce</h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <i
                          className="bi-arrow-up-right align-middle"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">2.364</span>
                  <div className="mb-0">
                    <span className="badge badge-subtle-success me-2">
                      {" "}
                      +3.65%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-lg-none d-xxl-flex">
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Real-Time</h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <i className="bi-clock align-middle"  />
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">1.856</span>
                  <div className="mb-0">
                    <span className="badge badge-subtle-success me-2">
                      {" "}
                      +2.25%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Visitors</h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <i className="bi-person align-middle"  />
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">17.212</span>
                  <div className="mb-0">
                    <span className="badge badge-subtle-danger me-2">
                      {" "}
                      -1.25%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-7">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-more-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Real-Time</h5>
          </div>
          <div className="card-body p-2">
            <div
              id="world_map"
              style={{
                height: "279px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-more-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Languages</h5>
          </div>
          <table className="table table-striped my-0">
            <thead>
              <tr>
                <th>Language</th>
                <th className="text-end">Users</th>
                <th className="d-none d-xl-table-cell w-75">% Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>en-us</td>
                <td className="text-end">735</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="43"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "43%",
                      }}>
                      43%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>en-gb</td>
                <td className="text-end">223</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="27"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "27%",
                      }}>
                      27%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>fr-fr</td>
                <td className="text-end">181</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="22"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "22%",
                      }}>
                      22%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>es-es</td>
                <td className="text-end">132</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="16"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "16%",
                      }}>
                      16%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>de-de</td>
                <td className="text-end">118</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="15"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "15%",
                      }}>
                      15%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>ru-ru</td>
                <td className="text-end">98</td>
                <td className="d-none d-xl-table-cell">
                  <div className="progress">
                    <div
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="13"
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "13%",
                      }}>
                      13%
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-bi-distribute-horizontal align-middle" />
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
            <h5 className="card-title mb-0">Mobile / Desktop</h5>
          </div>
          <div className="card-body d-flex w-100">
            <div className="align-self-center chart">
              <canvas id="chartjs-dashboard-bar-devices" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Interests</h5>
          </div>
          <div className="card-body">
            <div className="chart">
              <canvas id="chartjs-dashboard-radar" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-5 col-xl-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Source / Medium</h5>
          </div>
          <div className="card-body d-flex">
            <div className="align-self-center w-100">
              <div className="py-3">
                <div className="chart chart-xs">
                  <canvas id="chartjs-dashboard-pie" />
                </div>
              </div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th className="text-end">Revenue</th>
                    <th className="text-end">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-square-full text-primary" /> Direct
                    </td>
                    <td className="text-end">$ 2602</td>
                    <td className="text-end text-success">+43%</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-square-full text-warning" />{" "}
                      Affiliate
                    </td>
                    <td className="text-end">$ 1253</td>
                    <td className="text-end text-success">+13%</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-square-full text-danger" /> E-mail
                    </td>
                    <td className="text-end">$ 541</td>
                    <td className="text-end text-success">+24%</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-square-full text-dark" /> Other
                    </td>
                    <td className="text-end">$ 1465</td>
                    <td className="text-end text-success">+11%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xl-8 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle" />
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
            <h5 className="card-title mb-0">Traffic</h5>
          </div>
          <table
            className="table table-striped my-0"
            id="datatables-dashboard-traffic">
            <thead>
              <tr>
                <th>Source</th>
                <th className="text-end">Users</th>
                <th className="d-none d-xl-table-cell text-end">Sessions</th>
                <th className="d-none d-xl-table-cell text-end">Bounce Rate</th>
                <th className="d-none d-xl-table-cell text-end">
                  Avg. Session Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td className="text-end">1023</td>
                <td className="d-none d-xl-table-cell text-end">1265</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  27.23%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:06:25</td>
              </tr>
              <tr>
                <td>Bing</td>
                <td className="text-end">504</td>
                <td className="d-none d-xl-table-cell text-end">623</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  66.76%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:04:42</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td className="text-end">462</td>
                <td className="d-none d-xl-table-cell text-end">571</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  31.53%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:08:05</td>
              </tr>
              <tr>
                <td>Pinterest</td>
                <td className="text-end">623</td>
                <td className="d-none d-xl-table-cell text-end">770</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  52.81%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:03:10</td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td className="text-end">812</td>
                <td className="d-none d-xl-table-cell text-end">1003</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  24.83%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:05:56</td>
              </tr>
              <tr>
                <td>DuckDuckGo</td>
                <td className="text-end">693</td>
                <td className="d-none d-xl-table-cell text-end">856</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  37.36%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:09:12</td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td className="text-end">713</td>
                <td className="d-none d-xl-table-cell text-end">881</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  38.09%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:06:19</td>
              </tr>
              <tr>
                <td>Direct</td>
                <td className="text-end">872</td>
                <td className="d-none d-xl-table-cell text-end">1077</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  32.70%
                </td>
                <td className="d-none d-xl-table-cell text-end">00:09:18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
}

export const DashboardSaas = () =>{
    return <main className="content">
  <div className="container-fluid p-0">
    <div className="row mb-2 mb-xl-3">
      <div className="col-auto d-none d-sm-block">
        <h3>SaaS</h3>
      </div>
      <div className="col-auto ms-auto text-end mt-n1">
        <div className="dropdown me-2 d-inline-block position-relative">
          <Link
            className="btn btn-light bg-white shadow-sm dropdown-toggle"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            to="#">
            <i className="bi-calendar align-middle mt-n1"  /> Today
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <h6 className="dropdown-header">Settings</h6>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <button className="btn btn-primary shadow-sm me-2">
          <i className="bi-filter align-middle" ></i>
        </button>
        <button className="btn btn-primary shadow-sm">
          <i className="bi-arrow-clockwise align-middle" ></i>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xxl-3 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">Income</h5>
              </div>
              <div className="col-auto">
                <div className="stat stat-sm">
                  <i className="bi-bag align-middle"  />
                </div>
              </div>
            </div>
            <span className="h1 d-inline-block mt-1 mb-3">$37.500</span>
            <div className="mb-0">
              <span className="badge badge-subtle-success me-2"> 6.25% </span>
              <span className="text-muted">Since last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">Orders</h5>
              </div>
              <div className="col-auto">
                <div className="stat stat-sm">
                  <i className="bi-cart align-middle"  />
                </div>
              </div>
            </div>
            <span className="h1 d-inline-block mt-1 mb-3">3.282</span>
            <div className="mb-0">
              <span className="badge badge-subtle-danger me-2"> -4.65% </span>
              <span className="text-muted">Since last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">Activity</h5>
              </div>
              <div className="col-auto">
                <div className="stat stat-sm">
                  <i className="bi-activity align-middle"  />
                </div>
              </div>
            </div>
            <span className="h1 d-inline-block mt-1 mb-3">19.312</span>
            <div className="mb-0">
              <span className="badge badge-subtle-success me-2"> 8.35% </span>
              <span className="text-muted">Since last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3 d-flex">
        <div className="card illustration flex-fill">
          <div className="card-body p-0 d-flex flex-fill">
            <div className="row g-0 w-100">
              <div className="col-6">
                <div className="illustration-text p-3 m-1">
                  <h4 className="illustration-text">Welcome Back, Chris!</h4>
                  <p className="mb-0">AppStack Dashboard</p>
                </div>
              </div>
              <div className="col-6 align-self-end text-end">
                <img
                  alt=""
                  className="img-fluid illustration-img"
                  src="assets/img/illustrations/social.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Sales by State</h5>
          </div>
          <div className="card-body px-4">
            <div
              id="usa_map"
              style={{
                height: "294px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-7 col-lg-4 col-xxl-6 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Sales / Revenue</h5>
          </div>
          <div className="card-body d-flex w-100">
            <div className="align-self-center chart">
              <canvas id="chartjs-dashboard-bar" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5 col-lg-4 col-xxl-2 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-distribute-horizontal align-middle" />
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
            <h5 className="card-title mb-0">Order Activity</h5>
          </div>
          <div className="card-body">
            <ul className="timeline m-3">
              <li className="timeline-item">
                <strong>Delivered</strong>
                <p className="text-sm">2 hours ago</p>
              </li>
              <li className="timeline-item">
                <strong>Pick Up</strong>
                <p className="text-sm">6 hours ago</p>
              </li>
              <li className="timeline-item">
                <strong>In Transit</strong>
                <p className="text-sm">1 days ago</p>
              </li>
              <li className="timeline-item">
                <strong>Dispatched</strong>
                <p className="text-sm">3 days ago</p>
              </li>
              <li className="timeline-item">
                <strong>Order Received</strong>
                <p className="text-sm">4 days ago</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="card flex-fill">
      <div className="card-header">
        <div className="card-actions float-end">
          <div className="dropdown position-relative">
            <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
              <i className="bi-distribute-horizontal align-middle"  />
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
        <h5 className="card-title mb-0">Top Selling Products</h5>
      </div>
      <table className="table table-borderless my-0">
        <thead>
          <tr>
            <th>Name</th>
            <th className="d-none d-xxl-table-cell">Company</th>
            <th className="d-none d-xl-table-cell">Assigned</th>
            <th className="d-none d-xl-table-cell text-end">Orders</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body-tertiary rounded-2">
                    <img alt="" className="p-2" src="assets/img/brands/brand-4.svg" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>Aurora</strong>
                  <div className="text-muted">UI Kit</div>
                </div>
              </div>
            </td>
            <td className="d-none d-xxl-table-cell">
              <strong>Gantos</strong>
              <div className="text-muted">Real Estate</div>
            </td>
            <td className="d-none d-xl-table-cell">
              <strong>Carl Jenkins</strong>
              <div className="text-muted">HTML, JS, React</div>
            </td>
            <td className="d-none d-xl-table-cell text-end">520</td>
            <td>
              <span className="badge bg-success">In progress</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body-tertiary rounded-2">
                    <img alt="" className="p-2" src="assets/img/brands/brand-1.svg" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>Bender</strong>
                  <div className="text-muted">Dashboard</div>
                </div>
              </div>
            </td>
            <td className="d-none d-xxl-table-cell">
              <strong>Adray Transportation</strong>
              <div className="text-muted">Transportation</div>
            </td>
            <td className="d-none d-xl-table-cell">
              <strong>Bertha Martin</strong>
              <div className="text-muted">HTML, JS, Vue</div>
            </td>
            <td className="d-none d-xl-table-cell text-end">240</td>
            <td>
              <span className="badge bg-warning">Paused</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body-tertiary rounded-2">
                    <img alt="" className="p-2" src="assets/img/brands/brand-5.svg" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>Camelot</strong>
                  <div className="text-muted">Dashboard</div>
                </div>
              </div>
            </td>
            <td className="d-none d-xxl-table-cell">
              <strong>Evans</strong>
              <div className="text-muted">Insurance</div>
            </td>
            <td className="d-none d-xl-table-cell">
              <strong>Stacie Hall</strong>
              <div className="text-muted">HTML, JS, Laravel</div>
            </td>
            <td className="d-none d-xl-table-cell text-end">180</td>
            <td>
              <span className="badge bg-success">In progress</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body-tertiary rounded-2">
                    <img alt="" className="p-2" src="assets/img/brands/brand-2.svg" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>Edison</strong>
                  <div className="text-muted">UI Kit</div>
                </div>
              </div>
            </td>
            <td className="d-none d-xxl-table-cell">
              <strong>Monsource Investment Group</strong>
              <div className="text-muted">Finance</div>
            </td>
            <td className="d-none d-xl-table-cell">
              <strong>Carl Jenkins</strong>
              <div className="text-muted">HTML, JS, React</div>
            </td>
            <td className="d-none d-xl-table-cell text-end">410</td>
            <td>
              <span className="badge bg-danger">Cancelled</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body-tertiary rounded-2">
                    <img alt="" className="p-2" src="assets/img/brands/brand-3.svg" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>Fusion</strong>
                  <div className="text-muted">Dashboard</div>
                </div>
              </div>
            </td>
            <td className="d-none d-xxl-table-cell">
              <strong>Edwards</strong>
              <div className="text-muted">Retail</div>
            </td>
            <td className="d-none d-xl-table-cell">
              <strong>Ashley Briggs</strong>
              <div className="text-muted">HTML, JS, Vue</div>
            </td>
            <td className="d-none d-xl-table-cell text-end">250</td>
            <td>
              <span className="badge bg-warning">Paused</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>
}
export const DashboardSocial = () =>{
    return <main className="content">
  <div className="container-fluid p-0">
    <div className="container p-0">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body h-100">
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
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus.
                  </p>
                  <div className="row g-0 mt-1">
                    <div className="col-6">
                      <img
                        alt="Unsplash"
                        className="img-fluid pe-1"
                        src="assets/img/photos/unsplash-2.jpg"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        alt="Unsplash"
                        className="img-fluid ps-1"
                        src="assets/img/photos/unsplash-3.jpg"
                      />
                    </div>
                  </div>
                  <small className="text-muted">Today 7:51 pm</small>
                  <br />
                  <Link className="btn btn-sm btn-danger mt-1" to="#">
                    <i className="bi-heart lucide-sm"  /> Like
                  </Link>
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
                        <strong>Stacie Hall</strong>: Nam pretium turpis et
                        arcu. Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
                        Integer ante arcu, accumsan a, consectetuer eget,
                        posuere ut, mauris.
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
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                  <small className="text-muted">Today 7:21 pm</small>
                  <br />
                  <Link className="btn btn-sm btn-danger mt-1" to="#">
                    <i className="bi-heart lucide-sm"  /> Like
                  </Link>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Carl Jenkins"
                  className="rounded-circle me-3"
                  height="56"
                  src="assets/img/avatars/avatar-2.jpg"
                  width="56"
                />
                <div className="flex-grow-1">
                  <small className="float-end">3h ago</small>
                  <p className="mb-2">
                    <strong>Carl Jenkins</strong>
                  </p>
                  <img
                    alt="Unsplash"
                    className="img-fluid"
                    src="assets/img/photos/unsplash-1.jpg"
                  />
                  <small className="text-muted">Today 5:12 pm</small>
                  <br />
                  <Link className="btn btn-sm btn-danger mt-1" to="#">
                    <i className="bi-heart lucide-sm" /> Like
                  </Link>
                  <div className="d-flex align-items-start mt-3">
                    <Link className="pe-2" to="#">
                      <img
                        alt=""
                        className="rounded-circle me-2"
                        height="36"
                        src="assets/img/avatars/avatar-4.jpg"
                        width="36"
                      />
                    </Link>
                    <div className="flex-grow-1">
                      <p className="text-muted">
                        <strong>Stacie Hall</strong>: Nam pretium turpis et
                        arcu. Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
                        Integer ante arcu, accumsan a, consectetuer eget,
                        posuere ut, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Ashley Briggs"
                  className="rounded-circle me-3"
                  height="56"
                  src="assets/img/avatars/avatar-5.jpg"
                  width="56"
                />
                <div className="flex-grow-1">
                  <small className="float-end">4h ago</small>
                  <p className="mb-2">
                    <strong>Ashley Briggs</strong>
                  </p>
                  <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                  <small className="text-muted">Today 4:21 pm</small>
                  <br />
                  <Link className="btn btn-sm btn-danger mt-1" to="#">
                    <i className="bi-heart lucide-sm" /> Like
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <img
                alt="Chris Wood"
                className="img-fluid rounded-circle mb-2"
                height="128"
                src="assets/img/avatars/avatar.jpg"
                width="128"
              />
              <h4 className="card-title mb-0">Chris Wood</h4>
              <div className="text-muted mb-2">UX Engineer</div>
              <div>
                <Link className="btn btn-primary btn-sm" to="#">
                  Follow
                </Link>
                <Link className="btn btn-primary btn-sm" to="#">
                  <span/> Message
                </Link>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <div className="card-actions float-end">
                <div className="dropdown position-relative">
                  <Link
                    data-bs-display="static"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="bi-distribute-horizontal align-middle"  />
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
              <h5 className="card-title mb-0">Following</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img
                  alt="Chris Wood"
                  className="rounded-circle me-2"
                  height="56"
                  src="assets/img/avatars/avatar-5.jpg"
                  width="56"
                />
                <div className="flex-grow-1">
                  <p className="my-1">
                    <strong>Ashley Briggs</strong>
                  </p>
                  <Link className="btn btn-sm btn-outline-primary" to="#">
                    Unfollow
                  </Link>
                </div>
              </div>
              <hr className="my-2" />
              <div className="d-flex align-items-start">
                <img
                  alt="Carl Jenkins"
                  className="rounded-circle me-2"
                  height="56"
                  src="assets/img/avatars/avatar-2.jpg"
                  width="56"
                />
                <div className="flex-grow-1">
                  <p className="my-1">
                    <strong>Carl Jenkins</strong>
                  </p>
                  <Link className="btn btn-sm btn-outline-primary" to="#">
                    Unfollow
                  </Link>
                </div>
              </div>
              <hr className="my-2" />
              <div className="d-flex align-items-start">
                <img
                  alt="Stacie Hall"
                  className="rounded-circle me-2"
                  height="56"
                  src="assets/img/avatars/avatar-4.jpg"
                  width="56"
                />
                <div className="flex-grow-1">
                  <p className="my-1">
                    <strong>Stacie Hall</strong>
                  </p>
                  <Link className="btn btn-sm btn-outline-primary" to="#">
                    Unfollow
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-actions float-end">
                <div className="dropdown position-relative">
                  <Link
                    data-bs-display="static"
                    data-bs-toggle="dropdown"
                    to="#">
                    <i className="bi-distribute-horizontal align-middle"  />
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
              <h5 className="card-title mb-0">Activities</h5>
            </div>
            <div className="card-body h-100">
              <div className="d-flex align-items-start">
                <img
                  alt="Ashley Briggs"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar-5.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">5m ago</small>
                  <strong>Ashley Briggs</strong> started following{" "}
                  <strong>Stacie Hall</strong>
                  <br />
                  <small className="text-muted">Today 7:51 pm</small>
                  <br />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Chris Wood"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">30m ago</small>
                  <strong>Chris Wood</strong> posted something on{" "}
                  <strong>Stacie Hall</strong>
                  's timeline
                  <br />
                  <small className="text-muted">Today 7:21 pm</small>
                  <div className="border text-sm text-muted p-2 mt-1">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam..
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Stacie Hall"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar-4.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">1h ago</small>
                  <strong>Stacie Hall</strong> posted a new blog
                  <br />
                  <small className="text-muted">Today 6:35 pm</small>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Carl Jenkins"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar-2.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">3h ago</small>
                  <strong>Carl Jenkins</strong> posted two photos on{" "}
                  <strong>Stacie Hall</strong>
                  's timeline
                  <br />
                  <small className="text-muted">Today 5:12 pm</small>
                  <div className="row g-0 mt-1">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        alt="Unsplash"
                        className="img-fluid pe-2"
                        src="assets/img/photos/unsplash-1.jpg"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        alt="Unsplash"
                        className="img-fluid pe-2"
                        src="assets/img/photos/unsplash-2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Stacie Hall"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar-4.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">1d ago</small>
                  <strong>Stacie Hall</strong> posted a new blog
                  <br />
                  <small className="text-muted">Yesterday 2:43 pm</small>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  alt="Chris Wood"
                  className="rounded-circle me-2"
                  height="36"
                  src="assets/img/avatars/avatar.jpg"
                  width="36"
                />
                <div className="flex-grow-1">
                  <small className="float-end">1d ago</small>
                  <strong>Chris Wood</strong> started following{" "}
                  <strong>Stacie Hall</strong>
                  <br />
                  <small className="text-muted">Yesterdag 1:51 pm</small>
                </div>
              </div>
              <hr />
              <div className="d-grid">
                <Link className="btn btn-primary" to="#">
                  Load more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
}

export const DashboardCrypto = () =>{
    return <main className="content">
  <div className="container-fluid p-0">
    <div className="row mb-2 mb-xl-3">
      <div className="col-auto d-none d-sm-block">
        <h3>Crypto</h3>
      </div>
      <div className="col-auto ms-auto text-end mt-n1">
        <div className="dropdown me-2 d-inline-block position-relative">
          <Link
            className="btn btn-light bg-white shadow-sm dropdown-toggle"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            to="#">
            <i className="bi-calendar align-middle mt-n1"  /> Today
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <h6 className="dropdown-header">Settings</h6>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <button className="btn btn-primary shadow-sm me-2">
          <i className="bi-filter align-middle" ></i>
        </button>
        <button className="btn btn-primary shadow-sm">
          <i className="bi-arrow-clockwise align-middle" ></i>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">Total balance</h5>
              </div>
              <div className="col-auto">
                <div className="stat stat-sm" style={{}}>
                  <i className="bi-device-ssd fa-dollar-sign align-middle" />
                </div>
              </div>
            </div>
            <h4 className="mt-0 mb-1">
              $53,252 <span className="text-muted">2.30 BTC</span>
            </h4>
            <div className="mb-0">
              <span className="badge badge-subtle-success">+6.15%</span>
              <span className="text-muted">Since last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">USD/BTC</h5>
              </div>
              <div className="col-auto">
                <div
                  className="stat stat-sm"
                  style={{
                    background: "#F7931A",
                    color: "white",
                  }}>
                  <i className="bi-device-ssd fa-bitcoin-sign align-middle" />
                </div>
              </div>
            </div>
            <h4 className="mt-0 mb-1">
              $23.077,05 <span className="text-muted">€22.617,47</span>
            </h4>
            <div className="mb-0">
              <span className="text-muted">Volume: 132,691 BTC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">LTC/BTC</h5>
              </div>
              <div className="col-auto">
                <div
                  className="stat stat-sm"
                  style={{
                    background: "#345D9D",
                    color: "white",
                  }}>
                  <i className="fa-solid fa-litecoin-sign align-middle" />
                </div>
              </div>
            </div>
            <h4 className="mt-0 mb-1">
              0.00256 <span className="text-muted">$59.02</span>
            </h4>
            <div className="mb-0">
              <span className="text-muted">Volume: 31,268 BTC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">ETH/BTC</h5>
              </div>
              <div className="col-auto">
                <div
                  className="stat stat-sm"
                  style={{
                    background: "#627EEA",
                    color: "white",
                  }}>
                  <i className="fa-brands fa-ethereum align-middle" />
                </div>
              </div>
            </div>
            <h4 className="mt-0 mb-1">
              0.07334 <span className="text-muted">$1,691.76</span>
            </h4>
            <div className="mb-0">
              <span className="text-muted">Volume: 32,982 BTC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xxl d-flex d-none d-xxl-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row">
              <div className="col mt-0">
                <h5 className="card-title">XMR/BTC</h5>
              </div>
              <div className="col-auto">
                <div
                  className="stat stat-sm"
                  style={{
                    background: "#FF6600",
                    color: "white",
                  }}>
                  <i className="fa-brands fa-monero align-middle" />
                </div>
              </div>
            </div>
            <h4 className="mt-0 mb-1">
              0.006854 <span className="text-muted">$157.68</span>
            </h4>
            <div className="mb-0">
              <span className="text-muted">Volume: 28,567 BTC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-5 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i className="bi-more-horizontal align-middle"  />
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
            <h5 className="card-title mb-0">Markets</h5>
          </div>
          <table className="table table-sm table-striped my-0">
            <thead>
              <tr>
                <th>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </th>
                <th>Coin</th>
                <th>Price</th>
                <th className="d-none d-xl-table-cell">Volume</th>
                <th className="d-none d-xl-table-cell">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </td>
                <td>ETH</td>
                <td className="text-end">0.02309756</td>
                <td className="d-none d-xl-table-cell text-end">427.563</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +1.91
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </td>
                <td>XRP</td>
                <td className="text-end">0.00002205</td>
                <td className="d-none d-xl-table-cell text-end">132.691</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +0.64
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </td>
                <td>ETC</td>
                <td className="text-end">0.00077779</td>
                <td className="d-none d-xl-table-cell text-end">32.982</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -6.71
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </td>
                <td>LTC</td>
                <td className="text-end">0.00485685</td>
                <td className="d-none d-xl-table-cell text-end">31.268</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +1.88
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-star fa-sm cursor-pointer text-warning" />
                </td>
                <td>XMR</td>
                <td className="text-end">0.00700518</td>
                <td className="d-none d-xl-table-cell text-end">28.567</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -1.26
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>BSC</td>
                <td className="text-end">0.02105473</td>
                <td className="d-none d-xl-table-cell text-end">25.960</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +0.10
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>ABC</td>
                <td className="text-end">0.02613303</td>
                <td className="d-none d-xl-table-cell text-end">21.597</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  -3.20
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>TRX</td>
                <td className="text-end">0.00000165</td>
                <td className="d-none d-xl-table-cell text-end">14.106</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -0.61
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>SC</td>
                <td className="text-end">0.00000026</td>
                <td className="d-none d-xl-table-cell text-end">9.531</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +13.04
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>OMG</td>
                <td className="text-end">0.00019483</td>
                <td className="d-none d-xl-table-cell text-end">8.820</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +3.67
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>CHR</td>
                <td className="text-end">0.00000223</td>
                <td className="d-none d-xl-table-cell text-end">7.428</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -4.21
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>AVA</td>
                <td className="text-end">0.00003667</td>
                <td className="d-none d-xl-table-cell text-end">6.863</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +13.60
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>DASH</td>
                <td className="text-end">0.00825500</td>
                <td className="d-none d-xl-table-cell text-end">6.693</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -1.51
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>LINK</td>
                <td className="text-end">0.00043873</td>
                <td className="d-none d-xl-table-cell text-end">6.290</td>
                <td className="d-none d-xl-table-cell text-end text-success">
                  +2.44
                </td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-star fa-sm cursor-pointer" />
                </td>
                <td>EOS</td>
                <td className="text-end">0.00028505</td>
                <td className="d-none d-xl-table-cell text-end">6.144</td>
                <td className="d-none d-xl-table-cell text-end text-danger">
                  -1.62
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xxl-8 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <input
                autoComplete="off"
                className="btn-check"
                id="1m"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="1m">
                1m
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                defaultChecked
                id="5m"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-primary" htmlFor="5m">
                5m
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                id="30m"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="30m">
                30m
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                id="1h"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="1h">
                1h
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                id="1d"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="1d">
                1d
              </label>
            </div>
            <h5 className="card-title mb-0">LTC/BTC</h5>
          </div>
          <div className="card-body">
            <div className="chart w-100">
              <div id="apexcharts-dashboard-candlestick" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-3 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <input
                autoComplete="off"
                className="btn-check"
                defaultChecked
                id="buy"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-primary" htmlFor="buy">
                Buy
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                id="sell"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="sell">
                Sell
              </label>
              <input
                autoComplete="off"
                className="btn-check"
                id="send"
                name="btnradio"
                type="radio"
              />
              <label className="btn btn-sm btn-light" htmlFor="send">
                Send
              </label>
            </div>
            <h5 className="card-title mb-0">Operations</h5>
          </div>
          <div className="card-body">
            <p>Place new order:</p>
            <div className="input-group mb-3">
              <label className="input-group-text">Amount</label>
              <select
                className="form-select"
                style={{
                  maxWidth: "88px",
                }}>
                <option  value="BTC">
                  BTC
                </option>
                <option value="ETH">ETH</option>
                <option value="LTC">LTC</option>
                <option value="XMR">XMR</option>
              </select>
              <input className="form-control"  type="text" />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text">Price</label>
              <input
                className="form-control"
               
                readOnly
                type="text"
              />
              <label className="input-group-text">$</label>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text">Total</label>
              <input
                className="form-control"
                
                readOnly
                type="text"
              />
              <label className="input-group-text">$</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary mb-3" type="button">
                Process to wallet
              </button>
            </div>
            <p className="text-muted mb-0">
              The final amount could change depending on current market
              conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <button className="btn btn-sm btn-light">View all</button>
            </div>
            <h5 className="card-title mb-0">Sell Orders</h5>
          </div>
          <table className="table table-sm table-striped my-0">
            <thead>
              <tr>
                <th>Price</th>
                <th className="d-none d-xl-table-cell">BTC</th>
                <th>Sum(BTC)</th>
              </tr>
            </thead>
            <tbody className="text-end">
              <tr>
                <td>0.03892501</td>
                <td className="d-none d-xl-table-cell">1.24864875</td>
                <td>1.26329659</td>
              </tr>
              <tr>
                <td>0.03893754</td>
                <td className="d-none d-xl-table-cell">0.19373225</td>
                <td>1.45702884</td>
              </tr>
              <tr>
                <td>0.03895189</td>
                <td className="d-none d-xl-table-cell">0.00011222</td>
                <td>1.45714106</td>
              </tr>
              <tr>
                <td>0.03896593</td>
                <td className="d-none d-xl-table-cell">0.05366476</td>
                <td>1.51080582</td>
              </tr>
              <tr>
                <td>0.03897932</td>
                <td className="d-none d-xl-table-cell">0.30856527</td>
                <td>1.81937109</td>
              </tr>
              <tr>
                <td>0.03897933</td>
                <td className="d-none d-xl-table-cell">0.01276398</td>
                <td>1.83213507</td>
              </tr>
              <tr>
                <td>0.03899180</td>
                <td className="d-none d-xl-table-cell">0.00029556</td>
                <td>1.83243063</td>
              </tr>
              <tr>
                <td>0.03899784</td>
                <td className="d-none d-xl-table-cell">0.08005194</td>
                <td>1.91248257</td>
              </tr>
              <tr>
                <td>0.03899998</td>
                <td className="d-none d-xl-table-cell">0.10106578</td>
                <td>2.01354835</td>
              </tr>
              <tr>
                <td>0.03899999</td>
                <td className="d-none d-xl-table-cell">0.11699997</td>
                <td>2.13054832</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xxl d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <button className="btn btn-sm btn-light">View all</button>
            </div>
            <h5 className="card-title mb-0">Buy Orders</h5>
          </div>
          <table className="table table-sm table-striped my-0">
            <thead>
              <tr>
                <th>Price</th>
                <th className="d-none d-xl-table-cell">BTC</th>
                <th>Sum(BTC)</th>
              </tr>
            </thead>
            <tbody className="text-end">
              <tr>
                <td>0.03892000</td>
                <td className="d-none d-xl-table-cell">0.00873616</td>
                <td>0.00873616</td>
              </tr>
              <tr>
                <td>0.03890500</td>
                <td className="d-none d-xl-table-cell">2.58305468</td>
                <td>2.59179084</td>
              </tr>
              <tr>
                <td>0.03890132</td>
                <td className="d-none d-xl-table-cell">2.19999989</td>
                <td>4.79179073</td>
              </tr>
              <tr>
                <td>0.03890053</td>
                <td className="d-none d-xl-table-cell">0.00322305</td>
                <td>4.79501378</td>
              </tr>
              <tr>
                <td>0.03889706</td>
                <td className="d-none d-xl-table-cell">0.60738409</td>
                <td>5.40239787</td>
              </tr>
              <tr>
                <td>0.03888117</td>
                <td className="d-none d-xl-table-cell">0.49926179</td>
                <td>5.90165966</td>
              </tr>
              <tr>
                <td>0.03885500</td>
                <td className="d-none d-xl-table-cell">0.03877729</td>
                <td>5.94043695</td>
              </tr>
              <tr>
                <td>0.03884325</td>
                <td className="d-none d-xl-table-cell">0.00798318</td>
                <td>5.94842013</td>
              </tr>
              <tr>
                <td>0.03883474</td>
                <td className="d-none d-xl-table-cell">0.29455407</td>
                <td>6.24297420</td>
              </tr>
              <tr>
                <td>0.03881616</td>
                <td className="d-none d-xl-table-cell">0.00970404</td>
                <td>6.25267824</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
}