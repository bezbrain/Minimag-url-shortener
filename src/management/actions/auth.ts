import { createAsyncThunk } from "@reduxjs/toolkit";
import { logUser, logoutUser, registerUser } from "../services/auth";
import { removeAuthToken, setAuthToken } from "../../utils/authToken";
import { NavigateFunction } from "react-router-dom";

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

export const login = createAsyncThunk(
  "action/login",
  async (details: any, thunkAPI) => {
    const { loginUser, navigate } = details;
    const newLoginUser = {
      email: loginUser.email,
      username: loginUser.email,
      password: loginUser.password,
    };
    try {
      const { data } = await logUser(newLoginUser);
      setAuthToken(data?.token);
      // setTimeout(() => {
      navigate("/"); //   Navigate to home page
      // }, 1500);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "action/logout",
  async (navigate: NavigateFunction, thunkAPI) => {
    try {
      const { data } = await logoutUser();
      navigate("/");
      removeAuthToken();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
