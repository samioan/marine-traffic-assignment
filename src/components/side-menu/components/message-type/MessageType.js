import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";

import { setMessageType, messageType } from "models/vessels";

const MessageType = () => {
  const messageTypeSelector = useSelector(messageType);
  const dispatch = useDispatch();

  return (
    <Grid container direction="column" sx={{ pb: 2 }}>
      <FormControl>
        <FormLabel>Message Type</FormLabel>
        <RadioGroup value={messageTypeSelector} name="msgtype">
          <FormControlLabel
            value="simple"
            control={<Radio />}
            label="Simple"
            onChange={(event) => dispatch(setMessageType(event.target.value))}
          />
          <FormControlLabel
            value="extended"
            control={<Radio />}
            label="Extended"
            onChange={(event) => dispatch(setMessageType(event.target.value))}
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default MessageType;
