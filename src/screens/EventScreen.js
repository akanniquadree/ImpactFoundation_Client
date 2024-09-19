import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import blogImage1 from "../images/img7.jpg";
import { eventList } from "../redux_file/action/eventAction";
import Footer from "./screenComponent/Footer";
import Header from "./screenComponent/Header";
import {
  Pagination,
  TextField,
  Skeleton,
  Input,
  InputAdornment,
} from "@mui/material";
import { Search } from "@material-ui/icons";

function EventScreen(props) {
  const dispatch = useDispatch();
  const Event = useSelector((state) => state.Event);
  const { loading, error, event } = Event;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemPerPage = 9;
  const startIndex = (currentPage - 1) * itemPerPage;
  const stopIndex = startIndex + itemPerPage;
  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const SearchData = searchQuery
    ? event?.filter((item) =>
        item.heading.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : event;
  const currentPageData = SearchData
    ? SearchData?.slice(startIndex, stopIndex)
    : [];
  useEffect(() => {
    dispatch(eventList());
    setSearchQuery("");
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
                <h2 className="breadcrumb__title">Event</h2>
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

      <section className="causes-area upcoming-event-area upcoming-event-area2">
        <div className="container">
          <div className="row blog-content-wrap">
            {loading ? (
              <>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton animation="wave" height="300px" />
                      </div>
                      <div
                        className="blog-inner-content"
                        style={{ height: "130px", paddingTop: "22px" }}
                      >
                        <h3 className="blog__title">
                          <Skeleton animation="wave" variant="text" />
                        </h3>
                        <p className="blog__desc clamp-text ">
                          <Skeleton animation="wave" variant="text" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton animation="wave" height="300px" />
                      </div>
                      <div
                        className="blog-inner-content"
                        style={{ height: "130px", paddingTop: "22px" }}
                      >
                        <h3 className="blog__title">
                          <Skeleton animation="wave" variant="text" />
                        </h3>
                        <p className="blog__desc clamp-text ">
                          <Skeleton animation="wave" variant="text" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-content">
                    <div className="blog-item blog-item1">
                      <div className="blog-img">
                        <Skeleton animation="wave" height="300px" />
                      </div>
                      <div
                        className="blog-inner-content"
                        style={{ height: "130px", paddingTop: "22px" }}
                      >
                        <h3 className="blog__title">
                          <Skeleton animation="wave" variant="text" />
                        </h3>
                        <p className="blog__desc clamp-text ">
                          <Skeleton animation="wave" variant="text" />
                        </p>
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
                          <Link to={`/single-events/${item._id}`}>
                            {" "}
                            <img
                              src={item.image}
                              alt=""
                              style={{ height: "300px" }}
                            />
                          </Link>
                          <span className="blog__tag blog__tag1">
                            <span className="date__num-text">{item.date}</span>
                          </span>
                        </div>
                        <div
                          className="blog-inner-content"
                          style={{ height: "130px", paddingTop: "22px" }}
                        >
                          <h3 className="blog__title">
                            <Link to={`/single-events/${item._id}`}>
                              {item.heading}
                            </Link>
                          </h3>
                          <p className="blog__desc clamp-text ">{item.text1}</p>
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
                  count={Math.ceil(event?.length / itemPerPage)}
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

export default EventScreen;
