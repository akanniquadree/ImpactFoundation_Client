import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div>
              <section className="footer-area">
                    <div className="Blogletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto text-center">
                                    <div className="section-heading footer-heading">
                                        <div className="section-icon">
                                            <img src="/images/section-icon.png" alt="section-icon" />
                                        </div>
                                        <h2 className="section__title text__white">Blogletter</h2>
                                        <p className="section__meta">stay updated</p>
                                    </div>
                                    <div className="Blogletter-form">
                                        <div className="form-shared">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" placeholder="Email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <button className="theme-btn submit__btn" type="submit">
                                                            subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">about</h3>
                                    <ul className="foot__links">
                                        <li>
                                            <Link to="/causes">causes</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">about</Link>
                                        </li>
                                        <li>
                                            <Link to="/event">Events</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title">explore</h3>
                                    <ul className="foot__links">
                                        <li>
                                            <a href="#none">Press Release</a>
                                        </li>
                                        <li>
                                            <Link to="/contact">contact</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog Posts</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">links</h3>
                                    <ul className="foot__links">
                                        <li>
                                            <a href="#none">Podcasts</a>
                                        </li>
                                        
                                        <li>
                                            <a href="/video">Videos</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">blog</h3>
                                    <ul className="foot__links">
                                        
                                        <li>
                                            <Link to="/volunteer">Being Volunteer</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item4">
                                    <h3 className="widget__title">contact</h3>
                                    <ul className="contact__info">
                                        <li>
                                            <a href="mailto:greatimpactfoundation@gmail.com">
                                                greatimpactfoundation@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+234 8134558971">+234 8134558971</a>
                                        </li>
                                    </ul>
                                    <div className="footer__social">
                                        <ul>
                                            <li>
                                                <a href="#none">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#none">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#none">
                                                    <i className="fa fa-pinterest"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#none">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-desc">
                                        <p>© Copyright {new Date().getFullYear()} by <a href="#none">Akanni Quadree Oluwatosin</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

         
        </div>
    )
}

export default Footer
