import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import {mobileApi} from './services/mobileApi';

const store = configureStore({
  reducer: {
    [mobileApi.reducerPath]: mobileApi.reducer,
    userSlice: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mobileApi.middleware),
});

export default store;
