import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vesselsShown: [],
  messageType: "simple",
  mmsi: "",
  period: "hourly",
  minlat: "",
  maxlat: "",
  minlon: "",
  maxlon: "",
  days: "2",
  isSnackbarOpen: false,
  error: null,
};

const reducers = {
  setVessels: (state, { payload }) => {
    state.vesselsShown = payload;
  },
  setMessageType: (state, { payload }) => {
    state.messageType = payload;
  },
  setMmsi: (state, { payload }) => {
    state.mmsi = payload;
  },
  setPeriod: (state, { payload }) => {
    state.period = payload;
  },
  setMinlat: (state, { payload }) => {
    state.minlat = payload;
  },
  setMaxlat: (state, { payload }) => {
    state.maxlat = payload;
  },
  setMinlon: (state, { payload }) => {
    state.minlon = payload;
  },
  setMaxlon: (state, { payload }) => {
    state.maxlon = payload;
  },
  setDays: (state, { payload }) => {
    state.days = payload;
  },
  setSnackbar: (state, { payload }) => {
    state.isSnackbarOpen = payload;
  },
  setError: (state, { payload }) => {
    state.error = payload;
  },
};

export const vesselsSlice = createSlice({
  name: "vessels",
  initialState,
  reducers,
});
