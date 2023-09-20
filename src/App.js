import React, { useState } from 'react';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";

import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./layout/SideBar";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Calender from "./pages/admin/calendar/Calender";
import News from "./pages/admin/new/New";
import Mains from "./pages/User/main/Main"

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [isSidebar, setIsSidebar] = useState(true);
  
  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <div className="app">
      {userRole === "admin" ? (
        <>
          <CssBaseline />
            <SideBar isSidebar={isSidebar} />
            <main className="content">
              <HeaderBar setIsSidebar={setIsSidebar} />
              <div className="content_body">
                <Box m="20px">
                  <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/calendar" element={<Calender />} />
                    <Route path="/admin/news" element={<News />} />
                  </Routes>
                </Box>
              </div>
            </main>

        </>
     ) : userRole === "user" ? (
      <>
      <CssBaseline />
        <SideBar isSidebar={isSidebar} />
        <main className="content">
          <HeaderBar setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
              <Routes>
                <Route path="/user/main" element={<Mains />} />
              </Routes>
            </Box>
          </div>
        </main>
    </>
    ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
