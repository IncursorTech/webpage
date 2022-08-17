import { createSlice } from '@reduxjs/toolkit';
export const navbarSlice = createSlice({
    name: 'navbarState',
    initialState: {
        isStatic: true,
    },
    reducers: {
        setNavbarStatic: (state, action) => {
            state.isStatic = action.payload;
            return state;
        },
    },
});
export const { setNavbarStatic } = navbarSlice.actions;
export default navbarSlice.reducer;
