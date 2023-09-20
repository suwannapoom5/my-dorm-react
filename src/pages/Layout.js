import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeaderBar from "../layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "../layout/SideBar";
import Dashboard from "./admin/dashboard/Dashboard";
import Calender from "./admin/calendar/Calender";
import News from "./admin/new/New";

function Layout() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <CssBaseline />
      <div className="app">
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
      </div>
    </>
  );
}

export default Layout;