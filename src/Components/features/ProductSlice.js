import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { Action } from 'history';
import {Menu} from '../Basics/menuApi';

const initialState = {
    items : [],
    status : null,
}
// export const  productsFetch =()=>{

//     return Menu;
// }

export const productsFetch = 
createAsyncThunk(
   "products/productsFetch",
   async ()=>{
//    const response = await axios.get("http://localhost:5000/products");
//    return response?.data
return Menu;
   }
);

const ProductSlice = createSlice({
    name : "products",
    initialState,
    reducer:{},
    extraReducers :{
        [productsFetch.pending]: (state, action) =>{
            //immer
            state.status ="pending"
        },
        [productsFetch.fulfilled]: (state, action) =>{
            //immer
            state.status ="success"
            state.items = action.payload;
        },
         [productsFetch.rejected]: (state, action) =>{
            //immer
            state.status ="rejected"
        }

    }

});

export default ProductSlice.reducer;