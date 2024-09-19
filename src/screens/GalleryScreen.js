import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { galleryList } from "../redux_file/action/galleryAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";
import { array } from "prop-types";
import { Button, ButtonGroup, Skeleton } from "@mui/material";

function GalleryScreen({ slides }) {
  const dispatch = useDispatch();
  const Gallery = useSelector((state) => state.Gallery);
  const { loading, gallerys, error } = Gallery;
  const [modal, setModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(16); // Number of images to display initially
  const [current, setCurrent] = useState(0);
  const Gallerys = gallerys.map((item) => item.imgs).flat();
  const length = Gallerys.length;
  const increment = 4;
  const minImages = 4;

  useEffect(() => {
    dispatch(galleryList());

    return () => {
      //
    };
  }, [dispatch]);
  const getImg = (index) => {
    setCurrent(index);
    setModal(true);
  };
  const goNext = (img) => {
    setCurrent((prevIndex) => (prevIndex + 1) % length);
  };
  const goPrev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + length) % length);
  };
  // Handle Load More button click
  const loadMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + increment); // Increase the number of images to display
  };
  const reduceImages = () => {
    setVisibleCount((prevCount) =>
      prevCount - increment < minImages ? minImages : prevCount - increment
    ); // Reduce the number of images, but not below the minimum
  };
  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb__title">Gallery</h2>
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

      <section className="gallery-area2">
        <div className="container">
          <div className="row">
            <div className={modal ? "modal open" : "modal"}>
              <img src={Gallerys[current]} alt="" style={{ height: "500px" }} />
              <span className="close">
                <i
                  className="fa fa-close"
                  onClick={() => {
                    setModal(false);
                  }}
                ></i>
              </span>
              <span className="right">
                <i className="fa fa-arrow-circle-right ra" onClick={goNext}></i>
              </span>
              <span className="left">
                <i
                  className="fa fa-arrow-circle-left ra"
                  aria-hidden="true"
                  onClick={goPrev}
                ></i>
              </span>
            </div>
            {loading ? (
              <>
                <div className="col-lg-3 col-sm-6">
                  <div className="gallery-card" style={{ height: "250px" }}>
                    <Skeleton animation="wave" style={{ height: "100%" }} />

                    <span className="gallery-icon"></span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="gallery-card" style={{ height: "250px" }}>
                    <Skeleton animation="wave" style={{ height: "100%" }} />

                    <span className="gallery-icon"></span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="gallery-card" style={{ height: "250px" }}>
                    <Skeleton animation="wave" style={{ height: "100%" }} />

                    <span className="gallery-icon"></span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="gallery-card" style={{ height: "250px" }}>
                    <Skeleton animation="wave" style={{ height: "100%" }} />

                    <span className="gallery-icon"></span>
                  </div>
                </div>
              </>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <>
                {Gallerys.slice(0, visibleCount).map((item, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div
                      className="gallery-card"
                      onClick={() => getImg(index)}
                      style={{ height: "250px" }}
                    >
                      <img
                        src={item}
                        className="img-fluid"
                        alt=""
                        style={{ height: "100%" }}
                      />

                      <span className="gallery-icon"></span>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                  >
                    {visibleCount < length && ( // Only show the button if there are more images to load
                      <Button onClick={loadMoreImages}>Load More....</Button>
                    )}
                    {visibleCount > minImages && visibleCount > 16 && (
                      // Only show the button if there are more images to load
                      <Button onClick={reduceImages}>Reduce Image</Button>
                    )}
                  </ButtonGroup>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
      {/* <div     div className="gallery-item" 
                                        // onClick={()=>setModalVisible(`/uploads/${item.img1}`)}
                                        >
                                            <Swiper><SwiperSlide><img src={`/uploads/${item.img1}`} alt="" />
                                            <a href={`/uploads/${item.img1}`} className="glightbox">
                                           <span className="gallery-icon"></span>
                                            </a>
                                            </SwiperSlide></Swiper>
                                        </div>  */}
    </div>
  );
}
export default GalleryScreen;
