import { useState, useEffect } from "react";
import { editUser  , editCategory , editCompany} from "../../server/edit";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
export const EditUser = ({ main, setMain, Update }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location?.state?.user;
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [role, setRole] = useState(user ? user.role : "user");
  const [image, setImage] = useState(user ? user.image : null);
  const [status, setStatus] = useState(user ? user.status : "");
  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setStatus(user.status);
    setPhone(user.phone);
    setImage(user.image);
  }, [user]);
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
                        value={status}
                        className="form-select"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
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
                        <option value="">Select Role</option>
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

                      formData.append("status", status);

                      if (image) {
                        formData.append("image", image);
                      }
                      console.log("Form Data:", formData);
                      try {
                        await editUser(user.id, formData);

                        toast.success("User updated successfully");
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
                    Edit User
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

export const EditCategory = ({ main, setMain, Update }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location?.state?.category;

  const [name, setName] = useState(category ? category.name : "");
  const [image, setImage] = useState(category ? category.image : null);
  const [description, setDescription] = useState(
    category ? category.description : "",
  );
  useEffect(() => {
    if (!category) return;
    setName(category.name);
    setDescription(category.description);
    setImage(category.image);
  }, [category]);

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
                        placeholder="Enter Description"
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
                   
                      try {
                        await editCategory(category.id, formData);

                        toast.success("Category updated successfully");
                        navigate("/categories");
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
                    Edit Category
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

export const EditCompany = ({ main, setMain, Update }) => {
   const location = useLocation();
  const navigate = useNavigate();
  const company = location?.state?.company;
  const [user, setUser] = useState(company ? company.user : null);
 const [name, setName] = useState(company ? company.name : "");
  const [description, setDescription] = useState(company ? company.description : "");
  const [categoryId, setCategoryId] = useState(company ? company.category_id : "");
  const [website, setWebsite] = useState(company ? company.website : "");
  const [email, setEmail] = useState(company ? company.email : "");
  const [phone, setPhone] = useState(company ? company.phone : "");
  const [address, setAddress] = useState(company ? company.address : "");
  const [city, setCity] = useState(company ? company.city : "");
  const [country, setCountry] = useState(company ? company.country : "");

  const [logo, setLogo] = useState(company ? company.logo : null);
  const [cover, setCover] = useState(company ? company.cover : null);
useEffect(() => {
    if (!company) return;
    setName(company.name);
    setUser(company.user)
    setDescription(company.description)
    setCategoryId(company.category_id)
    setWebsite(company.website)
    setEmail(company.email)
    setPhone(company.phone)
    setAddress(company.address)
    setCity(company.city)
    setCountry(company.country)
    setCover(company.cover)
    setLogo(company.logo)
  }, [company]);
  console.log(company)
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
formData.append("user_id" , user)
formData.append("name", name);
formData.append("description", description);
formData.append("website", website);
formData.append("email", email);
formData.append("phone", phone);
formData.append("address", address);
formData.append("city", city);
formData.append("country", country);
formData.append("category_id", categoryId);

if (logo instanceof File) {
  formData.append("logo", logo);
}

if (cover instanceof File) {
  formData.append("cover", cover);
}

try {
  await editCompany(company.id, formData);

  toast.success("Company updated successfully");
  navigate("/companies");
  Update();
} catch (error) {
  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}
                    }}
                  >
                    Update Company
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