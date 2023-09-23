import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // get specific news
    getSpecificNews: builder.query({
      query: ({ symbolname }) => ({
        url: `/news/${symbolname}/${1}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),

    // get All news
    getallNews: builder.query({
      query: () => ({
        url: 'news',
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetSpecificNewsQuery, useGetallNewsQuery } = userApiSlice;
