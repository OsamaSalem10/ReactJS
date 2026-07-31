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
import { useCallback, useEffect, useState } from "react";
import { _getAllCategories, _getAllUsers, _getOrders, _getProducts } from "./server/get";
import { ToastContainer } from "react-toastify";
import { AddOrders } from "./components/Form/AddOrders";
import { Carts } from "./components/Carts";
import { AddCart } from "./components/Form/AddCart";

function App() {


  const [main, setMain] = useState({
   
    users: [],
    categories: [],
    products: [],
    orders: [],


  })


  const update = useCallback(async () => {
    try {
      const [ users, categories, products, orders] = await Promise.all([
     
        _getAllUsers(),
        _getAllCategories(),
        _getProducts(),
        _getOrders(),
      
      ]);

      setMain({
        users,
        categories,
        products,
        orders,
        
      });

    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    update();
  }, [update]);



  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="main-wrapper">
        <NavbarVertical />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products main={main} setMain={setMain} update={update} />} />
          <Route path="/add-product" element={<AddProduct main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-product" element={<EditProduct main={main} setMain={setMain} update={update} />} />
          <Route path="/categories" element={<Categories main={main} setMain={setMain} update={update} />} />
          <Route path="/carts" element={<Carts main={main} setMain={setMain} update={update} />} />
          <Route path="/add-order" element={<AddOrders main={main} setMain={setMain} update={update} />} />
          <Route path="/add-order-list" element={<AddOrderList main={main} setMain={setMain} update={update} />} />
          <Route path="/add-category" element={<AddCategory main={main} setMain={setMain} update={update} />} />
          <Route path="/edit-category" element={<EditCategory main={main} setMain={setMain} update={update} />} />
          <Route path="/orders" element={<Orders main={main} setMain={setMain} update={update} />} />
          <Route path="/order-list" element={<OrdersList main={main} setMain={setMain} update={update} />} />
          <Route path="/vendors-grid" element={<VendorGrid />} />
          <Route path="/vendors-list" element={<VendorList />} />
          <Route path="/customers" element={<Customers main={main} setMain={setMain} update={update} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/add-blog" element={<AddBlog />} />
          {/* From */}
          <Route path="/add-customer" element={<AddCustomers update={update} />} />
          <Route path="/edit-customer" element={<EditCustomers update={update} />} />
          <Route path="/add-cart" element={<AddCart  main={main} setMain={setMain} update={update} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App

