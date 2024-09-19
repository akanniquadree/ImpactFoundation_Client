import axios from "axios"
import { BLOG_DELETE_FAIL, BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_SAVE_FAIL, BLOG_SAVE_REQUEST, BLOG_SAVE_SUCCESS, DETAIL_BLOG_FAILURE, DETAIL_BLOG_REQUEST, DETAIL_BLOG_SUCCESS, GET_BLOG_FAILURE, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_CAT_FAILURE, GET_CAT_REQUEST, GET_CAT_SUCCESS } from "../constant/blogConstant";


const getBlog = () => async (dispatch) =>{
        try {
            dispatch({ type: GET_BLOG_REQUEST});
            const {data} = await axios.get("/api/posts")
            dispatch({type: GET_BLOG_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_BLOG_FAILURE, payload: error.message})
        }
}

const getCat = () => async (dispatch) =>{
    try{
        dispatch({type: GET_CAT_REQUEST})
        const {data} = await axios.get("/api/category")
        dispatch({type: GET_CAT_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:GET_CAT_FAILURE, payload:error.message})
    }
}


const getDetailBlog = (postId) => async (dispatch) =>{
    try {
        dispatch({ type: DETAIL_BLOG_REQUEST, payload: postId});
        const {data} = await axios.get("/api/posts/" + postId)
        dispatch({type: DETAIL_BLOG_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: DETAIL_BLOG_FAILURE, payload: error.message})
    }
}

const saveBlog = (post) => async (dispatch, getState) =>{
    try {
        dispatch({type:BLOG_SAVE_REQUEST, payload:post})
        const {
            login:{userInfo},
          } = getState();
        if(!post._id){
            const {data} = await axios.post("/api/posts", 
            post, 
            {
                headers: {
                  Authorization: 'Bearer ' + userInfo.token,
                },
              });
              dispatch({type:BLOG_SAVE_SUCCESS, payload: data}) 
        }else{
            const {data} = await axios.put("/api/posts/" +post._id, 
            post,
            {
                headers: {
                    Authorization: 'Bearer ' + userInfo.token
                }
                
            } )
            dispatch({type:BLOG_SAVE_SUCCESS, payload: data})
        }
    } catch (error) {
        dispatch({type:BLOG_SAVE_FAIL, payload:error.message})
    }
}


const deleteBlog = (postId) => async (dispatch, getState) =>{
    try {
        const {login:{userInfo}} = getState()
        dispatch({type: BLOG_DELETE_REQUEST, payload:postId})
        const {data} = await axios.delete("/api/posts/" + postId, {headers:{Authorization: "Bearer " + userInfo.token},} );
        dispatch({type: BLOG_DELETE_SUCCESS,success: true, payload:data})
      } catch (error) {
        dispatch({type: BLOG_DELETE_FAIL, payload:error.message})
      }
}




export { getBlog, getDetailBlog, deleteBlog, saveBlog, getCat}