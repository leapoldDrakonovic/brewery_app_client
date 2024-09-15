/* 

// src/redux/idSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface INotification {
    text: string
    status: "ok" | "bad"
}

const initialState: INotification = {
  text: "",
  status: "ok"
};

export const notificationState = (state: RootState) => state.notificationState;


const notificationSlice = createSlice({
  name: 'notificationState',
  initialState,
  reducers: {
    addNotificationData: (state, action: PayloadAction<string>) => {
      state.notificationState.text = action.payload
    },
  },
});

export const { addNotificationData } = notificationSlice.actions;
export default notificationSlice.reducer;
 */