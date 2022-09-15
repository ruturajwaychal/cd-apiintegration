import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Grid from '@material-ui/core/Grid';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function UserForm() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const submitUser = (e) => {
    e.preventDefault();
    const postUserUrl = "http://localhost:3003/user";
    axios.post(postUserUrl, {
      firstname: data.firstname,
      lastname: data.lastname,
      address: data.address,
      phone: data.phone,
    });
  };

  return (
    <>
      <div align="center">
        {/* <form onSubmit={(e)=>submitUser()}>   */}

        <Box
          align-text="center"
          component="form"
          onSubmit={(e) => submitUser(e)}
          justifyContent="center"
          alignItems="center"
          borderRadius={"5"}
          border="2px solid blue"
          sx={{
            margin: "30px",
            width: 500,
            height: 450,
            backgroundColor: "#e3f2fd",
            "&:hover": {
              backgroundColor: "#bbdefb",
              opacity: [0.9, 0.8, 1.0],
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={6}>
            <TextField
              id="firstname"
              onChange={(e) => handle(e)}
              label="FirstName"
              value={data.firstname}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="lastname"
              onChange={(e) => handle(e)}
              label="LastName"
              value={data.lastname}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address"
              onChange={(e) => handle(e)}
              label="Address"
              value={data.address}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="phone"
              onChange={(e) => handle(e)}
              label="Phone"
              value={data.phone}
            />
          </Grid>
          {/* <Button type="submit" variant="contained"  component = {Link} to="/pay">Next</Button>          */}
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Box>
        {/* </form> */}
      </div>
    </>
  );
}

export default UserForm;
