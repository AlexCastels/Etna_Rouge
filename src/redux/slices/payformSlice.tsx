import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {}

export const payformSlice = createSlice({
    name : 'payform',
    initialState,
    reducers: {
        addFormData : (state , action) =>{
            return {
                ...state,
                ...action.payload
            }    
        },
        removeFormData : (state) => state = initialState
    }
})


export default payformSlice.reducer
export const { addFormData , removeFormData } = payformSlice.actions