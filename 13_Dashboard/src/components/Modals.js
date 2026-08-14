export const Modals = () =>{
    return <main className="dashboard-content">
  <div className="container-fluid px-3 px-lg-4 py-4">
    <div className="page-heading">
      <div className="page-heading-copy">
        <span className="page-icon">
          <i aria-hidden="true" className="bi bi-window-stack" />
        </span>
        <div>
          <p className="eyebrow mb-1">Overlay</p>
          <h1 className="h3 mb-1">Modals</h1>
          <p className="text-muted mb-0">
            Modal dialogs for confirmations and compact workflows.
          </p>
        </div>
      </div>
    </div>
    <section className="row g-3">
      <div className="col-12 col-xl-6">
        <div className="panel h-100">
          <h2 className="h5 mb-3 section-title">
            <i aria-hidden="true" className="bi bi-window-stack" />
            <span>Modal Examples</span>
          </h2>
          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-primary"
              data-bs-target="#confirmModal"
              data-bs-toggle="modal"
              type="button">
              Open Confirm Modal
            </button>
            <button
              className="btn btn-outline-secondary"
              data-bs-target="#formModal"
              data-bs-toggle="modal"
              type="button">
              Open Form Modal
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-6">
        <div className="panel h-100">
          <h2 className="h5 mb-3 section-title">
            <i aria-hidden="true" className="bi bi-info-circle" />
            <span>Usage</span>
          </h2>
          <p className="text-muted mb-0">
            Use modals for focused confirmations, compact forms, and
            high-priority decisions without leaving the page.
          </p>
        </div>
      </div>
    </section>
    <div
      aria-hidden="true"
      aria-labelledby="confirmModalLabel"
      className="modal fade"
      id="confirmModal"
      tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title h5" id="confirmModalLabel">
              Confirm Action
            </h2>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body">
            This action will update the selected record.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="button">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="formModalLabel"
      className="modal fade"
      id="formModal"
      tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form className="needs-validation" noValidate>
            <div className="modal-header">
              <h2 className="modal-title h5" id="formModalLabel">
                Quick Note
              </h2>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              />
            </div>
            <div className="modal-body">
              <label className="form-label" htmlFor="modalNote">
                Note
              </label>
              <textarea
                className="form-control"
                id="modalNote"
                required
                rows="4"
              />
              <div className="invalid-feedback">A note is required.</div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button">
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>
}