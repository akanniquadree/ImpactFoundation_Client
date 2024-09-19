import React from "react";
import { Link } from "react-router-dom";
import Footer from "./screenComponent/Footer";
import Header from "./screenComponent/Header";

function ContactScreen(props) {
  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">Contact Us</h2>
                <ul className="breadcrumb__list">
                  <li className="active__list-item">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">Get in Touch With Us</h2>
                <p className="section__meta">Write a message</p>
                <p className="section__desc">
                  Please fill out the form and we'll be in touch with you
                  shortly!
                </p>
                <ul className="section__list">
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
            <div className="col-lg-6">
              <div className="form-shared">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="col-lg-12 form-group">
                      <input
                        className="form-control"
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-lg-12 col-sm-12 form-group">
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Write a Message"
                      ></textarea>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button className="theme-btn submit__btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row contact-detail-action">
            <div className="col-lg-4">
              <div className="contact-item contact-item1">
                <h3 className="contact__title">About</h3>
                <p className="contact__desc">
                  A charity organization that is committed to reaching out and
                  impacting lives of people through a creative and productive
                  approach.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-item contact-item2">
                <h3 className="contact__title">Address</h3>
                <p className="contact__desc">Available soon ......</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-item contact-item3">
                <h3 className="contact__title">Contact</h3>
                <p className="contact__desc">
                  greatimpactfoundation@gmail.com
                  <br />
                  +234 8138685342 <br />
                  +234 8134558971
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactScreen;
