import React from "react";
import "./admin.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Event from "./pages/event/Event";
import Blog from "./pages/blog/Blog";
import Sponspor from "./pages/sponsor/Sponspor";
import Gallery from "./pages/gallery/Gallery";
import Project from "./pages/project/Project";

function Admin(props) {
  return (
    <div>
      {/* <BrowserRouter>
        <TopBar />
        <Routes className="admin_container">
          <SideBar />
          <Route exact path="/admin">
            <Home />
          </Route>
          <Route path="/admin/team">
            <Team />
          </Route>
          <Route path="/admin/event">
            <Event />
          </Route>
          <Route path="/admin/blog">
            <Blog />
          </Route>
          <Route path="/admin/sponsor">
            <Sponspor />
          </Route>
          <Route path="/admin/gallery">
            <Gallery />
          </Route>
          <Route path="/admin/project">
            <Project />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default Admin;
