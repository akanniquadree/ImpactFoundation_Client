import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { teamList } from "../redux_file/action/teamAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";
import { Pagination, Skeleton, TextField } from "@mui/material";

function Team(props) {
  const dispatch = useDispatch();
  const teamMem = useSelector((state) => state.teamMem);
  const { loading, teams, error } = teamMem;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemPerPage = 4;
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
    ? teams?.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.post.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : teams;
  const currentPageData = SearchData
    ? SearchData?.slice(startIndex, endIndex)
    : [];

  useEffect(() => {
    dispatch(teamList());
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
                <h2 className="breadcrumb__title">MEET OUR TEAM</h2>
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

      <section className="team-area team-area2 text-center">
        <div className="container">
          <div className="row team-content-wrap">
            {loading ? (
              <>
                <div className="col-lg-3 col-sm-6">
                  <div className="team-item team-item1">
                    <div className="team__img">
                      <Skeleton
                        animation="wave"
                        style={{
                          width: "270px",
                          height: "295px",
                        }}
                      />
                    </div>
                    <div className="">
                      <h3 className="team__title-title">
                        <Skeleton animation="wave" variant="text" />
                      </h3>
                      <Skeleton animation="wave" variant="text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="team-item team-item1">
                    <div className="team__img">
                      <Skeleton
                        animation="wave"
                        style={{
                          width: "270px",
                          height: "295px",
                        }}
                      />
                    </div>
                    <div className="">
                      <h3 className="team__title-title">
                        <Skeleton animation="wave" variant="text" />
                      </h3>
                      <Skeleton animation="wave" variant="text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="team-item team-item1">
                    <div className="team__img">
                      <Skeleton
                        animation="wave"
                        style={{
                          width: "270px",
                          height: "295px",
                        }}
                      />
                    </div>
                    <div className="">
                      <h3 className="team__title-title">
                        <Skeleton animation="wave" variant="text" />
                      </h3>
                      <Skeleton animation="wave" variant="text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="team-item team-item1">
                    <div className="team__img">
                      <Skeleton
                        animation="wave"
                        style={{
                          width: "270px",
                          height: "295px",
                        }}
                      />
                    </div>
                    <div className="">
                      <h3 className="team__title-title">
                        <Skeleton animation="wave" variant="text" />
                      </h3>
                      <Skeleton animation="wave" variant="text" />
                    </div>
                  </div>
                </div>
              </>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <>
                <div style={{ marginBottom: "20px" }}>
                  <TextField
                    id="filled-start-adornment"
                    // id="outlined-search"
                    // sx={searchStyle}
                    label="Search by name or post"
                    type="search"
                    size="small"
                    onChange={handleChange}
                    value={searchQuery}
                  />
                </div>
                {currentPageData.map((item, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="team-item team-item1">
                      <div className="team__img">
                        <img
                          style={{
                            width: "270px",
                            height: "295px",
                            objectFit: "cover",
                          }}
                          src={item.articleImage}
                          alt="team post"
                        />
                        <div className="team__img-links">
                          <ul>
                            <li>
                              <Link to="#">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="#">
                                <i className="fa fa-instagram"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team__title">
                        <h3 className="team__title-title">
                          <a href="#none">{item.name}</a>
                        </h3>
                        <span className="team__title-meta">{item.post}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Pagination
                  className="kols"
                  variant="outlined"
                  page={currentPage}
                  onChange={handlePageChange}
                  count={Math.ceil(teams?.length / itemPerPage)}
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

export default Team;
