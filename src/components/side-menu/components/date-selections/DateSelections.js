import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";

import { days, setDays } from "models/vessels";

const DateSelections = () => {
  const daysSelector = useSelector(days);
  const dispatch = useDispatch();

  return (
    <Grid container direction="column" sx={{ pb: 2 }}>
      <TextField
        type="number"
        label="Days"
        variant="outlined"
        value={daysSelector}
        required
        onChange={(event) => dispatch(setDays(event.target.value))}
        InputProps={{
          inputProps: {
            min: 2,
            max: 190,
          },
        }}
      />
    </Grid>
  );
};

export default DateSelections;
