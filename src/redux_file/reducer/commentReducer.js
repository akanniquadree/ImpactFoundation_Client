
import { COMMENT_BLOG_FAILURE, COMMENT_BLOG_REQUEST, COMMENT_BLOG_SUCCESS } from "../constant/commentConstant";



function CommentReducer (state={comment:[]},action) {
    switch (action.type) {
        case COMMENT_BLOG_REQUEST:
            return {loading: true, comment:[]};
        case COMMENT_BLOG_SUCCESS:
            return {loading: false, comment:action.payload}
        case COMMENT_BLOG_FAILURE:
            return {loading: false, error:action.payload}
        default:
            return{state};
    }
}

export  {CommentReducer}