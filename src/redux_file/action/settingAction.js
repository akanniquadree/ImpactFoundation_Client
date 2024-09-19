import axios from "axios"

const upDateUser = (user,username, email, password, name) => async (dispatch) =>{
    const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
        name
    }
}