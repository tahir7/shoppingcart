import { configureStore } from '@reduxjs/toolkit';
import ProductSlice  from './store/slices/productSlice';
export const store = configureStore({
  reducer: {
      products : ProductSlice
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;