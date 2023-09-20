import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // get specific news
    getTopMovers: builder.query({
      query: ({ length }) => ({
        url: `/movers/${length}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),

    // get All news
    // getallNews: builder.query({
    //   query: () => ({
    //     url: 'news',
    //     method: 'GET',
    //     headers: {
    //       'content-type': 'Application/json',
    //     },
    //     credentials: 'include',
    //   }),
    // }),
  }),
});

export const { useGetTopMoversQuery } = userApiSlice;
