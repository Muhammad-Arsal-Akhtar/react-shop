import { createSlice } from '@reduxjs/toolkit'


// Define the initial value for the slice state
const initialState = {
    products: [],
}


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload
      }
    }
  })


export const { setProducts } = productSlice.actions

export default productSlice.reducer