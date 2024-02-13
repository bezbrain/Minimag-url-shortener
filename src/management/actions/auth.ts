import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../services/auth";

export const register = createAsyncThunk(
  "action/register",
  async (details: any, thunkAPI) => {
    const { regUser, navigate, toast } = details;
    try {
      const { data } = await registerUser(regUser);

      setTimeout(() => {
        navigate("/login"); //   Navigate to login page
      }, 1500);

      setTimeout(() => {
        toast.success("Please login with your details");
      }, 1500);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
