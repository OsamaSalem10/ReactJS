import { Link } from "react-router-dom"
export const TasksList = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Task List</h1>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h2 className="card-title">Upcoming</h2>
                            </div>
                            <div className="col-6">
                                <div className="text-sm-end">
                                    <button
                                        className="btn btn-primary"
                                        data-bs-target="#taskModal"
                                        data-bs-toggle="modal"
                                        type="button">
                                        <i className="bi-plus" /> New Task
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="table w-100">
                            <thead>
                                <tr>
                                    <th className="align-middle w-25px">
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input
                                                className="form-check-input tasks-check-all"
                                                id="tasks-check-all"
                                                type="checkbox"
                                            />{" "}
                                            <label
                                                className="form-check-label"
                                                htmlFor="tasks-check-all"
                                            />{" "}
                                        </div>
                                    </th>
                                    <th className="align-middle w-50">Name</th>
                                    <th className="align-middle d-none d-xl-table-cell">
                                        Assigned To
                                    </th>
                                    <th className="align-middle d-none d-xxl-table-cell">Due Date</th>
                                    <th >Priority</th>
                                    <th className="align-middle text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Improve email marketing strategy</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Ashley Briggs"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-5.jpg"
                                            width="32"
                                        />{" "}
                                        Ashley Briggs
                                    </td>
                                    <td className="d-none d-xxl-table-cell">August 1, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-warning">Medium</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Develop new product video</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Carl Jenkins"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-2.jpg"
                                            width="32"
                                        />{" "}
                                        Carl Jenkins
                                    </td>
                                    <td className="d-none d-xxl-table-cell">July 15, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-danger">High</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Conduct user interviews for new feature</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Bertha Martin"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="32"
                                        />{" "}
                                        Bertha Martin
                                    </td>
                                    <td className="d-none d-xxl-table-cell">June 20, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-success">Low</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h2 className="card-title">In Progress</h2>
                            </div>
                            <div className="col-6">
                                <div className="text-sm-end">
                                    <button
                                        className="btn btn-primary"
                                        data-bs-target="#taskModal"
                                        data-bs-toggle="modal"
                                        type="button">
                                        <i className="bi-plus" /> New Task
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="table w-100">
                            <thead>
                                <tr>
                                    <th className="align-middle w-25px">
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input
                                                className="form-check-input tasks-check-all"
                                                id="tasks-check-all"
                                                type="checkbox"
                                            />{" "}
                                            <label
                                                className="form-check-label"
                                                htmlFor="tasks-check-all"
                                            />{" "}
                                        </div>
                                    </th>
                                    <th className="align-middle w-50">Name</th>
                                    <th className="align-middle d-none d-xl-table-cell">
                                        Assigned To
                                    </th>
                                    <th className="align-middle d-none d-xxl-table-cell">Due Date</th>
                                    <th >Priority</th>
                                    <th className="align-middle text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Implement new analytics tracking</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Carl Jenkins"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-2.jpg"
                                            width="32"
                                        />{" "}
                                        Carl Jenkins
                                    </td>
                                    <td className="d-none d-xxl-table-cell">July 1, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-success">Low</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Design new marketing campaign</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Bertha Martin"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="32"
                                        />{" "}
                                        Bertha Martin
                                    </td>
                                    <td className="d-none d-xxl-table-cell">August 15, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-danger">High</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Conduct A/B testing on landing page</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Ashley Briggs"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-5.jpg"
                                            width="32"
                                        />{" "}
                                        Ashley Briggs
                                    </td>
                                    <td className="d-none d-xxl-table-cell">June 30, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-success">Low</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h2 className="card-title">Completed</h2>
                            </div>
                            <div className="col-6">
                                <div className="text-sm-end">
                                    <button
                                        className="btn btn-primary"
                                        data-bs-target="#taskModal"
                                        data-bs-toggle="modal"
                                        type="button">
                                        <i className="bi-plus" /> New Task
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-responsive w-100">
                            <thead>
                                <tr>
                                    <th className="align-middle w-25px">
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input
                                                className="form-check-input tasks-check-all"
                                                id="tasks-check-all"
                                                type="checkbox"
                                            />{" "}
                                            <label
                                                className="form-check-label"
                                                htmlFor="tasks-check-all"
                                            />{" "}
                                        </div>
                                    </th>
                                    <th className="align-middle w-50">Name</th>
                                    <th className="align-middle d-none d-xl-table-cell">
                                        Assigned To
                                    </th>
                                    <th className="align-middle d-none d-xxl-table-cell">Due Date</th>
                                    <th >Priority</th>
                                    <th className="align-middle text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Optimize website performance</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Bertha Martin"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-3.jpg"
                                            width="32"
                                        />{" "}
                                        Bertha Martin
                                    </td>
                                    <td className="d-none d-xxl-table-cell">June 15, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-success">Low</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Develop mobile app prototype</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Ashley Briggs"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-5.jpg"
                                            width="32"
                                        />{" "}
                                        Ashley Briggs
                                    </td>
                                    <td className="d-none d-xxl-table-cell">August 10, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-warning">Medium</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check fs-4">
                                            {" "}
                                            <input className="form-check-input" type="checkbox" />{" "}
                                            <label className="form-check-label" />{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Conduct user research interviews</strong>
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            alt="Ashley Briggs"
                                            className="rounded-circle me-1"
                                            height="32"
                                            src="assets/img/avatars/avatar-5.jpg"
                                            width="32"
                                        />{" "}
                                        Ashley Briggs
                                    </td>
                                    <td className="d-none d-xxl-table-cell">July 20, 2023</td>
                                    <td>
                                        <span className="badge badge-subtle-success">Low</span>
                                    </td>
                                    <td className="text-end">
                                        {" "}
                                        <button className="btn btn-light" type="button">
                                            View
                                        </button>{" "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="modal fade"
                    id="taskModal"
                    role="dialog"
                    tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add task</h5>
                                <button
                                    aria-label="Close"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>
                            <div className="modal-body mx-3">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Name" type="text" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Assigned To</label>
                                    <select className="form-select">
                                        <option selected value="1">
                                            Ashley Briggs
                                        </option>
                                        <option value="2">Stacie Hall</option>
                                        <option value="3">Bertha Martin</option>
                                        <option value="4">Carl Jenkins</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Priority</label>
                                    <select className="form-select">
                                        <option selected value="low">
                                            Low
                                        </option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <div id="quill-editor" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-light" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="bi-save" /> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export const TasksKanban = () => {
    return (
      <main className="content">
  <div className="container-fluid p-0">
    <Link className="btn btn-primary float-end mt-n1" to="#">
      <i className="bi-plus" /> New Task
    </Link>
    <h1 className="h3 mb-3">Kanban Board</h1>
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="card">
          <div className="card-header pb-0">
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
            <h5 className="card-title">Upcoming</h5>
          </div>
          <div className="card-body">
            <div
              id="tasks-upcoming"
              style={{
                minHeight: "180px",
              }}>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          className="bi-more-horizontal align-middle"
                       
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-danger">High</span>
                  </div>
                  <h5 className="card-title">Resolve billing issues</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    In hac habitasse platea dictumst. Curabitur at lacus ac
                    velit ornare lobortis. Curabitur a felis tristique…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Support</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>8</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          className="bi-more-horizontal align-middle"
                         
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Brand logo design</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Design</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>12</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-primary">Medium</span>
                  </div>
                  <h5 className="card-title">New landing page</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                    imperdiet nec, imperdiet iaculis, ipsum…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Copywriting</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>7</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Auth flow bugfix</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc, eu sollicitudin urna dolor sagittis…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Development</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>3</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid">
              <Link
                className="btn btn-primary btn-lg"
                data-bs-target="#taskModal"
                data-bs-toggle="modal"
                to="#">
                <i className="bi-plus" /> Add new task
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="card">
          <div className="card-header pb-0">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i  className="bi-more-horizontal" />
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
            <h5 className="card-title">In Progress</h5>
          </div>
          <div className="card-body">
            <div
              id="tasks-progress"
              style={{
                minHeight: "180px",
              }}>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Auth flow bugfix</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc, eu sollicitudin urna dolor sagittis…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Development</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>3</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Brand logo design</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Design</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>12</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-primary">Medium</span>
                  </div>
                  <h5 className="card-title">New landing page</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                    imperdiet nec, imperdiet iaculis, ipsum…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Copywriting</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>7</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid">
              <Link
                className="btn btn-primary btn-lg"
                data-bs-target="#taskModal"
                data-bs-toggle="modal"
                to="#">
                <i className="bi-plus" /> Add new task
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="card">
          <div className="card-header pb-0">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <Link data-bs-display="static" data-bs-toggle="dropdown" to="#">
                  <i  className="bi-more-horizontal" />
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
            <h5 className="card-title">Completed</h5>
          </div>
          <div className="card-body">
            <div
              id="tasks-completed"
              style={{
                minHeight: "180px",
              }}>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-primary">Medium</span>
                  </div>
                  <h5 className="card-title">New landing page</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                    imperdiet nec, imperdiet iaculis, ipsum…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Copywriting</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>7</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-2.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-danger">High</span>
                  </div>
                  <h5 className="card-title">Resolve billing issues</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    In hac habitasse platea dictumst. Curabitur at lacus ac
                    velit ornare lobortis. Curabitur a felis tristique…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i className="bi-folder align-middle"  />
                      <span >Support</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>8</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Auth flow bugfix</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc, eu sollicitudin urna dolor sagittis…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i className="bi-folder align-middle"  />
                      <span >Development</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>3</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar-3.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-3 cursor-grab border">
                <div className="card-header pb-0 px-3 pt-3">
                  <div className="card-actions float-end fs-5">
                    <div className="dropdown position-relative">
                      <Link
                        className="outline-0"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        to="#">
                        <i
                          
                          className="bi-more-vertical"
                        />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          View
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-end">
                    <span className="badge badge-subtle-success">Low</span>
                  </div>
                  <h5 className="card-title">Brand logo design</h5>
                </div>
                <div className="card-body p-3">
                  <p className="text-muted">
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada…
                  </p>
                  <p className="mb-0 float-end text-sm">
                    <span className="d-inline-block pe-2">
                      <i  className="bi-folder" />
                      <span >Design</span>
                    </span>
                    <span className="d-inline-block">
                      <i
                        
                        className="bi-message-square-more"
                      />
                      <span >
                        <strong>12</strong> Comments
                      </span>
                    </span>
                  </p>
                  <div className="mt-n1">
                    <img
                      alt="Avatar"
                      className="rounded-circle"
                      height="32"
                      src="assets/img/avatars/avatar.jpg"
                      width="32"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid">
              <Link
                className="btn btn-primary btn-lg"
                data-bs-target="#taskModal"
                data-bs-toggle="modal"
                to="#">
                <i className="bi-plus" /> Add new task
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      className="modal fade"
      id="taskModal"
      role="dialog"
      tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add task</h5>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body mx-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Name" type="text" />
            </div>
            <div className="mb-3">
              <label className="form-label">Assigned To</label>
              <select className="form-select">
                <option selected value="1">
                  Ashley Briggs
                </option>
                <option value="2">Stacie Hall</option>
                <option value="3">Bertha Martin</option>
                <option value="4">Carl Jenkins</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Priority</label>
              <select className="form-select">
                <option selected value="low">
                  Low
                </option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <div id="quill-editor" />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-light" data-bs-dismiss="modal">
              Cancel
            </button>
            <button className="btn btn-primary" data-bs-dismiss="modal">
              <i className="bi-save" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}