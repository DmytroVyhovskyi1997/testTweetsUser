import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = `645680d65f9a4f236145f441.mockapi.io`;

axios.defaults.baseURL = BASE_URL;


export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/users');
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );
  