import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { NavbarVertical } from "./components/NavbarVertical"
import { Users } from "./components/Users";
import { Categories } from "./components/Categories";
import { Companies } from "./components/Companies";
import { GetAllUsers  , GetAllCategories , GetAllCompanies} from "./server/get";
import { AddUser  ,  AddCategory , AddCompany} from "./components/Form/Post";
import { EditUser  , EditCategory , EditCompany} from "./components/Form/Edit";
import { ToastContainer } from "react-toastify";
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [main, setMain] = useState({
    users: [],
    categories: [],
    companies: []
  });

  useEffect(() => {
    Update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Update = async () => {
    const _users = await GetAllUsers();
    const _categories = await GetAllCategories();
    const _companies = await GetAllCompanies();
    setMain({ ...main, users: _users, categories: _categories, companies: _companies });
  }

  return (
    <div className="wrapper">
         <ToastContainer />
      <NavbarVertical collapsed={collapsed} />
      <main className="main">
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Routes>
          <Route path="/" element={<Users main={main} setMain={setMain} Update={Update} />} />
          <Route path="/add-user" element={<AddUser main={main} setMain={setMain} Update={Update} />} />
          <Route path="/edit-user" element={<EditUser main={main} setMain={setMain} Update={Update} />} />

          {/* Categories */}
          <Route path="/categories" element={<Categories main={main} setMain={setMain} Update={Update} />} />
          <Route path="/add-category" element={<AddCategory main={main} setMain={setMain} Update={Update} />} />
          <Route path="/edit-category" element={<EditCategory main={main} setMain={setMain} Update={Update} />} />

          {/* Companies */}
          <Route path="/companies" element={<Companies main={main} setMain={setMain} Update={Update} />} />
        <Route path="/add-company" element={<AddCompany main={main} setMain={setMain} Update={Update} />} />
           <Route path="/edit-company" element={<EditCompany main={main} setMain={setMain} Update={Update} />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
