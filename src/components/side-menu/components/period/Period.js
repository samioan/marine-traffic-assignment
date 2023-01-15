import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";

import { setPeriod, period } from "models/vessels";

const Period = () => {
  const periodSelector = useSelector(period);
  const dispatch = useDispatch();

  return (
    <FormControl sx={{ pb: 2 }}>
      <FormLabel>Period</FormLabel>
      <RadioGroup value={periodSelector} name="msgtype">
        <FormControlLabel
          value="hourly"
          control={<Radio />}
          label="Hourly"
          onChange={(event) => dispatch(setPeriod(event.target.value))}
        />
        <FormControlLabel
          value="daily"
          control={<Radio />}
          label="Daily"
          onChange={(event) => dispatch(setPeriod(event.target.value))}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Period;
