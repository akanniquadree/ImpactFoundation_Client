import React, { useEffect, useState } from 'react'
import "./Project.css"
import {useDispatch, useSelector} from "react-redux"
import { projectList, saveProject } from '../../../redux_file/action/projectAction'
import axios from "axios"


function Project() {
    const [modalVisible, setModalVisible] = useState(false) 
    const [image, setImage] = useState("") 
    const [id, setId] = useState("")
    const [message, setMessage]= useState('')
    const [fileName, setFileName] = useState('') 
    const [heading, setHeading] = useState("") 
    const [desc, setDesc] = useState("") 
    const [goal, setGoal] = useState("") 
    const [raise, setRaise] = useState("") 
    const dispatch = useDispatch()
    const Project = useSelector(state=>state.Project)
    const {projects} = Project
    useEffect(() => {
           dispatch(projectList())
        return () => {
            //
    }
}, [dispatch])
    const openModal = (project) =>{
        setModalVisible(true);
        setImage(project.image)
        setId(project._id)
        setHeading(project.heading)
        setDesc(project.desc)
        setGoal(project.goal)
        setRaise(project.raise)
    }
    const submitHandler = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("heading", heading)
        formData.append("image", fileName)
        formData.append("goal", goal)
        formData.append("desc", desc)
        formData.append("raise", raise)

        await axios.post("/api/project", formData).then((res)=>setMessage(res.data))
        .catch((err)=>{console.log(err)})
    }
    const deleteHandler = () =>{

    }
    return(
        <div className="project">
            <div className="project_header">
                <h3>Project</h3>
                <button className="button" onClick = {()=>openModal({})}>Create Project</button>
            </div> 
            {modalVisible && <div className="container">
              <form onSubmit={submitHandler} encType="multipart/form-data">
                    <div className = "row">
                        <div className= "col-lg-6" style={{"marginTop":"20px"}}>
                            <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group mb-6">
                                                <input type="file" required id="image" style={{"width":"82%"}} filename = "image" className="form-control-file border" onChange={(e)=>setFileName(e.target.files[0])} />
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
                                            <label htmlFor="desc">Description</label>
                                            <input type="text" required id = "date" value={desc} name = "desc" className="form-control" onChange={(e)=>setDesc(e.target.value)} />
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
                                            <label htmlFor="goal">Goal</label>
                                            <input type="text" required id = "goal" value={goal} name = "goal" className="form-control" onChange={(e)=>setGoal(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Raised</label>
                                            <input type="text" required id = "raise" value={raise} name = "raise" className="form-control" onChange={(e)=>setRaise(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12"style={{"marginTop":"20px"}}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                    <button type="submit" className="btn btn-secondary">
                                                        {id ? "Update" : "Create Project"}
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
                <div className="project_list table-responsive">
                    <table className=  "table table-bordered table-hover" style={{marginLeft:"15px"}}>
                        <thead  style={{fontSize:" 15px"}}>
                            <tr>
                                <th>ID</th>
                                <th>Heading</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Goal</th>
                                <th>Raised</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize:" 12px"}}>
                            {
                                projects.map((event, index)=>(
                                    <tr key={index}>
                                    <td>{event._id}</td>
                                    <td>{event.heading}</td>
                                    <td>{event.image}</td>
                                    <td>{event.desc}</td>
                                    <td>{event.goal}</td>
                                    <td>{event.raise}</td>
                                    
                                    <td className="btn-group">
                                        <button className="btn btn-primary" onClick={()=>openModal(event)}>Edit</button>
                                        {'  '}
                                        <button className="btn-danger" onClick={()=>deleteHandler(event)}>Delete</button>
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

export default Project
