import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Routes, Route } from "react-router-dom"
import './App.css';
import { Footer } from "./components/Footer";
import { ListingsGridCars } from "./components/ListingsGridCars";
import { ListingsListCars } from "./components/ListingsListCars";
import { SingleEntryCars } from "./components/SingleEntryCars";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings-grid-cars" element={<ListingsGridCars />} />
        <Route path="/listings-list-cars" element={<ListingsListCars />} />
        <Route path="single-entry-cars" element={<SingleEntryCars/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
