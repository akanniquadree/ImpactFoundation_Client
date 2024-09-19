import { COMMENT_BLOG_FAILURE, COMMENT_BLOG_REQUEST, COMMENT_BLOG_SUCCESS } from "../constant/commentConstant"
import axios from "axios"


const commentBlog = (name, email, text) => async(dispatch)=>{
    dispatch({type:COMMENT_BLOG_REQUEST, payload: name, email, text})
    try {
        const {data} = await axios.put("/api/posts/comment", {name, email, text})
        dispatch({type:COMMENT_BLOG_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:COMMENT_BLOG_FAILURE, payload: error.message})
    }
}

export { commentBlog }