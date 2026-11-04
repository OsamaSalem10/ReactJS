import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { NavbarVertical } from "./components/NavbarVertical";
import { Products } from "./components/Products";
import { AddProduct } from "./components/Form/AddProduct";
import { Categories } from "./components/Categories";
import { AddCategory } from "./components/Form/AddCategory";
import { Orders } from "./components/Orders";
import { Customers } from "./components/Customers";
import { AddCustomers } from "./components/Form/AddCustomers";
import { EditCustomers } from "./components/Form/EditCustomers";
import { EditCategory } from "./components/Form/EditCategory"
import { EditProduct } from "./components/Form/EditProduct"
import { useEffect, useState } from "react";
import ApiServiceGet from "./server/get";
import { ToastContainer } from "react-toastify";
import { UserCarts } from "./components/Account/UserCarts";
import { Carts } from "./components/Carts";
import { AddCart } from "./components/Form/AddCart";
import { EditCart } from "./components/Form/EditCart";
import { Wishlist } from "./components/Wishlist";
import { EditWishlist } from "./components/Form/EditWishlist";
import { UserWishlist } from "./components/Account/UserWishlist";
import { AddWishlist } from "./components/Form/AddWishlist";

function App() {

  const [errorMessage, setErrorMessage] = useState("");
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
    try {
      const users = await ApiServiceGet.getAllUsers();
      const products = await ApiServiceGet.getProducts();
      const categories = await ApiServiceGet.getAllCategories();
      const orders = await ApiServiceGet.getOrders();
      const orderItems = await ApiServiceGet.getOrderItems();
      const carts = await ApiServiceGet.getCarts();
      const wishlist = await ApiServiceGet.getWishlist();
      const comments = await ApiServiceGet.getComments();

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
    } catch (error) {
      setErrorMessage(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "حدث خطأ ما."
      );
    }
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
          <Route path="/wishlist" element={<Wishlist main={main} setMain={setMain} update={update} />} />
          {/* Add */}
          <Route path="/add-customer" element={<AddCustomers main={main} setMain={setMain} update={update} />} />
          <Route path="/add-product" element={<AddProduct main={main} setMain={setMain} update={update} />} />
          <Route path="/add-category" element={<AddCategory main={main} setMain={setMain} update={update} />} />
          <Route path="/add-wishlist/:id" element={<AddWishlist main={main} setMain={setMain} update={update} />} />
          <Route path="/add-cart/:id" element={<AddCart main={main} setMain={setMain} update={update} />} />
          {/* Edit */}
          <Route path="/edit-customer/:id" element={<EditCustomers main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-product/:id" element={<EditProduct main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-category/:id" element={<EditCategory main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-wishlist/:id" element={<EditWishlist main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-carts/:id" element={<EditCart main={main} setMain={setMain} update={update} />} />
          {/*  Account */}
          <Route path="/carts-user/:id" element={<UserCarts main={main} setMain={setMain} update={update} />} />
          <Route path="/wishlist-user/:id" element={<UserWishlist main={main} setMain={setMain} update={update} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App

