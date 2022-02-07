import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const charactersSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
});

export default charactersSlice.reducer;
