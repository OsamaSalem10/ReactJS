import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Offcanvas />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
