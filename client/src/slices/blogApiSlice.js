import { apiSlice } from "./apiSlice";
const BLOG_URL = "/blog";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    getLatestBlog: builder.mutation({
      query: () => ({
        url: `${BLOG_URL}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetLatestBlogMutation } = userApiSlice;
