import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { userLogin } from '../redux_file/action/userAction'
import Header from './screenComponent/Header'
import Footer from './screenComponent/Footer'

function LoginScreen(props) {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const login = useSelector(state => state.login)
    const {loading, userInfo, error} = login
    const redirect = props.location.search ? props.location.search.split("=")[1] : "/"
    useEffect(() => {
            if(userInfo){
                props.history.push(redirect)
            }
        return () => {
            //
        }
    }, [props.history, redirect, userInfo])
    const submitHandler = (e)=> {
        e.preventDefault()
        dispatch(userLogin(username, password))
    }
    return (
        <>
        <Header/>
        <section className="contact-form-area register-area">
            <div className="container">
                <div className = "row">
                <div className="col-md-6 offset-md-3" >
                        <div className="form-shared">
                            <form onSubmit={submitHandler} >
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="username">Username:</label>
                                            <input type="username" required id = "username"name = "username" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="Enter your Username"  />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" required id="password" name = "password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter your Password"  />
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-12">
                                        <button  type="submit" className="theme-btn submit__btn" disable={loading}>
                                            LOGIN
                                        </button>
                                    </div>
                                    <div className="col-md-12">
                                        {loading && <div>Loading ....</div>}
                                        {error && <div>{error}</div>}
                                    </div>
                                    <div className="col-md-12">
                                            New User ?  <Link to={redirect === "/" ? "signup" : "signup?redirect=" + redirect}>Create your own account</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                
                </div>
                        
            </div>    
        </section>
        <Footer/>
        </>
    )
}

export default LoginScreen
