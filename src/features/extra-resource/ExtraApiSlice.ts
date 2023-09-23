import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // get specific news
    getSpecificSymboldata: builder.query({
      query: ({ symbolname }) => ({
        url: `symbol?name=${symbolname}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),

    // another
  }),
});

export const { useGetSpecificSymboldataQuery } = userApiSlice;
