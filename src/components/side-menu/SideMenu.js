import Grid from "@mui/material/Grid";

import {
  MessageType,
  DateSelections,
  Mmsi,
  Period,
  Coordinates,
  SearchButton,
} from "./components";

const SideMenu = () => {
  return (
    <Grid
      sx={{
        bgcolor: "#eee",
        minHeight: { xs: "inherit", md: "100vh" },
        p: 2,
      }}
    >
      <MessageType />
      <DateSelections />
      <Mmsi />
      <Period />
      <Coordinates />
      <SearchButton />
    </Grid>
  );
};

export default SideMenu;
