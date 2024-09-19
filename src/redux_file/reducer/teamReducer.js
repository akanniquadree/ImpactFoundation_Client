import { TEAM_DELETE_FAIL, TEAM_DELETE_REQUEST, TEAM_DELETE_SUCCESS, TEAM_LIST_FAIL, TEAM_LIST_REQUEST, TEAM_LIST_SUCCESS, TEAM_SAVE_FAIL, TEAM_SAVE_REQUEST, TEAM_SAVE_SUCCESS } from "../constant/teamConstant";

function TeamReducer(state={teams:[]}, action) {
    switch (action.type) {
        case TEAM_LIST_REQUEST:
            return {loading:true ,  teams:[]}
        case TEAM_LIST_SUCCESS:
            return {loading: false , teams: action.payload}
        case TEAM_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

function saveTeamReducer(state={team:{}}, action) {
    switch (action.type) {
        case TEAM_SAVE_REQUEST:
            return {loading:true ,  team:{}}
        case TEAM_SAVE_SUCCESS:
            return {loading: false ,success:true, team: action.payload}
        case TEAM_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

function deleteTeamReducer(state={team:{}}, action) {
    switch (action.type) {
        case TEAM_DELETE_REQUEST:
            return {loading:true ,  team:{}}
        case TEAM_DELETE_SUCCESS:
            return {loading: false ,success:true, team: action.payload}
        case TEAM_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}
export {TeamReducer, saveTeamReducer, deleteTeamReducer}