// balanceSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BalanceState {
  balance: number;
  availableToInvest: number;
  costBasis: number;
  qty: number;
  marketValue: number;
  unrealizedPl: number;
  unrealizedPlpc: number;
  api: boolean;
}

const initialState: BalanceState = {
  balance: 0,
  availableToInvest: 0,
  costBasis: 0,
  qty: 0,
  marketValue: 0,
  unrealizedPl: 0,
  unrealizedPlpc: 0,
  api: false,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<BalanceState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
