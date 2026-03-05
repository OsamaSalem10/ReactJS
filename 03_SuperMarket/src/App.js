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
import { Favorites } from "./components/Admin/Favorites";
import { Shop } from "./components/Shop";
import { DetailsProdect } from "./components/DetailsProdect";
import { Cart } from "./components/User/Cart";
import { Delivery } from "./components/User/Delivery";
import { Pickup } from "./components/User/Pickup";
import { ThankYou } from "./components/User/ThankYou";
import { AccountSettings } from "./components/User/AccountSettings";
import { HelpCenter } from "./components/User/HelpCenter";
import { AccountPayment } from "./components/User/AccountPayment";
import { Settings } from "./components/Admin/Settings";
import { AccountFavorites } from "./components/User/AccountFavorites";
import { AccountReviews } from "./components/User/AccountReviews";
import { AccountListings } from "./components/User/AccountListings";
import { AccountProfile } from "./components/User/AccountProfile";
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
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Pickup" element={<Pickup />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardProducts" element={<Products />} />
        <Route path="/dashboardSales" element={<Sales />} />
        <Route path="/dashboardPayouts" element={<Payouts />} />
        <Route path="/dashboardPurchases" element={<Purchases />} />
        <Route path="/dashboardFavorites" element={<Favorites />} />
        <Route path="/dashboardSettings" element={<Settings />} />

        {/* User Account */}
        <Route path="/accountSettings" element={<AccountSettings />} />
        <Route path="/helpCenter" element={<HelpCenter />} />
        <Route path="/accountFavorites" element={<AccountFavorites />} />
        <Route path="/accountPayment" element={<AccountPayment />} />
        <Route path="/accountReviews" element={<AccountReviews />} />
        <Route path="/accountListings" element={<AccountListings />} />
        <Route path="/accountProfile" element={<AccountProfile />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
