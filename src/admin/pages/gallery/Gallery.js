import React,  { useState, useEffect } from 'react'
import "./gallery.css"
import {useDispatch, useSelector} from "react-redux"
import { deleteGallery, galleryList, saveGallery } from '../../../redux_file/action/galleryAction'
import axios from "axios"

function Gallery() {
    const [modalVisible, setModalVisible] = useState(false) 
    const [img, setImg] = useState("")
    const [filename, setFilename] = useState("")
    const [message, setMessage] = useState("")
    const [id, setId] = useState("")
    const dispatch = useDispatch()
    const Gallery = useSelector(state=>state.Gallery)
    const {gallerys} = Gallery
    useEffect(() => {
        dispatch(galleryList())

        return () => {
            //
        }
    }, [dispatch])
    const openModal = (gallery) =>{
        setModalVisible(true);
        setImg(gallery.img);
        setId(gallery._id);

    }
    const submitHandler= () => async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("img", filename)

        await axios.post("/api/gallery", formData,
        
        ).then((res)=>setMessage(res.data)).catch((err)=>{console.log(err)})

    }
    const deleteHandler = (gallery) =>{
        dispatch(deleteGallery(gallery._id))
    }
    return (
        <div className="gallery">
            <div className="gallery_header">
                <h3>Gallery</h3>
                <button className="button" onClick = {()=>openModal({})}>Create gallery</button>
            </div>
            {modalVisible && <div className="container">
              <form onSubmit={submitHandler}  encType="multipart/form-data">
                    <div className = "row">
                        <div className= "col-lg-6 offset-3">
                              <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group mb-6">
                                                <input type="file" required  id="img" style={{"width":"74%"}} filename = "img" className="form-control-file border" onChange={(e)=>setFilename(e.target.files[0])} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Upload Image</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12"style={{"marginTop":"20px"}}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <button type="submit" className="btn btn-secondary">
                                                    {id ? "Update" : "Upload"}
                                                </button>
                                            </div>
                                            <div className="col-lg-2 offset-4">
                                                <button  type="button" className="btn btn-secondary" onClick={()=>setModalVisible(false)}>
                                                    Close
                                                </button>
                                            </div>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> }
            <div className="table-responsive" style={{marginTop:"25px"}}>
                <table className="table table-bordered table-hover" style={{marginLeft:"15px"}}>
                    <thead className="thead-light">
                        <tr style={{fontSize:" 15px"}}>
                            <th>ID</th>
                            
                            <th>Image</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:" 12px"}} >
                        {
                            gallerys.map((item, index)=>(
                                <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.img}</td>
                            <td className="btn-group">
                                <button className="btn btn-primary" onClick={()=>openModal(item)}>Edit</button>
                                {'  '}
                                <button className= "btn-danger" onClick={()=>deleteHandler(item)}>Delete</button>
                            </td>
                        </tr>
                            ))
                        }
                        
                    
                    </tbody>
                </table>
            </div>
      
        </div>
    )
}

export default Gallery
