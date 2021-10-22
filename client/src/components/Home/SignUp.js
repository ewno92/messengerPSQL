import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import valid from "../../utils/valid";
import "./SignUp.scss";
import Alert from "@mui/material/Alert";
const SignUp = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { username, email, password, cf_password } = userData;

  const [errorMsg, setErrorMsg] = useState("");
  const handleChangeInput = (e) => {
    setErrorMsg("");
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errMsg = valid(username, email, password, cf_password);
    if (errMsg) {
      setErrorMsg(errMsg);
    } else {
      console.log(userData);
    }
  };

  return (
    <div id="signUp">
      <h1>Create an account.</h1>

      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <Box
        className="form-container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="username"
          label="username"
          variant="standard"
          onChange={handleChangeInput}
        />
        <TextField
          name="email"
          type="email"
          id="outlined-basic"
          label="E-mail address"
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
        <TextField
          name="cf_password"
          id="standard-basic"
          type="cf_password"
          label="Confirm Password"
          variant="standard"
          onChange={handleChangeInput}
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
