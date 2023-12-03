import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    offset: 0
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setOffset(state, action) {
            state.offset = action.payload
        }
    }
})

export const {setOffset} = postSlice.actions;
export default postSlice.reducer