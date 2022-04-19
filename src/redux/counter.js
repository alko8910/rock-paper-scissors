import { createSlice } from '@reduxjs/toolkit'

const number =  JSON.parse(localStorage.getItem('count'))

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      count: number
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer