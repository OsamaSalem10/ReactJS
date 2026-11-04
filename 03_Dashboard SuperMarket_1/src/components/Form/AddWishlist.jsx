import { Link, useNavigate} from "react-router-dom";
import {  useState } from "react";
import PostService from "../../server/post";
export const AddWishlist = ({ main, update }) => {
  const navigate = useNavigate();

  const [product_id, setProduct_id] = useState(0);
  const [user_id, setUser_id] = useState( 0);


const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: user_id,
      product_id: product_id,
    };
    try {
      await PostService.createWishlist(data, update, navigate);
    } catch (error) {
      console.error("Error creating wishlist:", error);
    }
  };

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Add New Wishlist</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/wishlist">
                        Wishlist
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Add New Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-light" to="/carts">
                  Back to Carts
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="card mb-6 shadow border-0">
              <div className="card-body p-6">
                <h4 className="mb-4 h5 mt-5">Cart Information</h4>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">User</label>
                    <select
                      className="form-select"
                      value={user_id}
                      onChange={(e) => setUser_id(e.target.value)}
                      disabled
                    >
               
                          <option >
                             {main &&
                                main.users?.find(
                                  (e) => e.id === user_id,
                                )?.name}
                          </option>
                       
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">User</label>
                    <select
                      className="form-select"
                      value={product_id}
                      onChange={(e) => setProduct_id(e.target.value)}
                    >
                      <option value="">Select Product</option>

                      {main &&
                        main.products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name}
                          </option>
                        ))}
                    </select>
                  </div>

                

                  <div className="col-lg-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    onClick={handleSubmit}
                    >
                      Create order
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
