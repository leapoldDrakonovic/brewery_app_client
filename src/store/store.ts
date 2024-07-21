import { configureStore } from '@reduxjs/toolkit';
import idReducer from './slices/idSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, idReducer);

const store = configureStore({
  reducer: {
    ids: persistedReducer,
  },
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
