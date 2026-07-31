import { Link, useNavigate ,useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { _createCart } from "../../server/post";
import { toast } from "react-toastify";
import {_getCarts} from "../../server/get"
export const AddCart = ({ main, setMain, update }) => {
   const location = useLocation();
  const navigate = useNavigate();
   const user = location.state?.user;
  const [product_id, setProduct_id] = useState(0);
  const [quantity, setQuantity] = useState(0);
    const [userCart, setUserCart] = useState([]);
   const updateCart = async () => {
      if (!user?.id) return;
  
      try {
        const cart = await _getCarts(user.id);
        setUserCart(cart);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      updateCart();
    }, [user]);

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Add New cart</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/add-cart">
                        Carts
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Add New Carts
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
                      value={user.id}
                   
                      disabled
                    >
               
                          <option >
                             {main &&
                                main.users?.find(
                                  (e) => e.id === user?.id,
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

                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Quantity</label>
                    <input
                      className="form-control"
                      placeholder="Total"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={async (e) => {
                        e.preventDefault();
                        const data = {
                          user_id: user.id,
                          product_id: product_id,
                          quantity: quantity,
                        };
                        try {
                          await _createCart(data);
                          toast.success("carts created successfully");
                          navigate("/carts");
                          update();
                          _getCarts(user?.id)
                        } catch (error) {
                          toast.error(
                            error.response?.data?.message ||
                              "Something went wrong",
                          );
                        }
                      }}
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
