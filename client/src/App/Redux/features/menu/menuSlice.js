import { createSlice } from '@reduxjs/toolkit';

const initialMenuState = {
 isOpen: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenuState,
  reducers: {
    openMenu: state => {
      state.isOpen = true;
    },
    closeMenu: state => {
      state.isOpen = false;
    }
  }
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;