// dbslice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DbState {
  aboutMe: string;
  follower: string[];
  _id: string;
  email: string;
  password: string;
  watchList: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  alpacaId: string;
  ach: string;
  following: string[];
  name: string;
  allTimeInvest: number;
  api: boolean;
}

const initialState: DbState = {
  api: false,
  aboutMe: '',
  follower: [],
  _id: '',
  email: '',
  password: '',
  watchList: [],
  createdAt: '',
  updatedAt: '',
  __v: 0,
  alpacaId: '',
  ach: '',
  following: [],
  name: '',
  allTimeInvest: 0,
};

const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    setDb: (state, action: PayloadAction<DbState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setDb } = dbSlice.actions;
export const dbReducer = dbSlice.reducer;
