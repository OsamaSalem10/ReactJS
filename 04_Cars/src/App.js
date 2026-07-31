import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Routes, Route } from "react-router-dom"
import './App.css';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings-grid-cars" element={<Home />} />
        <Route path="/listings-grid-cars" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
