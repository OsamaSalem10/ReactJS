import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditService from "../../server/edit";
import { toast } from "react-toastify";
export const EditCart = ({ main, update }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const cart = main.carts?.find((cart) => cart.id === parseInt(id));
  const [product_id, setProduct_id] = useState(cart ? cart.product_id : 0);
  const [quantity, setQuantity] = useState(cart ? cart.quantity : 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: cart.user_id,
      product_id,
      quantity,
    };
    const editCartService = new EditService();
    try {
      await editCartService.editCart(cart.id, data, update, navigate);
      toast.success("Cart updated successfully!");
    } catch (error) {
      console.error("Error editing cart:", error);
      toast.error("Failed to update cart. Please try again.");
    }
  }
  
  useEffect(() => {
    if (!cart) return;
    setProduct_id(cart.product_id);
    setQuantity(cart.quantity);
  }, [cart]);

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Edit cart</h2>
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
                      value={cart?.user_id}
                      disabled
                    >
                      <option>
                        {main &&
                          main.users?.find(
                            (e) => e.id === parseInt(cart.user_id),
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
                      onClick={handleSubmit}
                    >
                      Edit Cart
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
