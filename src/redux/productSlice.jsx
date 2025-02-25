import { createSlice } from '@reduxjs/toolkit'


// Define the initial value for the slice state
const initialState = {
  products: [],
  searchedWord: '',
  searchedProducts: []
}


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    getSearchedProducts: (state, action) => {
      state.searchedWord = action.payload
      state.searchedProducts = state.products.filter((product)=>{
        return product.name.toLowerCase().includes(state.searchedWord.toLowerCase())
      })
    }
  }
})


export const { setProducts, getSearchedProducts } = productSlice.actions

export default productSlice.reducer