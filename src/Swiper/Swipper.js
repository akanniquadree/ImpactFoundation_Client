import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
// import 'swiper/swiper.scss';
// import 'swiper/swiper.less'
import { Link } from 'react-router-dom';

const Swipper = () => {
    const [swiper, setSwiper] = useState(null);
    const ref = useRef(null);
    
    const goNext = () => {
          swiper.slideNext();
      };
    
      const goPrev = () => {
          swiper.slidePrev();
      };
      useEffect(() => {
          var myswiper = document.querySelector(".swiper-container").swiper;
          setSwiper(myswiper)
          return () => {
              //
          }
      }, [])
      return(
        <section className="slider-area">
            <div className="homepage-slide1">
                <Swiper getSwiper={swiper}>
                <div className="single-slide-item slide-bg1">
                    <div className="slide-item-table">
                    <div className="slide-item-tablecell">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                            <div className="details_wrapper">
                                <p className="heading">welcome to TGIF</p>
                                <h2 className="detail">
                                We do more than we talk or pray. Get involved
                                </h2>
                                <Link to="/about" className="theme-btn">
                                discover more
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg2">
                    <div className="slide-item-table">
                    <div className="slide-item-tablecell">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                            <div className="details_wrapper">
                                <p className="heading">welcome to TGIF</p>
                                <h2 className="detail">
                                Lend the helping hand. Get involved
                                </h2>
                                <Link to="/about" className="theme-btn">
                                discover more
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg3">
                    <div className="slide-item-table">
                    <div className="slide-item-tablecell">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                            <div className="details_wrapper">
                                <p className="heading">welcome to TGIF</p>
                                <h2 className="detail">
                                Volunteer yourself to a greater course today
                                </h2>
                                <Link to="/about" className="theme-btn">
                                discover more
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </Swiper>
                <div className="owl-dots">
                
                <div
                    role="button"
                    onClick={goPrev}
                    onKeyDown={goPrev}
                    tabIndex="0"
                    className="owl-dot"
                  
                >
                    <span></span>
                </div>
                <div
                    role="button"
                    onClick={goNext}
                    className="owl-dot"
                    onKeyUp={goNext}
                    tabIndex="0"
                    
                >
                    <span></span>
                </div>
                </div>
            </div> 
        </section>


)

      }
export default Swipper
