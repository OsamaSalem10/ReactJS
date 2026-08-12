import { Route, Routes } from "react-router-dom";
import { NavbarVertical } from "./components/NavbarVertical";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { Users } from "./components/Users";
import { AddUser } from "./components/Form/AddUser";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div class="admin-shell">
        <div className="sidebar-backdrop" data-sidebar-close></div>
        <NavbarVertical/>
         <div class="admin-main">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="/users" element={<Users />} /> 
          <Route path="/add-user" element={<AddUser />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/" element={<Index />} /> 
          <Route path="/" element={<Index />} /> 
          <Route path="/" element={<Index />} /> 
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
