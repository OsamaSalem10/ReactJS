export const Profile = () =>{
    return <main className="dashboard-content">
  <div className="container-fluid px-3 px-lg-4 py-4">
    <div className="page-heading">
      <div className="page-heading-copy">
        <span className="page-icon">
          <i aria-hidden="true" className="bi bi-person-badge" />
        </span>
        <div>
          <p className="eyebrow mb-1">Account</p>
          <h1 className="h3 mb-1">Profile</h1>
          <p className="text-muted mb-0">
            Manage your personal details, bio, and contact preferences.
          </p>
        </div>
      </div>
    </div>
    <section className="row g-3">
      <div className="col-12 col-xl-4">
        <div className="panel h-100 text-center profile-card">
          <div className="profile-cover">
            <img
              alt="adminHMD dashboard preview"
              src="../assets/images/ecommerce/product-1.jpg"
            />
          </div>
          <img
            alt="Admin Hasan"
            className="avatar-img avatar-xl profile-photo"
            src="../assets/images/avatar/avatar-2.jpg"
          />
          <h2 className="h5 mt-3 mb-1">Admin Hasan</h2>
          <p className="text-muted mb-3">Product Administrator</p>
          <div className="d-flex justify-content-center gap-2">
            <span className="badge text-bg-primary">Admin</span>
            <span className="badge text-bg-success">Verified</span>
          </div>
          <div className="info-list mt-4 text-start">
            <div>
              <span>Email</span>
              <strong>admin@example.com</strong>
            </div>
            <div>
              <span>Department</span>
              <strong>Product Ops</strong>
            </div>
            <div>
              <span>Time Zone</span>
              <strong>Asia/Dhaka</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-8">
        <form className="panel needs-validation" noValidate>
          <div className="panel-header">
            <div>
              <h2 className="h5 mb-1 section-title">
                <i aria-hidden="true" className="bi bi-person-gear" />
                <span>Profile Settings</span>
              </h2>
              <p className="text-muted mb-0">
                Update your account profile and contact details.
              </p>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label" htmlFor="profileName">
                Name
              </label>
              <input
                className="form-control"
                defaultValue="Admin Hasan"
                id="profileName"
                required
                type="text"
              />
              <div className="invalid-feedback">Name is required.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="profileEmail">
                Email
              </label>
              <input
                className="form-control"
                defaultValue="admin@example.com"
                id="profileEmail"
                required
                type="email"
              />
              <div className="invalid-feedback">Enter a valid email.</div>
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="profileBio">
                Bio
              </label>
              <textarea
                className="form-control"
                defaultValue="Focused on clean admin workflows, reusable UI systems, and reliable operations."
                id="profileBio"
                rows="5"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-primary" type="submit">
              <i aria-hidden="true" className="bi bi-check2-circle" /> Save
              Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</main>
}