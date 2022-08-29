import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
const store = configureStore({
    reducer: {
        navbarState: navbarReducer,
    },
});
export default store;
