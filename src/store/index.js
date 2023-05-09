import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/UserSlices";
export default configureStore({
    reducer:{
        user
    }
}) 