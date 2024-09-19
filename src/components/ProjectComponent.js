import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import causeImage1 from "../images/img12.jpg";
// import causeImage2 from "../images/img13.jpg";
// import causeImage3 from "../images/img14.jpg";
// import avatar1 from "../images/comment-avatar.jpg";
// import avatar2 from "../images/comment-avatar2.jpg";
import authorAvatar1 from "../images/author-avatar.jpg";
// import authorAvatar2 from "../images/author-avatar2.jpg";
// import authorAvatar3 from "../images/author-avatar3.jpg";
// import authorAvatar4 from "../images/author-avatar4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { singleProject } from "../redux_file/action/projectAction";
import Footer from "../screens/screenComponent/Footer";
import { Skeleton } from "@mui/material";

function ProjectComponent(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const SingleProject = useSelector((state) => state.SingleProject);
  const { loading, project, error } = SingleProject;
  useEffect(() => {
    dispatch(singleProject(id));
    return () => {
      //
    };
  }, [dispatch, id]);
  return (
    <div>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">Project</h2>
                <ul className="breadcrumb__list">
                  <li className="active__list-item">
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/project">back</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="causes-detail-area">
        <div className="container">
          {loading ? (
            <div className="row blog-content-wrap">
              <div className="col-lg-8">
                <div className="blog-content">
                  <div className="blog-item">
                    <div className="blog-img">
                      <Skeleton animation="wave" />
                    </div>
                    <div className="blog-inner-content">
                      <div className="inner-causes-box">
                        <h3 className="blog__title">
                          <Skeleton animation="wave" />
                        </h3>
                        <ul className="blog__list">
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                        </ul>
                      </div>
                      <div className="inner-causes-btn">
                        <Skeleton animation="wave" className="theme-btn" />
                      </div>
                    </div>
                    <div className="blog-inner-content-2">
                      <Skeleton animation="wave" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-shared">
                  <div className="side-widget">
                    <div className="author-box">
                      <div className="author__detail">
                        <Skeleton animation="wave" />
                      </div>
                    </div>
                  </div>
                  <div className="side-widget">
                    <Skeleton animation="wave" />
                  </div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="row blog-content-wrap">
              <div className="col-lg-8">
                <div className="blog-content">
                  <div className="blog-item">
                    <div className="blog-img">
                      <img
                        src={project.image}
                        alt=""
                        style={{ height: "500px" }}
                      />
                    </div>
                    <div className="blog-inner-content">
                      <div className="inner-causes-box">
                        <h3 className="blog__title">{project.heading}</h3>
                        <ul className="blog__list">
                          <li>
                            <i className="icon-target"></i> Goal:{" "}
                            <span>#{project.goal}</span>
                          </li>
                          <li>
                            <i className="fa fa-line-chart"></i> Raised:{" "}
                            <span>#{project.raised}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="inner-causes-btn">
                        <Link to="/donate" className="theme-btn">
                          donate now
                        </Link>
                      </div>
                    </div>
                    <div className="blog-inner-content-2">
                      <p className="causes__text">{project.desc}</p>
                      <p className="causes__text causes__text2">
                        {project.desc1}
                      </p>
                      {/* <div className="inner-causes-img-box row">
                        <div className="col-lg-6">
                          <div className="inner-causes-img-item inner-causes-img-item1">
                            <img src={project.image} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="inner-causes-img-item inner-causes-img-item2">
                            <img src={project.image} alt="" />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-shared">
                  <div className="side-widget">
                    <div className="author-box">
                      <div className="author__detail">
                        <span className="author__meta">
                          {new Date(project.createdAt).toDateString()}
                        </span>
                        <h4 className="author__title">
                          Organizer: <a href="#none">{project.organizer}</a>
                        </h4>
                        <ul className="author__list">
                          <li>
                            <i className="fa fa-tag"></i> {project.type}
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>
                            {project.loc}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="side-widget">
                                <h2 className="widget__title">Recent Donations</h2>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <img src={authorAvatar2} alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$20</span>
                                        <h4 className="author__title author__title2">
                                            David Marks <span>3 hours ago</span>
                                        </h4>
                                        <ul className="author__list">
                                            <li>God bless you dear</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar">
                                        <img src={authorAvatar3} alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$35</span>
                                        <h4 className="author__title author__title2">
                                            Jean Jerome <span>10 hours ago</span>
                                        </h4>
                                        <ul className="author__list">
                                            <li>My prayers are with you</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author-box recent-donate-item">
                                    <div className="author__avatar"></div>
                                    <div className="author__detail">
                                        <span className="author__meta2">$35</span>
                                        <h4 className="author__title author__title2">
                                            Anonymous <span>20 hours ago</span>
                                        </h4>
                                </div>
                            </div>
                            <div className="author-box recent-donate-item">
                                <div className="author__avatar">
                                    <img src={authorAvatar4} alt="" />
                                </div>
                                <div className="author__detail">
                                    <span className="author__meta2">$160</span>
                                        <h4 className="author__title author__title2">
                                            Kistin Eve <span>1 day ago</span>
                                        </h4>
                                        <ul className="author__list">
                                            <li>Wishing you blessings</li>
                                        </ul>
                                </div>
                            </div>
                        </div>*/}
                  <div className="side-widget">
                    <h2 className="widget__title">Share Cause</h2>
                    <div className="side-share-profile">
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
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectComponent;
