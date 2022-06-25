import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 isOpen: false
}

export const authSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    reset: state => {
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })
    .addCase(update.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(update.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    })
    .addCase(update.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;