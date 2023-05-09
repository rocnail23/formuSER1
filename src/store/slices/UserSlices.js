import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const UserSlices =  createSlice({
    name: "Users",
    initialState: null,
    reducers: ({
        setUsers: (state,action) => action.payload
    })
}) 



    export const userThunks = () => (dispatch) => {
        const url = "http://users-crud.academlo.tech/users/"
        axios(url)
        .then(res => {
            dispatch(setUsers(res.data))
        })
        .catch(err => console.log(err))
    }





export default UserSlices.reducer
export const {setUsers} = UserSlices.actions 

