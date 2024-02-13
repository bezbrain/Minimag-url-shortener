import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../services/auth";
import { RegUser } from "../types";

export const register = createAsyncThunk(
  "action/register",
  async (regUser: RegUser["regUser"], thunkAPI) => {
    try {
      await registerUser(regUser);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
