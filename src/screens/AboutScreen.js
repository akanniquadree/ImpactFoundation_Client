import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { teamList } from "../redux_file/action/teamAction";
import Footer from "./screenComponent/Footer";
import Header from "./screenComponent/Header";

function AboutScreen(props) {
  const dispatch = useDispatch();
  const teamMem = useSelector((state) => state.teamMem);
  const { teams } = teamMem;
  const size = 4;
  useEffect(() => {
    dispatch(teamList());
    return () => {
      //
    };
  }, []);
  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">About Us</h2>
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

      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-large-img">
                <img src="/images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-semi-img" style={{ height: "100%" }}>
                <img src="/images/about-img2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-heading">
                <div className="section-heading">
                  <h2 className="section__title">Learn About Our Foundation</h2>
                  <p className="section__meta">The Great Impact Foundation</p>
                  <p className="section__desc" style={{ marginTop: "10px" }}>
                    A charity organization that is commited to reaching out and
                    impacting lives of people through a creative and productive
                    approach.
                  </p>
                  <div className="section__desc" style={{ marginTop: "10px" }}>
                    <h4>Our Mission</h4>
                    <ul style={{ listStyle: "square", marginLeft: "20px" }}>
                      <li>
                        To impact lives through various creative and productive
                        way
                      </li>
                      <li>To be a channel for reaching out to the needy</li>
                      <li>
                        To assists Corps member in achieving their Personal
                        Community Development Service through the Foundation
                      </li>
                    </ul>
                  </div>
                  <div className="section__desc" style={{ marginTop: "10px" }}>
                    <h4>Core Values</h4>
                    <ul style={{ listStyle: "square", marginLeft: "20px" }}>
                      <li>Commitment</li>
                      <li>Creativity</li>
                      <li>Productivity</li>
                      <li>Impact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {teams?.slice(0, 4).map((item, index) => (
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
                          <Link to={"#"}>
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to={"#"}>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutScreen;
