import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Admin/Dashboard";
import { Contact } from "./components/Contact";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Products } from "./components/Admin/Products";
import { Sales } from "./components/Admin/Sales";
import { Payouts } from "./components/Admin/Payouts";
import { Purchases } from "./components/Admin/Purchases";
import { Settings } from "./components/Admin/Settings";
import { Favorites } from "./components/Admin/Favorites";
import { Shop } from "./components/Shop";
import { DetailsProdect } from "./components/DetailsProdect";


function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Offcanvas />
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/DetailsProdect" element={<DetailsProdect />} />
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardProducts" element={<Products />} />
        <Route path="/dashboardSales" element={<Sales />} />
        <Route path="/dashboardPayouts" element={<Payouts />} />
        <Route path="/dashboardPurchases" element={<Purchases />} />
        <Route path="/dashboardFavorites" element={<Favorites />} />
        <Route path="/dashboardSettings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
