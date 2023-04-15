import { createSlice } from "@reduxjs/toolkit";

const initialState={

  email:"",
  isLogin:false,
}


export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.email = null;
      state.isLogin = false;
     
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
