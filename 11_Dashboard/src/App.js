import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { NavbarVertical } from "./components/NavbarVertical";
import { Products } from "./components/Products";
import { Sales } from "./components/Sales";
import { Payouts } from "./components/Payouts";
import { Purchases } from "./components/Purchases";
import { Favorites } from "./components/Favorites";
import { Settings } from "./components/Settings";
import { Offcanvas } from "./components/Offcanvas";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <main className="content-wrapper">
        <div className="container ">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            <NavbarVertical />
           <div className="col-lg-9">
            <Navbar /> 
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products/>} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/payouts" element={<Payouts />} /> 
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            </div>
          </div>
        </div>
        <Offcanvas/>
      </main>
    </div>
  );
}

export default App;
