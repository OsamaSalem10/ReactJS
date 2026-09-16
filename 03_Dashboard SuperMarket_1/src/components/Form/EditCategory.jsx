import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { _editCategory } from "../../server/edit";
import { toast } from "react-toastify";
export const EditCategory = ({ main, update }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = main?.categories?.find((u) => Number(u.id) === Number(id));

  const [name, setName] = useState(category ? category.name : "");
  const [status, setStatus] = useState(category ? category.status : "");
  const [image, setImage] = useState(category ? category.image : null);
  console.log(category);
  useEffect(() => {
    if (!category) return;
    setName(category.name);
    setStatus(category.status);
    setImage(category.image);
  }, [category]);

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Edit Category</h2>
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
                <Link className="btn btn-light" to="/categories">
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
                      src={
                        category && category.image
                          ? `${category.image}`
                          : "../assets/images/docs/placeholder-img.jpg"
                      }
                    />
                    <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                      <input
                        className="file-input"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setImage(file);
                        }}
                      />
                      <span className="icon-shape icon-sm rounded-circle bg-white">
                        <svg
                          className="bi bi-pencil-fill text-muted"
                          fill="currentColor"
                          height="12"
                          viewBox="0 0 16 16"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Status</label>
                    <select
                      value={status}
                      className="form-select"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={async (e) => {
                        e.preventDefault();
                        // Create New Customer logic here
                        const formData = new FormData();
                        formData.append("name", name);
                        formData.append("status", status);
              if (image) {
                                formData.append("image", image);
                              }else{
                                formData.append("image", category.image);
                              }



                        try {
                          await _editCategory(category.id, formData);

                          toast.success("Category updated successfully");
                          navigate("/categories");
                          update();
                        } catch (error) {
                          console.log(
                            "Error updating category:",
                            error.response?.data?.errors,
                          );

                          toast.error(
                            error.response?.data?.errors?.[0]?.msg ||
                              error.response?.data?.message ||
                              "Something went wrong.",
                          );
                        }
                      }}
                    >
                      Edit Category
                    </button>
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
  );
};
