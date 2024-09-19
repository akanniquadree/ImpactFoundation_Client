import { SPONSOR_DELETE_FAIL, SPONSOR_DELETE_REQUEST, SPONSOR_DELETE_SUCCESS, SPONSOR_LIST_FAIL, SPONSOR_LIST_REQUEST, SPONSOR_LIST_SUCCESS, SPONSOR_SAVE_FAIL, SPONSOR_SAVE_REQUEST, SPONSOR_SAVE_SUCCESS } from "../constant/sponsorConstant";


function sponsorReducer (state={sponsor:[]}, action){
    switch (action.type) {
        case SPONSOR_LIST_REQUEST:
            return {loading: true, sponsor:[]}
        case SPONSOR_LIST_SUCCESS:
            return {loading:false,  sponsor: action.payload }
        case SPONSOR_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}
function saveSponsorReducer(state={sponsor:{}}, action) {
    switch (action.type) {
        case SPONSOR_SAVE_REQUEST:
            return {loading:true, sponsor:{}}
        case SPONSOR_SAVE_SUCCESS:
            return {loading: false ,success:true, sponsor: action.payload}
        case SPONSOR_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

function deleteSponsorReducer(state={sponsor:{}}, action) {
    switch (action.type) {
        case SPONSOR_DELETE_REQUEST:
            return {loading:true ,  sponsor:{}}
        case SPONSOR_DELETE_SUCCESS:
            return {loading: false ,success:true, sponsor: action.payload}
        case SPONSOR_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }

}

export { sponsorReducer, deleteSponsorReducer, saveSponsorReducer}