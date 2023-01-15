import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";

import { setMmsi, mmsi } from "models/vessels";

const Mmsi = () => {
  const dispatch = useDispatch();
  const mmsiSelector = useSelector(mmsi);

  return (
    <Grid container direction="column" sx={{ pb: 2 }}>
      <TextField
        label="MMSI"
        variant="outlined"
        value={mmsiSelector}
        required
        onChange={(event) => dispatch(setMmsi(event.target.value))}
      />
    </Grid>
  );
};

export default Mmsi;
