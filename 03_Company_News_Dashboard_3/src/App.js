import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { NavbarVertical } from "./components/NavbarVertical"
import {Users} from "./components/Users";
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="wrapper">
      <NavbarVertical collapsed={collapsed} />
      <main className="main">
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
