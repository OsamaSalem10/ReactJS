import { Link, useNavigate } from "react-router-dom";
import { NavbarVertical } from "../NavbarVertical";
import { NavbarDashboard } from "../NavbarDashboard";
import {  useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../../../server/post";
export const AddCustomers = ({ update }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [localUsers, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      <NavbarDashboard />
      <div className="main-wrapper">
        <NavbarVertical />
        <main className="main-content-wrapper">
          <div className="container">
            <div className="row mb-8">
              <div className="col-md-12">
                <div>
                  <h2>Create Customer</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link className="text-inherit" to="/">
                          Dashboard
                        </Link>
                      </li>
                      <li
                        aria-current="page"
                        className="breadcrumb-item active"
                      >
                        Create
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card shadow border-0">
                  <div className="card-body d-flex flex-column gap-8 p-7">
                    <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
                      <div>
                        <img
                          alt=""
                          className="image avatar avatar-lg rounded-3"
                          src="../assets/images/docs/placeholder-img.jpg"
                        />
                      </div>
                      <div className="file-upload btn btn-light ms-md-4">
                        <input
                          className="file-input opacity-0"
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setImage(file);
                          }}
                        />
                        Upload Photo
                      </div>
                      <span className="ms-2">JPG, GIF or PNG. 1MB Max.</span>
                    </div>
                    <div className="d-flex flex-column gap-4">
                      <h3 className="mb-0 h6">Customer Information</h3>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-lg-6 col-12">
                          <div>
                            <label
                              className="form-label"
                              htmlFor="create CustomerName"
                            >
                              Name
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="create CustomerName"
                              placeholder="Customer Name"
                              required
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter customer name
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div>
                            <label
                              className="form-label"
                              htmlFor="create Customer Email"
                            >
                              Email
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="create Customer Email"
                              placeholder="Email Address"
                              required
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter email
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div>
                            <label
                              className="form-label"
                              htmlFor="create Customer Phone"
                            >
                              Phone
                            </label>
                            <input
                              className="form-control"
                              id="create Customer Phone"
                              placeholder="Number"
                              required
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter phone
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <label
                            className="form-label"
                            htmlFor="create Customer Password"
                          >
                            Password
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control flatpickr"
                            id="create CustomerPassword"
                            placeholder="Password"
                            required
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter password
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <label
                            className="form-label"
                            htmlFor="create Customer Location"
                          >
                            Location
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control flatpickr"
                            id="create CustomerLocation"
                            placeholder="Location"
                            required
                            type="text"
                            onChange={(e) => setLocation(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter location
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <label
                            className="form-label"
                            htmlFor="create Customer Description"
                          >
                            Description
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control flatpickr"
                            id="create Customer Description"
                            placeholder="Description"
                            required
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter Description
                          </div>
                        </div>
                        <div>
                          <div className="col-12 mt-3">
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  // Create New Customer logic here
                                  const formData = new FormData();
                                  formData.append("name", name);
                                  formData.append("email", email);
                                  formData.append("phone", phone);
                                  formData.append("password", password);
                                  formData.append("location", localUsers);
                                  formData.append("description", description);
                                  if (image) {
                                    formData.append("image", image);
                                  }

                                  try {
                                    await createUser(formData);
                                    toast.success(
                                      "Customer created successfully",
                                    );
                                    navigate("/dashboard");
                                    update();
                                  } catch (errors) {
                                    console.error(
                                      "Error creating customer:",
                                      errors,
                                    );
                                  }
                                }}
                              >
                                Create Customer
                              </button>
                              <button
                                className="btn btn-secondary"
                                type="submit"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
