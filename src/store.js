import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./reducers/nameSlice";

export const store = configureStore({
    reducer: {
        personName: nameSlice 
    }
})