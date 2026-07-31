import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createOrderList } from "../../server/post";
import { toast } from "react-toastify";
export const AddOrderList = ({ main, setMain, update }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.order;
  const [order_id, setOrderId] = useState(orderId ? orderId.id : 0);
  const [product_id, setProductId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!orderId) return;
    setOrderId(orderId.id);
  }, [orderId]);
  console.log(order_id, product_id, quantity);
  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Add New order</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/add-order">
                        Orders
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Add New Order
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-light" to="/orders">
                  Back to Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="card mb-6 shadow border-0">
              <div className="card-body p-6">
                <h4 className="mb-4 h5 mt-5">Order Information</h4>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Product</label>
                    <select
                      className="form-select"
                      value={product_id}
                      onChange={(e) => setProductId(e.target.value)}
                    >
                      <option value="">Select Product</option>
                      {main && main.products.map((product) => (
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
                      placeholder="Quantity"
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
                        const product = main && main.products.find(
                          (p) => p.id === Number(product_id),
                        );
                        const price = Number(product.price);
                        const subtotal = price * Number(quantity);
                        try {
                          await createOrderList({
                            order_id,
                            product_id,
                            price: price,
                            quantity: quantity,
                            subtotal: subtotal,
                          });
                          toast.success("Order list created successfully");

                          navigate(`/order-list`, {
                            state: { order_id },
                          });

                          update();
                        } catch (error) {
                          console.error("Error creating order list:", error);
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
