export const Tables = () =>{
    return <main className="dashboard-content">
  <div className="container-fluid px-3 px-lg-4 py-4">
    <div className="page-heading">
      <div className="page-heading-copy">
        <span className="page-icon">
          <i aria-hidden="true" className="bi bi-table" />
        </span>
        <div>
          <p className="eyebrow mb-1">Data</p>
          <h1 className="h3 mb-1">Tables</h1>
          <p className="text-muted mb-0">
            Use responsive, searchable tables for operational records.
          </p>
        </div>
      </div>
    </div>
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2 className="h5 mb-1 section-title">
            <i aria-hidden="true" className="bi bi-table" />
            <span>Advanced Table</span>
          </h2>
          <p className="text-muted mb-0">
            Searchable responsive table for orders and customer data.
          </p>
        </div>
        <input
          aria-label="Search orders"
          className="form-control form-control-sm table-search"
          data-table-search="ordersTable"
          placeholder="Search orders"
          type="search"
        />
      </div>
      <div className="table-responsive">
        <table
          className="table align-middle mb-0"
          data-searchable-table=""
          id="ordersTable">
          <thead>
            <tr>
              <th>Order</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-semibold">#HMD-2048</td>
              <td>
                <div className="table-media">
                  <img
                    alt="Wireless Headset"
                    className="product-thumb"
                    src="../assets/images/ecommerce/product-1.jpg"
                  />
                  <span>Wireless Headset</span>
                </div>
              </td>
              <td>Sarah Ahmed</td>
              <td>
                <span className="badge text-bg-success">Paid</span>
              </td>
              <td>$1,240</td>
              <td>May 6, 2026</td>
              <td className="text-end">
                <button className="btn btn-light btn-sm" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-semibold">#HMD-2047</td>
              <td>
                <div className="table-media">
                  <img
                    alt="Smart Watch"
                    className="product-thumb"
                    src="../assets/images/ecommerce/product-2.jpg"
                  />
                  <span>Smart Watch</span>
                </div>
              </td>
              <td>Rafi Khan</td>
              <td>
                <span className="badge text-bg-warning">Pending</span>
              </td>
              <td>$860</td>
              <td>May 5, 2026</td>
              <td className="text-end">
                <button className="btn btn-light btn-sm" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-semibold">#HMD-2046</td>
              <td>
                <div className="table-media">
                  <img
                    alt="Desk Lamp"
                    className="product-thumb"
                    src="../assets/images/ecommerce/product-3.jpg"
                  />
                  <span>Desk Lamp</span>
                </div>
              </td>
              <td>Nadia Islam</td>
              <td>
                <span className="badge text-bg-info">Shipped</span>
              </td>
              <td>$430</td>
              <td>May 3, 2026</td>
              <td className="text-end">
                <button className="btn btn-light btn-sm" type="button">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-semibold">#HMD-2045</td>
              <td>
                <div className="table-media">
                  <img
                    alt="Travel Backpack"
                    className="product-thumb"
                    src="../assets/images/ecommerce/product-4.jpg"
                  />
                  <span>Travel Backpack</span>
                </div>
              </td>
              <td>Mina Torres</td>
              <td>
                <span className="badge text-bg-danger">Failed</span>
              </td>
              <td>$220</td>
              <td>May 2, 2026</td>
              <td className="text-end">
                <button className="btn btn-light btn-sm" type="button">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</main>
}