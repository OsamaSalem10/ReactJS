import { useEffect, useState } from "react";

import {
  getStock,
  getLowStock,
  stockIn,
  stockOut,
  adjustment,
} from "../api/stock";

import { useNavigate } from "react-router-dom";

const Stock = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [lowStock, setLowStock] = useState([]);

  const [productId, setProductId] = useState("");

  const [type, setType] = useState("IN");

  const [quantity, setQuantity] = useState("");

  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);

  // =========================================
  // UPDATE
  // =========================================

  const update = async () => {
    try {
      setLoading(true);

      const [stockData, lowStockData] = await Promise.all([
        getStock(),

        getLowStock(),
      ]);

      setProducts(stockData);

      setLowStock(lowStockData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    update();
  }, []);

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId) {
      alert("Please select product");

      return;
    }

    if (quantity === "" || Number(quantity) <= 0) {
      alert("Please enter quantity");

      return;
    }

    const data = {
      product_id: Number(productId),

      quantity: Number(quantity),

      note,
    };

    try {
      if (type === "IN") {
        await stockIn(data);
      }

      if (type === "OUT") {
        await stockOut(data);
      }

      if (type === "ADJUSTMENT") {
        await adjustment(data);
      }

      setProductId("");

      setQuantity("");

      setNote("");

      setType("IN");

      await update();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Stock operation failed");
    }
  };

  return (
    <div className="container-fluid py-4">
      {/* =================================
                HEADER
            ================================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Stock</h2>

          <p className="text-muted mb-0">Inventory management</p>
        </div>

        <div>
          <span className="badge bg-primary me-2">
            Products: {products.length}
          </span>

          <span className="badge bg-danger">Low: {lowStock.length}</span>
        </div>
      </div>

      {/* =================================
                FORM
            ================================= */}

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="mb-3">Stock Movement</h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* PRODUCT */}

              <div className="col-md-3">
                <label className="form-label">Product</label>

                <select
                  className="form-select"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                >
                  <option value="">Select Product</option>

                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* TYPE */}

              <div className="col-md-2">
                <label className="form-label">Type</label>

                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="IN">Stock IN</option>

                  <option value="OUT">Stock OUT</option>

                  <option value="ADJUSTMENT">Adjustment</option>
                </select>
              </div>

              {/* QUANTITY */}

              <div className="col-md-2">
                <label className="form-label">Quantity</label>

                <input
                  type="number"
                  step="0.001"
                  min="0"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* NOTE */}

              <div className="col-md-3">
                <label className="form-label">Note</label>

                <input
                  type="text"
                  className="form-control"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optional note"
                />
              </div>

              {/* BUTTON */}

              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* =================================
                TABLE
            ================================= */}

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>

                  <th>Product</th>

                  <th>Category</th>

                  <th>Quantity</th>

                  <th>Unit</th>

                  <th>Minimum</th>

                  <th>Status</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No products
                    </td>
                  </tr>
                ) : (
                  products.map((product) => {
                    const isLow =
                      Number(product.quantity) <= Number(product.min_quantity);

                    return (
                      <tr key={product.id}>
                        <td>{product.id}</td>

                        <td>
                          <button
                            className="btn btn-link p-0 text-decoration-none"
                            onClick={() => navigate(`/stock/${product.id}`)}
                          >
                            {product.name}
                          </button>
                        </td>

                        <td>{product.category_name || "-"}</td>

                        <td>
                          <strong>{product.quantity}</strong>
                        </td>

                        <td>{product.unit}</td>

                        <td>{product.min_quantity}</td>

                        <td>
                          {isLow ? (
                            <span className="badge bg-danger">Low Stock</span>
                          ) : (
                            <span className="badge bg-success">Available</span>
                          )}
                        </td>

                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => navigate(`/stock/${product.id}`)}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
