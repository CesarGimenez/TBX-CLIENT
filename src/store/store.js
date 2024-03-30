import { configureStore, createSlice } from '@reduxjs/toolkit';

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    fileList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFiles(state, action) {
      state.fileList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFiles, setLoading, setError } = filesSlice.actions;

export default configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});