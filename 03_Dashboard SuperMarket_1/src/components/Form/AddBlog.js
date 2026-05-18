import { Link } from "react-router-dom";

export const AddBlog = () => {
    return (
      <main className="main-content-wrapper">
  <div className="container">
    <div className="row mb-9">
      <div className="col-md-12">
        <div>
          <h2>Create a new post</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="text-inherit" to="#">
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="text-inherit" to="#">
                  Blog
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Create New Post
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <form className="row g-6 needs-validation" noValidate>
          <div className="col-lg-8 col-12">
            <div className="card card-lg">
              <div className="card-body p-6 d-flex flex-column gap-3">
                <div className="col-12">
                  <label className="form-label" htmlFor="blognewTitle">
                    Title
                  </label>
                  <input
                    className="form-control"
                    id="blognewTitle"
                    placeholder="Post Title"
                    required
                    type="text"
                  />
                  <div className="invalid-feedback">
                    Please enter post title
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">Cover</label>
                  <div
                    className="dropzone border-dashed rounded-2 min-h-0"
                    id="my-dropzone"
                  />
                </div>
                <div className="col-12">
                  <label
                    className="form-label"
                    htmlFor="blogdescriptionTextarea">
                    Short Descriptions
                  </label>
                  <textarea
                    className="form-control"
                    id="blogdescriptionTextarea"
                    placeholder="Write a short description"
                    required
                    row="5"
                  />
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">Content</label>
                  <div className="py-8" id="editor" />
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card card-lg">
              <div className="card-body p-6 d-flex flex-column gap-3">
                <div className="col-12">
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <label
                        className="form-label"
                        htmlFor="validationCustom04">
                        Category
                      </label>
                      <select
                        className="form-select"
                        id="validationCustom04"
                        required>
                        <option disabled selected value="">
                          Select Category
                        </option>
                        <option value="Recipes">Recipes</option>
                        <option value="Company">Company</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Category 4">Category 4</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid category.
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="form-label" htmlFor="tags">
                          Tags
                        </label>
                        <input
                          className="w-100"
                          defaultValue='[{"value":"grocery", "editable":false}, {"value":"shop"}]'
                          id="tags"
                          name="tags"
                          placeholder="Tags"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter tags
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <label className="form-label" htmlFor="blognewContent">
                        SEO Content
                      </label>
                      <input
                        className="form-control"
                        id="blognewContent"
                        placeholder="Meta Title"
                        required
                        type="text"
                      />
                      <div className="invalid-feedback">
                        Please enter seo content
                      </div>
                    </div>
                    <div>
                      <label
                        className="form-label visually-hidden"
                        htmlFor="blogdeseoTextarea">
                        Content
                      </label>
                      <textarea
                        className="form-control"
                        id="blogdeseoTextarea"
                        placeholder="Meta Descriptions"
                        required
                        row="7"
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch ps-0">
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault">
                      Publish
                    </label>
                    <input
                      className="form-check-input ms-auto"
                      defaultChecked
                      id="flexSwitchCheckDefault"
                      role="switch"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch ps-0">
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked">
                      Enable comments
                    </label>
                    <input
                      className="form-check-input ms-auto"
                      id="flexSwitchCheckChecked"
                      role="switch"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-row gap-2">
                    <button className="btn btn-primary w-100" type="submit">
                      Post
                    </button>
                    <button className="btn btn-light w-100" type="button">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
    );
}