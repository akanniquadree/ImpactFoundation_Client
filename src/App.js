import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/fontello.css";
import "./assets/css/responsiveness.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import GalleryScreen from "./screens/GalleryScreen";
import VolunteerScreen from "./screens/VolunteerScreen";
import Team from "./screens/Team";
import SponsorScreen from "./screens/SponsorScreen";
import BlogScreen from "./screens/BlogScreen";
import BlogComponent from "./components/BlogComponent";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EventScreen from "./screens/EventScreen";
import EventComponent from "./components/EventComponent";
import ProjectScreen from "./screens/ProjectScreen";
import ProjectComponent from "./components/ProjectComponent";
import DonateScreen from "./screens/DonateScreen";
import Admin from "./admin/Admin";
import BecomeSponsorPage from "./screens/BecomeSponsorPage";
import Test from "./screens/Test";

function App(props) {
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY > 100) {
      setScrollBtn(true);
    } else if (window.scrollY < 100) {
      setScrollBtn(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<Test />} />*/}
          <Route path="/single-project/:id" element={<ProjectComponent />} />
          {/* <Route path="/posts/:id" element={<BlogComponent />} /> */}
          <Route path="/single-events/:id" element={<EventComponent />} />
          {/*<Route path="/gallery/:id" element={<GalleryScreen />} />
          <Route path="/donate" element={<DonateScreen />} />
          <Route path="/profile" element={<ProfileScreen />} /> */}
          <Route path="/project" element={<ProjectScreen />} />
          {/* <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/blog" element={<BlogScreen />} /> */}
          <Route path="/event" element={<EventScreen />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<SponsorScreen />} />
          <Route path="/sponsor" element={<BecomeSponsorPage />} />
          <Route path="/volunteer" element={<VolunteerScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
      <div
        role="button"
        onKeyUp={scrollTop}
        tabIndex="0"
        onClick={scrollTop}
        id="back-to-top"
        className={scrollBtn ? "back-btn-shown" : ""}
      >
        <i className="fa fa-angle-up" title="Go top"></i>
      </div>
    </>
  );
}

export default App;
