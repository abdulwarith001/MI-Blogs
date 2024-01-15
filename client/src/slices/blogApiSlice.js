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
        method: 'GET'
      })
    }),
    getSingleBlog: builder.mutation({
      query: (data)=>({
        url: `${BLOG_URL}/single`,
        method: 'GET',
        params: {title: data}
      })
    }),
    deleteBlogPost: builder.mutation({
      query: (data)=>({
        url: `${BLOG_URL}/${data}`,
        method: 'DELETE',
      })
    })
  }),
});

export const { useCreatePostMutation, useGetLatestBlogMutation, useGetOwnerBlogMutation, useGetSingleBlogMutation, useDeleteBlogPostMutation } = userApiSlice;
