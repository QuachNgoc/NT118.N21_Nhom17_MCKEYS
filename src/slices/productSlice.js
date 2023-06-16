import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    loadmore: (state, action) => {
      // add fetch products into products array
      state.products.concat(action.payload);
    }
  }
})

export const { loadmore } = productSlice.actions

export default productSlice.reducer