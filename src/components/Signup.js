import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

// const baseURL = "http://localhost:8000/login";

const Signup = () => {
  let history = useHistory();
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   const handleChange = (event) => {
  //     setChecked(event.target.checked);
  //   };

  const handleSignup = () => {
    axios
      .post(`http://localhost:8000/signup`, {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/home");
  };

  return (
    <div
      style={{
        padding: 90,
        width: "30%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper xs={6}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              label="Name"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={username}
              label="Username"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              label="Email"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={"password"}
            ></TextField>
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Keep me logged in"
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Signup;
