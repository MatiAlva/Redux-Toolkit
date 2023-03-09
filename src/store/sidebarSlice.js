import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isSidebarOn: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,

    reducers: {
        setSidebarOn: (state) => {
            state.isSidebarOn = true
        },
        setSidebarOff: (state) => {
            state.isSidebarOn = false
        }
    }
});


//Action creators are generated for each case reducer function
export const { setSidebarOff, setSidebarOn } = sidebarSlice.actions;
export const getSidebarStatus = (state) => state.sidebar.isSidebarOn;
export default sidebarSlice.reducer;