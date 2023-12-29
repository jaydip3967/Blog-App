import { configureStore } from "@reduxjs/toolkit";
import Blogslice from "./Blogslice";

const store = configureStore({
    reducer:{
        blog : Blogslice,
    }
})
export default store;