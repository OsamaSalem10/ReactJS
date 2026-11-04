import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditService from "../../server/edit.js";
export const EditWishlist = ({ main, update }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const wishlistItem = main?.wishlist?.find((u) => Number(u.id) === Number(id));
  const [user_id, setUser_id] = useState(
    wishlistItem ? wishlistItem.user_id : 0,
  );
  const [product_id, setProduct_id] = useState(
    wishlistItem ? wishlistItem.product_id : 0,
  );
  useEffect(() => {
    if (!wishlistItem) return;
    setProduct_id(wishlistItem.product_id);
    setUser_id(wishlistItem.user_id);
  }, [wishlistItem]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id,
      product_id,
    };
    const EditServiceWishlist = new EditService();
    try {
      await EditServiceWishlist.editWishlist(wishlistItem.id, data , update, navigate);
    } catch (error) {
      console.error("Error editing wishlist item:", error);
    }
  };

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Edit Wishlist</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="#">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-inherit" to="/add-wishlist">
                        Wishlist
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Edit Wishlist Item
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link className="btn btn-light" to="/wishlist">
                  Back to Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="card mb-6 shadow border-0">
              <div className="card-body p-6">
                <h4 className="mb-4 h5 mt-5">Wishlist Information</h4>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">User</label>
                    <select className="form-select" value={user_id} disabled>
                      <option>
                        {main &&
                          main.users?.find((e) => e.id === user_id)?.name}
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Product</label>
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
                      Edit Wishlist
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
