import { BLOG_DELETE_FAIL, BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_SAVE_FAIL, BLOG_SAVE_REQUEST, BLOG_SAVE_SUCCESS, DETAIL_BLOG_FAILURE, DETAIL_BLOG_REQUEST, DETAIL_BLOG_SUCCESS, GET_BLOG_FAILURE, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_CAT_FAILURE, GET_CAT_REQUEST, GET_CAT_SUCCESS } from "../constant/blogConstant";


function blogReducer(state={posts:[]}, action) {
    switch (action.type) {
        case GET_BLOG_REQUEST:
            return {loading: true, posts:[]}
        case GET_BLOG_SUCCESS:
            return {loading: false, posts:action.payload}
        case GET_BLOG_FAILURE:
            return {loading: false, error:action.payload}
        default:
            return state;
    }
}

function catReducer(state={cats:[]}, action) {
    switch (action.type) {
        case GET_CAT_REQUEST:
            return {loading: true, cats:[]}
        case GET_CAT_SUCCESS:
            return {loading: false, cats:action.payload}
        case GET_CAT_FAILURE:
            return {loading: false, error:action.payload}
        default:
            return state;
    }
}

function DetailBlogReducer(state={post:{}}, action) {
    switch (action.type) {
        case DETAIL_BLOG_REQUEST:
            return {loading: true, post:{}}
        case DETAIL_BLOG_SUCCESS:
            return {loading: false, post:action.payload}
        case DETAIL_BLOG_FAILURE:
            return {loading: false, error:action.payload}
        default:
            return state;
    }
}

function saveBlogReducer(state={post:{}}, action) {
    switch (action.type) {
        case BLOG_SAVE_REQUEST:
            return {loading:true ,  post:{}}
        case BLOG_SAVE_SUCCESS:
            return {loading: false ,success:true, post: action.payload}
        case BLOG_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

function deleteBlogReducer(state={post:{}}, action) {
    switch (action.type) {
        case BLOG_DELETE_REQUEST:
            return {loading:true ,  post:{}}
        case BLOG_DELETE_SUCCESS:
            return {loading: false ,success:true, post: action.payload}
        case BLOG_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
    
}

export {DetailBlogReducer, blogReducer, saveBlogReducer, deleteBlogReducer, catReducer} 
