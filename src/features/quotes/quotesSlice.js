import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
});

export default quotesSlice.reducer;
