import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        next: (state, action) => (state >= action.payload - 1 ? 0 : state + 1),
        prev: (state, action) => (state <= 0 ? action.payload - 1 : state - 1),
    },
})

export const { next, prev } = sliderSlice.actions

export default sliderSlice.reducer
