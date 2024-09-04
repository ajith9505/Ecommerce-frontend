import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: 'http://localhost:3500'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "Order", "User", "Category"],
    endpoints: () => ({}),
  });