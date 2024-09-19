import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { saveSponsor, sponsorList } from '../../../redux_file/action/sponsorAction'
import "./sponsor.css"

function Sponspor(props) {
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [loc, setLoc] = useState("")
    const [desc, setDesc] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const Sponsor = useSelector(state=>state.Sponsor)
    const {sponsor} = Sponsor
    useEffect(() => {
        dispatch(sponsorList())
        return () => {
            //
        }
    }, [])

    const openModal = (sponsor) =>{
        setModalVisible(true);
        setId(sponsor._id)
        setName(sponsor.name)
        setImage(sponsor.image)
        setLoc(sponsor.loc)
        setDesc(sponsor.desc)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveSponsor({name, image, loc, desc}))
    }
   const  deleteHandler = () =>{

    }
    return (
        <div className="sponsor">
            <div className="sponsor_header">
                <h3>Sponsors</h3>
                <button className="button" onClick = {()=>openModal({})}>Create Sponsor</button>
            </div> 
            {modalVisible && <div className="container">
              <form onSubmit={submitHandler}>
                    <div className = "row">
                        <div className= "col-lg-6 offset-3">
                              <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group mb-6">
                                                <input type="file" required style={{width:"85%"}} id="image" value={image} filename = "image" className="form-control-file border" onChange={(e)=>setImage(e.target.files[0])} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Image</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Sponsor Name</label>
                                            <input type="text" required id = "name" value={name} name = "name" className="form-control" onChange={(e)=>setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="date">Location</label>
                                            <input type="text" required id = "loc" value={loc} name = "loc" className="form-control" onChange={(e)=>setLoc(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="require">Description</label>
                                            <textarea className="form-control" rows="5"  id = "desc" value={desc} name = "desc"  onChange={(e)=>setDesc(e.target.value)}  placeholder="Write The Requirement"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row button_space">
                                            <div className="col-lg-6">
                                                <button type="submit" className="btn btn-secondary">
                                                    {id ? "Update" : "Create Sponsor"}
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
            <div className="sponsor_list table-responsive" style={{marginTop:"35px"}}>
                    <table className= "table table-bordered table-hover" style={{marginLeft:"15px"}}>
                        <thead>
                            <tr style={{fontSize:" 15px"}}>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Location</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize:" 12px"}}>
                            {
                                sponsor.map((item, index)=>(
                                    <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.image}</td>
                                    <td>{item.loc}</td>
                                    <td>{item.desc}</td>
                                    <td className="btn-group">
                                        <button className="btn btn-primary" onClick={()=>openModal()}>Edit</button>
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

export default Sponspor
