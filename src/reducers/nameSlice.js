import { createSlice } from "@reduxjs/toolkit";


const initialState = []
export const nameSlice = createSlice({
    name: 'personName',
    initialState,
    reducers: {
        updateName: (state, action) => {
           return action.payload
        }
    }
})

export const {updateName} = nameSlice.actions

export default nameSlice.reducer