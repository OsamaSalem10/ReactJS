import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { NavbarVertical } from "./components/NavbarVertical";
import { Products } from "./components/Products";
import { AddProduct } from "./components/Form/AddProduct";
import { Categories } from "./components/Categories";
import { AddCategory } from "./components/Form/AddCategory";
import { OrderList } from "./components/OrderList";
import { OrderSingle } from "./components/OrderSingle";
import { VendorGrid } from "./components/VendorGrid";
import { VendorList } from "./components/VendorList";
import { Customers } from "./components/Customers";
import { AddCustomers } from "./components/Form/AddCustomers";
import { EditCustomers } from "./components/Form/EditCustomers";
import { Reviews } from "./components/Reviews";
import { BlogList } from "./components/BlogList";
import { BlogGrid } from "./components/BlogGrid";
import { AddBlog } from "./components/Form/AddBlog";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-wrapper">
        <NavbarVertical />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/orders-list" element={<OrderList />} />
          <Route path="/order-single" element={<OrderSingle />} />
          <Route path="/vendors-grid" element={<VendorGrid />} />
          <Route path="/vendors-list" element={<VendorList />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomers />} />
          <Route path="/edit-customer" element={<EditCustomers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/add-blog" element={<AddBlog />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
