import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import Blog from "../components/Blog";
import Swipper from "../Swiper/Swipper";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";
import HeaderTwo from "../delete/header/header-two";
import Test from "./Test";
import Video from "./screenComponent/Video";
import { teamList } from "../redux_file/action/teamAction";
import { useDispatch, useSelector } from "react-redux";
import { projectList } from "../redux_file/action/projectAction";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const teamMem = useSelector((state) => state.teamMem);
  const { teams } = teamMem;
  const size = 4;
  const Project = useSelector((state) => state.Project);
  const { projects } = Project;
  const { search } = useLocation();
  useEffect(() => {
    dispatch(teamList());
    dispatch(projectList());

    return () => {
      //
    };
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Swipper />

      {/* hiw start*/}
      <section className="hiw-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="hiw-item">
                <div className="hiw-item-img-box hiw-bg1">
                  <figure>
                    <img src="images/hiw-img.jpg" alt="" />
                    <h3 className="hiw-title">Check Out Our Events</h3>
                    <div className="hiw-btn-box">
                      <Link to="/event" className="theme-btn">
                        read more
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hiw-item">
                <div className="hiw-item-img-box hiw-bg2">
                  <figure>
                    <img src="/images/hiw-img2.jpg" alt="" />
                    <h3 className="hiw-title">How to become volunteer</h3>
                    <div className="hiw-btn-box">
                      <Link to="/volunteer" className="theme-btn">
                        read more
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hiw-item">
                <div className="hiw-item-img-box hiw-bg3">
                  <figure>
                    <img src="/images/hiw-img3.jpg" alt="" />
                    <h3 className="hiw-title">Donate To A Project Today</h3>
                    <div className="hiw-btn-box">
                      <Link to="/donate" className="theme-btn">
                        read more
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hiw end*/}

      {/* Service Area start */}
      <section className="service-area text-center">
        <img
          src="/images/heart-icon1.png"
          alt=""
          className="heart-icon heart-icon-1"
        />
        <img
          src="/images/heart-icon2.png"
          alt=""
          className="heart-icon heart-icon-2"
        />
        <img
          src="/images/heart-icon3.png"
          alt=""
          className="heart-icon heart-icon-3"
        />
        <img
          src="/images/heart-icon4.png"
          alt=""
          className="heart-icon heart-icon-4"
        />
        <img
          src="/images/heart-icon5.png"
          alt=""
          className="heart-icon heart-icon-5"
        />
        <img
          src="/images/heart-icon6.png"
          alt=""
          className="heart-icon heart-icon-6"
        />
        <img
          src="/images/heart-icon7.png"
          alt=""
          className="heart-icon heart-icon-7"
        />
        <img
          src="/images/heart-icon8.png"
          alt=""
          className="heart-icon heart-icon-8"
        />
        <img
          src="/images/heart-icon9.png"
          alt=""
          className="heart-icon heart-icon-9"
        />
        <img
          src="/images/heart-icon10.png"
          alt=""
          className="heart-icon heart-icon-10"
        />
        <img
          src="/images/heart-icon11.png"
          alt=""
          className="heart-icon heart-icon-11"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-heading service-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">
                  The Change Begins with You. Impacting Live Everyday
                </h2>
                <p className="section__meta">Join us now</p>
              </div>
            </div>
          </div>
          <div className="row service-wrap">
            <div className="col">
              <div className="service-item service-item1">
                <div className="service-item-inner">
                  <div className="service-icon">
                    <i className="icon-peace-1"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service__title">hope</h4>
                    <p className="service__desc">
                      Lorem ipsum is simply free text available in the market
                      wesbites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-item service-item2">
                <div className="service-item-inner">
                  <div className="service-icon">
                    <i className="icon-praying"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service__title">prayers</h4>
                    <p className="service__desc">
                      Lorem ipsum is simply free text available in the market
                      wesbites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-item service-item3">
                <div className="service-item-inner">
                  <div className="service-icon">
                    <i className="icon-peace"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service__title">peace</h4>
                    <p className="service__desc">
                      Lorem ipsum is simply free text available in the market
                      wesbites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-item service-item4">
                <div className="service-item-inner">
                  <div className="service-icon">
                    <i className="icon-heart"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service__title">donation</h4>
                    <p className="service__desc">
                      Lorem ipsum is simply free text available in the market
                      wesbites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-shared">
                <Link to="/donate" className="theme-btn">
                  donate now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Area end */}

      {/* mixer Area start */}
      <section className="causes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-heading blog-heading text-center">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">Latest Project</h2>
                <p className="section__meta">help us now</p>
              </div>
            </div>
          </div>
          <div className="row blog-content-wrap">
            {projects?.slice(0, 3).map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div className="blog-content">
                  <div className="blog-item blog-item1">
                    <div className="blog-img">
                      <Link to={"/project/" + item._id}>
                        <img
                          src={item.image}
                          alt=""
                          style={{ height: "250px" }}
                        />
                      </Link>
                    </div>

                    <div className="blog-inner-content">
                      <h3 className="blog__title">
                        <Link to={"/project/" + item._id}>{item.heading}</Link>
                      </h3>
                      <p className="blog__desc">{item.desc}</p>
                      <ul className="blog__list">
                        <li>
                          <i className="icon-target"></i> Goal:{" "}
                          <span>#{item.goal}</span>
                        </li>
                        <li>
                          <i className="fa fa-line-chart"></i> Raised:{" "}
                          <span>#{item.raised}</span>
                        </li>
                      </ul>
                      <a href="/donate" className="theme-btn">
                        donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* mixer Area end */}

      {/* mixer Area end */}
      <section className="mixer-area helping-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading mixer-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">
                  No act of kindness, no matter how small, is ever wasted
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="helping-text-box">
                <p className="helping__text">
                  What counts in life is not the more fact that we have lived.
                  It is what difference we have made to the lives of others that
                  will determine the significance of the life we lead. if your
                  actions inspire others to dream more, learn more,and become
                  more, you are a leader.
                </p>

                <p className="helping__text">
                  What counts in life is not the more fact that we have lived.
                  It is what difference we have made to the lives of others that
                  will determine the significance of the life we lead. if your
                  actions inspire others to dream more, learn more,and become
                  more, you are a leader.
                </p>
              </div>
            </div>
          </div>
          <div className="helping-item">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box1">
                  <i className="icon-hamburger"></i>
                  <h4>food</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box2">
                  <i className="icon-water-bottle"></i>
                  <h4>Water</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box3">
                  <i className="icon-health"></i>
                  <h4>Medical</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box1">
                  <i className="fa fa-shopping-bag"></i>
                  <h4>Cloth</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box2">
                  <i className="fa fa-gift"></i>
                  <h4>Items</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="helping-box helping-box3">
                  <i className="fa fa-life-ring"></i>
                  <h4>Support</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mixer Area end */}

      {/* Team Area start */}
      <section className="team-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">Our Volunteers</h2>
                <p className="section__meta">meet profesionals</p>
              </div>
            </div>
          </div>
          <div className="row team-content-wrap">
            {teams?.slice(0, size).map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="team-item team-item1">
                  <div className="team__img">
                    <img
                      style={{ width: "270px", height: "295px" }}
                      src={item.articleImage}
                      alt="team post"
                    />
                    <div className="team__img-links">
                      <ul>
                        <li>
                          <Link to={item.twitter ? item.twitter : "#"}>
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={item.facebook ? item.facebook : "#"}>
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to={item.instagram ? item.instagram : "#"}>
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__title">
                    <h3 className="team__title-title">
                      <a href="/volunteer">{item.name}</a>
                    </h3>
                    <span className="team__title-meta">{item.post}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
          <div className="header-btn ml-auto">
            <Link to="/volunteer" className="theme-btn">
              VIEW MORE...
            </Link>
          </div>
        </div>
      </section>
      {/* Team Area end */}

      {/* Blog Section start */}
      {/* <Blog /> */}
      {/* Blog Section start */}

      {/* call to action start*/}
      <section className="cta-area text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="cta-item cta-item1">
                <h3 className="cta__title">
                  Sponsor an entire trending project
                </h3>
                <Link to="/sponsor" className="theme-btn">
                  become an sponsor
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="cta-item cta-item2">
                <h3 className="cta__title">Explore our Projects</h3>
                <Link to="/project" className="theme-btn">
                  view all project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
