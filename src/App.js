import React from "react";
import Grid from "@mui/material/Grid";

import { SideMenu, VesselsMap } from "components";

const App = () => {
  return (
    <Grid container id="app">
      <Grid item xs={12} md={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={12} md={9}>
        <VesselsMap />
      </Grid>
    </Grid>
  );
};

export default App;
