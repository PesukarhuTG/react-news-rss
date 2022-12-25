import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './NewsSlice';
import formReducer from './FormSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    forms: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
