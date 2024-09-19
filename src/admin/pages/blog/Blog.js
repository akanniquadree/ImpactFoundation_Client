import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getBlog, saveBlog } from '../../../redux_file/action/blogAction'
import "./blog.css"

function Blog() {
    const [image, setImage] = useState(null)
    const [id, setId] = useState("")
    const [heading, setHeading] = useState("")
    const [author, setAuthor] = useState("")
    const [firstPara, setFirstPara] = useState("")
    const [secondPara, setSecondPara] = useState("")
    const [thirdPara, setThirdPara] = useState("")
    const [fourthPara, setFourthPara] = useState("")
    const [detail, setDetail] = useState("")
    const [categories, setCategories] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const blogPost = useSelector(state=>state.blogPost)
    const {loading, posts, error} = blogPost
   

    useEffect(() => {
        dispatch(getBlog())
        return () => {
            //
        }
    }, [])
    const openModal = (post) =>{
        setModalVisible(true);
        setImage(post.image)
        setId(post._id)
        setHeading(post.heading)
        setAuthor(post.author);
        setFirstPara(post.firstPara)
        setSecondPara(post.secondPara)
        setThirdPara(post.thirdPara)
        setFourthPara(post.fourthPara)
        setDetail(post.detail)
        setCategories(post.categories)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        
    }
    const deleteHandler = () =>{

    }
    return (
        <div className="blog">
             <div className="blog_header">
                <h3>Blog</h3>
                <button className="button" onClick = {()=>openModal({})}>Create Blog</button>
            </div> 
             {modalVisible && <div className="container">
              <form onSubmit={submitHandler} encType="multipart/form-data" >
                    <div className = "row">
                        <div className= "col-lg-6">
                              <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group mb-6">
                                                <input type="file"  name = "image" style={{width:"85%"}} required id="image" onChange={(e)=>setImage(e.target.files[0])} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Image</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Heading</label>
                                            <input type="text" required id = "heading" value={heading} name = "heading" className="form-control" onChange={(e)=>setHeading(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="date">Author</label>
                                            <input type="text" required id = "author" value={author} name = "author" className="form-control" onChange={(e)=>setAuthor(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Detail</label>
                                            <input type="text" required id = "month" value={detail} name = "detail" className="form-control" onChange={(e)=>setDetail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Categories</label>
                                            <input type="text" required id = "categories" value={categories} name = "categories" className="form-control" onChange={(e)=>setCategories(e.target.value)} />
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="require">First Paragraph</label>
                                            <textarea className="form-control" rows="5" required  id = "firstPara" value={firstPara} name = "firstPara"  onChange={(e)=>setFirstPara(e.target.value)}  placeholder="First Paragraph"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row button_space">
                                            <div className="col-lg-6">
                                                <button type="submit" className="btn btn-secondary">
                                                    {id ? "Update" : "Create Blog"}
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
                        <div className= "col-lg-6">
                        <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="text1">Second Paragraph</label>
                                            <textarea className="form-control" rows="5"  id = "text1" value={secondPara} name = "secondPara"  onChange={(e)=>setSecondPara(e.target.value)} placeholder="Second Paragraph"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="text2">Third Paragraph</label>
                                            <textarea className="form-control" rows="5"  id = "thirdPara" value={thirdPara} name = "thirdPara"  onChange={(e)=>setThirdPara(e.target.value)} placeholder="Third Paragraph" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="text2">Fourth Paragraph</label>
                                            <textarea className="form-control" rows="5"  id = "fourthPara" value={fourthPara} name = "fourthPara"  onChange={(e)=>setFourthPara(e.target.value)} placeholder="Fourth Paragraph" />
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> }       
            
            <div className="blog_list table-responsive">
                    <table className="table table-bordered table-hover" style={{marginLeft:"15px"}}>
                        <thead>
                            <tr style={{fontSize:" 15px"}}>
                                <th>ID</th>
                                <th>Heading</th>
                                <th>Image</th>
                                <th>Author</th>
                                <th>Detail</th>
                                <th>Categories</th>
                                <th>Para One</th>
                                <th>Para Two</th>
                                <th>Para Three</th>
                                <th>Para Four</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize:" 12px"}}>
                            {
                                posts.map((item, index)=>(
                                    <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.heading}</td>
                                    <td>{item.image}</td>
                                    <td>{item.date}</td>
                                    <td>{item.month}</td>
                                    <td>{item.starTime}</td>
                                    <td>{item.loc}</td>
                                    <td>{item.text1}</td>
                                    <td>{item.text2}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.require}</td>
                                    <td className=" btn-group">
                                        <button className="btn btn btn-primary" onClick={()=>openModal()}>Edit</button>
                                        {'  '}
                                        <button className="btn btn-danger" onClick={()=>deleteHandler()}>Delete</button>
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

export default Blog
