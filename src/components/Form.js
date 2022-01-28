import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoginBG from "../image/LoginBG.jpg";
import Fingerprint from "../image/Fingerprint.svg";

const Form = () => {
  //setting state for the value of textfield
  const [input, setInput] = useState("");

  //handling onchange value of input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //handling sign in
  const axios = require("axios");
  const qs = require("qs");
  const data = qs.stringify({
    uid: input,
    name: "SM Bacoor",
  });
  const config = {
    method: "POST",
    url: "https://health-users-api.herokuapp.com/api/v1/activities",
    headers: {},
    data: data,
  };

  const handleSignIn = () => {
    axios(config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSignIn();
  };
  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center">
        <Grid sx={{ zIndex: 10 }} item xs={10} sm={9} md={8} lg={8}>
          <Paper
            sx={{ height: { xs: "50vh", lg: "40vh" }, mt: 30 }}
            elevation={2}
          >
            <Grid container item justifyContent="center">
              <Grid item xs={12} lg={12}>
                <Typography
                  sx={{
                    mt: 5,
                    textAlign: "center",
                    width: "100%",
                    color: "#383838",
                  }}
                  variant="h4"
                >
                  Establishment Sign in
                </Typography>
              </Grid>
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                xs={12}
                lg={12}
              >
                <TextField
                  sx={{ mt: 8, width: "70%" }}
                  label="Email"
                  variant="outlined"
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                xs={12}
                lg={12}
              >
                <Button
                  sx={{ mt: 3, width: "70%", height: "3.5em" }}
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Enter
                </Button>
              </Grid>
              <Grid item lg={8}>
                <Typography sx={{ m: 3, textAlign: "center" }} variant="body1">
                  By signing in, you agree to follow the health protocol
                  implemented.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
