import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Function to get the authorization token (you need to implement this)
const getAuthToken = () => {
 const storedToken = localStorage.getItem("userInfo");
  if (!storedToken) {
   return
 }
 const parsedToken = JSON.parse(storedToken);
 const { token } = parsedToken;
  return token
};

// Create a base query with custom headers
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    // Set the authorization header if the token is available
    const authToken = getAuthToken();
    if (authToken) {
      headers.set("Authorization", `Bearer ${authToken}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Blogs", "Posts"],
  endpoints: (builder) => ({}),
});