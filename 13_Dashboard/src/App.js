import { Route, Routes } from "react-router-dom";
import { NavbarVertical } from "./components/NavbarVertical";
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";
import { Users } from "./components/Users";
import { AddUser } from "./components/Form/AddUser";
import { Profile } from "./components/Profile";
import { Charts } from "./components/Charts";
import { Tables } from "./components/Tables"
import { Forms } from "./components/Forms";
import { Components } from "./components/Components";
import { Alerts } from "./components/Alerts";
import { Modals } from "./components/Modals"
import { Settings } from "./components/Settings"
import { Blank } from "./components/Blank"
function App() {
  return (
    <div className="App">
      <div className="admin-shell">
        <div className="sidebar-backdrop" data-sidebar-close></div>
        <NavbarVertical />
        <div className="admin-main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/components" element={<Components />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/blank" element={<Blank />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
