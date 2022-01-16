import { createSlice } from '@reduxjs/toolkit';

export interface LikeState {
  value: boolean;
}

const initialState: LikeState = {
  value: false,
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike: (state) => {
      state.value = true;
    },
    setUnlike: (state) => {
      state.value = false;
    },
  },
});

export const { setLike, setUnlike } = likeSlice.actions;

const likeReducer = likeSlice.reducer;
export default likeReducer;
