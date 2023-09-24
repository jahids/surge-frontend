import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //Manage Session Get Patient
    getUserInfo: builder.query({
      query: ({ userId }) => ({
        url: `/user/${userId}`,
        method: 'GET',
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),
    registerUser: builder.mutation({
      query: userData => ({
        url: '/signup/user',
        method: 'POST',
        body: userData,
        headers: {
          'content-type': 'Application/json',
        },
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useRegisterUserMutation } = userApiSlice;
