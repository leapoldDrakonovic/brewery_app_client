// src/redux/idSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IToggleBtn {
    alignment: string;
}

const initialState: IToggleBtn = {
    alignment: "Bars",
};

export const selectedAligment = (state: RootState) => state.aligment;

const toggleBtnSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    updateAligment: (state, action: PayloadAction<string>) => {
      state.alignment = action.payload;
    },
  },
});

export const { updateAligment } = toggleBtnSlice.actions;
export default toggleBtnSlice.reducer;
