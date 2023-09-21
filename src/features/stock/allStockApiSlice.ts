import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // get specific news
    getSpecificStock: builder.query({
      query: ({ symbolname }) => ({
        url: `/news/${symbolname}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),

    // get All news
    getAllStock: builder.query({
      query: () => ({
        url: 'stock',
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetAllStockQuery, useGetSpecificStockQuery } = userApiSlice;
