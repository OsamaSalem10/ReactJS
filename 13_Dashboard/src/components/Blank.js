export const Blank = () =>{
    return <main className="dashboard-content">
  <div className="container-fluid px-3 px-lg-4 py-4">
    <div className="page-heading">
      <div className="page-heading-copy">
        <span className="page-icon">
          <i aria-hidden="true" className="bi bi-file-earmark" />
        </span>
        <div>
          <p className="eyebrow mb-1">Starter</p>
          <h1 className="h3 mb-1">Blank</h1>
          <p className="text-muted mb-0">
            A clean starter page for new admin screens.
          </p>
        </div>
      </div>
    </div>
    <section className="panel blank-panel">
      <div className="blank-state">
        <img
          alt="adminHMD assistant visual"
          className="blank-visual"
          src="../assets/images/png/dasher-ai.png"
        />
        <h2 className="h4 mb-2">Blank Page</h2>
        <p className="text-muted mb-4">
          Start a new admin screen from this clean, responsive page shell.
        </p>
        <a className="btn btn-primary" href="components.html">
          <i aria-hidden="true" className="bi bi-grid-3x3-gap" /> Browse
          Components
        </a>
      </div>
    </section>
  </div>
</main>
}