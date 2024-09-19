import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import blogImage1 from "../images/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { projectList } from "../redux_file/action/projectAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";
import { Pagination, TextField } from "@mui/material";
import { Skeleton } from "@mui/material";

function ProjectScreen(props) {
  const dispatch = useDispatch();
  const Project = useSelector((state) => state.Project);
  const { loading, projects, error } = Project;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemPerPage = 9;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const SearchData = searchQuery
    ? projects?.filter((item) =>
        item.heading.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;
  const currentPageData = SearchData
    ? SearchData?.slice(startIndex, endIndex)
    : [];
  useEffect(() => {
    dispatch(projectList());
    return () => {
      //
    };
  }, [dispatch]);
  return (
    <div>
      <Header />
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="causes-area causes-area2">
        <div className="container">
          <div className="row blog-content-wrap">
            {loading ? (
              <>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton
                          animation="wave"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="blog-inner-content">
                        <h3
                          className="blog__title"
                          style={{ marginBottom: "10px" }}
                        >
                          <Skeleton animation="wave" />
                        </h3>
                        <div style={{ height: "60px" }}>
                          <p className="blog__desc clamp-text ">
                            <Skeleton animation="wave" />
                          </p>
                        </div>
                        <ul className="blog__list">
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                        </ul>
                        <Skeleton animation="wave" className="theme-btn" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton
                          animation="wave"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="blog-inner-content">
                        <h3
                          className="blog__title"
                          style={{ marginBottom: "10px" }}
                        >
                          <Skeleton animation="wave" />
                        </h3>
                        <div style={{ height: "60px" }}>
                          <p className="blog__desc clamp-text ">
                            <Skeleton animation="wave" />
                          </p>
                        </div>
                        <ul className="blog__list">
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                        </ul>
                        <Skeleton animation="wave" className="theme-btn" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton
                          animation="wave"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="blog-inner-content">
                        <h3
                          className="blog__title"
                          style={{ marginBottom: "10px" }}
                        >
                          <Skeleton animation="wave" />
                        </h3>
                        <div style={{ height: "60px" }}>
                          <p className="blog__desc clamp-text ">
                            <Skeleton animation="wave" />
                          </p>
                        </div>
                        <ul className="blog__list">
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                          <li>
                            <Skeleton animation="wave" />
                          </li>
                        </ul>
                        <Skeleton animation="wave" className="theme-btn" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <>
                <div className="col-lg-12" style={{ marginBottom: "20px" }}>
                  <TextField
                    id="filled-start-adornment"
                    // id="outlined-search"
                    // sx={searchStyle}
                    label="Search by title"
                    type="search"
                    size="small"
                    onChange={handleChange}
                    value={searchQuery}
                  />
                </div>
                {currentPageData.map((item, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="blog-content">
                      <div className="blog-item blog-item1">
                        <div className="blog-img">
                          <Link to={`/single-project/${item._id}`}>
                            <img
                              src={item.image}
                              alt=""
                              style={{ height: "250px" }}
                            />
                          </Link>
                        </div>
                        <div
                          className="blog-inner-content"
                          style={{ height: "300px" }}
                        >
                          <h3
                            className="blog__title"
                            style={{ marginBottom: "10px" }}
                          >
                            <Link to={`/single-project/${item._id}`}>
                              {item.heading}
                            </Link>
                          </h3>
                          <div style={{ height: "60px" }}>
                            <p className="blog__desc clamp-text ">
                              {item.desc}
                            </p>
                          </div>
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
                          <Link className="theme-btn" to="/donate">
                            donate now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Pagination
                  className="kols"
                  variant="outlined"
                  page={currentPage}
                  onChange={handlePageChange}
                  count={Math.ceil(projects?.length / itemPerPage)}
                  color="primary"
                  showFirstButton
                  showLastButton
                />
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectScreen;
