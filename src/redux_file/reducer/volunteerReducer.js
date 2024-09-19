import { VOLUNTEER_LIST_FAIL, VOLUNTEER_LIST_REQUEST, VOLUNTEER_LIST_SUCCESS } from "../constant/volunteerConstant";


function volunteerReducer (state={}, action){
    switch (action.type) {
        case VOLUNTEER_LIST_REQUEST:
            return {loading: true}
        case VOLUNTEER_LIST_SUCCESS:
            return {loading:false,  volunteer:action.payload }
        case VOLUNTEER_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}




export {volunteerReducer}