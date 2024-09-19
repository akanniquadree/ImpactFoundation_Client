import React from 'react'
import {motion} from "framer-motion"
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function Modal({image}) {
   
    return (
        <SimpleReactLightbox>
            <div className="gallery-card">
                <img src={image} className="img-fluid" alt="" />
                <SRLWrapper>
                    <div className="gallery-content">
                        <a href={image} className="img-popup">
                            <img src={image} className="img-fluid sr-only" alt="" />
                            <i className="fa fa-plus"></i>
                        </a>
                        
                    </div>
                </SRLWrapper>
            </div>
        </SimpleReactLightbox>
    )
}

export default Modal;
