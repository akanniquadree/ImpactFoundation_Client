import { GALLERY_DELETE_FAIL, GALLERY_DELETE_REQUEST, GALLERY_DELETE_SUCCESS, GALLERY_LIST_FAIL, GALLERY_LIST_REQUEST, GALLERY_LIST_SUCCESS, GALLERY_SAVE_FAIL, GALLERY_SAVE_REQUEST, GALLERY_SAVE_SUCCESS } from "../constant/galleryConstant";


function galleryReducer (state={gallerys:[]}, action){
    switch (action.type) {
        case GALLERY_LIST_REQUEST:
            return {loading: true, gallerys:[]}
        case GALLERY_LIST_SUCCESS:
            return {loading:false,  gallerys:action.payload }
        case GALLERY_LIST_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}

function saveGalleryReducer (state={gallery:{}}, action){
    switch (action.type) {
        case GALLERY_SAVE_REQUEST:
            return {loading: true}
        case GALLERY_SAVE_SUCCESS:
            return {loading:false, success:true, gallery:action.payload }
        case GALLERY_SAVE_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}

function deleteGalleryReducer (state={gallery:{}}, action){
    switch (action.type) {
        case GALLERY_DELETE_REQUEST:
            return {loading: true, gallery:{}}
        case GALLERY_DELETE_SUCCESS:
            return {loading:false, success:true, gallery:action.payload }
        case GALLERY_DELETE_FAIL:
            return {loading: false, error:action.payload}
        default:
           return state;
    }
}



export {galleryReducer, saveGalleryReducer, deleteGalleryReducer}