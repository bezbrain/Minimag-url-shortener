import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCustomUrl,
  deleteShortUrl,
  getAllCusUrl,
  getAllUrl,
} from "../services/linkDetails";

export const getLinks = createAsyncThunk(
  "action/getLinks",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllUrl();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCusLinks = createAsyncThunk(
  "action/getCusLinks",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllCusUrl();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteShort = createAsyncThunk(
  "action/deleteShort",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await deleteShortUrl(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCustom = createAsyncThunk(
  "action/deleteCustom",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await deleteCustomUrl(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
