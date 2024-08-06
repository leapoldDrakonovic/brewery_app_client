import { configureStore } from '@reduxjs/toolkit';
import idReducer from './slices/idSlice';
import togglerReducer from "./slices/toggleBtnSlice"
import filterDataReducer from './slices/fitlerDataSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { breweryApi } from '../services/brewery_service';
import { setupListeners } from '@reduxjs/toolkit/query';
import { notificationState } from './slices/notificationSlice';

const persistConfig = {
  key: 'root',
  storage,
};







// TODO: Удалить локалстор временный
const persistedReducer = persistReducer(persistConfig, idReducer);
const persistedFilterReduser = persistReducer(persistConfig, filterDataReducer);




const store = configureStore({
  reducer: {
    // notificationData: notificationStateReducer,
    ids: persistedReducer,
    aligment: togglerReducer,
    filterData:  filterDataReducer,
    [breweryApi.reducerPath]: breweryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breweryApi.middleware),
});



export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

setupListeners(store.dispatch)
