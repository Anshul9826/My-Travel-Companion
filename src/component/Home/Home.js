import React from "react";
import Map from "./Map/Map";
import List from "./List/List";
import { CssBaseline, Grid } from "@material-ui/core";

function Home() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
