import react, { useState, useEffect } from "react"
import "./event.css"
import {useDispatch, useSelector} from "react-redux"
import { deleteEvent, eventList, saveEvent } from "../../../redux_file/action/eventAction"
import axios from "axios"

function Event (props) {
    const [modalVisible, setModalVisible] = useState(false) 
    const [image, setImage] = useState("") 
    const [fileName, setFileName] = useState('')
    const [message, setMessage] = useState('')
    const [id, setId] = useState("") 
    const [heading, setHeading] = useState("") 
    const [date, setDate] = useState("") 
    const [month, setMonth] = useState("") 
    const [loc, setLoc] = useState("") 
    const [text1, setText1] = useState("") 
    const [text2, setText2] = useState("") 
    const [require, setRequire] = useState("") 
    const [starTime, setStarTime] = useState("") 
    const [phone, setPhone] = useState("") 
    const dispatch = useDispatch()
    const Event = useSelector(state=>state.Event)
    const {loading, event, error, } = Event
    useEffect(() => {
           dispatch(eventList())
        return () => {
            //
    }
}, [dispatch])
    const openModal = (getEvent) =>{
        setModalVisible(true);
        setImage(getEvent.image)
        setId(getEvent._id)
        setHeading(getEvent.heading)
        setDate(getEvent.date)
        setMonth(getEvent.month)
        setLoc(getEvent.loc)
        setText1(getEvent.text1)
        setText2(getEvent.text2)
        setRequire(getEvent.require)
        setStarTime(getEvent.starTime)
        setPhone(getEvent.phone)
    }
    const submitHandler = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", fileName)
        formData.append("heading", heading)
        formData.append("date", date)
        formData.append("loc", loc)
        formData.append("month", month)
        formData.append("text1", text1)
        formData.append("text2", text2)
        formData.append("require", require)
        formData.append("starTime", starTime)
        formData.append("phone", phone)
        await axios.post("/api/event", formData).then((res)=>setMessage(res.data))
        .catch((err)=>{console.log(err)})

    }
    const deleteHandler = (getEvent) =>{
        dispatch(deleteEvent(getEvent._id))
    }
    return(
        <div className="event">
            <div className="event_header">
                <h3>Event</h3>
                <button className="button" onClick = {()=>openModal({})}>Create Event</button>
            </div> 
            {modalVisible && <div className="container">
              <form onSubmit={submitHandler} encType="multipart/form-data">
                    <div className = "row">
                        <div className= "col-lg-6">
                              <div className="form-shared">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group mb-6">
                                                <input type="file" required id="image" style={{"width":"79%"}} filename = "image" className="form-control-file border" onChange={(e)=>setFileName(e.target.files[0])} />
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
                                            <label htmlFor="date">Date</label>
                                            <input type="text" required id = "date" value={date} name = "date" className="form-control" onChange={(e)=>setDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Month</label>
                                            <input type="text" required id = "month" value={month} name = "month" className="form-control" onChange={(e)=>setMonth(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Start Time</label>
                                            <input type="text" required id = "starTime" value={starTime} name = "starTime" className="form-control" onChange={(e)=>setStarTime(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="number" required id = "phone" value={phone} name = "phone" className="form-control" onChange={(e)=>setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="require">Requirement</label>
                                            <textarea className="form-control" rows="5"  id = "require" value={require} name = "require"  onChange={(e)=>setRequire(e.target.value)}  placeholder="Write The Requirement"/>
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
                                            <label htmlFor="name">Location</label>
                                            <input type="text" required id = "loc" value={loc} name = "loc" className="form-control" onChange={(e)=>setLoc(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="text1">Paragraph One</label>
                                            <textarea className="form-control" rows="5" required id = "text1" value={text1} name = "text1"  onChange={(e)=>setText1(e.target.value)} placeholder="Write ParagraphOne"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label htmlFor="text2">Paragraph Two</label>
                                            <textarea className="form-control" rows="5"  id = "text2" value={text2} name = "text2"  onChange={(e)=>setText2(e.target.value)} placeholder="Write ParagraphTwo" />
                                        </div>
                                    </div>
                                    
                                        <div className="col-lg-12"style={{"marginTop":"20px"}}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <button type="submit" className="btn btn-secondary">
                                                    {id ? "Update" : "Create Event"}
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
                <div className="event_list table-responsive">
                    <table className= "table table-bordered table-hover" style={{marginLeft:"15px"}}>
                        <thead style={{fontSize:"15px"}}>
                            <tr>
                                <th>ID</th>
                                <th>Heading</th>
                                <th>Image</th>
                                <th>Date</th>
                                <th>Month</th>
                                <th>Start Time</th>
                                <th>Location</th>
                                <th>Paragraph One</th>
                                <th>Paragraph Two</th>
                                <th>Phone Number</th>
                                <th>Requirement</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize:"12px"}}>
                            {
                                event.map((event, index)=>(
                                    <tr key={index}>
                                    <td>{event._id}</td>
                                    <td>{event.heading}</td>
                                    <td>{event.image}</td>
                                    <td>{event.date}</td>
                                    <td>{event.month}</td>
                                    <td>{event.starTime}</td>
                                    <td>{event.loc}</td>
                                    <td>{event.text1}</td>
                                    <td>{event.text2}</td>
                                    <td>{event.phone}</td>
                                    <td>{event.require}</td>
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

export default Event;