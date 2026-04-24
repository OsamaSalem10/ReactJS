import { Link } from "react-router-dom"

export const AddProduct = () => {
  return (
   <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2>Add New Product</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="/">
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="/products">
                    Products
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Add New Product
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-light" to="/products">
              Back to Product
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-12">
        <div className="card mb-6 card-lg">
          <div className="card-body p-6">
            <h4 className="mb-4 h5">Product Information</h4>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  placeholder="Product Name"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label className="form-label">Product Category</label>
                <select className="form-select">
                  <option selected>Product Category</option>
                  <option value="Dairy, Bread & Eggs">
                    Dairy, Bread & Eggs
                  </option>
                  <option value="Snacks & Munchies">Snacks & Munchies</option>
                  <option value="Fruits & Vegetables">
                    Fruits & Vegetables
                  </option>
                </select>
              </div>
              <div className="mb-3 col-lg-6">
                <label className="form-label">Weight</label>
                <input
                  className="form-control"
                  placeholder="Weight"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label className="form-label">Units</label>
                <select className="form-select">
                  <option selected>Select Units</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div>
                <div className="mb-3 col-lg-12 mt-5">
                  <h4 className="mb-3 h5">Product Images</h4>
                  <div
                    className="dropzone mt-4 border-dashed rounded-2 min-h-0"
                    id="my-dropzone"
                  />
                </div>
              </div>
              <div className="mb-3 col-lg-12 mt-5">
                <h4 className="mb-3 h5">Product Descriptions</h4>
                <div className="py-8" id="editor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card mb-6 card-lg">
          <div className="card-body p-6">
            <div className="form-check form-switch mb-4">
              <input
                className="form-check-input"
                defaultChecked
                id="flexSwitchStock"
                role="switch"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="flexSwitchStock">
                In Stock
              </label>
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label">Product Code</label>
                <input
                  className="form-control"
                  placeholder="Enter Product Title"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product SKU</label>
                <input
                  className="form-control"
                  placeholder="Enter Product Title"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" id="productSKU">
                  Status
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    defaultChecked
                    defaultValue="option1"
                    id="inlineRadio1"
                    name="inlineRadioOptions"
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    defaultValue="option2"
                    id="inlineRadio2"
                    name="inlineRadioOptions"
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Disabled
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-6 card-lg">
          <div className="card-body p-6">
            <h4 className="mb-4 h5">Product Price</h4>
            <div className="mb-3">
              <label className="form-label">Regular Price</label>
              <input className="form-control" placeholder="$0.00" type="text" />
            </div>
            <div className="mb-3">
              <label className="form-label">Sale Price</label>
              <input className="form-control" placeholder="$0.00" type="text" />
            </div>
          </div>
        </div>
        <div className="card mb-6 card-lg">
          <div className="card-body p-6">
            <h4 className="mb-4 h5">Meta Data</h4>
            <div className="mb-3">
              <label className="form-label">Meta Title</label>
              <input className="form-control" placeholder="Title" type="text" />
            </div>
            <div className="mb-3">
              <label className="form-label">Meta Description</label>
              <textarea
                className="form-control"
                placeholder="Meta Description"
                rows="3"
              />
            </div>
          </div>
        </div>
        <div className="d-grid">
          <Link className="btn btn-primary" to="#">
            Create Product
          </Link>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}   