import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { DashboardDefault, DashboardAnalytics, DashboardSaas, DashboardSocial, DashboardCrypto } from "./components/DashboardDefault";
import { Products, Details, Orders, Customers, Invoice } from "./components/Ecommerce";
import { ProjectsOverview, ProjectsDetails } from "./components/Projects";
import { Chat } from "./components/Chat";
import { FileManager } from "./components/FileManager";
import { NavbarVertical } from "./components/NavbarVertical"
import { EmailInbox, EmailDetails } from "./components/Email";
import { TasksList, TasksKanban } from "./components/Tasks";
import { PagesProfile, PagesBlank, PagesSettings } from "./components/Profile";

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

          <Route path="/projects-overview" element={<ProjectsOverview />} />
          <Route path="/projects-details" element={<ProjectsDetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/email-inbox" element={<EmailInbox />} />
          <Route path="/email-details" element={<EmailDetails />} />
          <Route path="/tasks-list" element={<TasksList />} />
          <Route path="/tasks-kanban" element={<TasksKanban />} />
          <Route path="/pages-profile" element={<PagesProfile />} />
          <Route path="/pages-settings" element={<PagesSettings />} />
          <Route path="/pages-blank" element={<PagesBlank />} />


        </Routes>
      </main>
    </div>
  );
}

export default App;
