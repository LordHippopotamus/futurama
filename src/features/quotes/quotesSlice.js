/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

export const fetchAllQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async () => {
    const request = await fetch('https://futuramaapi.herokuapp.com/api/quotes/163');
    const json = await request.json();
    return json;
  },
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchAllQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchAllQuotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quotesSlice.reducer;
