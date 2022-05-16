import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounterSlice {
  value: number;
}

const initialState: ICounterSlice = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increaseBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increaseBy, increment } = counterSlice.actions;
export default counterSlice.reducer;
