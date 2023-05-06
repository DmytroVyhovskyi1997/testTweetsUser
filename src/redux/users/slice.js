import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './operations';

import {
  handlePending,
  handleRejected,
  handleFulfilled,
} from 'redux/users/initial';

const initialState = { 
    items: [], 
    isLoading: false, 
    error: null,
   };

   export const UserSlice = createSlice({
    name: 'users',
    initialState,
  
    extraReducers: builder => {
      builder
        .addCase(fetchUsers.pending, handlePending)
        .addCase(fetchUsers.fulfilled, handleFulfilled)
        .addCase(fetchUsers.rejected, handleRejected)

    },
  });