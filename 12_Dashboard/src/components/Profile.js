import { Link } from "react-router-dom"
export const PagesProfile = () =>{
return(
   <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Profile</h1>
    <div className="row">
      <div className="col-md-4 col-xl-3">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="card-title mb-0">Profile Details</h5>
          </div>
          <div className="card-body text-center">
            <img
              alt="Stacie Hall"
              className="img-fluid rounded-circle mb-2"
              height="128"
              src="assets/img/avatars/avatar-4.jpg"
              width="128"
            />
            <h5 className="card-title mb-0">Stacie Hall</h5>
            <div className="text-muted mb-2">Lead Developer</div>
            <div>
              <Link className="btn btn-primary btn-sm me-2" to="#">
              <i className="bi bi-hand-thumbs-up"></i>  Follow
              </Link>
              <Link className="btn btn-primary btn-sm" to="#">
                <span className="bi-chat" /> Message
              </Link>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">Skills</h5>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              HTML
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              JavaScript
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              Sass
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              Angular
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              Vue
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              React
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              Redux
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              UI
            </Link>
            <Link className="badge badge-subtle-primary me-1 my-1" to="#">
              UX
            </Link>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">About</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <span className="bi-house lucide-sm me-1"  /> Lives in{" "}
                <Link to="#">San Francisco, SA</Link>
              </li>
              <li className="mb-1">
                <span className="bi-briefcase lucide-sm me-1" />{" "}
                Works at <Link to="#">GitHub</Link>
              </li>
              <li className="mb-1">
                <span className="bi-map lucide-sm me-1" /> From{" "}
                <Link to="#">Boston</Link>
              </li>
            </ul>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">Elsewhere</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <span className="fas fa-globe fa-fw me-1" />{" "}
                <Link to="#">staciehall.co</Link>
              </li>
              <li className="mb-1">
                <span className="fab fa-twitter fa-fw me-1" />{" "}
                <Link to="#">Twitter</Link>
              </li>
              <li className="mb-1">
                <span className="fab fa-facebook fa-fw me-1" />{" "}
                <Link to="#">Facebook</Link>
              </li>
              <li className="mb-1">
                <span className="fab fa-instagram fa-fw me-1" />{" "}
                <Link to="#">Instagram</Link>
              </li>
              <li className="mb-1">
                <span className="fab fa-linkedin fa-fw me-1" />{" "}
                <Link to="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-xl-9">
        <div className="card">
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
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                  tempus. Donec vitae sapien ut libero venenatis faucibus.
                  Nullam quis ante.
                </div>
                <Link className="btn btn-sm btn-danger mt-1" to="#">
                  <i className="bi-heart lucide-sm" /> Like
                </Link>
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
                <Link className="btn btn-sm btn-danger mt-1" to="#">
                  <i className="bi-heart lucide-sm" /> Like
                </Link>
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
                <small className="float-end">1d ago</small>
                <strong>Carl Jenkins</strong> started following{" "}
                <strong>Stacie Hall</strong>
                <br />
                <small className="text-muted">Yesterday 3:12 pm</small>
                <div className="d-flex align-items-start mt-1">
                  <Link className="pe-3" to="#">
                    <img
                      alt="Stacie Hall"
                      className="rounded-circle me-2"
                      height="36"
                      src="assets/img/avatars/avatar-4.jpg"
                      width="36"
                    />
                  </Link>
                  <div className="flex-grow-1">
                    <div className="border text-sm text-muted p-2 mt-1">
                      Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                      lorem. Maecenas nec odio et ante tincidunt tempus.
                    </div>
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
</main>
)
}
export const PagesSettings = () =>{
return(
  <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Settings</h1>
    <div className="row">
      <div className="col-md-3 col-xl-2">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Profile Settings</h5>
          </div>
          <div className="list-group list-group-flush" role="tablist">
            <Link
              className="list-group-item list-group-item-action active"
              data-bs-toggle="list"
              to="#account"
              role="tab">
              Account
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#password"
              role="tab">
              Password
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Privacy and safety
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Email notifications
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Web notifications
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Widgets
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Your data
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              to="#"
              role="tab">
              Delete account
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-9 col-xl-10">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="account"
            role="tabpanel">
            <div className="card">
              <div className="card-header">
                <div className="card-actions float-end">
                  <div className="dropdown position-relative">
                    <Link
                      data-bs-display="static"
                      data-bs-toggle="dropdown"
                      to="#">
                      <i
                        className="bi-more-horizontal align-middle"
                       
                      />
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
                <h5 className="card-title mb-0">Public info</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputUsername">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          placeholder="Username"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputUsername">
                          Biography
                        </label>
                        <textarea
                          className="form-control"
                          id="inputBio"
                          placeholder="Tell something about yourself"
                          rows="2"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <img
                          alt="Chris Wood"
                          className="rounded-circle img-responsive mt-2"
                          height="128"
                          src="assets/img/avatars/avatar.jpg"
                          width="128"
                        />
                        <div className="mt-2">
                          <span className="btn btn-primary">
                            <i className="bi-upload" /> Upload
                          </span>
                        </div>
                        <small>
                          For best results, use an image at least 128px by 128px
                          in .jpg format
                        </small>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
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
                      <i
                        className="bi-more-horizontal align-middle"
                      />
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
                <h5 className="card-title mb-0">Private info</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        placeholder="First name"
                        type="text"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        placeholder="Last name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="inputEmail4">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="inputAddress">
                      Address
                    </label>
                    <input
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="inputAddress2">
                      Address 2
                    </label>
                    <input
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                      type="text"
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="inputCity">
                        City
                      </label>
                      <input
                        className="form-control"
                        id="inputCity"
                        type="text"
                      />
                    </div>
                    <div className="mb-3 col-md-4">
                      <label className="form-label" htmlFor="inputState">
                        State
                      </label>
                      <select className="form-control" id="inputState">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-2">
                      <label className="form-label" htmlFor="inputZip">
                        Zip
                      </label>
                      <input
                        className="form-control"
                        id="inputZip"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="password" role="tabpanel">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Password</h5>
                <form>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="inputPasswordCurrent">
                      Current password
                    </label>
                    <input
                      className="form-control"
                      id="inputPasswordCurrent"
                      type="password"
                    />
                    <small>
                      <Link to="#">Forgot your password?</Link>
                    </small>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="inputPasswordNew">
                      New password
                    </label>
                    <input
                      className="form-control"
                      id="inputPasswordNew"
                      type="password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="inputPasswordNew2">
                      Verify password
                    </label>
                    <input
                      className="form-control"
                      id="inputPasswordNew2"
                      type="password"
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
)
}
export const PagesBlank = () =>{
return(
 <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Blank Page</h1>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Empty card</h5>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  </div>
</main>
)
}