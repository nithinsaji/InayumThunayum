import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const url = 'https://script.google.com/macros/s/AKfycbzA64KjwzfT6y2fGCi9hr1MgXU5G74B6_O1eKoGE4-W6rVWcNyrBaTqkdU_SA-F3xaD_A/exec';


export const loginUser = createAsyncThunk(
    'loginUser',
    async(user)=>{
        console.log(user);
        const response = await fetch(url,{
            redirect : "follow",
            headers: {
                'Accept': 'application/json, text/plain, */*'
              },
            method : "POST",
            body: JSON.stringify({
                "email" : user.get("email"),
                "password" : user.get("password")
            })
        })
        .then((res) => res.json() )
        .then((result) => { return result });
        console.log(response.data.role === 'Admin');

        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('accessToken', JSON.stringify(response.token));
        const navigate = useNavigate();
        response.data.role === 'Admin'? navigate("/AdminDashboard") : navigate("/Dashboard") ;
        return response;
    }
)

const userSlice = createSlice({
    name : 'user',
    initialState : {
        loading : false,
        user : null,
        error : null
    }
})

export default userSlice.reducer;