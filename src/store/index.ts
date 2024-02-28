import { configureStore } from "@reduxjs/toolkit";

import Towns from "./weather";

const store = configureStore({
  reducer: {
    // words: Words,
    towns: Towns,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
