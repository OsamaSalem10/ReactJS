import { Link } from "react-router-dom"

export const AddCategory = () => {
  return (
   <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-8">
      <div className="col-md-12">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2>Add New Category</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-inherit" to="#">
                    Categories
                  </Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Add New Category
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link className="btn btn-light" to="categories.html">
              Back to Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="card mb-6 shadow border-0">
          <div className="card-body p-6">
            <h4 className="mb-5 h5">Category Image</h4>
            <div className="mb-4 d-flex">
              <div className="position-relative">
                <img
                  alt=""
                  className="image icon-shape icon-xxxl bg-light rounded-4"
                  src="../assets/images/icons/bakery.svg"
                />
                <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                  <input className="file-input" type="file" />
                  <span className="icon-shape icon-sm rounded-circle bg-white">
                    <svg
                      className="bi bi-pencil-fill text-muted"
                      fill="currentColor"
                      height="12"
                      viewBox="0 0 16 16"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <h4 className="mb-4 h5 mt-5">Category Information</h4>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label className="form-label">Category Name</label>
                <input
                  className="form-control"
                  placeholder="Category Name"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label className="form-label">Slug</label>
                <input
                  className="form-control"
                  placeholder="Slug"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label className="form-label">Parent Category</label>
                <select className="form-select">
                  <option selected>Category Name</option>
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
                <label className="form-label">Date</label>
                <input
                  className="form-control flatpickr"
                  placeholder="Select Date"
                  type="text"
                />
              </div>
              <div />
              <div className="mb-3 col-lg-12">
                <label className="form-label">Descriptions</label>
                <div className="py-8" id="editor" />
              </div>
              <div className="mb-3 col-lg-12">
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
              <div className="mb-3 col-lg-12 mt-5">
                <h4 className="mb-4 h5">Meta Data</h4>
                <div className="mb-3">
                  <label className="form-label">Meta Title</label>
                  <input
                    className="form-control"
                    placeholder="Title"
                    type="text"
                  />
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
              <div className="col-lg-12">
                <Link className="btn btn-primary" to="/categories">
                  Create Product
                </Link>
                <Link className="btn btn-secondary ms-2" to="#">
                  Save
                </Link>
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