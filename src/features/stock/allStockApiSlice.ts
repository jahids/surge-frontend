import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // get specific news
    getSpecificStock: builder.query({
      query: ({ symbolname }) => ({
        url: `symbol?name=${symbolname}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),

    // get All news
    getAllStock: builder.query({
      query: ({ limit, start, item }) => ({
        url: `stock?limit=${limit}&start=${start}&item=${item}`,
        // url: `stock?limit=${limit}`,
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
