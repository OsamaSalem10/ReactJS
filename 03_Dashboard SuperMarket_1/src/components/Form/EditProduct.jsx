import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { _editProduct } from "../../server/edit";
export const EditProduct = ({ main, update }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = main?.products?.find((u) => Number(u.id) === Number(id));
  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(
    product ? product.description : "",
  );
  const [price, setPrice] = useState(product ? product.price : 0);
  const [category, setCategory] = useState(product ? product.category_id : "");
  const [discount, setDiscount] = useState(product ? product.discount : 0);
  const [status, setStatus] = useState(product ? product.status : "");

  const [image, setImage] = useState(product ? product.image : null);

  useEffect(() => {
    if (!product) return;
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category_id);
    setDiscount(product.discount);
    setStatus(product.status);
    setImage(product.image);
  }, [product]);

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Edit Product</h2>
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
                      Edit Product
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
          <div className="col-lg-12 col-12">
            <div className="card mb-6 shadow border-0">
              <div className="card-body p-6">
                <h4 className="mb-5 h5">Product Image</h4>
                <div className="mb-4 d-flex">
                  <div className="position-relative">
                    <img
                      alt=""
                      className="image icon-shape icon-xxxl bg-light rounded-4"
                      src={
                        product && product.image
                          ? `${product.image}`
                          : "../assets/images/icons/bakery.svg"
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
                    <label className="form-label">Product Name</label>
                    <input
                      className="form-control"
                      placeholder="Product Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>

                      {main &&
                        main.categories?.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Description</label>
                    <input
                      className="form-control"
                      placeholder="Description"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Price</label>
                    <input
                      className="form-control"
                      placeholder="Price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Discount</label>
                    <input
                      className="form-control"
                      placeholder="Discount"
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={async (e) => {
                        e.preventDefault();

                        const formData = new FormData();
                        formData.append("id", product.id);
                        formData.append("description", description);
                        formData.append("category_id", category);
                        formData.append("discount", discount);
                        formData.append("status", status);

                        formData.append("name", name);
                        formData.append("price", price);

                        if (image) {
                          formData.append("image", image);
                        }

                        try {
                          await _editProduct(product.id, formData);

                          toast.success("Update successfully");
                          navigate("/products");
                          update();
                        } catch (error) {
                          console.log(error);
                          toast.error(
                            error.response?.data?.message ||
                              "Something went wrong",
                          );
                        }
                      }}
                    >
                      Create Products
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
