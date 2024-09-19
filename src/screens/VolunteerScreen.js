import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { volunteerList } from "../redux_file/action/volunteerAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";

function VolunteerScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState(0);
  const [add, setAdd] = useState("");
  const [msg, setMsg] = useState("");
  const [occu, setOccu] = useState("");
  const dispatch = useDispatch();
  const voluntee = useSelector((state) => state.voluntee);
  const { loading, volunteer, error } = voluntee;
  // const redirect = props.location.search ? props.location.search.split("=")[1] :"/";
  // useEffect(() => {
  //     // if(volunteer){
  //     //     props.history.push(redirect)
  //     // }

  //     return () => {
  //         //
  //     }
  // }, [props.history, redirect, volunteer])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(volunteerList(name, email, dob, phone, add, msg, occu));
  };

  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">Volunteers</h2>
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
                  <img src="/images/form-img.jpg" alt="" />
                </div>
                <div className="form-content">
                  <h3 className="form__title">Requirements</h3>
                  <p className="form__desc">
                    Imagine the impact you are making and the legacy you are
                    leaving behind such that through you, many lives are been
                    impacted and many are able to birth their dreams and truely
                    live their best lives.
                  </p>
                  <ul className="form__list">
                    <li>
                      <i className="fa fa-check"></i>
                      100% COMMITMENT
                    </li>
                    <li>
                      <i className="fa fa-check"></i> MUST BE ACTIVE
                    </li>
                    <li>
                      <i className="fa fa-check"></i> DELIGENCE
                    </li>
                  </ul>
                  <div className="contact-us-box">
                    <div className="contact__item">
                      <h4>Call us</h4>

                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <a href="tel:+2348138685342">
                          <i className="fa fa-phone-square"></i>+234 8138685342{" "}
                        </a>
                        <a href="tel:+234 8134558971">
                          <i className="fa fa-phone-square"></i>+234 8134558971{" "}
                        </a>
                      </div>
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
                        <input
                          type="text"
                          required
                          id="dob"
                          name="dob"
                          onChange={(e) => {
                            setDob(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="occu"
                          name="occu"
                          onChange={(e) => {
                            setOccu(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Occupation"
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

export default VolunteerScreen;
