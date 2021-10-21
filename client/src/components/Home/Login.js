import React, { useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Login.scss";
const Login = () => {
  //   const [signUpToggle, setSignUpToggle] = useState(false);

  return (
    <div id="login">
      {/* <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      /> */}
      <h1>Welcome back!</h1>
      <Box
        className="form-container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="input"
          type="email"
          id="outlined-basic"
          label="E-mail address"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          type="password"
          label="Password"
          variant="standard"
        />
        <Button variant="contained">Login</Button>
      </Box>
    </div>
  );
};

export default Login;
