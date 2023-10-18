import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./reducer/UserSlice"

const store = configureStore({
    reducer : {
        user : UserSlice
    }
})

export default store