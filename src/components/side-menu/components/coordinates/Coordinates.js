import {
  setMinlat,
  setMaxlat,
  setMinlon,
  setMaxlon,
  minlat,
  maxlat,
  minlon,
  maxlon,
} from "models/vessels";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";

const Coordinates = () => {
  const minlatSelector = useSelector(minlat);
  const maxlatSelector = useSelector(maxlat);
  const minlonSelector = useSelector(minlon);
  const maxlonSelector = useSelector(maxlon);

  const dispatch = useDispatch();

  return (
    <Grid container direction="column" sx={{ pb: 2 }}>
      <TextField
        sx={{ mb: 2 }}
        label="Minimum Latitude"
        variant="outlined"
        value={minlatSelector}
        onChange={(event) => dispatch(setMinlat(event.target.value))}
      />
      <TextField
        sx={{ mb: 2 }}
        label="Maximum Latitude"
        variant="outlined"
        value={maxlatSelector}
        onChange={(event) => dispatch(setMaxlat(event.target.value))}
      />
      <TextField
        sx={{ mb: 2 }}
        label="Minimum Longitude"
        variant="outlined"
        value={minlonSelector}
        onChange={(event) => dispatch(setMinlon(event.target.value))}
      />
      <TextField
        label="Maximum Longitude"
        variant="outlined"
        value={maxlonSelector}
        onChange={(event) => dispatch(setMaxlon(event.target.value))}
      />
    </Grid>
  );
};

export default Coordinates;
