import { configureStore } from "@reduxjs/toolkit"
import inputReducer from "./jobSlice";
const store = configureStore({
    reducer: {
        input: inputReducer
    }
})

export default store;
