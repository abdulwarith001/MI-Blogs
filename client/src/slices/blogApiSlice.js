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
        url: `${BLOG_URL}/latest`,
        method: "GET",
      }),
    }),
    getOwnerBlog: builder.mutation({
      query: () => ({
        url: `${BLOG_URL}/`,
        method: "GET",
      }),
    }),
    getSingleBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/single`,
        method: "GET",
        params: { title: data },
      }),
    }),
    deleteBlogPost: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data}`,
        method: "DELETE",
      }),
    }),
    createReaction: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/react`,
        method: "PATCH",
        body: { reaction: data.reaction },
        params: { postId: data.postId },
      }),
    }),
    getBlogById: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/single/${data}`,
        method: "GET",
      }),
    }),
    updateBlogPost: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/update`,
        method: "PATCH",
        body: data,
        params: { id: data.id },
      }),
    }),
    getBlogStats: builder.mutation({
      query: () => ({
        url: `${BLOG_URL}/stats`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetLatestBlogMutation,
  useGetOwnerBlogMutation,
  useGetSingleBlogMutation,
  useDeleteBlogPostMutation,
  useCreateReactionMutation,
  useGetBlogByIdMutation,
  useUpdateBlogPostMutation,
  useGetBlogStatsMutation,
} = userApiSlice;
