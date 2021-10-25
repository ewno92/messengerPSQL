import React, { useEffect } from "react";
import "./Messenger.scss";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuth, signout } from "../utils/auth";

import Sidebar from "./Messenger/Sidebar";
import Chatbox from "./Messenger/Chatbox";
const Messenger = () => {
  const history = useHistory();
  useEffect(() => {
    !isAuth() && history.push("/");
  }, []);
  // if (isAuth()) return <h1>Sign in</h1>;

  return (
    <div id="messenger">
      {/* <button onClick={() => console.log(isAuth())}>Auth</button>
      <button
        onClick={() => {
          signout();
        }}
      >
        Logout
      </button> */}
      <Sidebar />
      <Chatbox />
    </div>
  );
};

export default Messenger;
