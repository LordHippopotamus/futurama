/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    status: 'idle',
    error: null,
    list: [],
    single: {},
}

export const fetchAllCharacters = createAsyncThunk(
    'characters/fetchAllCharacters',
    async () => {
        const request = await fetch(
            'https://futuramaapi.herokuapp.com/api/v2/characters'
        )
        const json = await request.json()
        return json
    }
)

const charactersSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider
            .addCase(fetchAllCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.list = action.payload
            })
            .addCase(fetchAllCharacters.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllCharacters.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default charactersSlice.reducer
