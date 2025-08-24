"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const commandSlice = createSlice({
  name: "command",
  initialState: { category: "", command: "", response: "" },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload; },
    setCommand: (state, action) => { state.command = action.payload; },
    setResponse: (state, action) => { state.response = action.payload; },
  }
});

export const { setCategory, setCommand, setResponse } = commandSlice.actions;

export const store = configureStore({
  reducer: { command: commandSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
