import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import { balanceReducer } from '../features/globalBalance/balanceSlice';
import { dbReducer } from '../features/globaldb/dbSlice';
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice(RTK query)
    [apiSlice.reducerPath]: apiSlice.reducer,

    //async thunk reducers
    balance: balanceReducer,
    db: dbReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
