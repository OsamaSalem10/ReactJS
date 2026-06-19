import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ShopCart } from "./components/ShopCart";
import { ShopCheckout } from "./components/ShopCheckout";
import { Wishlist } from "./components/Wishlist";
import { SingleShop } from "./components/SingleShop";
import { Blog } from "./components/Blog";
import { ContactUS } from "./components/ContactUS";
import {
  Index,
  BlogGrid,
  BlogList,
  Categories,
  Customers,
  OrderList,
  OrderSingle,
  Products,
  Reviews,
  VendorGrid,
  VendorList,
} from "./components/Dashboard/Index";
import { AddProduct } from "./components/Dashboard/Form/AddProduct";
import { AddCategory } from "./components/Dashboard/Form/AddCategory";
import { AddCustomers } from "./components/Dashboard/Form/AddCustomers";
import { EditCustomers } from "./components/Dashboard/Form/EditCustomers";
import { AddBlog } from "./components/Dashboard/Form/AddBlog";
import {
  Account,
  AccountSettings,
  AccountAddress,
  AccountNotification,
  AccountPaymentMethod,
} from "./components/Account/Account";
import { ToastContainer, toast } from "react-toastify";
import { _getAllUsers, _getProducts, _getOrders } from "./server/get";
function App() {
  const location = useLocation();
  const hidePaths = [
    "/dashboard",
    "/products",
    "/categories",
    "/orders-list",
    "/vendors-grid",
    "/vendors-list",
    "/customers",
    "/add-customer",
    "/edit-customer",
    "/reviews",
    "/blog-list",
    "/blog-grid",
    "/add-blog",
    "/add-product",
    "/order-single",
    "/single-shop",
    "/add-category",
  ];
  const hideNavbar = hidePaths.includes(location.pathname);
const [users, setUsers] = useState([]);
const [products, setProducts] = useState([]);
const [orders, setOrders] = useState([]);

  useEffect(() => {
    update();
  }, []);

    const update = async () => {
    const _users = await _getAllUsers();
    const _products = await _getProducts();
    const _orders = await _getOrders();

    setUsers(_users);
    setProducts(_products);
    setOrders(_orders);
  };
  return (
    <div className="App">
      <ToastContainer />
      {!hideNavbar && <Navbar />}
      <Offcanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single-shop" element={<SingleShop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/shop-checkout" element={<ShopCheckout />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<Index  users={users}  update={update}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/orders-list" element={<OrderList />} />
        <Route path="/order-single" element={<OrderSingle />} />
        <Route path="/vendors-grid" element={<VendorGrid />} />
        <Route path="/vendors-list" element={<VendorList />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomers update={update}/>} />
        <Route path="/edit-customer/:id" element={<EditCustomers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/add-blog" element={<AddBlog />} />

        {/* Account */}
        <Route path="/account-orders" element={<Account />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/account-address" element={<AccountAddress />} />
        <Route path="/account-notification" element={<AccountNotification />} />
        <Route
          path="/account-payment-method"
          element={<AccountPaymentMethod />}
        />
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
