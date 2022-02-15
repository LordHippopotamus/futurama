/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
  single: {},
};

export const fetchAllQuotes = createAsyncThunk(
  'quotes/fetchAllQuotes',
  async () => {
    const request = await fetch('https://futuramaapi.herokuapp.com/api/quotes/163');
    const json = await request.json();
    return json;
  },
);

export const fetchSingleQuote = createAsyncThunk(
  'quotes/fetchSingleQuote',
  async (query) => {
    const request = await fetch(`https://futuramaapi.herokuapp.com/api/quotes?search=${query.slice(0, 10)}`);
    const json = await request.json();
    return json[0];
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
      })
      .addCase(fetchSingleQuote.fulfilled, (state, action) => {
        state.single = action.payload;
      });
  },
});

export default quotesSlice.reducer;
