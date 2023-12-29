import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE :'idle',
    ERROR : 'error',
    LOADING : 'loading',
})

const Blogslice = createSlice({
    name :'Blog',
    initialState :{
        data :[],
        category : [],
        status : STATUSES.IDLE,
        blogvalue:{
            title: '',
            category: '',
            image: null,
            description: '',
        },
        editID : -1,
    },
    reducers :{
        setData: (state, action) => {
            state.data = action.payload
            // console.log(action.payload);
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        seteditID: (state, action) => {
            state.editID = -1
            state.blogvalue = {
                title: '',
                category: '',
                image: null,
                description: '',
            }
        }, 
        editData(state, action) {
            state.blogvalue = action.payload.item
            state.editID = action.payload.id
        },
    },
})
export const { setData, setCategory, setStatus, editData, seteditID } = Blogslice.actions
export default Blogslice.reducer

// thunks

export function fetchBlog() {
    return async function fetchBlogThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await axios.get('http://localhost:3001/blogall')
            dispatch(setData(res.data.data))
            const res2 = await axios.get('http://localhost:3001/alldata')
            dispatch(setCategory(res2.data.data))
            setTimeout(() => {
                dispatch(setStatus(STATUSES.IDLE))
            }, 1500);
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}