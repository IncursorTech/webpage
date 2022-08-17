import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';

const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
