import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuth, signout } from "../utils/auth";
const Test = () => {
  const history = useHistory();
  return (
    <div>
      test page
      <button onClick={() => console.log(isAuth())}>isAuth</button>
      <button
        onClick={() => {
          signout();
          history.push("/");
        }}
      >
        singOut reRoute
      </button>
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default Test;
