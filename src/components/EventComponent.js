import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import blogImage from "../images/img19.jpg";
import { useDispatch, useSelector } from "react-redux";
import { singleEvent } from "../redux_file/action/eventAction";
import Header from "../screens/screenComponent/Header";
import Footer from "../screens/screenComponent/Footer";
import { Skeleton } from "@mui/material";

function EventComponent(props) {
  const dispatch = useDispatch();
  const SingleEvent = useSelector((Event) => Event.SingleEvent);
  const { loading, error, getEvent } = SingleEvent;
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleEvent(id));
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
                <h2 className="breadcrumb__title">Event</h2>
                <ul className="breadcrumb__list">
                  <li className="active__list-item">
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/event">back</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="event-detail-area">
        <div className="container">
          <div className="row">
            {loading ? (
              <>
                <div className="col-lg-8"></div>
                <div className="col-lg-8">
                  <div className="blog-content">
                    <div className="blog-item">
                      <div className="blog-img">
                        <Skeleton animation="wave" height={"500px"} />
                        <span className="blog__tag">
                          <span className="date__num-text">
                            <Skeleton animation="wave" variant="text" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="event-detail-content">
                    <div className="event-detail-item">
                      <Skeleton animation="wave" variant="text" />
                      <Skeleton animation="wave" variant="text" />
                      <Skeleton animation="wave" variant="text" />
                    </div>
                    <div className="event-detail-item">
                      <Skeleton animation="wave" variant="text" />
                    </div>
                    <div className="event-detail-btn">
                      <Skeleton animation="wave" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="event-detail-sidebar">
                    <div className="event-detail-item">
                      <Skeleton animation="wave" variant="text" />
                      <ul className="event__list">
                        <li>
                          <Skeleton animation="wave" variant="text" />
                        </li>
                        <li>
                          <Skeleton animation="wave" variant="text" />
                        </li>
                        <li>
                          <Skeleton animation="wave" variant="text" />
                        </li>
                        <li>
                          <Skeleton animation="wave" variant="text" />
                        </li>
                        <li>
                          <Skeleton animation="wave" variant="text" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <>
                <div className="col-lg-8">
                  <div className="blog-content">
                    <div className="blog-item">
                      <div className="blog-img">
                        <img
                          src={getEvent.image}
                          style={{ height: "500px" }}
                          alt=""
                        />
                        <span className="blog__tag">
                          <span className="date__num-text">
                            {getEvent.date}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="event-detail-content">
                    <div className="event-detail-item">
                      <h3 className="event__title">{getEvent.heading}</h3>
                      <p className="event__text">{getEvent.text1}</p>
                      <p className="event__text">{getEvent.text2}</p>
                    </div>
                    <div className="event-detail-item">
                      <h3 className="event__title event__title2">
                        Event Requirements
                      </h3>
                      <p className="event__text">{getEvent.require}</p>
                    </div>
                    <div className="event-detail-btn">
                      <Link to="/register" className="theme-btn">
                        register now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="event-detail-sidebar">
                    <div className="event-detail-item">
                      <h3 className="event__title">Event Details</h3>
                      <ul className="event__list">
                        <li>
                          <span>Starting Time:</span> {getEvent.starTime}
                        </li>
                        <li>
                          <span>Stoping Time:</span> {getEvent.stopTime}
                        </li>
                        <li>
                          <span>Date:</span>
                          {getEvent.date}
                        </li>
                        <li>
                          <span>Phone:</span>
                          {getEvent.phone}
                        </li>
                        <li>
                          <span>Location:</span>
                          {getEvent.loc}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventComponent;
