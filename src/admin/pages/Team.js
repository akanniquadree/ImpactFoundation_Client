import React, { useEffect, useState } from 'react'
import "./team.css"
import {useDispatch, useSelector} from "react-redux"
import {  deleteTeam, saveTeam, teamList } from '../../redux_file/action/teamAction';
import axios from "axios"

function Team(props) {
    const dispatch = useDispatch()
    const[modalVisible, setModalVisible] = useState (false);
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [id, setId] = useState('')
    const [fileName, setFileName] = useState('')
    const [post, setPost] = useState("")
    const [facebook, setFacebook] = useState("")
    const [twitter, setTwitter] = useState("")
    const [instagram, setInstagram] = useState("")
    const teamMem = useSelector(state=>state.teamMem)
    const { teams} = teamMem;
    const SaveTeam = useSelector(state=>state.SaveTeam)
    const {loading: loadingSave, success: successSave, error: errorSave} = SaveTeam 
    const DeleteTeam = useSelector(state=>state.DeleteTeam)
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = DeleteTeam
    
    useEffect(() => {
        if(successSave){
            setModalVisible(false)
        }
           dispatch(teamList())
        return () => {
            //
    }
}, [dispatch])
    const openModal = (team) =>{
        setModalVisible(true)
        setId(team._id);
        setFileName(team.articleImage);
        setPost(team.post);
        setFacebook(team.facebook);
        setTwitter(team.twitter);
        setInstagram(team.instagram);

    }
    const submitHandler = async(e) =>{
        e.preventDefault()
         const formData = new FormData()
         formData.append("post", post)
         formData.append("facebook", facebook)
         formData.append("twitter", twitter)
         formData.append("name", name)
         formData.append("articleImage", fileName)

        await axios.post("/api/team", formData)
        .then((res)=>setMessage(res.data))
        .catch((err)=>{console.log(err)})
        }
    const deleteHandler = (team) =>{
        dispatch(deleteTeam(team._id))
    }
    return (
        <div className="team">
            <div className="product_header">
            <h3>TEAM</h3>
            <button className="button" onClick = {()=>openModal({})}>Create Team</button>
        </div> 
        {modalVisible && <div className="container">
            <form onSubmit={submitHandler} encType="multipart/form-data" >
                <div className = "row">
                    <div className="col-lg-6" style={{"marginTop":"10px"}}>
                            <div className="form-shared">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="input-group mb-6">
                                                <input type="file" required id="image" style={{"width":"85%"}} filename = "articleImage" className="form-control-file border" onChange={(e)=>setFileName(e.target.files[0])} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Image</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="name" required id = "name" value={name} name = "name" className="form-control" placeholder="Enter team member name "  onChange={(e)=>setName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="post">Post</label>
                                                <input type="text" required id = "post" value={post} name = "post" className="form-control" onChange={(e)=>setPost(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12"style={{"marginTop":"20px"}}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                    <button type="submit" className="btn btn-secondary">
                                                        {id ? "Update" : "Create Team"}
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
                                                <label htmlFor="faceook">Facebook</label>
                                                <input type="text" id = "facebook" value={facebook} name = "facebook" className="form-control" placeholder="Enter Team member facebook URL " onChange={(e)=>setFacebook(e.target.value)} />
                                            </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="instagram">Instagram</label>
                                            <input type="text"  id = "instagram" value={instagram} name = "instagram" className="form-control" onChange={(e)=>setInstagram(e.target.value)} placeholder="Enter Team member instagram URL "   />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="twitter">Twitter</label>
                                            <input type="text" id = "twitter" value={twitter} name = "twitter" className="form-control"  placeholder="Enter Team member twitter URL " onChange={(e)=>setTwitter(e.target.value)} />                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </form>         
            </div>  }  
        
           <div className="table-responsive"style={{marginTop:" 35px"}}>
                <table className="table table-bordered table-hover" style={{marginLeft:"15px"}}>
                    <thead className="thead-light">
                        <tr style={{fontSize:" 15px"}}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Post</th>
                            <th>Facebook</th>
                            <th>Instagram</th>
                          
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:" 12px"}}>
                        {
                            teams.map((item, index)=>(
                                <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.articleImage}</td>
                            <td>{item.post}</td>
                            <td>{item.facebook}</td>
                            <td>{item.instagram}</td>

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

export default Team
