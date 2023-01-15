import { vesselsSlice } from "./slice";

const {
  setVessels,
  setMessageType,
  setMmsi,
  setPeriod,
  setMinlat,
  setMaxlat,
  setMinlon,
  setMaxlon,
  setDays,
  setSnackbar,
  setError,
} = vesselsSlice.actions;

export {
  setVessels,
  setMessageType,
  setMmsi,
  setPeriod,
  setMinlat,
  setMaxlat,
  setMinlon,
  setMaxlon,
  setDays,
  setSnackbar,
  setError,
};
