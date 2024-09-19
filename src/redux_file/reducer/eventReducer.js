import { EVENT_DELETE_FAIL, EVENT_DELETE_REQUEST, EVENT_DELETE_SUCCESS, EVENT_LIST_FAIL, EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_SAVE_FAIL, EVENT_SAVE_REQUEST, EVENT_SAVE_SUCCESS, SINGLEEVENT_LIST_FAIL, SINGLEEVENT_LIST_REQUEST, SINGLEEVENT_LIST_SUCCESS } from "../constant/eventConstant";


function eventReducer (state={event:[]}, action){
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return {loading: true, event:[]}
        case EVENT_LIST_SUCCESS:
            return {loading:false,  event:action.payload }
        case EVENT_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}

function singleEventReducer (state={getEvent:{}}, action){
    switch (action.type) {
        case SINGLEEVENT_LIST_REQUEST:
            return {loading: true, getEvent:{}}
        case SINGLEEVENT_LIST_SUCCESS:
            return {loading:false,  getEvent:action.payload }
        case SINGLEEVENT_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}
function saveEventReducer(state={getEvent:{}}, action) {
    switch (action.type) {
        case EVENT_SAVE_REQUEST:
            return {loading:true ,  getEvent:{}}
        case EVENT_SAVE_SUCCESS:
            return {loading: false ,success:true, getEvent: action.payload}
        case EVENT_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

function deleteEventReducer(state={getEvent:{}}, action) {
    switch (action.type) {
        case EVENT_DELETE_REQUEST:
            return {loading:true ,  getEvent:{}}
        case EVENT_DELETE_SUCCESS:
            return {loading: false ,success:true, getEvent: action.payload}
        case EVENT_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}




export {eventReducer, singleEventReducer, deleteEventReducer, saveEventReducer}