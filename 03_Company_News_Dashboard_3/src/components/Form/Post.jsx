import { useState } from "react";
import { createUser, createCategory, createCompany } from "../../server/post";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export const AddUser = ({ main, setMain, Update }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Advanced Inputs</h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Input Masks</h5>
                <h6 className="card-subtitle text-muted">
                  jQuery Plugin to make masks on form fields.
                </h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>
                    <div className="mb-3">
                      <label>Image</label>
                      <input
                        className="form-control"
                        placeholder="Enter Image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>
                    <div className="mb-3">
                      <label>Status</label>
                      <select
                        className="form-select"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="active">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <span className="text-muted">Select Status</span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="text-muted">e.g "xxxx-xxxx"</span>
                    </div>
                    <div className="mb-3">
                      <label>Phone</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span className="text-muted">e.g "(xx) xxxx-xxxx"</span>
                    </div>
                    <div className="mb-3">
                      <label>Role</label>
                      <select
                        className="form-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="user">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="company">Company</option>
                      </select>
                      <span className="text-muted">Select Role</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={async (e) => {
                      e.preventDefault();

                      const formData = new FormData();
                      formData.append("name", name);
                      formData.append("email", email);
                      formData.append("phone", phone);
                      formData.append("role", role);
                      formData.append("password", password);

                      formData.append("status", status);

                      if (image) {
                        formData.append("image", image);
                      }
                      console.log("Form Data:", formData);
                      try {
                        await createUser(formData);

                        toast.success("User created successfully");
                        navigate("/");
                        Update();
                      } catch (error) {
                        console.log(error);
                        console.log(error);
                        toast.error(
                          error.response?.data?.message ||
                            "Something went wrong",
                        );
                      }
                    }}
                  >
                    Add User
                  </button>
                  <Link className="btn btn-secondary ms-2" to="/">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const AddCategory = ({ main, setMain, Update }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Advanced Inputs</h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Input Masks</h5>
                <h6 className="card-subtitle text-muted">
                  jQuery Plugin to make masks on form fields.
                </h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>
                    <div className="mb-3">
                      <label>Description</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>

                    <div className="mb-3">
                      <label>Image</label>
                      <input
                        className="form-control"
                        placeholder="Enter Image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={async (e) => {
                      e.preventDefault();

                      const formData = new FormData();
                      formData.append("name", name);
                      formData.append("description", description);

                      if (image) {
                        formData.append("image", image);
                      }
                      console.log("Form Data:", formData);
                      try {
                        await createCategory(formData);

                        toast.success("Category created successfully");
                        navigate("/categories");

                        console.log("Form Data:", formData);
                      } catch (error) {
                        console.log(error);
                        console.log(error);
                        toast.error(
                          error.response?.data?.message ||
                            "Something went wrong",
                        );
                      }
                    }}
                  >
                    Add User
                  </button>
                  <Link className="btn btn-secondary ms-2" to="/">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const AddCompany = ({ main, setMain, Update }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [logo, setLogo] = useState(null);
  const [cover, setCover] = useState(null);
  const navigate = useNavigate();

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Advanced Inputs</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Input Masks</h5>
                <h6 className="card-subtitle text-muted">
                  jQuery Plugin to make masks on form fields.
                </h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter Your Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Category</label>
                      <select
                        className="form-select"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        <option value="">Select Category</option>
                        {main.categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>Phone</label>
                      <input
                        className="form-control"
                        placeholder="Enter Phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Address</label>
                      <input
                        className="form-control"
                        placeholder="Enter Address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Logo</label>
                      <input
                        className="form-control"
                        placeholder="Enter Logo"
                        type="file"
                        onChange={(e) => setLogo(e.target.files[0])}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cover</label>
                      <input
                        className="form-control"
                        placeholder="Enter Cover"
                        type="file"
                        onChange={(e) => setCover(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label>user</label>
                      <select
                        className="form-select"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                      >
                        <option value="">Select User</option>
                        {main && main.users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>Description</label>
                      <input
                        className="form-control"
                        placeholder="Enter Description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Website</label>
                      <input
                        className="form-control"
                        placeholder="Enter Website"
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        className="form-control"
                        placeholder="Enter Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>City</label>
                      <input
                        className="form-control"
                        placeholder="Enter City"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Country</label>
                      <input
                        className="form-control"
                        placeholder="Enter Country"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={async (e) => {
                      e.preventDefault();

                      const formData = new FormData();
                      formData.append("user_id", user);
                      formData.append("category_id", categoryId);
                      formData.append("name", name);
                      formData.append("description", description);
                      formData.append("website", website);
                      formData.append("email", email);
                      formData.append("phone", phone);
                      formData.append("address", address);
                      formData.append("city", city);
                      formData.append("country", country);

                      if (logo) {
                        formData.append("logo", logo);
                      }

                      if (cover) {
                        formData.append("cover", cover);
                      }

                      try {
                        await createCompany(formData);

                        toast.success("Company created successfully");
                        navigate("/companies");
                        Update();
                      } catch (error) {
                        console.log(error);
                        toast.error(
                          error.response?.data?.message ||
                            "Something went wrong",
                        );
                      }
                    }}
                  >
                    Create Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
