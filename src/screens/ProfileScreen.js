import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import Header from './screenComponent/Header'
import Footer from './screenComponent/Footer'

function ProfileScreen(props) {
    const [file, setFile] = useState(null)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = useSelector(state=>state.login)
    const {userInfo} = login

    const updateHandler = async (e) =>{
        e.preventDefault()
        const updatedUser = {
            userId: userInfo._id,
            username,
            email,
            password,
            name
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
               await axios.post("/upload", data);
            } catch (error) {
                
            }
        }
        try{
           await axios.put("/users/" + userInfo._id, updatedUser);
        }catch(error){

        }
    }
 
    return (
        <div>
            <Header/>
            <section className="contact-form-area register-area">
                <div className = "container">
                    <div className = "row">
                        <div className="col-lg-12">
                            <div className = "row">
                                <div className = "col-lg-10">
                                    <span className="settingUpdateTitle">Update Your Account</span>
                                </div>
                                <div className = "col-lg-2">
                                    <button className="settingUpdateTitle">Delete Your Account</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="form-shared">
                                <form onSubmit={updateHandler}>
                                    <div className="row"> 
                                            <div className="col-lg-4 offset-4">
                                                <div className=" settingsPP">
                                                    <img src={userInfo.profilePic} alt="" />
                                                    <label htmlFor="fileInput">
                                                        <i className="settingPPIcon fa fa-user-circle"></i>
                                                    </label>
                                                    <input type="file" id = "fileInput" onChange ={(e)=>{setFile(e.target.files[0])}} style={{display:"none"}}/>
                                                </div>
                                            </div>                
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name:</label>
                                                    <input type="text"  id = "name" name = "name" onChange={(e)=>{setName(e.target.value)}}  className="form-control" placeholder={userInfo.name}  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="text"  id = "email"  name = "email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder={userInfo.email}  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username:</label>
                                                    <input type="text" id = "username"  name = "username" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder={userInfo.username}  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password"  id = "password" name = "password" onChange={(e)=>{setPassword(e.target.value)}}  className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-2 offset-10" >
                                                <button  type="submit" className="theme-btn submit__btn" >
                                                    Update
                                                </button>
                                            </div> 
                                        </div>
                                    </form>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ProfileScreen
