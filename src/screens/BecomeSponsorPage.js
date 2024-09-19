import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./screenComponent/Footer";
import Header from "./screenComponent/Header";
import { useDispatch, useSelector } from "react-redux";
import { volunteerList } from "../redux_file/action/volunteerAction";

function BecomeSponsorPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [add, setAdd] = useState("");
  const [msg, setMsg] = useState("");
  const [org, setOrg] = useState("");
  const dispatch = useDispatch();
  const voluntee = useSelector((state) => state.voluntee);
  const { loading, volunteer, error } = voluntee;
  // const redirect = props.location.search ? props.location.search.split("=")[1] :"/"
  // useEffect(() => {
  //     if(volunteer){
  //         props.history.push(redirect)
  //     }

  //     return () => {
  //         //
  //     }
  // }, [props.history, redirect, volunteer])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(volunteerList({ name, email, phone, add, msg, org }));
  };

  return (
    <div>
      <Header />

      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">Become A Sponsor</h2>
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

      <section className="contact-form-area register-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-heading text-center">
                <h2 className="section__title">Register Now</h2>
                <p className="section__meta">join us now</p>
              </div>
            </div>
          </div>
          <div className="row form-shared-wrap">
            <div className="col-lg-6">
              <div className="form-shared-content">
                <div className="form-img">
                  <img src="/images/form-img1.jpg" alt="" />
                </div>
                <div className="form-content">
                  <h3 className="form__title">To Our Sponsors</h3>
                  <p className="form__desc">
                    As a donor and for lasting impact, you can drive fulfilment
                    and build a legacy around having projects named after you,
                    your organization or your loved ones, while also monitoring
                    the impact of the project you are funding.
                    <p>Example:</p>
                    <p>
                      <i className="fa fa-check"></i>
                      Madexconsulting Feeding Project
                    </p>
                    <p>
                      <i className="fa fa-check"></i>
                      Adesola Adisa Back2School Scholarship
                    </p>
                    This means because of you, more students or community
                    benefit to be a part of this Great impact, lives keep
                    changing, destinies are being transformed and hope restored.
                    We'll be glad to hear from you
                  </p>

                  <div className="contact-us-box">
                    <div className="contact__item">
                      <h4>Call us</h4>

                      <a href="tel:+2348138685342">
                        <i className="fa fa-phone-square"></i>+234 8138685342
                      </a>
                      <p>
                        <a
                          href="tel:+2348134558971"
                          style={{ marginLeft: "14px" }}
                        >
                          +234 8134558971
                        </a>
                      </p>
                    </div>

                    <div className="contact__item contact__item2">
                      <h4>Send email</h4>
                      <a href="mailto:greatimpactfoundation@gmail.com">
                        <i className="fa fa-envelope"></i>
                        greatimpactfoundation
                        <p style={{ textAlign: "center" }}>@gmail.com</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-shared">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-lg-12">
                      {loading && <div>LOADING.....PLEASE WAIT</div>}
                      {error && <div>{error}</div>}
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          id="name"
                          name="name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="org"
                          name="org"
                          onChange={(e) => {
                            setOrg(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter The Name of your Organization"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="email"
                          required
                          id="email"
                          name="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="number"
                          required
                          id="phone"
                          name="phone"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          id="add"
                          name="add"
                          onChange={(e) => {
                            setAdd(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="textarea"
                          id="msg"
                          name="msg"
                          onChange={(e) => {
                            setMsg(e.target.value);
                          }}
                          placeholder="Write a Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn submit__btn">
                        send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BecomeSponsorPage;
