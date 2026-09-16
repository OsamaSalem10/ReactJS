import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { NavbarVertical } from "./components/NavbarVertical";
import { Products } from "./components/Products";
import { AddProduct } from "./components/Form/AddProduct";
import { AddOrderList } from "./components/Form/AddOrderList";
import { Categories } from "./components/Categories";
import { AddCategory } from "./components/Form/AddCategory";
import { Orders } from "./components/Orders";
import { OrdersList } from "./components/OrdersList";
import { VendorGrid } from "./components/VendorGrid";
import { VendorList } from "./components/VendorList";
import { Customers } from "./components/Customers";
import { AddCustomers } from "./components/Form/AddCustomers";
import { EditCustomers } from "./components/Form/EditCustomers";
import { Reviews } from "./components/Reviews";
import { BlogList } from "./components/BlogList";
import { BlogGrid } from "./components/BlogGrid";
import { AddBlog } from "./components/Form/AddBlog";
import { EditCategory } from "./components/Form/EditCategory"
import { EditProduct } from "./components/Form/EditProduct"
import { useEffect, useState } from "react";
import { _getAllCategories, _getAllUsers, _getCarts, _getOrders, _getProducts, _getOrderItems, _getWishlist, _getComments } from "./server/get";
import { ToastContainer } from "react-toastify";
import { AddOrders } from "./components/Form/AddOrders";
import { UserCarts } from "./components/Account/UserCarts";
import { Carts } from "./components/Carts";
import { AddCart } from "./components/Form/AddCart";
import { EditCart } from "./components/Form/EditCart";
import { Wishlist } from "./components/Wishlist";

function App() {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [main, setMain] = useState({
    users: [],
    products: [],
    categories: [],
    orders: [],
    orderItems: [],
    carts: [],
    wishlist: [],
    comments: [],
  });

  const update = async () => {
    const users = await _getAllUsers();
    const products = await _getProducts();
    const categories = await _getAllCategories();
    const orders = await _getOrders();
    const orderItems = await _getOrderItems();
    const carts = await _getCarts();
    const wishlist = await _getWishlist();
    const comments = await _getComments();

    setMain((prevMain) => ({
      ...prevMain,
      users: users,
      products: products,
      categories: categories,
      orders: orders,
      orderItems: orderItems,
      carts: carts,
      wishlist: wishlist,
      comments: comments,
    }));
  }
  useEffect(() => {
    update();
  }, []);


  console.log(main);
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="main-wrapper">
        <NavbarVertical />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customers" element={<Customers main={main} setMain={setMain} update={update} />} />
          <Route path="/products" element={<Products main={main} setMain={setMain} update={update} />} />
          <Route path="/categories" element={<Categories main={main} setMain={setMain} update={update} />} />
          <Route path="carts" element={<Carts main={main} setMain={setMain} update={update} />} />
          <Route path="/orders" element={<Orders main={main} setMain={setMain} update={update} />} />
          {/* Add */}
          <Route path="add-customer" element={<AddCustomers main={main} setMain={setMain} update={update} />} />
          <Route path="add-product" element={<AddProduct main={main} setMain={setMain} update={update} />} />
         <Route path="add-category" element={<AddCategory main={main} setMain={setMain} update={update} />} />
          {/* Edit */}
          <Route path="/edit-customer/:id" element={<EditCustomers main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-product/:id" element={<EditProduct main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-category/:id" element={<EditCategory main={main} setMain={setMain} update={update} />} />
          {/*  Account */}
          <Route path="/carts-user/:id" element={<UserCarts main={main} setMain={setMain} update={update} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App

