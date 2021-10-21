import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignUp.scss";
const SignUp = () => {
  return (
    <div id="signUp">
      <h1>Create an account.</h1>
      <Box
        className="form-container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type="text" label="username" variant="standard" />
        <TextField
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
        <Button variant="contained">Create</Button>
      </Box>
    </div>
  );
};

export default SignUp;
