import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Wishlist } from "./components/Wishlist";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Offcanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
