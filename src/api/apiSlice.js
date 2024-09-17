import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500',
   credentials: "include",
   prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')

    if (token) {
        headers.set("authorization", `Bearer ${token}`)
    }
    return headers
}})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "Order", "User", "Category"],
    endpoints: () => ({}),
  });