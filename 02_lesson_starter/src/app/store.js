import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "../features/post/postsSlice";

export const store = configureStore({
    reducer: {
        posts: PostsReducer
    }
})