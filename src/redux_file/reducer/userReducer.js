import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constant/userConstant";


function userReducer (state={}, action){
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo:action.payload }
        case USER_REGISTER_FAILURE:
            return {loading: false, error:action.payload }
    
        default:
            return state;
    }
}


function userLoginReducer (state={}, action){
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo:action.payload }
        case USER_LOGIN_FAILURE:
            return {loading: false, error:action.payload }
        case USER_LOGOUT:
            return {loading: false}
    
        default:
            return state;
    }
}

export {userReducer,  userLoginReducer}