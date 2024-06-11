import { createSlice } from "@reduxjs/toolkit";
import { updateReviewAction } from "./reviewAxios";

const initialState = {
  pubReviews: [],
  allReviews: {},
};

const reviewslice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setpubReviews: (state, { payload }) => {
      state.pubReviews = payload || [];
    },
    setAllReview: (state, { payload }) => {
      state.allReviews = payload;
    },
    updateReviewStatus: (state, { payload }) => {
      const { _id, status } = payload;
      state.allReviews = state.allReviews.map((item) => {
        return { ...item, status };
      });
    },
  },
});

const { reducer, actions } = reviewslice;

export const { setpubReviews, setAllReview } = actions;
export default reducer;
