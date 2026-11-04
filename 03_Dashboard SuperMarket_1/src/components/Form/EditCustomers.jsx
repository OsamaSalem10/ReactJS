import { useState, useEffect } from "react";
import EditService from "../../server/edit";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const EditCustomers = ({ main, update }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = main?.users?.find((u) => Number(u.id) === Number(id));
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [localUsers, setLocation] = useState(user ? user.location : "");
  const [description, setDescription] = useState(user ? user.description : "");
  const [image, setImage] = useState(user ? user.image : null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("location", localUsers);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    } else {
      formData.append("image", user.image);
    }

    try {
      const EditServiceUser = new EditService();
      await EditServiceUser.editUser(user.id, formData, update, navigate);

    } catch (error) {
      console.log("Error updating customer:", error.response?.data?.errors);

      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "Something went wrong.",
      );
    }
  };
  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setLocation(user.location);
    setDescription(user.description);
    setPhone(user.phone);
    setImage(user.image);
  }, [user]);
  
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Edit Customer Name</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Customer Name
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Edit
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  data-bs-target="#delete"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-8 g-5">
          <div className="col-lg-8 col-12">
            <div className="card card-lg border-0">
              <div className="card-body d-flex flex-column gap-8 p-7">
                <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
                  <div>
                    <img
                      alt=""
                      className="image avatar avatar-lg rounded-3"
                      src={
                        user && user.image
                          ? `${user.image}`
                          : "../assets/images/docs/placeholder-img.jpg"
                      }
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
                  <span className="ms-md-2">JPG, GIF or PNG. 1MB Max.</span>
                </div>
                <div className="d-flex flex-column gap-4">
                  <h4 className="mb-0 h6">Customer Information</h4>
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-lg-6 col-12">
                      <div>
                        <label
                          className="form-label"
                          htmlFor="customerEditName"
                        >
                          Name
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          id="customerEditName"
                          placeholder="Customer Name"
                          value={name}
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please enter category name
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div>
                        <label
                          className="form-label"
                          htmlFor="customerEditEmail"
                        >
                          Email
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          id="customerEditEmail"
                          placeholder="Email Address"
                          value={email}
                          type="email"
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
                          htmlFor="customerEditPhone"
                        >
                          Phone
                        </label>
                        <input
                          className="form-control"
                          id="customerEditPhone"
                          placeholder="Number"
                          value={phone}
                          type="text"
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
                        htmlFor="create Customer Location"
                      >
                        Location
                      </label>
                      <input
                        className="form-control flatpickr"
                        placeholder="Location"
                        type="text"
                        value={localUsers}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please enter location
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <label
                        className="form-label"
                        htmlFor="create Customer Location"
                      >
                        Description
                      </label>
                      <input
                        className="form-control flatpickr"
                        id="customerEditDescription"
                        placeholder="Description"
                        value={description}
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please enter description
                      </div>
                    </div>

                    <div>
                      <div className="col-12 mt-3">
                        <div className="d-flex flex-column flex-md-row gap-2">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Update Customer
                          </button>
                          <Link className="btn btn-secondary" to="/customers">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card card-lg border-0">
              <div className="card-body p-6 d-flex flex-column gap-6">
                <div>
                  <h4 className="mb-0 h6">Customer Details</h4>
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-row justify-content-between">
                    <span className="fw-medium text-dark">Created at</span>
                    <span className="fw-medium">8 month ago</span>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <span className="fw-medium text-dark">
                      Last modified at
                    </span>
                    <span className="fw-medium">2 month ago</span>
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
