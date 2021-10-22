import React, { useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import valid from "../../utils/valid";
import "./Login.scss";
import { connect } from "react-redux";

import { login } from "../../store/utils/thunkCreators";
const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { username, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    await login({ username, password });
  };

  return (
    <div id="login">
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
          name="username"
          type="text"
          id="outlined-basic"
          label="Username"
          variant="standard"
          onChange={handleChangeInput}
        />
        <TextField
          name="password"
          id="standard-basic"
          type="password"
          label="Password"
          variant="standard"
          onChange={handleChangeInput}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
