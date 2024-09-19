import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { userRegister } from '../redux_file/action/userAction'
import {Link} from "react-router-dom"
import Header from './screenComponent/Header'
import Footer from './screenComponent/Footer'


function RegisterScreen(props) {
    const [username,setUsername] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("")
    const dispatch = useDispatch()
    const redirect = props.location.search ? props.location.split("=")[1] : "/"
    const register = useSelector(state => state.register)
    const {loading, userInfo, error} = register
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect)
        }
        return () => {
            //
        }
    }, [props.history, redirect, userInfo])
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(userRegister(name, email, username, password))

    }
    return (
        <div>
            <Header/>
            <section className="contact-form-area register-area">
                <div className="container">
                    <div className = "row">
                    <div className="col-md-6 offset-md-3" >
                            <div className="form-shared">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">                 
                                           
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name:</label>
                                                    <input type="text" required id = "name" name = "name" onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="YOUR FULL NAME"  />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="text"  id = "email" required name = "email"  onChange={(e)=>{setEmail(e.target.value)}}className="form-control" placeholder="Enter your Valid Email"  />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username:</label>
                                                    <input type="text" id = "username" required name = "username" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="Username"  />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password"  id = "password"required name = "password"  onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter Password"  />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="rePassword">Re:Password:</label>
                                                    <input type="password"  id = "rePassword" required name = "rePassword" onChange={(e)=>{setRePassword(e.target.value)}} className="form-control" placeholder="Re:Enter your Password"  />
                                                </div>
                                            </div>
                                        
                                            <div className="col-md-12">
                                                <button  type="submit" className="theme-btn submit__btn" >
                                                    Register
                                                </button>
                                            </div> 
                                            <div className="col-md-12">
                                                {loading && <div>loading....</div>}
                                                {error  && <div>Somethig went wrong....</div>}
                                            </div>
                                            <div className="col-md-12">
                                                        Already have an account?
                                                        <Link to={redirect === "/" ? "login" : "login?redirect=" + redirect}>Log In</Link>
                                                           
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

export default RegisterScreen

