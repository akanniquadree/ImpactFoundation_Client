import { PROJECT_DELETE_FAIL, PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_LIST_FAIL, PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS, PROJECT_SAVE_FAIL, PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, SINGLEPROJECT_LIST_FAIL, SINGLEPROJECT_LIST_REQUEST, SINGLEPROJECT_LIST_SUCCESS } from "../constant/projectConstant";


function projectReducer (state={projects:[]}, action){
    switch (action.type) {
        case PROJECT_LIST_REQUEST:
            return {loading: true, projects:[]}
        case PROJECT_LIST_SUCCESS:
            return {loading:false,  projects:action.payload }
        case PROJECT_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}

function singleprojectReducer (state={project:{}}, action){
    switch (action.type) {
        case SINGLEPROJECT_LIST_REQUEST:
            return {loading: true, project:{}}
        case SINGLEPROJECT_LIST_SUCCESS:
            return {loading:false,  project:action.payload }
        case SINGLEPROJECT_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}

function projectSaveReducer (state={project:{}}, action){
    switch(action.type){
         case PROJECT_SAVE_REQUEST:
            return {loading: true}
        case PROJECT_SAVE_SUCCESS:
            return {loading:false, success:true,  project:action.payload }
        case PROJECT_SAVE_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
       
}

function deleteProjectReducer(state={project:{}}, action) {
    switch (action.type) {
        case PROJECT_DELETE_REQUEST:
            return {loading:true ,  project:{}}
        case PROJECT_DELETE_SUCCESS:
            return {loading: false ,success:true, project: action.payload}
        case PROJECT_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}




export {projectReducer, singleprojectReducer, projectSaveReducer, deleteProjectReducer}