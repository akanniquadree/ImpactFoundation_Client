import React, { useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [show, setShow] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  let style;
  let style2;
  if (show && dropDown) {
    style = { display: "block", backgroundColor: "none", border: "none" };
  } else if (dropDown) {
    style = { display: "block", top: "5vh", content: "" };
  } else {
    style = { display: "none" };
  }
  if (show && dropDown2) {
    style2 = { display: "block", backgroundColor: "none", border: "none" };
  } else if (dropDown2) {
    style2 = { display: "block", top: "5vh", content: "" };
  } else {
    style2 = { display: "none" };
  }
  return (
    <React.Fragment>
      <div>
        <nav
          className="navbar navbar-expand-md bg-white navbar-light sticky-top"
          style={{ height: "120px" }}
        >
          <Link className="navbar-brand" to="/">
            <img src="/images/logo1.png" alt="TGIF" title="TGIF" />
          </Link>
          <div className="header-btn ml-auto">
            <Link to="/donate" className="theme-btn">
              donate now
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar links --> */}
          <div
            style={
              show
                ? {
                    display: "block",
                    position: "absolute",
                    paddingLeft: "8px",
                    width: "50%",
                    top: "15vh",
                    backgroundColor: "#fff",
                    color: "black",
                    flexDirection: "column",
                  }
                : { display: "none", justifyContent: "flex-end" }
            }
            className={"collapse navbar-collapse"}
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  to="#"
                  // onClick={() => {
                  //   setDropDown2(!dropDown2);
                  // }}
                  onMouseEnter={() => {
                    setDropDown2(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown2(false);
                  }}
                >
                  Project
                </Link>
                <ul
                  className="dropdown-menu"
                  style={style2}
                  onMouseEnter={() => {
                    setDropDown2(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown2(false);
                  }}
                >
                  {/* style={dropDown ? {display:'block', top:"5vh",}:{display:'none'}} */}
                  <li className="dropdown-item">
                    <Link
                      to="/project"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Project
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/donate"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  Event
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  to="#"
                  onMouseEnter={() => {
                    setDropDown(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown(false);
                  }}
                  // onMouseLeave={() => {
                  //   setDropDown(dropDown);
                  // }}
                >
                  Pages
                </Link>
                <ul
                  className="dropdown-menu"
                  style={style}
                  onMouseEnter={() => {
                    setDropDown(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown(false);
                  }}
                >
                  {/* style={dropDown ? {display:'block', top:"5vh",}:{display:'none'}} */}
                  <li className="dropdown-item">
                    <Link
                      to="/about"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      About
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/gallery"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/volunteer"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Become a Member
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/team" style={{ color: "black", opacity: "0.7" }}>
                      Our Team
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/sponsors"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Sponsors
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/sponsor"
                      style={{ color: "black", opacity: "0.7" }}
                    >
                      Become a Sponsor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Test;
