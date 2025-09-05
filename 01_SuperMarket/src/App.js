import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
