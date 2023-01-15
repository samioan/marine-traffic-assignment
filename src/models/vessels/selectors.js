const vesselsShown = (state) => state.vessels.vesselsShown;
const messageType = (state) => state.vessels.messageType;
const mmsi = (state) => state.vessels.mmsi;
const period = (state) => state.vessels.period;
const minlat = (state) => state.vessels.minlat;
const maxlat = (state) => state.vessels.maxlat;
const minlon = (state) => state.vessels.minlon;
const maxlon = (state) => state.vessels.maxlon;
const days = (state) => state.vessels.days;
const isSnackbarOpen = (state) => state.vessels.isSnackbarOpen;
const error = (state) => state.vessels.error;

export {
  vesselsShown,
  messageType,
  mmsi,
  period,
  minlat,
  maxlat,
  minlon,
  maxlon,
  days,
  isSnackbarOpen,
  error,
};
