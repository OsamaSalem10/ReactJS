import { Link } from "react-router-dom"
export const FileManager = () =>{
    return <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">File Manager</h1>
    <div className="row">
      <div className="col-sm-5 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="d-grid mb-3">
              <button className="btn btn-primary btn-lg">
                <i className=" bi-box-arrow-in-down"  /> Upload File
              </button>
            </div>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-box-arrow-in-down me-2"  />
                  My Files
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-folder me-2"  />
                  My Drive
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-laptop me-2"  />
                  Computer
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-share me-2" />
                  Shared with me
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-clock me-2"  />
                  Recent
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-star me-2" />
                  Starred
                </Link>
              </li>
            </ul>
            <ul className="list-group list-group-flush mb-5">
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-inbox me-2"  />
                  Spam
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-archive me-2"  />
                  Archive
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-trash me-2"  />
                  Bin
                </Link>
              </li>
              <li className="list-group-item px-2">
                <Link className="text-reset" to="#">
                  <i className="bi bi-database me-2"  />
                  Storage
                </Link>
              </li>
            </ul>
            <h6 className="text-uppercase">Storage</h6>
            <div className="progress progress-sm mb-2">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                ariavaluenow="73"
                className="progress-bar progress-lg bg-danger"
                role="progressbar"
                style={{
                  width: "73%",
                }}
              />
            </div>
            <p className="text-muted font-12 mb-0">
              72.6 GB (73%) of 100 GB used
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-7 col-xl-9">
        <div className="card">
          <div className="card-header pb-0">
            <div className="float-end fs-5 mt-2">
              <div className="dropdown position-relative">
                <Link
                  className="outline-0 text-reset"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  to="#">
                  <i className="bi bi-three-dots align-middle"  />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    Share
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Organise
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <h5 className="card-title mt-2">My Files</h5>
          </div>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-file-earmark-easel-fill align-middle fs-1 mb-3 text-warning"

                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Design
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          12 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">8GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-code align-middle fs-1 mb-3 text-success"
                     
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Development
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          108 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">12GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-hexagon align-middle fs-1 mb-3 text-primary"
                     
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Branding
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          34 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">2GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-app align-middle fs-1 mb-3 text-danger"
                   
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Applications
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">8 Files</p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">26GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-bank align-middle fs-1 mb-3 text-info"
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Finance
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          50 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">9GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-translate align-middle fs-1 mb-3 text-primary"
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Translations
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          40 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">2GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-luggage align-middle fs-1 mb-3 text-success"
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Travel
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          60 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">5GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-3">
                <div className="card shadow-none border">
                  <div className="card-body p-3">
                    <div className="float-end">
                      <div className="dropdown position-relative">
                        <Link
                          className="outline-0 text-reset"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          to="#">
                          <i
                            className="bi bi-three-dots   align-middle"
                           
                          />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#">
                            Open
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
                    <i
                      className="bi bi-archive align-middle fs-1 mb-3 text-secondary"
                    />
                    <div className="d-flex w-100">
                      <div className="overflow-hidden me-auto">
                        <h5 className="mb-1">
                          <Link className="text-body text-truncate" to="#">
                            Backups
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          320 Files
                        </p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">16GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header pb-0">
            <div className="row">
              <div className="col-md-7">
                <h5 className="card-title mt-2">Recent Files</h5>
              </div>
              <div className="col-md-5 mb-md-0">
                <div className="input-group input-group-search">
                  <input
                    className="form-control"
                    placeholder="Search files…"
                    type="text"
                  />
                  <button className="btn" type="button">
                    <i className="bi bi-search align-middle"  />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th className="w-50">Name</th>
                  <th>Date Modified</th>
                  <th>Size</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-file-code me-2" />
                      app.js{" "}
                    </Link>{" "}
                  </td>
                  <td>April 15, 2024</td>
                  <td>25 KB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-css me-2" />
                      styles.css{" "}
                    </Link>{" "}
                  </td>
                  <td>February 28, 2024</td>
                  <td>12 KB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-file-spreadsheet me-2"  />
                      data.xlsx{" "}
                    </Link>{" "}
                  </td>
                  <td>March 12, 2024</td>
                  <td>1 MB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className=" bi-fast-forward-circle me-2"  />
                      audio.mp3{" "}
                    </Link>{" "}
                  </td>
                  <td>May 1, 2024</td>
                  <td>3 MB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-camera-reels me-2" />
                      video.mp4{" "}
                    </Link>{" "}
                  </td>
                  <td>December 18, 2023</td>
                  <td>50 MB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-file me-2"  />
                      report.pdf{" "}
                    </Link>{" "}
                  </td>
                  <td>November 20, 2023</td>
                  <td>5 MB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-file me-2" />
                      presentation.pptx{" "}
                    </Link>{" "}
                  </td>
                  <td>September 3, 2023</td>
                  <td>10 MB</td>
                  <td className="text-end">
                    {" "}
                    <button className="btn btn-light" type="button">
                      View
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Link className="text-reset" to="#">
                      {" "}
                      <i className="bi bi-file-text    me-2"  />
                      index.html{" "}
                    </Link>{" "}
                  </td>
                  <td>August 8, 2023</td>
                  <td>9 KB</td>
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
      </div>
    </div>
  </div>
</main>
}