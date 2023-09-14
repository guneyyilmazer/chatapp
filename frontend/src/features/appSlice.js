import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userId: "",
    username: "",
    profilePicture: "",
    isLoggedIn: "",
  },
  chattingWith:localStorage.getItem("chattingWith"),
  room: localStorage.getItem("room"),
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setChattingWith:(state,action)=>{
        state.chattingWith=action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.user.isLoggedIn = action.payload;
    },
  },
});
export const { setUser, setRoom ,setChattingWith} = appSlice.actions;
export default appSlice.reducer;
