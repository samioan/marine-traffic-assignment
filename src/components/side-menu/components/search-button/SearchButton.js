import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import {
  setVessels,
  messageType,
  mmsi,
  period,
  minlat,
  maxlat,
  minlon,
  maxlon,
  days,
  setSnackbar,
  isSnackbarOpen,
  setError,
  error,
} from "models/vessels";

const SearchButton = () => {
  const messageTypeSelector = useSelector(messageType);
  const mmsiSelector = useSelector(mmsi);
  const periodSelector = useSelector(period);
  const minlatSelector = useSelector(minlat);
  const maxlatSelector = useSelector(maxlat);
  const minlonSelector = useSelector(minlon);
  const maxlonSelector = useSelector(maxlon);
  const daysSelector = useSelector(days);
  const isSnackbarOpenSelector = useSelector(isSnackbarOpen);
  const errorSelector = useSelector(error);
  const dispatch = useDispatch();

  const onSubmit = () => {
    const url = `https://services.marinetraffic.com/api/exportvesseltrack/v:2/${
      process.env.REACT_APP_API_KEY
    }/protocol:jsono/days:${daysSelector}/mmsi:${mmsiSelector}/period:${periodSelector}/msgtype:${messageTypeSelector}${
      minlatSelector ? `/MINLAT:${minlatSelector}` : ``
    }${maxlatSelector ? `/MAXLAT:${maxlatSelector}` : ``}${
      minlonSelector ? `/MINLON:${minlonSelector}` : ``
    }${maxlonSelector ? `/MAXLON:${maxlonSelector}` : ``}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        data.errors
          ? dispatch(setError(data?.errors?.map(({ detail }) => detail)))
          : dispatch(setVessels(data))
      );
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Button type="submit" onClick={onSubmit}>
        Get Vessels
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!isSnackbarOpenSelector || !!errorSelector}
        autoHideDuration={6000}
        onClose={() => {
          dispatch(setSnackbar(false));
          dispatch(setError(null));
        }}
      >
        <Alert
          onClose={() => {
            dispatch(setSnackbar(false));
            dispatch(setError(null));
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorSelector}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SearchButton;
