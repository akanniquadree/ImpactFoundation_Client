import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import NavLinks from './NavLinks'
import Test from '../Test'

function Header() {
    const [sticky, setSticky] = useState(false)
    const login = useSelector(state => state.login)
    const {userInfo} = login

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          //
        };
    },[]);

    const handleScroll = (e) =>{
        if(window.scrollY > 100){
            setSticky(true)
        }else if (window.scrollY < 100) {
            setSticky(false)
        }
    }
    // const mobileMenu = () => {
    //     //Mobile Menu Toggle
       
    //     let mainNavToggler = document.querySelector('.mobile-menu-toggle');
    //     let mainNav = document.querySelector('.side-nav-container');
    
    //     mainNavToggler.addEventListener('click', function () {
    //       mainNav.classList.toggle("nav-active");
    //     });
    
    //     //Close Mobile Menu
    //     let closeMenu = document.querySelector(".side-menu-close");
    //     closeMenu.addEventListener("click", function () {
    //       mainNav.classList.remove("active");
    //     });
    //   };
      
    return (
        <div>
                <header className="header-area">
                <div className="header-top-action">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="top-action-content">
                                    <div className="info-box info-box-1 d-flex align-items-center">
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <a href="mailto:greatimpactfoundation@gmail.com">
                                                    <i className="fa fa-envelope"></i>
                                                    greatimpactfoundation@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+2348134558971">
                                                    <i className="fa fa-phone-square"></i>+234 8134558971
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="top-action-content info-action-content">
                                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                        <ul className="top-action-list d-flex align-items-center">
                                            <li className="action__text">
                                                {
                                                    userInfo ? <div><Link to="/profile">{userInfo.name}{" "}</Link>
                                                                    <Link to="/">Log Out</Link>
                                                                </div>:
                                                            <div>
                                                               <Link to="/login">login</Link> {" "}
                                                                <Link to="/register">register</Link> 
                                                            </div>       
                                                }
                                                
                                            </li>
                                            <li>
                                                <Link to="#none">
                                                    <i className="fa fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#none">
                                                    <i className="fa fa-pinterest"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#none">
                                                    <i className="fa fa-instagram"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Test/>
            <div className="side-nav-container">
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close"></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li className="sidenav__item">
                            <Link to="/">home</Link>
                            <span className="menu-plus-icon"></span>
                            <ul className="side-sub-menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidenav__item">
                        <a href="#none">project</a>
                            <span className="menu-plus-icon"></span>
                            <ul className="side-sub-menu">
                                <li>
                                    <Link to="/project">project</Link>
                                </li>
                                <li>
                                    <Link to="/donate">donate now</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidenav__item">
                            <Link to="/event">event</Link>
                            <span className="menu-plus-icon"></span>
                        </li>
                        <li className="sidenav__item">
                            <Link to="/blog">Blog</Link>
                            <span className="menu-plus-icon"></span>
                        </li>
                        <li className="sidenav__item">
                            <a href="#none">pages</a>
                            <span className="menu-plus-icon"></span>
                                <ul className="side-sub-menu">
                                    <li>
                                        <Link to="/about">about</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/volunteer">become a volunteer</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">our team</Link>
                                    </li>
                                    <li>
                                        <Link to="/sponsors">sponsors</Link>
                                    </li>
                                    <li>
                                        <Link to="/sponsor">become a sponsor</Link>
                                    </li>
                                </ul>
                        </li>
                        <li className="sidenav__item">
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                    <ul className="side-social">
                        <li>
                            <Link to="#none">
                                <i className="fa fa-facebook"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#none">
                                <i className="fa fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#none">
                                <i className="fa fa-youtube-play"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#none">
                                <i className="fa fa-google-plus"></i>
                            </Link>
                        </li>
                    </ul>
                    <div className="side-btn">
                        <Link to="/donate" className="theme-btn">
                            donate now
                        </Link>
                    </div>
                </div>
            </div>
        </header>

      
        </div>
    )
}

export default Header
