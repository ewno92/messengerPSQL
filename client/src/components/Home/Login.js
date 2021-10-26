import React, { useState, useEffect, useContext } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
import { Redirect, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authenticate, isAuth } from "../../utils/auth";
import "./Login.scss";
import Alert from "@mui/material/Alert";

import { login } from "../../utils/fetchData";

import { UserContext } from "../../UserContext";
const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    isAuth() && history.push("/home");
  }, []);

  const initialState = {
    username: "",
    password: "",
  };
  const [errMsg, setErrMsg] = useState("");
  const [userData, setUserData] = useState(initialState);
  const { username, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    const res = await login(userData);

    if (res.error) setErrMsg(res.error);
    else {
      console.log(res);
      setUser({
        username: res.username,
        id: res.id,
        photoUrl: res.photoUrl,
        email: res.email,
      });
      authenticate(res, () => {
        history.push("./home");
      });
    }
  };

  return (
    <div id="login">
      <h1 className="title">Welcome back!</h1>
      {errMsg && <Alert severity="error">{errMsg}</Alert>}
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
