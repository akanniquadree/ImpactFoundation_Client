import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function Video() {
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div>
             <section className="entry-areas" >
                <div className="container">
                    <div className="row entry-static-wrap">
                        <div className="col-lg-3">
                            <div className="entry-static-box entry-static-box1">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h4 className="entry__title">Hunger is stalking the globe</h4>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="entry-video-img">
                                            <img src="/images/entry-video-img.jpg" alt="entry-video-img" />
                                            <div onClick={handleModal} onKeyUp={handleModal} role="button" tabIndex="0"className="mfp-iframe video-play-btn"
                                            title="Play Video"
                                            >
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="entry-video-text">
                                            <h4 className="entry__title">
                                            We are here to support you every step of the way.
                                            </h4>
                                            <p className="entry__text">
                                            Watch us how we take care of everyone
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="PbUxi2Lx8x8"
            onClose={handleModal}
            />
        </div>
    )
}

export default Video
