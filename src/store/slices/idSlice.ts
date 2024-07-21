// src/redux/idSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IdState {
  ids: string[];
}

const initialState: IdState = {
  ids: [],
};

export const selectIds = (state: RootState) => state.ids.ids;

const idSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload);
    },
    deleteId: (state, action: PayloadAction<string>) => {
      state.ids = state.ids.filter(id => id !== action.payload);;
    }
  },
});

export const { addId, deleteId } = idSlice.actions;
export default idSlice.reducer;
