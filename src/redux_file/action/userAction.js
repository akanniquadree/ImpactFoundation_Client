import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constant/userConstant"
import Cookie from "js-cookie"

const userRegister = (name, email, username, password) => async (dispatch)=>{
    dispatch({type:USER_REGISTER_REQUEST, payload: name, email, username, password})
    try {
        const {data} = await axios.post("/api/auth/register", {name, email, username, password})
        dispatch({type:USER_REGISTER_SUCCESS, payload:data})
        Cookie.set("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REGISTER_FAILURE, payload: error.message})
    }
}

const userLogin = (username, password) => async (dispatch)=>{
    dispatch({type:USER_LOGIN_REQUEST, payload:   username, password})
    try {
        const {data} = await axios.post("/api/auth/login", {username, password})
        dispatch({type:USER_LOGIN_SUCCESS, payload:data})
        Cookie.set("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_LOGIN_FAILURE, payload: error.message})
    }
}




export {userRegister, userLogin}