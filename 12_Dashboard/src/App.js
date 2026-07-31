import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { DashboardDefault, DashboardAnalytics, DashboardSaas, DashboardSocial , DashboardCrypto} from "./components/DashboardDefault";
import { Products , Details, Orders, Customers, Invoice} from "./components/Ecommerce";
import { NavbarVertical } from "./components/NavbarVertical"
function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="wrapper">
      <NavbarVertical collapsed={collapsed} />
      <main className="main">
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Routes>
          <Route path="/" element={<DashboardDefault />} />
          <Route path="/dashboard-analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard-saas" element={<DashboardSaas />} />
          <Route path="/dashboard-social" element={<DashboardSocial />} />
          <Route path="/dashboard-crypto" element={<DashboardCrypto />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products-details" element={<Details />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/invoice" element={<Invoice />} />
   
          <Route path="/projects-overview" element={<DashboardDefault />} />
          <Route path="/projects-details" element={<DashboardDefault />} />
          <Route path="/chat" element={<DashboardDefault />} />
          <Route path="/file-manager" element={<DashboardDefault />} />
          <Route path="/calendar" element={<DashboardDefault />} />
          <Route path="/email-inbox" element={<DashboardDefault />} />
          <Route path="/email-details" element={<DashboardDefault />} />
          <Route path="/tasks-list" element={<DashboardDefault />} />
          <Route path="/tasks-kanban" element={<DashboardDefault />} />
          <Route path="/pages-profile" element={<DashboardDefault />} />
          <Route path="/pages-settings" element={<DashboardDefault />} />
          <Route path="/pages-blank" element={<DashboardDefault />} />
          <Route path="/tasks-kanban" element={<DashboardDefault />} />


        </Routes>
      </main>
    </div>
  );
}

export default App;
