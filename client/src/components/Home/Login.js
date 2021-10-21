import React, { useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import valid from "../../utils/valid";
import "./Login.scss";
const Login = () => {
  //   const [signUpToggle, setSignUpToggle] = useState(false);

  const initialState = {
    username: "",
    email: "",
    password: "",
    cf_password: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <div id="login">
      {/* <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      /> */}
      <h1 className="title">Welcome back!</h1>
      <Box
        className="form-container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
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
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
